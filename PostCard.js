import React, {Component} from "react";
import{View, Text, StyleSheet, SafeAreaView, Platform, StatusBar, Image, ScrollView, TextInPut, Dimensions, Ionicons} from "react-native";
import {RFValue} from "react-native-responsive-fontsize";
import DropDownPicker from "react-native-dropdown-picker";
import { TextInput } from "react-native-web";
import  PostCard from "PostCard.js"

render();{
    return (
      if(!this.state.fontsLoaded){
        return <AppLoading/>;
      } else{
        let preview_images = {
          "image_1": require("../assets/image_1.jpg"),
          "image_2": require("../assets/image_2.jpg"),
          "image_3": require("../assets/image_3.jpg"),
          "image_4": require("../assets/image_4.jpg"),
          "image_5": require("../assets/image_5.jpg"),
          "image_6": require("../assets/image_6.jpg"),
          "image_7": require("../assets/image_7.jpg"),
        };
      };
      return(
        <View style={styles.container}>
          <SafeAreaView style ={styles.droidSafeArea}/>
          <View style={styles.appTitle}>
          <View styles={styles.appIcon}>
            <Image 
            source={require("../assets/logo.png")}
            style={styles.iconImage}
            ></Image>
          </View>
          <View style={styles.appTitleTextContainer}>
            <Text style={styles.appTitleText}>Novo Post</Text>
          </View>
          </View>
          <View style={styles.fieldsContainer}>
            <ScrollView>
            <Image 
      
            source={preview_images[this.state.previewImage]}
            style={styles.previewImage}
            ></Image>
          <View style ={{height: RFValue(this.stte.dropdrownheight)}}>
          <DropDownPicker
          items={[
          {label: "image 1", value: "image_1"},
          {label: "image 2", value: "image_2"},
          {label: "image 3", value: "image_3"},
          {label: "image 4", value: "image_4"},
          {label: "image 5", value: "image_5"},
          {label: "image 6", value: "image_6"},
          {label: "image 7", value: "image_7"},
          ]}
          defaultValue={this.state.previewImage}
          containerStyle={{
            height: 40,
            borderRadius: 20,
            marginBottom: 10
          }}
          onOpen={()=>{
            this.setState({dropdownHeight: 170});
          }}
          onClose={()=>{
            this.setState({dropdownheight: 40});
          }}
          style={{backgroundColor: "transparent"}}
          itemStyle={{
            justifyContent: "flex-start"
          }}
          dropDownStyle={{backgroundColor: "#2a2a2a"}}
          labelStyle={{
            color: "white"
          }}
          arrowStyle={{
            color: "white"
          }}
          onChangeItem={item =>
          this.setState({
            previewImage: item.value
          })
        }
        />
        </View>
        <TextInput
        style={styles.inputFont}
        onChangeText={caption => this.setState({caption})}
        placeholder={"Legenda"}
        placeholderTextColor="white"
        />
        </ScrollView>
        </View>
        <View style={{flex:0.08}}/>
        </View>
       );
      
      
      
    );
};

renderItem =({ item: post }) => {
        return <PostCard story={post} navigation={this.props.navigation}/>
      };