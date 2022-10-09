import s from "@s/art.module.css";
import Head from "next/head";

export default function Latex() {
  return (
    <div className={s.cont}>
      <Head>
        <title>LaTeX |Notitia</title>
      </Head>
      <h1>LaTeX</h1>
      <h6>9/10/2022</h6>
      <section>
        <article>
          <h2>¿Que es?</h2>
          <p>
            LaTeX es un sistema de composición de textos, orientado a la
            creación de documentos escritos que presenten una alta calidad
            tipográfica. Por sus características y posibilidades, es usado de
            forma especialmente intensa en la generación de artículos y libros
            científicos que incluyen, entre otros elementos, expresiones
            matemáticas.
          </p>
        </article>
        <article>
          <h2>Historia</h2>
          <p>
            La historia de LaTeX empieza con TeX, un sistema de tipografía
            creado por Donald E. Knuth y publicado por primera vez en 1978. Su
            propósito era ayudar a matemáticos, físicos e informáticos en la
            composición de sus textos, que habitualmente incluían nomenclatura
            compleja.
            <br />
            LaATeX fue escrito por Leslie Lamport. Utiliza el cajista TEX como
            su elemento de composición. Desde diciembre de 1994, el paquete
            LATEX está siendo actualizado por el equipo LATEX3, que dirige Frank
            Mittelbach, para incluir algunas de las mejoras que se habían
            solicitado desde hace tiempo, y para reunificar todas las versiones
            retocadas que han surgido desde que apareciera LATEX 2.09 hace ya
            algunos años.
          </p>
        </article>
        <article>
          <h2>Uso</h2>
          <p>
            LaTeX presupone una filosofía de trabajo diferente a la de los
            procesadores de texto habituales (conocidos como WYSIWYG, es decir,
            «lo que ves es lo que obtienes») y se basa en instrucciones.
            Tradicionalmente, este aspecto se ha considerado una desventaja
            (probablemente la única). Sin embargo, LaTeX, a diferencia de los
            procesadores de texto de tipo WYSIWYG, permite a quien escribe un
            documento centrarse exclusivamente en el contenido, sin tener que
            preocuparse de los detalles del formato. Además de sus capacidades
            gráficas para representar ecuaciones, fórmulas complicadas, notación
            científica e incluso musical, permite estructurar fácilmente el
            documento (con capítulos, secciones, notas, bibliografía, índices
            analíticos, etc.), lo cual brinda comodidad y lo hace útil para
            artículos académicos y libros técnicos.
          </p>
          <p>
            El modo en que LaTeX interpreta la «forma» que debe tener el
            documento es mediante etiquetas. Por ejemplo,{" "}
            {`\\documentclass
            {article}`}{" "}
            le dice a LaTeX que el documento que va a procesar es un artículo.
            Puede resultar extraño que hoy en día se siga usando una herramienta
            que no sea del tipo WYSIWYG («lo que ves es lo que obtienes»), pero
            las características de LaTeX siguen siendo muchas y muy variadas.
            También hay varias herramientas o aplicaciones que ayudan a una
            persona a escribir estos documentos de una manera más visual (LyX,
            TeXmacs y otros). A estas herramientas se les llama WYSIWYM («lo que
            ves es lo que quieres decir»).
          </p>
        </article>
        <article>
          <h2>Etiquetas</h2>
          <br />
          <h3>Iniciar el documento</h3>
          <p>
            <code>{"\\documentclass[a4paper]{article}"}</code>
            Esto se conoce como preámbulo.
            <code>
              {"\\title{Título}"}
              <br />
              {"\\author{Nombre}"}
            </code>
            El título se lee y se guarda, para añadirlo en el cuerpo, hace falta
            la etiqueta {"\\maketitle"}
            <br />
            También puedes añadir la fecha con {
              "\\date{9 de octubre de 2022}"
            }, {"\\date{\\today}"} o simplemente {"\\date{}"}
            <br />
            Después iniciamos el documento
            <code>
              {"\\begin{document}"}
              <br />
              {"Hola Mundo"}
              <br />
              {"\\end{document}"}
            </code>
            Ahí va el contenido, se le llama cuerpo
          </p>
          <h3>Secciones del documento</h3>
          <p>
            <code>
              {"\\chapter{Capítulo numerado}"}
              <br />
              {"\\section{Primera sección}"}
              <br />
              {"\\subsection{Primera subsección}"}
              <br />
              {"\\subsubsection{Primera subsubsección}"}
              <br />
              {"\\paragraph{}"}
              <br />
              {"\\subparagraph{}"}
              <br />
              {"\\chapter*{Capítulo sin numerar}"}
              <br />
              {"\\section*{Sección sin numerar}"}
            </code>
          </p>
          <h3>Listas</h3>
          <p>
            Desordenada
            <code>
              {"\\begin{itemize}"}
              <br />
              {"\\item Primer item"}
              <br />
              {"\\item Segundo item"}
              <br />
              {"\\end{itemize}"}
            </code>
            <br />
            Ordenada
            <code>
              {"\\begin{enumerate}"}
              <br />
              {"\\item Primer item"}
              <br />
              {"\\item Segundo item"}
              <br />
              {"\\end{enumerate}"}
            </code>
          </p>
          <h3>Formatos de texto</h3>
          <p>
            <code>
              {"\\textit{cursiva}"}
              <br />
              {"\\textbf{negrita}"}
              <br />
              {"\\texttt{monosespaciado}"}
              <br />
              {"\\textsc{versalitas}"}
              <br />
              {"\\textnormal{TextoNormal}"}
              <br />
              {"\\emph{Texto en cursiva}"}
            </code>
          </p>
          <h3>Imágenes</h3>
          <p>
            Para las imágenes necesitaremos el paquete graphicx.Se escribe en el
            preámbulo,antes de begin
            <code>{"\\usepackage{graphicx}"}</code>
            Entonces añadimos la imagen
            <code>
              {"\\begin{figure}[h]"}
              <br />
              {"\\includegraphics[width=\\linewidth]{filename.jpg}"}
              <br />
              {"\\centering"}
              <br />
              {"\\caption{What is it about?}"}
              <br />
              {"\\label{fig:whateverlabel}"}
              <br />
              {"\\end{figure}"}
            </code>
            Para referenciar luego la figura, usamos esto dentro de cualquier
            texto:
            <code>{"\\ref{fig:whateverlabel}"}</code>
          </p>
          <h3>Código</h3>
          <p>
            Para añadir código usamos:
            <code>
              {"\\begin{verbatim}"}
              <br />
              Código
              <br />
              {"\\end{verbatim}"}
            </code>
          </p>
        </article>
      </section>
      <footer>
        <h2>Referencias</h2>
        <ul>
          <li>
            <a
              href="https://es.wikipedia.org/wiki/LaTeX"
              target="_BLANK"
              rel="noopener nofollow noreferrer"
            >
              Wikipedia(es) LaTeX
            </a>
          </li>
          <li>
            <a
              href="https://www.ecured.cu/LaTeX"
              target="_BLANK"
              rel="noopener nofollow noreferrer"
            >
              EcuRed LaTeX
            </a>
          </li>
          <li>
            <a
              href="https://github.com/luong-komorebi/Begin-Latex-in-minutes/blob/master/Translation-Spanish.md"
              target="_BLANK"
              rel="noopener nofollow noreferrer"
            >
              LaTex In Minutes (GitHub)
            </a>
          </li>
          <li>
            <a
              href="https://www.latex-project.org/"
              target="_BLANK"
              rel="noopener nofollow noreferrer"
            >
              LaTeX Official
            </a>
          </li>
          <li>
            <a
              href="https://ondiz.github.io/cursoLatex/Contenido/03.DocumentoBasico.html"
              target="_BLANK"
              rel="noopener nofollow noreferrer"
            >
              CursoLaTeX Doc básico
            </a>
          </li>
          <li>
            <a
              href="https://es.wikibooks.org/wiki/Manual_de_LaTeX/Texto_completo#Pre%C3%A1mbulo"
              target="_BLANK"
              rel="noopener nofollow noreferrer"
            >
              WikiBooks Manual LaTeX
            </a>
          </li>
          <li>
            <a
              href="https://nokyotsu.com/latex/curso.html"
              target="_BLANK"
              rel="noopener nofollow noreferrer"
            >
              Nokyotsu LaTeX
            </a>
          </li>
          <li>
            <a
              href="https://ondiz.github.io/cursoLatex/Contenido/07.Formato.html"
              target="_BLANK"
              rel="noopener nofollow noreferrer"
            >
              CursoLaTeX Formato
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
