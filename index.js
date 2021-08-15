import 'react-native-gesture-handler';
import React   from "react";
import {AppRegistry,LogBox,StatusBar} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { configure } from "mobx"
import { Provider } from 'mobx-react';
import  store from "./src/store/Store/index"
import TrackPlayer from 'react-native-track-player';

configure({ useProxies: "never" }) 

LogBox.ignoreAllLogs(true);
StatusBar.setBackgroundColor("black");

function MainApp() {

  return(
           <Provider store={store}>
                <App/>
            </Provider>
            )
  }
    

AppRegistry.registerComponent(appName, () => MainApp);
TrackPlayer.registerPlaybackService(() => require('./service.js'));
