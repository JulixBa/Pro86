import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./TabNavigator";
import Profile from "../screens/Profile";
import createMaterialBottomTabNavigator from "./TabNavigator";
import { Platform } from "react-native-web";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
 return(
   <Drawer.Navigator>
     <Drawer.Screen name ="Tela Inicial" component={TabNavigator}/>
     <Drawer.Screen name ="Perfil" component={Profile}/>
   </Drawer.Navigator>
 );

};

const BottomTabNavigator = () => {
    return(
    <TabNavigator.Navigator>
      screenOptions={({ route }) => ({
       tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if(route.name === 'Feed'){
            iconName = focused
               ? 'book'
               : 'book-outline';
        } else if(route.name === 'CreatePost'){
            iconName = focused ? 'create' : 'create-outline';
        }
        return <IonIcons name={iconName} size={size} color={color}/>;
       },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
       <TabNavigator.Screen name="Feed" component={Feed}/>
       <TabNavigator.Screen name="Criar Post" component={CreatePost}/>

    </TabNavigator.Navigator>

    );
}

const styles = StyleSheet.create({ 
  container: { 
    flex: 1, 
    backgroundColor: "black"
  },
  droidSafeArea: { 
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight: RFValue (35)
  },
  appTitle: { 
  flexível: 0.07,
  flexDirection: "row"
},
  appIcon: { 
    flex: 0.2, 
   justifiqueContent: "center",
   alignItems: "center"
  },
 iconImage: { 
  width: "100%", 
  height: "100%", 
  resizeMode: "contain"
},

 appTitleTextContainer: { 
  flex: 0.8, 
  justifyContent: "center"},
  appTitleText: { 
    cor: "white", 
    fontsize: RFValue(28), 
}, 
cardContainer: { 
  flex: 0.85 
}
}); 

export default DrawerNavigator;