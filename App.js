import { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput } from 'react-native';

export default function App() {
  const [blog,setBlog] = useState("");
  return (
    <ScrollView>
     <View>
       <Text style={{backgroundColor: "white", fontSize: 20, fontWeight: "bold", textAlign: "center", padding: 20, color: "green"}}>
       Hello, Let's be part of Sustainable Development!</Text>
       <Image source= {{uri:"https://media.istockphoto.com/id/1392287714/photo/human-hand-holding-green-environmental-tree-esg-icon-society-and-governance-sustainable.jpg?s=612x612&w=0&k=20&c=eizRb7vZJkLd7-G5snKtONtM-AXisIcyuGMjiCpg0wE="}} 
       style={{ width:"100%", height: 270}} fadeDuration={2000}></Image>
       <Text style={{backgroundColor: "white", fontSize: 20, fontWeight: "bold", textAlign: "center", padding: 15, color: "green"}}>
       What is Sustainability?</Text>
       <Text style={{fontSize:15, textAlign:"justify", margin: 7}}>Sustainability is the ability to meet the needs of the present without compromising the ability of future generations to meet their own needs. This is first defined during COP1 which was held by UNFCCC. </Text>
       <Image source= {{uri:"https://media.istockphoto.com/id/1359495077/vector/people-supporting-sustainability-and-eco-friendly-solutions.jpg?s=612x612&w=0&k=20&c=D6LCzr2WZIWfx_zP4_2ygh-lo_TUUTKQSGg3fdvICeM="}} 
       style={{ width:"100%", height: 210}} fadeDuration={2000}></Image>
       <Text style={{backgroundColor: "white", fontSize: 20, fontWeight: "bold", textAlign: "center", padding: 15, color: "green"}}>
       What is UNFCCC?</Text>
       <Text style={{fontSize:15, textAlign:"justify", margin: 7}}>The United Nations Framework Convention on Climate Change popularly known as UNFCCC, is a treaty among countries around the globe to work together in a serious problem called climate change. This was adopted in May, 1992 and entered into force in March, 1994.</Text>
       <Text style={{fontSize:15, textAlign:"justify", margin: 7}}>Objective:</Text>
       <Text style={{fontSize:15, textAlign:"justify", margin: 7}}>The main objective of the UNFCCC is to stabilize greenhouse gas concentration in the atmosphere at a level that will prevent dangerous human interference with climate system, in a time frame which allows ecosystem to adapt naturally and enables sustainable development.</Text>

       <Text style={{backgroundColor: "white", fontSize: 20, fontWeight: "bold", textAlign: "center", padding: 15, color: "green"}}>
       Wanna write a blog on Sustainability?</Text>
       <View>
       <Text style={{fontSize:15, textAlign:"justify", margin: 7}}>{blog.length > 0 ? blog : "Please write your views."}</Text>
       </View>
       <TextInput onChangeText={(text) => setBlog(text) } placeholder='Write your Blog here!!!' multiline></TextInput>
     </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
