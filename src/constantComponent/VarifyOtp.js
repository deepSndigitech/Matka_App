import moment from "moment";
import { useEffect, useRef, useState } from "react";
import { ScrollView, TouchableOpacity, Text, View, Dimensions, Image, TextInput, Keyboard, ActivityIndicator, ToastAndroid } from "react-native"
import Modal from 'react-native-modal';
import { useSelector } from "react-redux";
import { APIRequestWithFile, apiRoutes } from "../apiConfig/apiurl";
import Toast from "react-native-toast-message";

const { height, width } = Dimensions.get('window')

const VarifyOtp = ({ visible, onClose, navigation, email }) => {
    const [otp, setOtp] = useState(['', '', '', '']);
    const otpInputRefs = useRef([]);
    const Color = useSelector(state => state.Theme.Color)
    const [Loading, setLoading] = useState(false)
    const [Loadings, setLoadings] = useState(false)
    const [seconds, setSeconds] = useState(30);


    const handleOtpChange = (index, value) => {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value !== '' && index < otpInputRefs.current.length - 1) {
            otpInputRefs.current[index + 1].focus();
        }

        const filteredArray = newOtp.filter(item => item !== "");
        if (filteredArray.length === 4) {
            const newOtpp = newOtp.join('')
            // setOtp(newOtpp);
            submitOtp(newOtpp)
            Keyboard.dismiss()

        }

    };

    const submitOtp = (id) => {
        if (id) {

            const fd = new FormData();

            fd.append('mobile', email);
            fd.append('otp', id);

            let config = {
                url: apiRoutes.verificationForget,
                method: 'post',
                body: fd
            };
            setLoading(true)
            APIRequestWithFile(
                config,
                res => {
                    console.log(res, '--@@@@@@@@@-res');
                    if (res?.status === "success") {
                        onClose();
                        setOtp(['', '', '', '']);
                        navigation.navigate('ConfirmePassword', { "email": email, "token": res?.data?.token })
                        Toast.show({
                            text1: res?.message,
                            type: 'success'
                        });


                    }
                    else {
                        Toast.show({
                            text1: res?.message,
                            type: 'error'
                        });
                    }
                    // SetSendMessage(mess = res?.data, type = audioFile ? 'audio' : 'image')
                    setLoading(false);
                },
                err => {
                    console.log(err?.message, '---err');
                    setLoading(false)
                    // if (err?.message) {

                    // }
                }
            );

        } else {
            Toast.show({
                text1: 'Please enter OTP',
                type: 'error'
            });
        }



        // props.navigation.navigate('ConfirmePassword', { "email": email, "otp": id })
        // // props.navigation.reset({
        // //     index: 0,
        // //     routes: [{ name: 'ConfirmePassword' }]
        // // });
        // onClose();
    }

    const reSendCode = () => {

        const fd = new FormData();

        fd.append('mobile', email);

        let config = {
            url: apiRoutes.resendOtp,
            method: 'post',
            body: fd
        };
        setLoadings(true)
        APIRequestWithFile(
            config,
            res => {
                console.log(res, '--@@@@@@@@@-res');
                if (res?.status === "success") {
                    // Toast.show({
                    //     text1: res?.message,
                    //     type: 'success'
                    // });
                    ToastAndroid.showWithGravityAndOffset(
                        res?.message,
                        ToastAndroid.LONG,
                        ToastAndroid.BOTTOM,
                        25,
                        50,
                    );
                    // onClose();
                    setOtp(['', '', '', '']);
                    setSeconds(30)


                }
                else {
                    Toast.show({
                        text1: res?.message,
                        type: 'error'
                    });
                }
                // SetSendMessage(mess = res?.data, type = audioFile ? 'audio' : 'image')
                setLoadings(false)
            },
            err => {
                console.log(err?.message, '---err');
                setLoadings(false)
                // if (err?.message) {

                // }
            }
        );

    }



    useEffect(() => {
        // Check if there are remaining seconds
        if (seconds <= 0) return;

        // Set up an interval that updates the timer every second
        const interval = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds - 1);
        }, 1000);

        // Clear the interval when the component unmounts or when the timer reaches 0
        return () => clearInterval(interval);
    }, [seconds]);

    return (
        <>
            <Modal isVisible={visible}
                animationIn="slideInUp"
                animationInTiming={700}
                animationOut="slideOutDown"
                animationOutTiming={700}
                style={{ marginLeft: 0, marginBottom: 0, width: '100%' }}
                backdropOpacity={0.5}
                onBackButtonPress={() => onClose()}
                onBackdropPress={() => onClose()}>

                <View style={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    left: 0,
                    maxHeight: 500,
                    width: width,
                    height: height / 2,
                    backgroundColor: Color.onPrimary,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                    elevation: 5,

                }}>
                    <TouchableOpacity onPress={onClose} style={{ alignSelf: 'center', height: 5, width: 100, borderRadius: 10, backgroundColor: Color.onSecondary }} activeOpacity={1}>

                    </TouchableOpacity>
                    <View style={{ flex: 1, alignItems: 'center', marginVertical: 20 }}>

                        <Text style={{ fontSize: 30, textAlign: 'center', fontWeight: 'bold', color: Color.onSecondary }}>Verify Account</Text>
                        <Text style={{ fontSize: 12, textAlign: 'center', color: Color.onSecondary, marginHorizontal: 20, marginTop: 5 }}>Code has been send to {email}.</Text>
                        <Text style={{ fontSize: 12, textAlign: 'center', color: Color.onSecondary, marginHorizontal: 20, }}>Enter the code to verify your account.</Text>
                        <Text style={{ fontSize: 12, textAlign: 'center', color: Color.onSecondary, marginHorizontal: 20, marginTop: 10 }}>Enter Code</Text>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10, marginHorizontal: 10 }}>
                            {otp.map((digit, index) => (
                                <TextInput
                                    key={index}
                                    style={{
                                        color: '#000',
                                        width: 45,
                                        backgroundColor: '#D3D3D3',
                                        height: 45,
                                        borderRadius: 5,
                                        borderColor: '#D3D3D3',
                                        borderWidth: 1,
                                        marginHorizontal: 5,
                                        textAlign: 'center',
                                        fontSize: 20,
                                    }}
                                    onChangeText={(text) => handleOtpChange(index, text)}
                                    value={digit}
                                    maxLength={1}
                                    keyboardType="numeric"
                                    ref={(ref) => otpInputRefs.current[index] = ref}
                                />
                            ))}
                        </View>
                        <View style={{ marginTop: 30, alignSelf: 'center', flexDirection: 'row' }}>
                            <Text style={{ color: Color.onSecondary, fontSize: 12 }}>Didn’t Receive Code?</Text>
                            <TouchableOpacity onPress={() => reSendCode()}>
                                {Loadings ?
                                    <ActivityIndicator size={20} color={"#000"} />
                                    :
                                    <Text style={{ fontWeight: '700', color: Color.onSecondary, textDecorationLine: 'underline', fontSize: 12 }}> Resend Code</Text>


                                }
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginTop: 10, alignSelf: 'center', flexDirection: 'row' }}>
                            <Text style={{ color: Color.onSecondary, fontSize: 12 }}>Resend code in 00:{seconds}</Text>
                        </View>

                        <TouchableOpacity style={{ alignSelf: 'center', marginTop: 30, marginHorizontal: 20, borderRadius: 10, padding: 7, width: '80%', borderWidth: 1, borderColor: Color.onSecondary, justifyContent: 'center' }}
                            onPress={() => submitOtp()} >
                            {Loading ?
                                <View><ActivityIndicator size="large" color={"#000266"} /></View> :
                                <Text style={{ color: Color.onSecondary, textAlign: 'center', fontSize: 20, fontWeight: '500' }}>Verify Account</Text>
                            }
                        </TouchableOpacity>
                    </View>


                </View>
            </Modal>
        </>

    )
}
export default VarifyOtp