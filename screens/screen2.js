import {useState,useRef, useEffect} from 'react';
import { TouchableOpacity,Animated,ImageBackground,Dimensions, StyleSheet, Text, View,Image} from 'react-native';

const Screen2 = ({navigation}) => {
    const [ count, setCount ] = useState(15000); //intializing count to 15000
    const translateXValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const slideAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(translateXValue, { //moving to right from center
          toValue: 350,
          duration: 0,
          useNativeDriver: true,
        }),
        Animated.timing(translateXValue, { //moving to right to center
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.delay(1000), //Wait at the center for 1 second
        Animated.timing(translateXValue, { //moving to center to left
            toValue: -350,
            duration: 500,
            useNativeDriver: true,
          }),
      ]),
    );

    slideAnimation.start();

    return () => {
      slideAnimation.stop();
    };
  }, [translateXValue]);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Screen3'); // Replace the current screen with 'Screen3'
    }, 20000);

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, [navigation]);

    return(           
        <ImageBackground  style={styles.bgimage} resizeMode="cover" source = {require('../assets/award_bg.png')}>
            <View style={styles.main}>
                <Animated.View style={{transform: [{ translateX: translateXValue }]}}>
                    <View style={styles.top}> 
                        <Image style={styles.userimg}  source={require('../assets/avtar2.png')}/>

                        <View style={styles.user}>
                            <Text style={styles.username}> D-Lister </Text>

                            <Text style={styles.details}> Sally </Text> 
                        </View>           
                    </View>
                </Animated.View>
                
                <Text style={styles.midtext}> Gave U Some Love </Text>

                <ImageBackground  style={styles.heart} resizeMode="cover" source = {require('../assets/main-heart.png')}>
                    <Text style={styles.hearttext}> {count} </Text>
                </ImageBackground>

                <View style={styles.bottom}> 
                    <Image style={styles.character}  source={require('../assets/girlClap.png')}/>

                    <View>
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Screen3')}>
                            <Image style={styles.arrow} source={require('../assets/arrow.png')}/>
                        </TouchableOpacity>             
                    </View>
                </View>

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
    main :{
      alignItems:'center',
      marginTop: '15%'
    },
    top:{
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: '10%',
      zIndex: 1,
      marginBottom:'-5%',
    },
    userimg:{
      width: 100,
      height:100,
      borderRadius: 100,
      borderColor:'#f6ed6e',
      borderWidth:3,
    },
    user:{
      alignItems:'center', 
      marginLeft:20,
    },
    username:{
      fontSize: 40,
      color: '#f5eaa8',
    },
    details:{
      fontSize: 20,
      color: '#ffffff',
    },
    midtext:{
      fontSize: 30,
      marginTop: '9%',
      color: '#f5eaa8',
    },
    heart: {
      width: 150, 
      height: 120,
      alignItems: "center",
      justifyContent: "center" ,
      marginTop: '10%',
    },
    hearttext:{
      color: '#f5eaa8' ,
      fontSize: 30, 
    },
    bottom:{
      alignItems:'center',
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: '8%',
      marginLeft:100,
      zIndex: 1,
      marginBottom:'-5%',
    },
    character:{
      width: 100,
      height: 300,
      zIndex:1,
    },
    button: {
      width: 100,
      height: 50,
      backgroundColor: 'transparent',
      marginBottom: '40%',
    },
    arrow:{
      width: 50,
      height:50, 
      marginLeft:50, 
    },
    panel: {    
      width: Dimensions.get('window').width,
    },
  });
  export default Screen2