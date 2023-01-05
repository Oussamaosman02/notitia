import s from '@s/art.module.css'
import Head from 'next/head'

export default function VarJs () {
  return (
    <div className={s.cont}>
      <Head>
        <title>Var JS |Notitia</title>
      </Head>
      <h1>Var(Js)</h1>
      <h6>1/10/2022</h6>
      <section>
        <article>
          <h2>¿Que es?</h2>
          <p>
            La sentencia var declara una variable, opcionalmente inicializándose
            con un valor.
          </p>
          <p>
            Una declaración var declara variables que están en el ámbito del
            VariableEnvironment del contexto de ejecución en ejecución. Las
            variables Var se crean cuando se crea una instancia del entorno
            léxico que las contiene y se inicializan como undefined cuando se
            crean.
            <br />- ECMAScript® 2015
          </p>
        </article>
        <article>
          <h2>Descripción</h2>
          <p>
            Las declaraciones de var, sea donde sea que ocurran, son procesadas
            antes de ejecutar ningún código. Esto se llama hoisting.
          </p>
          <p>
            El ámbito de una variable declarada con la palabra reservada var es
            su contexto de ejecución en curso, que puede ser la función que la
            contiene o, para las variables declaradas afuera de cualquier
            función, un ámbito global. Si re-declaras una variable Javascript,
            esta no perderá su valor.
            <br />
            Las declaraciones de variables duplicadas usando var no generarán un
            error, ni siquiera en modo estricto, y la variable no perderá su
            valor, salvo que se realice otra asignación.
          </p>
          <p>
            Asignar un valor a una variable no declarada implica crearla como
            variable global (se convierte en una propiedad del objeto global)
            cuando la asignación es ejecutada.
          </p>
        </article>
        <article>
          <h2>Cuando usar Var</h2>
          <p>
            Siempre declara las variables de JavaScript con var, let o const.
            <br />
            La palabra reservada var es usada en todos los códigos JavaScript
            desde 1995 hasta 2015. Las palabras reservadas let y const se
            añadieron a JavaScript en 2015 y son las que se recomienda usar en
            la actualidad.
          </p>
        </article>
        <article>
          <h2>¿Que es el hoisting?</h2>
          <p>
            Hoisting es un término que no encontrará utilizado en ninguna
            especificación previa a ECMAScript® 2015 Language Specification. El
            concepto de Hoisting fue pensado como una manera general de
            referirse a cómo funcionan los contextos de ejecución en JavaScript
            (específicamente las fases de creación y ejecución). Sin embargo, el
            concepto puede ser un poco confuso al principio.
          </p>
          <p>
            Conceptualmente, por ejemplo, una estricta definición de hoisting
            sugiere que las declaraciones de variables y funciones son
            físicamente movidas al comienzo del código, pero esto no es lo que
            ocurre en realidad. Lo que sucede es que las declaraciones de
            variables y funciones son asignadas en memoria durante la fase de
            compilación, pero quedan exactamente en dónde las has escrito en el
            código.
          </p>
        </article>
        <article>
          <h2>¿Por qué debo usar var?</h2>
          <p>Error 404, not found!</p>
        </article>
        <article>
          <h2>¿Por qué ya no debo usar var?</h2>
          <p>
            La palabra reservada var tiene algunas funciones ocultas que pueden
            dañar nuestro código sin que lo sepamos, dicha palabra nos permite
            usar variables… ¡sin antes ser declarada!, esto sucede gracias a un
            proceso llamado hoisting (elevamiento), no nos pongamos técnicos,
            esto lo que hará es declarar la variable por ti.
          </p>
          <p>
            No es una buena práctica dejar que el lenguaje de programación haga
            nuestro trabajo, nosotros como desarrolladores profesionales debemos
            asegurarnos de mantener la calidad en nuestro código, y lo más
            importante, de tener el control sobre el mismo, y para ello
            JavaScript pone a nuestra disposición dos nuevos tipos de variables:
            let y const
          </p>
          <p>
            Las variables declaradas con var pueden: tener a la función como
            entorno de visibilidad, o bien ser globales. Su visibilidad
            atraviesa los bloques.
            <br />
            Declarar la misma variable con let dos veces en el mismo entorno es
            un error. Con var podemos re-declarar una variable muchas veces. Si
            usamos var con una variable ya declarada, simplemente se ignora.
            <br />
            Aparte, como var es &quot;hoisted&quot;,todas las declaraciones var
            son procesadas al inicio de la función y podemos referenciarlas en
            cualquier lugar. Pero las variables serán indefinidas (undefined)
            hasta que alcancen su asignación.
          </p>
        </article>
        <article>
          <h2>Diferencias entre var, let y const</h2>
          <ul>
            <li>
              Las declaraciones let y const tienen un ámbito de bloque,sin
              embargo, las variables var no tienen alcance de bloque: su
              visibilidad alcanza a la función, o es global si es declarada
              fuera de las funciones.
            </li>
            <li>
              Las variables var pueden ser modificadas y re-declaradas dentro de
              su ámbito; las variables let pueden ser modificadas, pero no
              re-declaradas; las variables const no pueden ser modificadas ni
              re-declaradas.
            </li>
            <li>
              Todas ellas se elevan a la parte superior de su ámbito. Pero
              mientras que las variables var se inicializan con undefined, let y
              const no se inicializan, es decir, las declaraciones var son
              procesadas al inicio de la función (o del script para las
              globales) .
            </li>
            <li>
              Mientras que var y let pueden ser declaradas sin ser
              inicializadas, const debe ser inicializada durante la declaración.
            </li>
          </ul>
        </article>
        <article>
          <h2>Algo más que decir</h2>
          <p>
            Var no se ha eliminado del todo ya que está presente en todas las
            webs anteriores a 2015 que usasen JavaScript ya que era la única
            forma de declarar variables. Hoy en dia esta en total desuso a causa
            de sus problemas con el scope o ámbito. Fue bonito mientras duró y
            funcionaba decentemente pero como cada día crece más rápido la
            tecnología y se hace más sofisticada, ECMAScript tomó la acertada
            decisión de añadir let y const como la forma de declarar variables
            en este lenguaje.
          </p>
        </article>
      </section>
      <footer>
        <h2>Referencias</h2>
        <ul>
          <li>
            <a
              href='https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/var'
              target='_BLANK'
              rel='noopener nofollow noreferrer'
            >
              Developer Mozilla (MDN) Var (es)
            </a>
          </li>
          <li>
            <a
              href='https://262.ecma-international.org/6.0/#sec-variable-statement'
              target='_BLANK'
              rel='noopener nofollow noreferrer'
            >
              ECMAScript 2015
            </a>
          </li>
          <li>
            <a
              href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var'
              target='_BLANK'
              rel='noopener nofollow noreferrer'
            >
              Developer Mozilla (MDN) Var
            </a>
          </li>
          <li>
            <a
              href='https://www.w3schools.com/js/js_variables.asp'
              target='_BLANK'
              rel='noopener nofollow noreferrer'
            >
              W3Schools
            </a>
          </li>
          <li>
            <a
              href='https://platzi.com/tutoriales/1339-fundamentos-javascript/8812-deja-de-usar-var-en-javascript-por-que-no-es-buena-practica-usarlo/'
              target='_BLANK'
              rel='noopener nofollow noreferrer'
            >
              Platzi
            </a>
          </li>
          <li>
            <a
              href='https://developer.mozilla.org/es/docs/Glossary/Hoisting'
              target='_BLANK'
              rel='noopener nofollow noreferrer'
            >
              MDN Hoisting (es)
            </a>
          </li>
          <li>
            <a
              href='https://es.javascript.info/var'
              target='_BLANK'
              rel='noopener nofollow noreferrer'
            >
              Javascript Info
            </a>
          </li>
          <li>
            <a
              href='https://www.freecodecamp.org/espanol/news/var-let-y-const-cual-es-la-diferencia/'
              target='_BLANK'
              rel='noopener nofollow noreferrer'
            >
              FreeCodeCamp (es)
            </a>
          </li>
        </ul>
      </footer>
    </div>
  )
}
