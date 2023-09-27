import React from "react";
import {Text, View, Image} from "react-native";
import { styles } from "./style";


const Splash = () => {
    return (
        <View>
            <Image resizeMode='contain' style={styles.image} source={require('../../../assets/splash_image.png')}/>
            <Text style={styles.title} >You'll Find <Text style={styles.innerTitle}>All you need</Text> Here!</Text>
        </View>
    )
}

export default Splash;