<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Titulo de primer nivel

    .titulo-segundo.color-acento-contenido.pb-2
      h2 3. Geometría básica e introducción al sketch

    p La geometría es una rama de las matemáticas que se encarga de estudiar la relación y propiedades entre las medidas y formas de las figuras representadas en el plano (dos dimensiones) y el espacio (tres dimensiones). 

    p La geometría plana, consiste en el estudio de las figuras y composiciones que pueden generarse a partir de la unión de líneas, resultante en elementos denominados <b>polígonos.</b>

    p Observe la derivación de su composición.

    a.boton.color-acento-botones.indicador__container(@click="modal1 = true")
      span.me-1 <b>Nota</b>
      <i class="fas fa-angle-right"></i>

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
          img(src='@/assets/curso/temas/tema3/poligonos.png', alt='Texto que describa la imagen')
   
    .col-lg-8.my-5
        .cajon.color-primario.p-4.mb-4
          p Las anteriores figuras geométricas son las más utilizadas en la composición de diseños de mobiliarios, además del círculo o circunferencia. Una vez identificadas las principales figuras geométricas planas y polígonos, es importante conocer los conceptos de perímetro y área:
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
