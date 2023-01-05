import s from '@s/art.module.css'
import Head from 'next/head'

export default function SmartContracts () {
  return (
    <div className={s.cont}>
      <Head>
        <title>Smart Contracts |Notitia</title>
      </Head>
      <h1>Smart Contracts</h1>
      <h6>12/12/2022</h6>
      <section>
        <article>
          <h2>
            ¿Qué son?
          </h2>
          <p>
            El smart contract, o contrato inteligente, está escrito
            en lenguaje virtual y tiene la facultad de ejecutarse y
            hacerse cumplir por sí mismo, de forma autónoma y automática,
            a partir de una serie de parámetros programados. De la mano
            de la tecnología blockchain, su principal valor reside en
            reforzar la seguridad, la transparencia y la confianza entre
            los firmantes, evitando malentendidos, falsificaciones o
            alteraciones y prescindiendo de intermediarios.
          </p>
        </article>
        <article>
          <h2>
            ¿Cuándo surgen?
          </h2>
          <p>
            Los Smart Contracts surgieron en 1993 cuando el criptógrafo estadounidense
            Nick Szabo comenzó a utilizar este término. Szabo propuso el cambio de los
            contratos tradicionales a este sistema, pero no tuvo éxito debido a las
            limitaciones tecnológicas de ese momento. Sin embargo, en 2009 se creó el
            Bitcoin, lo cual cambió la situación. Los contratos inteligentes
            necesitaban un sistema de pagos que los pudiese poner en práctica,
            y ahí estaba el Bitcoin.
            <br />
            A pesar de que el Bitcoin solo estaba pensado para ser una herramienta
            financiera, su tecnología era útil. Es decir, la tecnología con la que
            funcionaba esta criptomoneda, el blockchain, pudo hacer posible los
            smart contracts. En 2014, gracias también a la creación del Ethereum,
            los smart contracts cobraron vida.
          </p>
        </article>
        <article>
          <h2>
            Características
          </h2>
          <p>
            <ul>
              <li>
                <b>Ejecución activa</b>: mientras que en un contrato tradicional tenemos
                una ejecución pasiva, en el caso de los smart contracts cuando se cumplen
                las condiciones el contrato se ejecuta directamente con lo que son auto
                ejecutivos, es decir, es un proceso que no se puede detener si se
                cumplen las condiciones.
              </li>
              <li>
                <b>La Eficiencia</b>: el código de un Smart Contract se ejecuta en segundos,
                ya que,  una vez se establezcan las condiciones, éste se ejecuta
                sin necesidad de un procedimiento. No existen factores externos como
                la reputación, lazos familiares, etc.
              </li>
              <li>
                <b>Económica</b>: al ahorrarse intermediarios que serían necesarios en un
                contrato tradicional para que se formalice el cumplimiento contractual,
                el único gasto que tendríamos en un contrato inteligente sería el pago de la tasa
                o fees de la plataforma.
              </li>
              <li>
                <b>No hay incumplimiento</b>: otra característica de los contratos inteligentes es que
                no existe la posibilidad de que la contraparte no cumpla las condiciones del
                contrato establecido. Los Smarts Contracts no están sujetos a la interpretación
                de alguna de las partes.
              </li>
              <li>
                <b>Transparente</b>: las transacciones que se realizan en un contrato inteligente
                son trazables, transparentes e irreversibles.
              </li>
              <li>
                <b>Descentralizado</b>: los contratos inteligentes al estar en la <b>blockchain</b>, están
                distribuidos en millones de ordenadores, lo que les aporta robustez, evitando
                también la censura y burocracia a las que susceptibles los contratos tradicionales.
              </li>
              <li>
                <b>El "Truestless"</b>: es una de las características más importantes en un contrato
                inteligente y  significa que no interviene la confianza. La identidad o
                solvencia de la otra parte no tiene relevancia, ya que, los términos del contrato
                están asegurados para que se cumplan.
              </li>
            </ul>
          </p>
        </article>
        <article>
          <h2>
            Desventajas de los Smart Contracts
          </h2>
          <p>
            <ul>
              <li>
                <b>Inmutabilidad del contenido</b>: las estipulaciones del contrato pasan a ser un protocolo informático que se inserta
                en la blockchain, por lo que no puede ser modificado, ni tan siquiera en los casos
                en los que haya un fallo en la programación, al estar vinculados a determinados
                valores, un contrato inteligente mal programado dará lugar a pérdidas de dinero
                u otras situaciones irrecuperables.
              </li>
              <li>
                <b>Eterno</b>: la blockchain es una red accesible a todos y, por lo tanto, pública,
                por lo que pueden plantearse problemas con la protección de datos, por ejemplo,
                en asuntos como el derecho al olvido, pues una de las características que hemos
                comentado es que lo introducido en la blockchain es imborrable.
              </li>
              <li>
                <b>Criptomonedas</b>: a día de hoy, para que el contrato inteligente pueda operar correctamente, es necesario que
                se inserte en la cadena de bloques, siendo necesario el uso de criptomonedas para que pueda funcionar.
              </li>
              <li>
                <b>Legislación aplicable</b>: el lugar de celebración de un contrato inteligente (necesario para conocer la
                legislación aplicable, jurisdicción y competencia) es otro de los temas polémicos, pues estos no se
                encuentran físicamente en ningún sitio, puesto que la blockchain consiste en una red mundial
                basada en la confianza de sus integrantes, pero este problema, a falta de una regulación
                específica, podría solucionarse con una cláusula en la que las partes pacten la jurisdicción y
                ley aplicables.
              </li>
            </ul>
          </p>
        </article>
        <article>
          <h2>¿Dónde se hacen?</h2>
          <p>
            No hay diferencias en lo que podría ser un contrato inteligente en Bitcoin, Ethereum o Corda.
            Seguramente llegue el momento en que en las tres podrían ser opciones validadas para un mismo
            tipo de contrato. La diferencia está más en el uso, alcance y posibilidades que ofrezca cada
            una para aplicar contratos inteligentes.
            <br />
            La blockchain de Bitcoin es una cadena de bloques cuya funcionalidad está principalmente
            ligada a transacciones con bitcoins y admite contratos inteligentes muy específicos (por
            ejemplo billeteras multi-firma). Debido al poder de cómputo y la infraestructura asociada
            a la Blockchain de Bitcoin, es muy interesante poder usar también contratos inteligentes
            sobre su cadena de bloques, por ello startups como Rootstock trabajan en ampliar la
            capacidad de la Blockchain de Bitcoin para usar contratos inteligentes.
            <br />
            Ethereum por su parte, es una plataforma de aplicaciones descentralizadas basadas en blockchain.
            Por tanto, los contratos inteligentes son «nativos» de la cadena de bloques con capacidad para
            aplicar los contratos inteligentes a más casos de uso y limitados solamente por la madurez de
            la tecnología en el tiempo.
            <br />
            Corda, a diferencia de Bitcoin blockchain y Ethereum, es una solución permisionada (block
            chains privadas). Además, por ser una solución desarrollada por el consorcio R3, tiene
            un enfoque muy vertical al sector financiero. Los casos de uso se centran en los de este
            sector tomando en cuenta las condiciones y características específicas de este sector.
            Incluso considerando las regulaciones actuales de las entidades financieras.
          </p>
        </article>
        <article>
          <h2>¿Cómo se hacen?</h2>
          <p>
            Los smart contracts no están escritos en lenguaje natural, sino en código informático,
            así que la gran pregunta es: ¿hay que saber programar para crear contratos inteligentes?
            Pues bien, ahora que esta tecnología está dando sus primeros pasos, es preferible, pero
            no obligatorio.
            <br />
            En A Lawyer’s Introduction to Smart Contracts se describen dos ‘capas’ para los contratos
            inteligentes:
            <ul>
              <li>La Plataforma de Smart Contracts (SCP), que es la infraestructura que permite crearlos
                y operarlos sobre una blockchain.
              </li>
              <li>El Sistema de Gestión de Smart Contracts (SCMS), un protocolo que se añadiría a esa
                infraestructura para hacer mucho más fácil a un usuario sin conocimiento de programación
                el manejo de estos contratos. Dicho de otro modo, la interfaz gráfica amigable.
              </li>
            </ul>
            Actualmente tenemos diversas SCP, aparte de Ethereum. Sin salir de la blockchain de Bitcoin,
            de hecho, están disponibles Rootstock y Counterparty. Fuera de él, Codius y la más reciente,
            Ivy Playground Chain, también son opciones. Sin embargo, para ‘escribir’ contratos
            inteligentes sobre ellas, directamente se requiere de conocimientos de programación.
            <br />
            Plataformas disponibles con SCMS pueden equipararse a ‘Smart Contracts as a Service’,
            lo que implica que, de momento, probablemente provienen de startups blockchain y se otorga
            el servicio a cambio de un coste. Una de ellas es Smart Contract, donde se pueden crear
            distintos tipos de contratos sobre Bitcoin o Ethereum sin necesidad de programación.
          </p>
        </article>
        <article>
          <h2>Algo más que decir</h2>
          <p>
            Los smart contracts o contratos inteligentes son de las primeras aplicaciones útiles que tienen las
            criptomonedas. Esto se aleja del mercado especulativo y se convierte en un contrato público que, constituido
            de buena forma, es casi perfecto.
            <br />
            Dicho esto, y mientras la blockchain siga infranqueable para los hackers, los contratos inteligentes
            tienen un futuro prometedor
          </p>
        </article>
      </section>
      <footer>
        <h2>Referencias</h2>
        <ul>
          <li>
            <a
              href='https://www.iberdrola.com/innovacion/smart-contracts'
              target='_BLANK'
              rel='noopener nofollow noreferrer'
            >
              Iberdrola
            </a>
          </li>
          <li>
            <a
              href='https://masterethereum.com/historia-smart-contracts/'
              target='_BLANK'
              rel='noopener nofollow noreferrer'
            >
              Masterethereum
            </a>
          </li>
          <li>
            <a
              href='https://vikayabogados.com/que-son-los-smart-contracts/'
              target='_BLANK'
              rel='noopener nofollow noreferrer'
            >
              VikayAbogados
            </a>
          </li>
          <li>
            <a
              href='https://blog.sepin.es/2018/09/smart-contracts'
              target='_BLANK'
              rel='noopener nofollow noreferrer'
            >
              Sepin Blog
            </a>
          </li>
          <li>
            <a
              href='https://www.evaluandosoftware.com/blockchain-contratos-inteligentes-smart-contracts'
              target='_BLANK'
              rel='noopener nofollow noreferrer'
            >
              EvaluandoSoftware
            </a>
          </li>
        </ul>
      </footer>
    </div>
  )
}
