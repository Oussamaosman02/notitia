import Link from 'next/link';
import s from '@s/lay.module.css';
import Head from 'next/head';

export default function Lay() {
  return (
    <nav className={s.header}>
      <Head>
        <title>Notitia</title>
      </Head>
      <h1>Notitia</h1>
      <Link href="/">
        <h2>En busca del conocimiento</h2>
      </Link>
    </nav>
  );
}
