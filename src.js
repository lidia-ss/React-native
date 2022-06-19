import React from 'react';
import {View,  StyleSheet, SafeAreaView, StatusBar, Text, Pressable, Linking}
from 'react-native';

const colorGithub= '#010409';
constFontGithub= '#C9D1D9';
const colorDarkFontGithub = '#4F565E';

const imageProfileGithub = 'https://avatars.githubusercontent.com/u/105550974?v=4'
const urlGithub= 'https://github.com/lidia-ss';

const App= ()=>{

    const handlePressGoToGithub= async ()=>{
    const res = await Linking.canOpenURL(urlGithub)
if( res){
    Linking.opensURl(urlGithub)
}
} ;
return  (
<SafeAreaView style= {style.container}>
<StatusBar backgroundColor= {colorGithub} barStyle= "light-content" />
<View>
    <Image accessibilityLabel= "lidia perfil"
    style= {style.avatar}
     source= {{uri: imageProfileGithub}} 
     />
     <Text style= {[style.defaultText, style.name]}> Lídia Oliveira</Text>
     <Text style= {[style.defaultText, style.nickname, ]}>lidia-ss</Text>
     <Text style= {[style.defaultText, style.description]}>
         Cursando Análise e Desenvolvimento de Sistemas
         </Text>
 <Pressable onPress= {()=> console.log('github')}>
         <View style= {style.button}>
            <Text style= {[style.defaultText, style.textButton]}> Open in GitHub </Text>
         </View>
</Pressable>
         
</View>
</SafeAreaView>
);
};


export default App;

const style= StyleSheet.create({
    container:{
        backgroundColor: colorGithub,
        flex: 1, //exapandindo para tela inteira
        justifyContent: 'center',
        alignItens: 'center',
    },
    contant: {
        alignItens: 'center',
        padding: 20,
    },
    avatar : {
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
    },

    defaultText: {
color: colorFontGithub,
    },

    name: {
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 24,
    },
    nickname: {
        fontSize: 18,
        color: colorDarkFontGithub, 
    },
description: {
    fontWeight: 'bold',
    fontSize: 14,
},
    
button : {
    marginTop: 2,
    backgroundColor: colorDarkFontGithub,
    borderRadius: 10,
    padding: 20,
},

   textButton: {
    fontWeight: 'bold',
    fontSize: 16,
},

})
