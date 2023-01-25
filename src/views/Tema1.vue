<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Introducción al diseño

    p Para dar inicio a esta temática, debemos conocer algunos términos, con la finalidad de entrar en contexto:

    .row.justify-content-center
      .col-lg-9
        figure
          img(src='@/assets/curso/temas/tema1/img1.svg')

      p.mt-5 En el caso del diseño mobiliario, el uso y la función del mueble, juegan un papel muy importante, porque esto determina el tipo de espacio y público al cual va a ser dirigido. 
          
    .row.justify-content-center.pt-4
      .col-lg-8
        .cajon.color-acento-contenido.p-4.mb-4.color-bloque1.mb-5(data-aos="fade-right")
            p Los <b>mobiliarios</b> no solo cumplen la función de proveer solución a necesidades <b>laborales, industriales</b> o <b>ejecutivas</b>, también son muy importantes para el disfrute de momentos de <b>ocio</b> y <b>descanso</b> de las personas y, recientemente, muy posicionado, para el disfrute de mascotas y animales de compañía. Así mismo, el aspecto <b>decorativo</b> juega un papel preponderante al momento de llevar a cabo proyectos habitacionales y comerciales, siendo un factor determinante la escogencia de materiales, texturas, formas y colores que combinen con las propuestas o diseños arquitectónicos y de espacios. 

    p.mb-5 Es importante tener en cuenta que, al referirse a mobiliario o “mueble”, no solo se hace referencia al objeto en el cual se puede reposar, sentarse o acostarse una persona; el término, también habla del conjunto de elementos o productos que permiten, además, la <b>distribución de artículos en espacios abiertos y cerrados en coordinación y armonía con las personas que realizan una actividad o habitan un espacio</b>. Es por esta razón que, en el caso del comercio, el diseño de stands garantiza, en gran medida, el impacto visual de un elemento que quiera ser exhibido al público para su venta, tomando gran relevancia el color y la forma.

    .separador.p-3.mb-5
    #t_1_1.titulo-segundo.color-acento-contenido.pb-2
      h2 1.1. Teoría del color

    p El diseño de mobiliario, al igual que el diseño en otras categorías, depende en gran medida de la comprensión que existe entre los colores de los productos que se quieren producir o fabricar y su relación con el <b>entorno</b>. Visualmente, el cerebro humano establece relaciones entre tonalidades que producen distintas sensaciones como: complacencia, frescura, calor, alegría, tristeza, calidez, etc. Este tipo de asociaciones están dadas a partir de la denominada <b>gama de colores</b> o <b>escala cromática</b> que el ojo humano es capaz de percibir.
    br
    p.mb-5 Para comprender el concepto de gama de colores o escala cromática, es indispensable conocer algunas definiciones:

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-avatar1.p-5
        .row.justify-content-center.mb-4
          .col-6.img-tarcon
            figure.mb-4
              img(src='@/assets/curso/temas/tema1/img-color-primarios.png')
        h2.text-center Colores primarios
        p Son los colores que no se pueden generar combinando dos o más colores.
      .col-md.tarjeta.color-avatar2.p-5
        .row.justify-content-center.mb-4
          .col-6.img-tarcon
            figure.mb-4
              img(src='@/assets/curso/temas/tema1/img-color-secundario.png')
        h2.text-center Colores secundarios
        p Son los colores generados a partir de la combinación de los colores primarios.
      .col-md.tarjeta.color-avatar1.p-5
        .row.justify-content-center.mb-4
          .col-6.img-tarcon
            figure
              img(src='@/assets/curso/temas/tema1/img-color-terciario.png')
        h2.text-center Colores terciarios
        p Son los generados a partir de los primarios y secundarios.

    .row.mb-5
      .col-lg-7
          p.mb-0 <b>Los colores primarios tradicionales</b> corresponden al amarillo, azul y rojo, en inglés: <em>red, yellow, blue</em>. Es común encontrar el acrónimo de estos como (RYB). Estos colores, son apreciables en elementos propios de la naturaleza como las flores. 
            br
            br
          p Si bien son ampliamente usados en las artes plásticas, en el diseño digital de mobiliario que se estudiará a lo largo de estas unidades, los colores <b>rojo, verde</b> y <b>azul</b>, hacen referencia a los <b>primarios de la luz</b>, pues son los <b></b>tonos percibidos por el ojo humano en los dispositivos que funcionan con emisiones luminosas (pantallas). Estos, en función de su saturación (cantidad), generan los colores apreciables en este tipo de dispositivos. La combinación de los mismos, genera el color blanco, pero ante la ausencia de estos, el ojo humano percibe el color negro, pues no hay emisión de luz.
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema1/img-2.png')

    .row.mb-5
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema1/img-3.png')
      .col-lg-7
            h3.text-regular.mb-0 Los <b>colores primarios CMYK</b>, denominados así por sus siglas en inglés cian, magenta, <em>yellow, key</em> (cian, magenta, amarillo, negro), son los colores primarios que normalmente se utilizan en los procesos de <b>impresión</b> en formatos planos, es decir, son los que se utilizan en imprentas, impresoras y demás procesos de impresión convencionales; la combinación entre ellos, es lo que genera la gama de colores que podemos apreciar en impresiones de pequeño, mediano y gran formato.

    p.mb-5 A continuación, observemos cómo se utilizan los colores, en diferentes entornos:

    ImagenInfografica.color-secundario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema1/img-4.png')
      .tarjeta.color-ver.p-3(x="11.5%" y="11%" numero="1")
        p Colores primarios empleados en las artes plásticas y apreciables en la naturaleza.
      .tarjeta.color-ver.p-3(x="50%" y="11%" numero="2")
        p Colores primarios utilizados en los dispositivos de visualización como pantallas.
      .tarjeta.color-ver.p-3(x="88.5%" y="11%" numero="3")
        p Colores primarios utilizados en procesos litográficos e impresiones de pequeño, mediano y gran formato.

    p.mb-5 La herramienta más utilizada a nivel general para la comprensión y mezcla de colores primarios y secundarios, es el círculo cromático; este consiste en la representación gráfica dentro de una circunferencia de los colores primarios y sus derivaciones (secundarios) en función del tono.

    .row.justify-content-evenly.align-items-center.mt-5
      .col-lg-3
        p Círculo cromático escalonado de 12 colores.
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema1/circulo-escalonado.png')
          figcaption.text-center.mt-3 <em>Círculo cromático escalonado de 12 colores</em>.
      .col-lg-3
        p Círculo cromático degradado.
        figure(data-aos="fade-left")
          img(src='@/assets/curso/temas/tema1/circulo-degradado.png')
          figcaption.text-center.mt-3  <em> Círculo cromático degradado</em>.

    .row.justify-content-evenly.align-items-center.mt-5.pb-5
      
      .col-lg-6.mb-4 
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/c26mGXek6Fc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      .col-lg-6 
        figure.mb-4
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/5Q3x-PxmSVU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .separador.p-3.mb-5
    #t_1_2.titulo-segundo.color-acento-contenido.pb-2
      h2 1.2 Diseño y arquitectura

    .tarjeta.tarjeta--azul.p-4.bgr1-tema1
      SlyderA(tipo="b")
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            p El hombre desde sus inicios ha tenido dentro de sus necesidades primarias la construcción de refugios y espacios seguros para habitar, la <b>construcción y habitabilidad</b> de estos  ha estado en función de la disponibilidad, accesibilidad de recursos y herramientas tecnológicas.

            P Como es de entenderse, al igual que el hombre, el diseño y la arquitectura han evolucionado en función de las necesidades a cubrir en las distintas épocas o etapas de desarrollo de la humanidad. En la actualidad, a diferencia de varios siglos atrás, el diseño no solo se limita al hecho práctico y funcional, sino a la <b>armonía</b> y al <b>sentido artístico</b>; esto, sin embargo, no deja de lado las consideraciones <b>funcionales</b> sobre las cuales se fundamenta una idea inicial.

          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema1/img2.svg', alt='Texto que describa la imagen')

        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            p Dentro de las consideraciones y características del diseño de mobiliario, la <b>geometría</b>, el <b>espacio</b>, los <b>elementos constructivos, estética, ergonomía, higiene, normativa</b> y <b>reglamentación</b>, juegan un papel muy importante para determinar el éxito de un producto. 
          
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema1/img3.svg', alt='Texto que describa la imagen')

        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            p Para la armonía, estética y disfrute de los espacios que las personas habitan, el mobiliario juega un papel preponderante, pues sobre elementos como estos es en donde se llevan a cabo actividades fundamentales como el trabajo, el descanso, el ocio, la socialización y muchas otras que involucran mucho del tiempo de la vida del hombre.

          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema1/img4.svg', alt='Texto que describa la imagen')

    .row.mt-5
      p Así mismo, existen elementos intangibles, netamente subjetivos que, desde la psicología, juegan un rol sustancial en el impacto sobre los clientes y determinan, en gran medida, el éxito de un producto. Conozcamos estos elementos:   

    
    AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul").mt-5
      .row(titulo="La seguridad")
          p Entra en juego a la hora de garantizar, en la medida de lo posible, un producto seguro. Esto significa pensar en los riesgos de quién lo va a usar. Evitar errores como filos y malos acabados, son tareas donde interviene el diseño de mobiliario.
      div(titulo="Conexión social")
          p Todo mobiliario está dirigido a un público en particular, comunidades o personas de un grupo, es de esta manera como a través del mobiliario se crean y establecen relaciones con el espacio, que de una u otra forma facilitan la interacción entre las personas.
      div(titulo="Estimulación sensorial")
          p Hace referencia a las sensaciones experimentadas por el usuario o cliente; en este caso, la simetría, las proporciones, la luz y uso de texturas, son capaces de trasmitir bienestar y satisfacción en los espacios.
      div(titulo="Color")
          p Los colores son capaces de estimular y persuadir a experimentar sensaciones cálidas o frías, alegres, melancólicas o incluso terapéuticas.

    p.pb-2.mb-5 Continuemos nuestro aprendizaje sobre <b>Diseño y arquitectura</b> viendo el siguiente video, que permitirá ahondar acerca de la historia del diseño:

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/MZaLzNdNcOk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
