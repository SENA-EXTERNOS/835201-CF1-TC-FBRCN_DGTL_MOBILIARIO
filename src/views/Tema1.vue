<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Introducción al diseño

    .row
      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-4
        .bloque-texto-g__img.color-gris.img-cover(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-introduccion.svg')})`}"
        )
        .bloque-texto-g__texto.p-4
          p <b>Diseño:</b> es un proceso que inicia a partir de la generación de ideas entre una o varias personas, para lograr algo en común; es, además, la solución a situaciones problemáticas con la creación de productos, vestimentas, juguetes, entre otros. Dentro del proceso de diseño, existen aspectos que deben ser tenidos en cuenta por la persona o diseñador      como: la forma, la función a desempeñar, el tamaño, algunas veces el olor, la sensación que produce al tacto, la facilidad o grado de dificultad para fabricarlo, el costo, etc.
            br
            br
          p En el caso del <b>diseño mobiliario</b>, el uso y la función del mueble juegan un papel muy importante, pues esto determina el tipo de espacio y público al cual va a ser dirigido.
            br
            br
          p Todo producto que puede ser adquirido por un cliente, ha sido creado a partir de ideas que se plasmaron en un papel.  
    .row.justify-content-center.pt-4
      .col-lg-8
        .cajon.color-acento-contenido.p-4.mb-4.color-gris
            p Los <b>mobiliarios</b> no solo cumplen la función de proveer solución a necesidades <b>laborales, industriales o ejecutivas</b>, también son muy importantes para el disfrute de momentos de <b>ocio y descanso</b> de las personas y, recientemente, muy posicionado, para el disfrute de mascotas y animales de compañía. Así mismo, el aspecto <b>decorativo </b>juega un papel preponderante al momento de llevar a cabo proyectos habitacionales y comerciales, siendo un factor determinante la escogencia de materiales, texturas, formas y colores que combinen con las propuestas o diseños arquitectónicos y de espacios. 
    .separador.p-3
    .titulo-segundo.color-acento-contenido.pb-2
      h2#t_1_1 1.1. Teoría del color

    p El diseño de mobiliario, al igual que el diseño en otras categorías, depende en gran medida de la comprensión que existe entre los colores de los productos que se quieren producir o fabricar y su relación con el <b>entorno</b>. Visualmente, el cerebro humano establece relaciones entre tonalidades que producen distintas sensaciones como: complacencia, frescura, calor, alegría, tristeza, calidez, etc. Este tipo de asociaciones están dadas a partir de la denominada <b>gama de colores</b> o <b>escala cromática</b> que el ojo humano es capaz de percibir.
    br
    p Para comprender el concepto de gama de colores o escala cromática, es indispensable conocer algunas definiciones:

    AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="Colores primarios")
        .col-md-6.mb-4.mb-md-0
          p.mt-5 Son los colores que no se pueden generar combinando dos o más colores.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/img-color-primarios.png')
      .row(titulo="Colores secundarios")
        .col-md-6.mb-4.mb-md-0
          p.mt-5 Son los colores generados a partir de la combinación de los colores primarios.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/img-color-secundario.png')
      .row(titulo="Colores terciarios")
        .col-md-6.mb-4.mb-md-0
          p.mt-5 Son los generados a partir de los primarios y secundarios.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/img-color-terciario.png')


    .row.mb-5
      .col-lg-6
        .cajon-b.color-acento-contenido.p-3.mb-5
          p.mb-0 <b>Los colores primarios tradicionales</b> corresponden al amarillo, azul y rojo, en inglés: red, yellow, blue. Es común encontrar el acrónimo de estos como (RYB). Estos colores, son apreciables en elementos propios de la naturaleza como las flores. 
            br
            br
            | Si bien son ampliamente usados en las artes plásticas, en el diseño digital de mobiliario que se estudiará a lo largo de estas unidades, los colores <b>rojo, verde</b> y <b>azul</b>, hacen referencia a los <b>primarios de la luz</b>, pues son los <b></b>tonos percibidos por el ojo humano en los dispositivos que funcionan con emisiones luminosas (pantallas). Estos, en función de su saturación (cantidad), generan los colores apreciables en este tipo de dispositivos. La combinación de los mismos, genera el color blanco, pero ante la ausencia de estos, el ojo humano percibe el color negro, pues no hay emisión de luz.
      .col-lg-6
        .bloque-texto-d.color-acento-contenido.p-4
          .bloque-texto-d__texto.mb-2
            h3.text-regular.mb-0 Los <b>colores primarios CMYK</b>, denominados así por sus siglas en inglés cian, magenta, yellow, key (cian, magenta, amarillo, negro), son los colores primarios que normalmente se utilizan en los procesos de <b>impresión</b> en formatos planos, es decir, son los que se utilizan en imprentas, impresoras y demás procesos de impresión convencionales; la combinación entre ellos, es lo que genera la gama de colores que podemos apreciar en impresiones de pequeño, mediano y gran formato.


      
      br
      p.pb-2 Uso de los colores en diferentes entornos
    SlyderA.color-gris(tipo="b")
      .row.justify-content-center.align-items-center
        p.col-lg-10.col-md-10.mt-5 Colores primarios empleados en las artes plásticas y apreciables en la naturaleza.
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema1/bandera.png')
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema1/carrusel-1.png')
      .row.color-gris.justify-content-center.align-items-center
        p.col-lg-10.col-md-10 Colores primarios utilizados en los dispositivos de visualización como pantallas.
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema1/bandera.png')
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema1/carrusel-2.png')
      .row.color-gris.justify-content-center.align-items-center
        p.col-lg-10.col-md-10 Colores primarios utilizados en procesos litográficos e impresiones de pequeño, mediano y gran formato.
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema1/bandera.png')
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema1/carrusel-3.png')
    .row.justify-content-evenly.align-items-center.mt-5
      .col-lg-3
        p Círculo cromático escalonado de 12 colores.
        figure
          img(src='@/assets/curso/temas/tema1/circulo-escalonado.png')
      .col-lg-3
        p Círculo cromático degradado.
        figure
          img(src='@/assets/curso/temas/tema1/circulo-degradado.png')
    .row.justify-content-evenly.align-items-center.mt-5
      p.p-3 Si desea ampliar su conocimiento sobre la teoría del color, explore estos videos recomendados del material complementario: 
      .col-lg-6 
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/c26mGXek6Fc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      .col-lg-6 
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/5Q3x-PxmSVU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.mt-5
      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-4
        .bloque-texto-g__img.color-gris.img-cover(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tarjeta-f2.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p El hombre desde sus inicios ha tenido dentro de sus necesidades primarias la construcción de refugios y espacios seguros para habitar, la <b>construcción</b> y <b>habitabilidad</b> de estos  ha estado en función de la disponibilidad, accesibilidad de recursos y herramientas tecnológicas.
          br
          br
          p Como es de entenderse, al igual que el hombre, el diseño y la arquitectura han evolucionado en función de las necesidades a cubrir en las distintas épocas o etapas de desarrollo de la humanidad. En la actualidad, a diferencia de varios siglos atrás, el diseño no solo se limita al hecho práctico y funcional, sino a la <b>armonía</b> y al <b>sentido artístico</b>; esto, sin embargo, no deja de lado las consideraciones <b>funcionales</b> sobre las cuales se fundamenta una idea inicial.

      em.mx-5.pt-4.pb-3 La arquitectura y el diseño de mobiliario van de la mano, el diseño de mobiliario complementa, transforma y en muchas ocasiones condiciona la arquitectura de proyectos de construcción.

      <!--Para revisar ya que no me cuadran los colores-->    
    br
    br
    .row.justify-content-center
      .bloque-texto-a.color-gris.p-4.p-md-5.mb-5
        .row.align-items-center.justify-content-between
          .col-lg-8
            .bloque-texto-a__texto.p-4
              p.mb-0 Para la armonía, estética y disfrute de los espacios que las personas habitan, el mobiliario juega un papel preponderante, pues sobre elementos como estos es en donde se llevan a cabo actividades fundamentales como el trabajo, el descanso, el ocio, la <b>socialización</b> y muchas otras que involucran mucho del tiempo de la vida del hombre.  
          .col-lg-4.mb-4.mb-lg-0(data-aos="fade-left")
            figure
              img(src="@/assets/curso/temas/tema1/tarjeta-f3.png")

    .row
      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-4
        .bloque-texto-g__img.color-gris.img-cover(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tarjeta-f3.png')})`}"
        )
        .bloque-texto-g__texto.p-5
          p Para la armonía, estética y disfrute de los espacios que las personas habitan, el mobiliario juega un papel preponderante, pues sobre elementos como estos es en donde se llevan a cabo actividades fundamentales como el trabajo, el descanso, el ocio, la <b>socialización</b> y muchas otras que involucran mucho del tiempo de la vida del hombre.

      em.mx-5.pt-4.pb-3 Muchas de las actividades y momentos más importantes de las personas tienen como elementos importantes el mobiliario dispuesto en los espacios de ocio, familia y disfrute de las personas.

    .row
      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-4
        .bloque-texto-g__img.color-gris.img-cover(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tarjeta-f4.png')})`}"
        )
        .bloque-texto-g__texto.p-5
          p Dentro de las consideraciones y características del diseño de mobiliario, la <b>geometría</b>, el <b>espacio</b>, los <b>elementos constructivos, estética, ergonomía, higiene, normativa</b> y <b>reglamentación</b>, juegan un papel importante que determina el éxito de un producto. Así mismo, existen elementos intangibles, netamente subjetivos, que desde la<b>psicología</b> juegan un papel importante en el impacto sobre los clientes, y determinan en gran medida el éxito de un producto.

      em.mx-5.pt-4.pb-3 El mobiliario cumple un papel importante en el relacionamiento social de las personas, en especial en espacios abiertos.

    AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="La seguridad")
          p Entra en juego a la hora de garantizar, en la medida de lo posible, un producto seguro. Esto significa pensar en los riesgos de quién lo va a usar. Evitar errores como filos y malos acabados, son tareas donde interviene el diseño de mobiliario.
      div(titulo="Conexión social")
          p Todo mobiliario está dirigido a un público en particular, comunidades o personas de un grupo, es de esta manera como a través del mobiliario se crean y establecen relaciones con el espacio, que de una u otra forma facilitan la interacción entre las personas.
      div(titulo="Estimulación sensorial")
          p Hace referencia a las sensaciones experimentadas por el usuario o cliente; en este caso, la simetría, las proporciones, la luz y uso de texturas, son capaces de trasmitir bienestar y satisfacción en los espacios.
      div(titulo="Color")
          p Los colores son capaces de estimular y persuadir a experimentar sensaciones cálidas o frías, alegres, melancólicas o incluso terapéuticas.

    p.pb-2 Continúe su aprendizaje sobre <b>Diseño y arquitectura</b> viendo el siguiente video, disponible en el material complementario.

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
