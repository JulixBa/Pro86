import  PostCard from "PostCard.js"

<View style={styles.container}> 
  <SafeAreaView style={styles.droidSafeArea} /> 
  <View style={styles.appTitle}> 
     <View style={styles.appIcon}> 
      <Image source={require("../assets/logo.png")} style={styles.iconImage} 
      ></Image> 
   </View> 
   <View style={styles.appTitleTextContainer}> 
     <Text style={styles.appTitleText}>Espectagrama</Text> 
   </View> 
 </View> 
 <View style={styles.cardContainer}> 
    <FlatList 
     keyExtractor={this.keyExtractor} 
     data={posts} 
     renderItem={this.renderItem} 
    /> 
 </View> 
</View>