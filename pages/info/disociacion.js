import s from '@s/art.module.css';

export default function Disoc() {
  return (
    <div className={s.cont}>
      <h1>Disociacion</h1>
      <section>
        <article>
          <h2>¿Qué es?</h2>
          <p>
            Un mecanismo de defensa en el que los impulsos en conflicto o las
            ideas y sentimientos amenazantes se separan del resto de la mente.
            <br />
            <b>Desconectarse de la realidad</b>
          </p>
          <p>
            La disociación puede afectar a la conciencia, a la memoria, a la
            identidad o a la percepción, que habitualmente suelen estar
            integradas
          </p>
        </article>
        <article>
          <h2>¿Por qué?</h2>
          <p>
            Esto pasa por un gran impacto emocional, estrés, trauma, estrés post
            traumático,etc... y puede ser indicativo de algún problema
            psicológico como depresion, asniedad, fobias, migrañas,etc...
          </p>
          <p>
            Un ejemplo sería que tras vivir un acontecimiento traumático que le
            impactó gravemente, no tiene ningún sentimiento cuando piensa en
            ello. Esto se denomina “embotamiento emocional” y es una de las
            características principales del trastorno por estrés postraumático.
            <br />
            El <b>embotamiento emocional</b> es un estado en el que se observa
            una atenuación o aplanamiento de las emociones, tanto las positivas
            como las negativas
          </p>
        </article>
        <article>
          <h2>Tipos</h2>
          <ul>
            <li>
              Amnesia disociativa:Cuando una persona no es capaz de recordar
              información personal (fuera de lo que podría considerarse normal),
              perdiendo o no pudiendo recordar eventos de su vida
            </li>
            <li>Despersonalización:</li>
            <li>
              Desorden de la identidad disociativo: Cuando la identidad de una
              persona esta basada en más de un estado de personalidad. Antes se
              le llamaba <b>Desorden de personalidad multiple</b>
            </li>
          </ul>
        </article>
      </section>
      <footer>
        <h2>Bibliografía</h2>
        <ul>
          <li>
            <a
              href="https://psicologiaytrauma.es/disociacion/"
              target="_BLANK"
              rel="noopener nofollow noreferrer"
            >
              Psicologia y Trauma
            </a>
          </li>
          <li>
            <a
              href="https://www.psychologytoday.com/us/basics/dissociation"
              target="_BLANK"
              rel="noopener nofollow noreferrer"
            >
              Psychology Today
            </a>
          </li>
          <li>
            <a
              href="https://www.verywellmind.com/dissociation-2797292"
              target="_BLANK"
              rel="noopener nofollow noreferrer"
            >
              Very Well Mind
            </a>
          </li>
          <li>
            <a
              href="https://www.redaccionmedica.com/secciones/industria/lundbeck-aborda-el-embotamiento-emocional-para-tratar-la-depresion-6929"
              target="_BLANK"
              rel="noopener nofollow noreferrer"
            >
              Redacción Médica
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
