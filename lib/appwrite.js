import { Platform } from "react-native";
import { Client, Client } from 'react-native-appwrite';


export const appwriteConfig ={
    endpoint: 'https://cloud.appwrite.io/v1',
    Platform: 'com.dannaramirez.aora',
    projectId: '66caa25c0037f37e3559',
    databaseId: '66caa67600189e1ab2c5',
    userCollectionId: '66caa6c1000e84a93a5d',
    videoCollectionId: '66caa823002318943463',
    storageId: '66caae360000622f560e'
}

const Client = new Client();
