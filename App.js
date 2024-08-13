import React from 'react'
import Routes from './src/Routes/Routes'
import { Provider, } from 'react-redux';
import { store } from './src/reduxToolkit/store';
import Toast from 'react-native-toast-message';


const App = () => {

  return (
    <Provider store={store}>
      <Routes />
      <Toast />
    </Provider>
  )
}
export default App

