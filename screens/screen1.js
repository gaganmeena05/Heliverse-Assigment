import {useState, useEffect} from 'react';
import { ImageBackground,Dimensions, StyleSheet, Text, View,Image} from 'react-native';

const Screen1 = ({navigation}) => {
    const [time, setTime] = useState(Date.now()); //intializing time to current time

    useEffect(() => {  //fromating time
        const interval = setInterval(() => { 
        setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
          navigation.replace('Screen2'); // Replace the current screen with 'Screen2'
        }, 3000);
    
        return () => clearTimeout(timer);
      }, [navigation]);

    return(
        <ImageBackground  style={styles.bgimage} resizeMode="cover" source = {require('../assets/award_bg.png')}>
            <View style={styles.main}>
                <ImageBackground  style={styles.castlogo} resizeMode="cover" source = {require('../assets/castingLogo.png')}>
                    <Text style={styles.curtime}> {time.toLocaleString().substring(10,18)} </Text>
                </ImageBackground>

                <Text style={styles.toptext}> CASTING CALL </Text>

                <Text style={styles.text}> The Results R In! </Text>

                <Image style={styles.character}  source={require('../assets/girlClap.png')}/>

                <Image style={styles.panel}  source={require('../assets/awardPlatform.png')}/>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    bgimage: {    
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
    main:{
      alignItems:'center', 
      marginTop: 100,
    },
    castlogo:{
      width: 130, 
      height: 150,
      alignItems: "center",
      justifyContent: "center" ,
    },
    curtime:{
      color: '#ffffff',
      transform: [{rotate: '-15deg'}],
      marginLeft:10 ,
      fontSize: 30, 
      marginTop:50,
    },
    toptext:{
      color: '#cd62ae',
      transform: [{rotate: '-15deg'}],
      fontSize: 30,
    },
    text :{
      fontSize: 30,
      marginTop: '17%',
      color: '#f5eaa8',
      marginBottom: '15%',
    },
    character:{
      width: 100,
      height: 300,
      marginBottom: '-5%',
      zIndex:1,
    },
    panel: {    
      width: Dimensions.get('window').width,
    },
  });

  export default Screen1