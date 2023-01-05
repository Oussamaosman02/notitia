import Head from 'next/head'
import s from '@s/Home.module.css'
import Link from 'next/link'

export default function Home () {
  return (
    <div className={s.container}>
      <Head>
        <title>Notitia</title>
      </Head>
      <div className={s.flex}>
        <ul>
          <li>
            <Link href='/info'>Información</Link>
          </li>
          <li>
            <Link href='/util'>Útil</Link>
          </li>
        </ul>
      </div>
      <h2>¿Que es?</h2>
      <p>
        Notitia viene del latín, significa información y de eso va esta web.
        Busco y desarrollo la información sobre distintos temas.
      </p>
      <h2>¿Por qué?</h2>
      <p>
        Para mantener documentada mi búsqueda de información sobre distintos
        temas y tener esos datos recogidos en una sola página
      </p>
    </div>
  )
}
