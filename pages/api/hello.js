// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import firebase from 'firebase/app'
import 'firebase/firestore'

let firebaseConfig = {
  apiKey: "AIzaSyDxrjTVOoMa0ep7ZPANCRCg6doTBaIwFWM",
  authDomain: "service-calendar-715dd.firebaseapp.com",
  databaseURL: "https://service-calendar-715dd.firebaseio.com",
  projectId: "service-calendar-715dd",
  storageBucket: "service-calendar-715dd.appspot.com",
  messagingSenderId: "401187501",
  appId: "1:401187501:web:acdad237d03af9ff125c24",
  measurementId: "G-Z2SE8NSSNN"
};


// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);

}

export default async (req, res) => {
  const db = firebase.firestore()
  const data = await db.collection('lala').get().then(querySnapshot=>{
    let response = []
    querySnapshot.forEach(doc=>{
      response.push(doc.data())
    })
    return response
  })

  res.statusCode = 200
  res.json({ data })
}
