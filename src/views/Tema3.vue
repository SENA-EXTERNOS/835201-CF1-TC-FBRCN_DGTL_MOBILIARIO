<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Geometría básica e introducción al <em>sketch</em>

    p La geometría es una rama de las matemáticas que se encarga de estudiar la relación y propiedades entre las medidas y formas de las figuras representadas en el plano (dos dimensiones) y el espacio (tres dimensiones). 

    .row.justify-content-center
      .col-lg-10
        .cajon.color-acento-contenido.p-4.mb-4.color-gris
          .row.justify-content-center
            .col-1
              figure
                img(src="@/assets/curso/temas/tema2/icono.png")
            .col-10
              p La comprensión de la relación que existe entre propiedades como el área, el perímetro y el volumen, ayudan a entender y proyectar diseños constructivos de mobiliarios a partir de la construcción, permitiendo obtener medidas y relaciones en la determinación de cantidad de material a utilizar y la creación de presupuestos para establecer precios de venta o comercialización.

    p La geometría plana, consiste en el estudio de las figuras y composiciones que pueden generarse a partir de la unión de líneas, resultante en elementos denominados #[b polígonos].

    p Observemos la derivación de su composición:

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.color-secundario.p-4
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/temas/tema3/img-1.png')
      .tarjeta.color-secundario.p-4
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/temas/tema3/img-2.png')

      .tarjeta.color-secundario.p-4
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/temas/tema3/img-3.png')

      .tarjeta.color-secundario.p-4
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/temas/tema3/img-4.png')

      .tarjeta.color-secundario.p-4
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/temas/tema3/img-5.png')

      .tarjeta.color-secundario.p-4
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/temas/tema3/img-6.png')

          
    p.my-4.mb-5 Los polígonos se dividen en función del número de lados:

    .row.justify-content-center.mb-5
        figure.mb-5
          img(src='@/assets/curso/temas/tema3/img1.svg')

    .row.justify-content-center.mb-5
        figure.mb-5
          img(src='@/assets/curso/temas/tema3/img2.svg')

   
    p.mb-5 Las anteriores figuras geométricas son las más utilizadas en la composición de diseños de mobiliarios, además del círculo o circunferencia. Una vez identificadas las principales figuras geométricas planas y polígonos, es importante conocer los conceptos de <b>perímetro</b> y <b>área</b>:

    .row.justify-content-center.mb-5   
      .col-lg-8
        .cajon.color-acento-contenido.p-4.mb-4.color-gris(data-aos="fade-left")
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
    .row.mb-5

      h2 <em>Sketch</em>

      p Una vez revisados los conceptos básicos de geometría y dibujo técnico, será más fácil y comprensible desarrollar el término <b><em>Sketch</em>,</b> o como se conoce en español <b>boceto.</b> Un sketch o boceto corresponde a una <b>composición gráfica libre, básica y preliminar de una idea</b> que una persona o diseñador tiene sobre algún producto o elemento que desea materializar, mediante algún método constructivo o de producción. 

  
    .row.mb-5
      .col-6
        .col-sm.mb-5.mb-sm-0
          ol.lista-ol--cuadro.lista-ol--separador
            li 
              .lista-ol--cuadro__vineta
                span 1
              | El boceto, a diferencia del dibujo técnico, no tiene reglas o técnicas que establezcan un método específico para su realización, depende en gran medida de las capacidades artísticas y destrezas del diseñador o dibujante.
            li 
              .lista-ol--cuadro__vineta
                span 2
              | Normalmente los bocetos se plasman en papel a través del uso de herramientas de escritura como el lápiz o lapiceros.
            li 
              .lista-ol--cuadro__vineta
                span 3
              | Los bocetos se armonizan y complementan con aplicación de color para indicar propiedades como texturas o materiales. las acuarelas, colores o marcadores son utilizados normalmente para lograr la mayor representatividad de estos conceptos.
      .col-6
        figure 
          img.img-250.img-cen(src='@/assets/curso/temas/tema3/img-9.png')

    .row.mt-5.justify-content-center
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image':`url(${require('@/assets/curso/temas/tema3/img-10.png')})`}"
          )
          .bloque-texto-g__texto.p-5.m-5
            p En la actualidad y gracias a las tecnologías de la información y comunicación, así como algunas 4.0, es posible contar con dispositivos móviles tipo tabletas o celulares con aplicaciones especializadas para el <em>sketch</em> o desarrollo de bocetos digitales que agilizan y presentan una mayor gama de opciones al momento de representar o plasmar ideas de diseño. 
              

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    mostrarIndicador: true,
    modal1: false,
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
