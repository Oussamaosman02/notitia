import s from '@s/art.module.css'
import Head from 'next/head'

export default function Next () {
  return (
    <div className={s.cont}>
      <Head>
        <title>Next Js 13 |Notitia</title>
      </Head>
      <h1>Next Js 13</h1>
      <h6>28/10/2022</h6>
      <section>
        <article>
          <h2>¿Que es?</h2>
          <p>
            Next Js es un framework the React para producción, con entorno
            backend y frontend.
          </p>
        </article>
        <article>
          <h2>¿Qué introduce Next Js 13?</h2>
          <p>
            Entre otras cosas introduce:
            <ul>
              <li>Directorio app en vez de pages</li>
              <li>archivo layout.js para las interfaces recurrentes</li>
              <li>loading.js para las páginas y partes que están cargando</li>
              <li>
                error.js para mensaje personalizado en el error de algún
                componente
              </li>
              <li>
                template.js parecido a layout pero re-renderizando entre páginas
              </li>
              <li>componentes de react para servidor y cliente</li>
              <li>Turbopack en vez de webpack</li>
              <li>next/image optimizado y más rápido</li>
              <li>next/font para importar fuentes de manera optimizada</li>
              <li>next/link con una etiqueta a integrada por defecto</li>
            </ul>
          </p>
        </article>
        <article>
          <h2>Como instalar nextJs 13</h2>
          <p>
            npm i next@latest react@latest react-dom@latest
            eslint-config-next@latest
          </p>
        </article>
        <article>
          <h2>Directorio App (Beta)</h2>
          <p>
            Actualizando la forma en la que se crean rutas e interfaces con este
            nuevo directorio que sustituye al <b>pages/</b> con ciertas
            diferencias entre ellos.
          </p>
          <p>
            La primera es que a diferencia del <b>pages/</b>, en el directorio
            app no se detecta cada archivo como una ruta, si no que para crear
            una ruta hay que crear una carpeta dentro del <b>app/</b> con el
            nombre de la ruta y ya dentro de esta una archivo <b>page.js</b>,
            esa será la nueva ruta creada y como tal para esa ruta solo se
            renderizará ese archivo, como si fuera un index.
          </p>
          <p>
            Por defecto, todas las páginas y componentes dentro del directorio
            <b>app/</b> son React Server Components o Componentes del Servidor.
            Pasaremos a detallar esto más adelante y como hacer que un
            componente sea un Client Component.
          </p>
          <p>
            Dentro de este directorio o de cualquier subdirectorio dentro del
            <b>app/</b> puede haber otros archivos, que se renderizan
            "automáticamente" en el <b>page.js</b>, que son:
            <ul>
              <li>loading.js</li>
              <li>layout.js</li>
              <li>error.js</li>
              <li>template.js</li>
              <li>head.js</li>
            </ul>
          </p>
          <p>
            La preferencia o jerarquía de estos archivos es:
            <ol>
              <li>layout.js</li>
              <li>template.js</li>
              <li>error.js</li>
              <li>loading.js</li>
              <li>head.js</li>
              <li>page.js</li>
            </ol>
          </p>
          <h3>layout</h3>
          <p>
            Una layout es una UI compartida entre multiples páginas y se pueden
            anidar.
            <br />
            En la raiz de <b>app/</b> debe haber un componente RootLayout dentro
            del layout.js. Este componente actua como el <b>_document.js</b> y
            el <b>_app.js</b> del directorio pages/
            <br />
            Entre las páginas el estado permanece y son interactivas en todo
            momento puesto que no re-renderizan en el cambio de página.
            <br />
            El archivo layout.js debe tener integrada la prop
            <b>children</b> que donde puede ir otra layout, un loading.js, un
            error.js y un page.js.
            <br />
            Las layouts son por defecto componentes del servidor y por lo tanto
            pueden obtener datos de una api,aunque pueden convertirse a
            componentes del cliente
          </p>
          <h3>template</h3>
          <p>
            Son similares a las layouts ya que también renderizan un
            <b>children</b>, aunque el template si re-renderizan entre páginas y
            el estado no persiste.
            <br />
            Se pueden usar para animaciones d entrada salida con CSS o funciones
            que se basan en useEffect y useState que necesitan actualizarse en
            cada navegación entre páginas.
            <br />
            Por lo general se recomienda usar layouts antes que el template.
          </p>
          <h3>error</h3>
          <p>
            Este archivo ayuda a manejar errores en nuestra aplicación y si hay
            algún error en este segmento o cualquier hijo renderizado, devuelve
            como fallback este archivo.
            <br />
            El error.js es un componente de cliente y tiene como props el
            <b>error</b> y el <b>reset</b> que restablece el error sin devolver
            una respuesta
          </p>
          <h3>loading</h3>
          <p>
            Introduce un <b>React.Suspense</b> con un fallback al archivo
            layout.js que se encuentre en ese directorio.lo muestra
            inmediatamente al cargar la página y en cuanto todo la página ya ha
            renderizado se muestra.
            <br />
            Aunque las layouts, al ser un componente compartido entre interfaces
            si será interactivo, ya que no re-renderiza en el cambio de página.
          </p>
          <h3>head</h3>
          <p>
            El <b>head.js</b> es un remplazo del <b>next/head</b> y por ello
            solo acepta las siguientes etiquetas que irán dentro de un fragment:
            <ul>
              <li>title</li>
              <li>meta</li>
              <li>link con el atributo precedence</li>
              <li>script con el atributo async</li>
            </ul>
            <br />
            Aunque esté esta función, se puede seguir usando el next/head
          </p>
        </article>
        <article>
          <h2>Componentes cliente y servidor</h2>
          <p>
            <ul>
              <li>
                Cuando hablamos de cliente nos referimos al navegador que envia
                una petición al servidor, entonces este devuelve la respuesta
                como una interfaz con la que puede interactuar el usuario.
              </li>
              <li>
                Cuando hablamos de servidor nos referimos al ordenador, en un
                centro de datos que contiene el código de tu aplicación, que
                recibe peticiones del cliente y envía una respuesta apropiada.
              </li>
            </ul>
          </p>
          <h3>Componentes del Servidor</h3>
          <p>
            Estos componentes permiten guardar en memoria cuando esa ruta se
            carga, lo que permite que tu aplicación no cargue más de lo
            necesario y le aporta al navegador solo el javascript necesario.
            <br />
            Todos los archivos dentro del directorio <b>app/</b> son por defecto
            componentes del servidor.
          </p>
          <h3>Componentes del cliente</h3>
          <p>
            estos componentes son renderizados en el cliente aunque también
            pueden ser pre-renderizados en el servidor y refrescados en el
            cliente.
            <br />
            Para indicar que un componente es del cliente, se debe poner un "use
            client" al inicio de estos si usan <b>useEffect</b> o<b>useState</b>
            .
          </p>
          <h3>¿Cual usar?</h3>
          <p>
            Los componentes del servidor: fetching de datos, backend, api
            keys,dependencias grandes.
            <br />
            Los componentes del cliente: onClick, onChange, useState,
            useReducer, useEffect, apis del navegador.
          </p>
        </article>
        <article>
          <h2>Fetching de datos</h2>
          <p>
            Para hacer un fetching de datos ya no hacen falta el
            getStaticProps(),se hace ahora con una función al inicio del
            componente, antes de la función principal. Haces el fetch y luego lo
            añades dentro de la función principal. Hay una sutil diferencia
            entre server components t client components.
            <br />
            En los client components hace falta usar el hook <b>use</b> de
            React: const name = use(getData())
            <br />
            Para hacer un fetch dinámico, es decir, getServerSideProps, en el
            fetch se pondrá como segunda opción el objeto: cache: 'no-store'
          </p>
        </article>
        <article>
          <h2>turbopack (alpha)</h2>
          <p>
            Es presentado como el sucesor de webpack ya que es 700 veces más
            rápido y 10 veces más rápido que vite. Está hecho en Rust por los
            creadores del propio webpack y next js en conjunto. está aún en
            alpha y no está preparado para producción.
          </p>
          <p>
            Su rapidez radica en el código altamente optimizado y un motor de
            computación incremental de bajo nivel que permite el almacenamiento
            en caché hasta el nivel de funciones individuales.En cuanto
            turbopack hace una tarea no la vuelve a hacer de nuevo.
          </p>
          <p>
            Para ejecutarlo, hay que poner :
            <br />
            next dev --turbo
          </p>
        </article>
        <article>
          <h2>next/font</h2>
          <p>
            next/font optimiza tus fuentes automáticamente (de Google fonts o
            fuentes personalizadas) y quita las peticiones externas lo que da
            velocidad y privacidad
          </p>
          <p>
            Para importar fuentes de Google:
            <br />
            import {'{Roboto}'} from '@next/font/google'
          </p>
          <p>
            Fuente personalizada o local :
            <br />
            {`import localFont from '@next/font/local';
             `}
            <br />
            {'const myFont = localFont({ src: \'./my-font.woff2\' });'}
          </p>
        </article>
      </section>
      <footer>
        <h2>Referencias</h2>
        <ul>
          <li>
            <a
              href='https://nextjs.org/'
              target='_BLANK'
              rel='noopener nofollow noreferrer'
            >
              Next Js
            </a>
          </li>
          <li>
            <a
              href='https://nextjs.org/blog/next-13'
              target='_BLANK'
              rel='noopener nofollow noreferrer'
            >
              Next Js 13
            </a>
          </li>
          <li>
            <a
              href='https://beta.nextjs.org/docs/routing/fundamentals'
              target='_BLANK'
              rel='noopener nofollow noreferrer'
            >
              Routing Fundamentals Next Js
            </a>
          </li>
          <li>
            <a
              href='https://beta.nextjs.org/docs/routing/loading-ui'
              target='_BLANK'
              rel='noopener nofollow noreferrer'
            >
              Loading UI Next Js
            </a>
          </li>
          <li>
            <a
              href='https://beta.nextjs.org/docs/routing/pages-and-layouts#'
              target='_BLANK'
              rel='noopener nofollow noreferrer'
            >
              Pages And Layouts Next Js
            </a>
          </li>
          <li>
            <a
              href='https://beta.nextjs.org/docs/routing/error-handling'
              target='_BLANK'
              rel='noopener nofollow noreferrer'
            >
              Error Handling Next Js
            </a>
          </li>
          <li>
            <a
              href='https://beta.nextjs.org/docs/rendering/fundamentals'
              target='_BLANK'
              rel='noopener nofollow noreferrer'
            >
              Rendering Fundamentals
            </a>
          </li>
          <li>
            <a
              href='https://beta.nextjs.org/docs/data-fetching/fetching'
              target='_BLANK'
              rel='noopener nofollow noreferrer'
            >
              Fetching Next Js
            </a>
          </li>
          <li>
            <a
              href='https://turbo.build/pack/docs'
              target='_BLANK'
              rel='noopener nofollow noreferrer'
            >
              Turbopack Docs
            </a>
          </li>
          <li>
            <a
              href='https://beta.nextjs.org/docs/optimizing/fonts'
              target='_BLANK'
              rel='noopener nofollow noreferrer'
            >
              Next Js Font
            </a>
          </li>
          <li>
            <a
              href='https://beta.nextjs.org/docs/api-reference/components/font'
              target='_BLANK'
              rel='noopener nofollow noreferrer'
            >
              Next Js Fonts Api
            </a>
          </li>
        </ul>
      </footer>
    </div>
  )
}
