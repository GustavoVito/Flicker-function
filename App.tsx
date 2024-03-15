import React, {useState, useEffect} from "react";
import {View, Text, StyleSheet} from 'react-native';

const Pisca = Comp => {
  const [isShowingText, setIsShowingText] = useState(true);

  useEffect(() => {
    const toggle = setInterval(() => {
      setIsShowingText(!isShowingText);
    }, 1000);

    return () => clearInterval(toggle);
  });

  if (!isShowingText) {
    return null;
  }

  return <Text>{Comp.text}</Text>;
};

const PiscaApp = () => {
  return (
    <View style = {styles.tela1}>
      <Pisca text='Vamos piscar' />
      <Pisca text='Sim, piscando é bom'/>
    </View>
  );
};

const styles = StyleSheet.create({
  tela1:{
    flexGrow:1,
    backgroundColor:'#Aff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default PiscaApp;