import React,{Component} from "react"
import {View, Text, TouchableOpacity, StyleSheet} from "react-native"

export default class Postscreen extends Component{
    renderItem =({ item: post }) => {
        return <Postscreen story={post} navigation={this.props.navigation}/>
      };
}

