import Head from 'next/head'
import axios from 'axios'


export default function Home(props) {

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


  const data = await axios.get(`${process.env.SITE_URL}/api/hello`)
    .then((res)=>res.data)
    .catch((err)=>err.message)
console.log(data)
  return {
    props: {
     data
    }
  }
}