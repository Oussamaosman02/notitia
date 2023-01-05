import Head from 'next/head'
import s from '@s/Home.module.css'
import Link from 'next/link'

export default function Util () {
  return (
    <div className={s.container}>
      <Head>
        <title>Notitia | Util</title>
      </Head>
      <div className={s.flex}>
        <ul>
          <li>
            <Link href='/util/latex'>LaTeX</Link>
          </li>
          <li>
            <Link href='/util/nextjs13'>Next Js 13</Link>
          </li>
        </ul>
      </div>
      <h2>¿Que es?</h2>
      <p>
        En este apartado se encuentran sobre todo artículos útiles,con el mero
        pretexto de servir, sin opiniones personales ni nada
      </p>
    </div>
  )
}
