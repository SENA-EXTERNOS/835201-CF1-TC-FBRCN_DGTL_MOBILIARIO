<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Geometría básica e introducción al sketch

    p La geometría es una rama de las matemáticas que se encarga de estudiar la relación y propiedades entre las medidas y formas de las figuras representadas en el plano (dos dimensiones) y el espacio (tres dimensiones). 

    p La geometría plana, consiste en el estudio de las figuras y composiciones que pueden generarse a partir de la unión de líneas, resultante en elementos denominados <b>polígonos.</b>

    p Observe la derivación de su composición.

    a.boton.color-acento-botones.indicador__container(@click="modal1 = true")
      span.me-1 <b>Nota</b>
      <i class="fas fa-bookmark"></i>

    .row.my-4
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema3/img-1.png', alt='Texto que describa la imagen')

          p.text-small Los polígonos corresponden a figuras planas cerradas limitadas por segmentos rectilíneos.

      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.color-secundario.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema3/img-2.png', alt='Texto que describa la imagen')

          p.text-small Los elementos que conforman un polígono son lados, vértices, ángulos y diagonales.

      .col-sm-6.col-lg-4.mb-4.mb-sm-0
        .tarjeta--boton.color-acento-contenido.text-white--hover.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema3/img-3.png', alt='Texto que describa la imagen')

          p.text-small Los lados son líneas o segmentos que delimitan o enmarcan un polígono.

      .col-sm-6.col-lg-4.my-4
        .tarjeta--boton.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema3/img-1.png', alt='Texto que describa la imagen')

          p.text-small.pb-3 Los vértices son los puntos donde se cortan los lados.

      .col-sm-6.col-lg-4.my-4
        .tarjeta--boton.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema3/img-2.png', alt='Texto que describa la imagen')

          p.text-small Los ángulos son espacios o regiones comprendidas entre un par de lados.
          
    p.my-4 Los polígonos se dividen en función del número de lados:
    
    .row.justify-content-center
      .titulo-sexto.color-secundario
        p Figura 1. Polígonos
      .col-8
        figure
          img(src='@/assets/curso/temas/tema3/poligonos.png')
   
    .col-lg-8.my-5
        .cajon.color-primario.p-4.mb-4
          p Las anteriores figuras geométricas son las más utilizadas en la composición de diseños de mobiliarios, además del círculo o circunferencia. Una vez identificadas las principales figuras geométricas planas y polígonos, es importante conocer los conceptos de <b>perímetro</b> y <b>área</b>:
    .row.justify-content-end    
      .col-lg-8
        .cajon.color-acento-contenido.p-4.mb-4.color-gris
          ul.lista-ul
            li 
              i.lista-ul__vineta
              | Perímetro: corresponde a la longitud del borde la figura.
            li
          ul.lista-ul
            li 
              i.lista-ul__vineta
              | Área: corresponde a la medida de la superficie que la figura ocupa. Con base en esto, cada polígono o figura geométrica plana, tiene una ecuación o procedimiento para establecer la magnitud de su área. Se recomienda leer el documento citado en las referencias y llevar a cabo los ejercicios referenciados para adquirir práctica y destreza en la determinación de áreas.   
            li
    .row

      <b><h4>Sketch</h4></b>

      p Una vez revisados los conceptos básicos de geometría y dibujo técnico, será más fácil y comprensible desarrollar el término <b>sketch,</b> o como se conoce en español <b>boceto.</b> Un sketch o boceto corresponde a una <b>composición gráfica libre, básica y preliminar de una idea</b> que una persona o diseñador tiene sobre algún producto o elemento que desea materializar, mediante algún método constructivo o de producción. 

    .bloque-texto-a.color-primario.p-4.p-md-5.mb-5
      .row.m-0.align-items-center.justify-content-between
        .col-lg-5.mb-4.mb-lg-0
          figure(data-aos="fade-left")
            img(src='@/assets/curso/temas/tema3/img-5.png')
        .col-lg-7
          .bloque-texto-a__texto.p-4
            p El boceto, a diferencia del dibujo técnico, no tiene reglas o técnicas que establezcan un método específico para su realización, depende en gran medida de las capacidades artísticas y destrezas del diseñador o dibujante, normalmente los bocetos se plasman en papel a través del uso de herramientas de escritura como el lápiz o lapiceros, y se armonizan y complementan con aplicación de color para indicar propiedades como texturas o materiales. las acuarelas, colores o marcadores son utilizados normalmente para lograr la mayor representatividad de estos conceptos.

    .bloque-texto-a.color-primario.p-4.p-md-5.mb-5
      .row.m-0.align-items-center.justify-content-between
        .col-lg-5.mb-4.mb-lg-0
          figure(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema3/img-6.png')
        .col-lg-7
          .bloque-texto-a__texto.p-4
            p En la actualidad y gracias a las tecnologías de la información y comunicación, así como algunas 4.0, es posible contar con dispositivos móviles tipo tabletas o celulares con aplicaciones especializadas para el sketch o desarrollo de bocetos digitales que agilizan y presentan una mayor gama de opciones al momento de representar o plasmar ideas de diseño. 


  
     
</template>

<script>
export default {
  name: 'Tema3',
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
