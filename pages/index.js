import Head from 'next/head';
import s from '@s/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={s.container}>
      <Head>
        <title>Notitia</title>
      </Head>
      <h2>¿Por qué?</h2>
      <p>
        Para mantener documentada mi búsqueda de información sobre distintos
        temas y tener esos datos recogidos en una sola página
      </p>
      <div className={s.flex}>
        <ul>
          <li>
            <Link href="/info/disociacion">Disociacion</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
