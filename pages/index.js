import Head from 'next/head'
import firebase from 'firebase/app'


export default function Home(props) {
  console.log(props)
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main>
        lala

      </main>

      <footer>

      </footer>
    </div>
  )
}

export async function getStaticProps() {
  const db = firebase.firestore()
  const res = await db.collection('lala').get().then(querySnapshot=>{
    let response = []
    querySnapshot.forEach(doc=>{
      response.push(doc.data())
    })
    return response
  })
  // const res = querySnapshot.map(doc=>{
  //   return doc.data()
  // })

  console.log(res)

  return {
    props: {

      res
    }
  }
}