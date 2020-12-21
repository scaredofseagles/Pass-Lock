import firebase from 'firebase'
import 'firebase/auth'

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_APIKEY,
  projectId: process.env.REACT_APP_PROJECTID,
  authDomain: process.env.REACT_APP_AUTH,
  storageBucket: process.env.REACT_APP_STORAGE,
  messagingSenderId: process.env.REACT_APP_MESSAGEID,
  appId: process.env.REACT_APP_APPID,
  measurmentId: process.env.REACT_APP_MEASUREMENTID
})

export const auth = app.auth()
export default app