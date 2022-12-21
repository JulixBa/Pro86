import CreateDrawerNavigator from "react-navigation/drawer";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./TabNavigator";
import Profile from "../screens/Profile";
import { FlatList, SafeAreaView } from "react-native-web";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
 return(
   <View style={StyleSheet.container}>
     <SafeAreaView style ={StyleSheet.droidSafeArea}/>
     <View style={StyleSheet.appTitle}>
        <View style={StyleSheet.appIcon}>
           <Image
              source={require("../assets/logo.png")}
              style={style.iconImage}
            ></Image>
        </View>
        <View style={StyleSheet.appTitleContainer}>
            <Text style={StyleSheet.appTitleText}>Espectagrama</Text>
        </View>
      </View>
      <View style={styyles.caardContainer}>
           <FlatList
             keyExtractor={this.keyExtractor}
             date={posts}
             renderItem={this.renderItem}
             />
      </View>
    </View>
 );

};

export default DrawerNavigator;