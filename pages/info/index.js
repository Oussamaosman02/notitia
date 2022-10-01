import Head from "next/head";
import s from "@s/Home.module.css";
import Link from "next/link";

export default function Info() {
  return (
    <div className={s.container}>
      <Head>
        <title>Notitia | Info</title>
      </Head>
      <div className={s.flex}>
        <ul>
          <li>
            <Link href="/info/disociacion">Disociación</Link>
          </li>{" "}
          <li>
            <Link href="/info/blackrock">BlackRock</Link>
          </li>
          <li>
            <Link href="/info/masoneria">Masonería</Link>
          </li>
          <li>
            <Link href="/info/varjs">Var JavaScript</Link>
          </li>
        </ul>
      </div>
      <h2>¿Que es?</h2>
      <p>
        En este apartado se encuentran sobre todo artículos informativos puros,
        con un apartado final en el que resumo y expreso mi opinión acerca del
        tema, titulado <b>Algo más que decir</b>
      </p>
    </div>
  );
}
