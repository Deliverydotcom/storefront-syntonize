import {Platform} from 'react-native';
import axios from 'axios';
import {API_URL_ANDROID, API_URL_IOS} from 'react-native-dotenv';
import AsyncStorage from '@react-native-async-storage/async-storage';

const baseURL =
  Platform.OS === 'ios' || Platform.OS === 'web' ? `${API_URL_IOS}/api` : `${API_URL_ANDROID}/api`;
 

const storeFrontApi = axios.create({baseURL});

// interceptor middleware, code pass always here
// and get stored token
const default_content_type = {
  'content-type': 'application/x-www-form-urlencoded',
};

storeFrontApi.interceptors.request.use(async config => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    config.headers['x-token'] = token;
    config.headers.method = default_content_type;
  }

  return config;
});
export default storeFrontApi;
