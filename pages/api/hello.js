// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {firebase} from '../../firebaseConfig'

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
