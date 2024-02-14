import React, { useEffect, useState } from 'react';
import { View, Text, Pressable, TouchableOpacity, Image } from 'react-native';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import styles from './Style/Style';

const HomeScreen: React.FC<{}> = () => {
    const [user, setuser] = useState<any>(null);

    const webClientId = '504291844729-r80rc0o3o8kor1s0596hbgp3gobllui2';

    useEffect(() => {
        GoogleSignin.configure({
            webClientId: webClientId,
        })
    }, [])

    const googleLogin = async () => {
        console.log("SignIn called::");
        try {
            console.log("Entered Inside Try ")
            await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
            const userInfo = await GoogleSignin.signIn();
            console.log("userinfo", userInfo);
            setuser(userInfo);
        } catch (error: any) {
           console.log("Your SignIn Error ::",error);
        }
    };

    const googleLogOut = async () => {
        try {
            await GoogleSignin.signOut();
            setuser(null);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>

            {!user ? <Pressable onPress={googleLogin} style={{ marginLeft: '15%', marginTop: '80%' }}>
                <View style={styles.loginButton}>
                    <View style={{ marginLeft: 5,flexDirection:'row'}}>
                        <Image source={require('../../assests/images/google.png')} style={{height:20,width:20,marginTop:2,marginRight:10}}/>
                        <Text style={{ color: '#222222', fontWeight: '400', fontSize: 18 }}>
                            Login with Google
                        </Text>
                    </View>
                </View>
            </Pressable> :
                <View style={{ backgroundColor: '#FFFFFF', width: '70%', marginLeft: '15%', padding: 20, marginTop: '50%', borderRadius: 10, borderWidth: 2, borderColor: '#2EEC8AFF' }}>
                   <Image source={{
                    uri:user.user.photo
                   }} style={{height:50,width:50,margin:10,alignSelf:'center',borderRadius:20}}/>
                    <Text style={styles.text}>
                        First Name of user:  {user.user.givenName}
                    </Text>
                    <Text style={styles.text}>
                        Last Name of user:  {user.user.familyName}
                    </Text>
                    <Text style={styles.text}>
                        Email of user:  {user.user.email}
                    </Text>
                    <TouchableOpacity style={styles.signedScreen} onPress={googleLogOut}>
                        <Text style={{ color: '#2EEC8AFF', fontWeight: '700', fontSize: 18, alignSelf: 'center' }}>
                            LogOut
                        </Text>
                    </TouchableOpacity>
                </View>
            }
        </>
    );
}


export default HomeScreen;