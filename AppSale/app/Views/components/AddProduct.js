
import React from 'react';
import {AppRegistry,Platform,AsyncStorage,Image,PixelRatio,StyleSheet,Text,TouchableOpacity,View,TextInput,} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import firebaseConfig from './../../CredentialsFirebase';
import firebase from 'firebase';



export default class AddProduct extends React.Component{

    constructor(props) {
    super(props);
    this.selectPhotoTapped = this.selectPhotoTapped.bind(this);
   }

   state={
      url:'https://i.pinimg.com/originals/ec/9c/6d/ec9c6dca565acd83408fbbfebd763ca7.jpg',
      avatarSource: null,
      description:'',
      cost:'',
      userName:'',
      phone:'',
      imgSource: '',
      uploading: false,
      progress: 0,
      images: [],
    }


   componentWillMount() {
    try{
    firebase.initializeApp(firebaseConfig);
    }catch{
    }
    AsyncStorage.getItem('session').then((value)=>{
    if(value){
     this.setState({userName:value});
    }
    });

    AsyncStorage.getItem('phone').then((value)=>{
    if(value){
     this.setState({phone:value});
    }
    });

    }

//   uploadImage = (uri,imageName,mine='image/jpg')=>{
//   return new Promise((resolve,reject)=>{
//     const uploadUri = Platform.OS === 'ios'? uri.replace('file://',''):uri 
//     let uploadBlob = null 
//     const imageRef = firebase.storage().ref('images').child(imageName)
//     fs.readFile(uploadUri,'base64')
//     .then((data)=>{
//         return Blob.build(data,{type:`${mine};BASE64`})
//     })
//     .then((blob)=>{
//       uploadBlob = blob 
//       return imageRef.put(blob,{contentType:mine})
//     })
//     .then(()=>{
//       uploadBlob.close()
//       return imageRef.getDownloadURL()
//     })
//     .then((url)=>{
//         resolve(url)
//     })
//     .catch((error)=>{
//       reject(error)
//     })
//   })
// }

  uploadImage = () => {
    const ext = this.state.imageUri.split('.').pop(); // Extract image extension
    const filename = `${this.state.userName+this.state.description}.${ext}`; // Generate unique name
    this.setState({ uploading: true });
    firebase
      .storage()
      .ref(`images/${filename}`)
      .putFile(this.state.imageUri)
      .on(
        firebase.storage.TaskEvent.STATE_CHANGED,
        snapshot => {
          let state = {};
          state = {
            ...state,
            progress: (snapshot.bytesTransferred / snapshot.totalBytes) * 100 // Calculate progress percentage
          };
          if (snapshot.state === firebase.storage.TaskState.SUCCESS) {
            const allImages = this.state.images;
            allImages.push(snapshot.downloadURL);
            state = {
              ...state,
              uploading: false,
              imgSource: '',
              imageUri: '',
              progress: 0,
              images: allImages
            };
          }
          this.setState(state);
        },
        error => {
          unsubscribe();
          alert('Sorry, Try again.');
        }
      );
  };

  selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true,
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
        let source = { uri: response.uri };
        this.setState({
          avatarSource: source,
          imageUri: source,
        });
    });
  }

  insertToDB(){
    firebase.database().ref('products/'+this.state.userName+this.state.description).set(
            {
                description: this.state.description,
                cost: this.state.cost,
                phone: this.state.phone,
                url: this.state.images[0],
                userName:this.state.userName,
            }
            ).then(() => {
                this.props.navEvent.navigation.goBack();
            }).catch((error) => {
                // Alert.alert(error+"");
            });
  }
  saveProduct(){

          this.state.avatarSource?this.uploadImage()
          .then((response)=>{
              this.insertToDB(response)
          }).done():null
            
  }


	render(){
		return (
		<View style={styles.container}>
        <View style={styles.inputsDescriptionConta} >
          <TextInput
              style={styles.inputDescription}
              placeholder="Nombre producto"
              onChangeText={(typedText)=>{this.setState({description:typedText})}} 

            />
          <TextInput
            style={styles.inputDescription}
            placeholder="Precio"
            onChangeText={(typedText)=>{this.setState({cost:typedText})}} 
            keyboardType={'numeric'}
          />
        </View>
          <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
            <View style={[styles.avatar,styles.avatarContainer,{ marginBottom: 20 }]}>
              {this.state.avatarSource === null ? (
                <Text>Click</Text>
               ) : (
                <Image style={styles.avatar} source={this.state.avatarSource} />
              )}
            </View>
          </TouchableOpacity>
        <View style={styles.containerSave}>
          <TouchableOpacity style={styles.btnSave} onPress={this.saveProduct.bind(this)}> 
            <Text style={styles.txtSave}>Guardar</Text>
          </TouchableOpacity>
        </View>
      </View>
		);
	}
}

const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
    borderWidth:0,
    height:450,
    backgroundColor:'white',
    borderRadius:5,
    margin:3,
  },
  avatarContainer: {
    borderColor: '#9B9B9B',
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    borderRadius: 5,
    width: 300,
    height: 300,
  },
  inputsDescriptionConta:{
    alignItems: 'center',
  },
  inputDescription:{
    borderWidth:0.3,
    margin:5,
    height:37,
    borderRadius:3,
    width:300,
  },
  containerSave:{
    alignItems: 'center',
  },
  btnSave:{
    height: 37,
    width: 150,
    borderRadius:5,
    borderWidth:0.3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtSave:{
    fontSize: 15,
  },
});
