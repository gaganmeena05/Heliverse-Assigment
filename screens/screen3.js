import {useState, useEffect} from 'react';
import {TouchableOpacity,ImageBackground,Dimensions, StyleSheet, Text, View,Image} from 'react-native';

const Screen3 = ({navigation}) => {
    let timer;
    const [ count, setCount ] = useState(15000); //intializing count to 15000

    useEffect(() => { //increasing count till 40000
    clearInterval(timer)
    timer = setInterval(() => {
        if (count >= 40000) {
            clearInterval(timer);
            return;
        }
        setCount(prev => prev+1000) ;     
    },100)    

    return () => clearInterval(timer);
    },[count]);

    return(
        <ImageBackground  style={styles.bgimage} resizeMode="cover" source = {require('../assets/award_bg.png')}>
            <View style={styles.main}>
                <Text style={styles.toptext}>4 Friends Gave U Some Love </Text>

                <ImageBackground  style={styles.heart} resizeMode="cover" source = {require('../assets/main-heart.png')}>
                    <Text style={styles.hearttext}> {count} </Text>
                </ImageBackground>

                <View style={styles.bottom}> 
                    <Image style={styles.character}  source={require('../assets/girlClap.png')}/>
                    
                    <View>
                        <View style={styles.bottomright}>
                            <Text style={styles.charmessage}> Congrats! </Text>

                            <View style={styles.triangleCorner} />
                        </View>

                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Screen1')} > 
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
    main:{
      alignItems:'center',
      marginTop: '25%',
    },
    toptext:{ 
      textAlign:'center',
      fontSize: 30,
      color: '#f5eaa8',
      width: 250,
    },
    heart: {
      width: 150, 
      height: 120,
      marginTop:'20%' , 
      alignItems: "center",
      justifyContent: "center",
    },
    hearttext: {
      color: '#f5eaa8',
      fontSize: 30, 
    },
    bottom:{
      alignItems:'center',
      flexDirection: 'row',
      flexWrap: 'wrap',
      zIndex: 1,
      marginLeft:'25%',
      marginTop:'10%',
    },
    character:{
      width: 100,
      height: 300,
      marginTop:'20%',
    },    
    bottomright:{
      marginBottom:'70%'
    },
    charmessage:{
      fontSize: 20,
      backgroundColor: '#ffffff',
      padding: 10,
      borderRadius:20,
      color: '#e58bc8',
      width:120
    },
    triangleCorner: {
      width: 0,
      height: 0,
      backgroundColor: "transparent",
      borderStyle: "solid",
      borderRightWidth: 30,
      borderTopWidth: 30,
      marginLeft: 20,
      marginTop:-3,
      borderRightColor: "transparent",
      borderTopColor: "#ffffff",
    },
    button: {
      width: 100,
      height: 50,
      backgroundColor: 'transparent',
      marginBottom: '140%',
    },
    arrow:{
      width: 50,
      height:50, 
      marginLeft:50, 
    },
    panel: {    
      marginTop: '-14%',
      width: Dimensions.get('window').width,
    },
  });
  export default Screen3