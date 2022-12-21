import { Alert } from "react-native-web"

registerUser =(email, password, confirmPassword, first_name, last_name) => {
    if(password == confirmPassword){
        firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((userCredencial)=> {
          Alert.alert("Usuário registrado!");
        })
        .catch(error => {
          Alert.alert(error.message);
        });
    } else{
        Alert.alert("As senhas não são iguais!");
    }
};