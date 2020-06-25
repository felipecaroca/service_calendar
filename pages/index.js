import Head from 'next/head'
import axios from 'axios'


export default function Home({data}) {
  console.log(data.data)
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main>
        <table>
          <thead>
          <tr>
            <th>id</th>
            <th>a</th>
          </tr>
          </thead>
          <tbody>
          {data.data.map(res=>(
            <tr key={res.ID}>
              <td>{res.ID}</td>
              <td>{res.a}</td>
            </tr>
          ))}
          </tbody>
        </table>

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