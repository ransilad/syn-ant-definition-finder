import FinderContainer from '@/containers/FinderContainer'
import Head from 'next/head'

export default function Home () {
  return (
    <>
      <Head>
        <title>Buscador de Sin/Ant más definición</title>
        <meta name="description" content="Search engine for synonyms, antonyms and also provides the definition of an specific word" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FinderContainer />
    </>
  )
}
