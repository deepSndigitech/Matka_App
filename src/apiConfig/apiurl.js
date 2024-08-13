import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";


const BASEURL = "https://development.smapidev.co.in/api"


const USERURl = `${BASEURL}/Api/`



export const apimethods = {
    P: 'post',
    G: 'get',
    D: 'delete',
}



export const apiRoutes = {
    register: `${USERURl}signup`,
    logIn: `${USERURl}login`,
    forgetPass: `${USERURl}forgot_password`,
    forgetPassupdate: `${USERURl}forgot_password_verify`,
    verificationForget: `${USERURl}verify_otp`,
    verifyUser: `${USERURl}verify_user`,
    resendOtp: `${USERURl}resend_otp`,
    loginPin: `${USERURl}login_pin`,

    profiledata: `${USERURl}get_user_details`,
    appDetails: `${USERURl}app_details`,
    profileUpdate: `${BASEURL}update_profile`,
   

}

export const apiMethod = async (config, request, responce) => {

    // const token = await AsyncStorage.getItem("Token");
    const token = await AsyncStorage.getItem('token');
    let header
    if (token) {
        header = {
            'Content-Type': 'application/json',
            "token":  token
        }
    } else {
        header = {
            'Content-Type': 'application/json'
        }
    }
    let body = {
        headers: header,
        data: JSON.stringify(config?.data),
        ...config
    };

    console.log('====================================')
    console.log("bodybodybody", body)
    console.log('====================================')
    return axios(body)
        .then(response => {
            console.log('REGISTER DATA IN SERVICE', response.data);
            let bucketObj = {
                registerData: response.data
            }
            return bucketObj;
        });



}


export const ImageApi = async (imagedata, request, responce) => {

    const token = await AsyncStorage.getItem('Token');

    console.log("tokentokentokentoken", token);

    let Imgdata = new FormData();
    Imgdata.append('image', {
        uri: imagedata?.path,
        name: imagedata?.imageApi,
        type: imagedata?.mime,
    })


    let config = {
        method: 'post',
        url: IMAGEUPLORD,
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
        },
        data: Imgdata
    };

    return axios.request(config)
        .then(response => {
            console.log('Image data uplord', response.data);
            let bucketObj = {
                image_data: response.data
            }
            return bucketObj;
        });



}




export const APIRequestWithFile = async (config = {}, onSuccess, onError) => {
    // const token = new User().getToken();
    const token = await AsyncStorage.getItem('token').catch(err => console.log(err));
  
    try {
      let data;
      if (token) {
        data = {
          method: config.method,
          url: config.url,
          data: config.body,
          headers: {
            Accept: 'multipart/form-data',
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
            token: token
  
          },
        };
      } else {
        data = {
          method: config.method,
          url: config.url,
          data: config.body,
          headers: {
            Accept: 'multipart/form-data',
            'Content-Type': 'multipart/form-data',
          },
        };
      }
  
      console.log('config', data);
      axios(data)
        .then(res => {
          // if (res.status == 200 || res.status == 201) {
          //   console.log(res.data);
          //   onSuccess(res.data);
          // }
          if (!res?.data?.error) {
            onSuccess(res?.data);
          } else {
            onError(res?.data ? res.data : res);
          }
        })
        .catch(err => {
          onError(err?.response);
        });
    } catch (error) {
      console.log(error);
    }
  };
  

