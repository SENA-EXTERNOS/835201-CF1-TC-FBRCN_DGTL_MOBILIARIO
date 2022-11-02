<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Dibujo de cuerpos con volumen, vistas e isométricos

    .tarjeta.p-4.p-md-5.mb-5.fondo2   .mb-5
      .row.justify-content-end.align-items-center
        .col-md-5.order-md-first.order-sm-last.py-4
          
          p El volumen es la propiedad o medida que tienen los cuerpos en el espacio. En el diseño de mobiliario es muy importante tener en cuenta esta propiedad, pues limita y condiciona la utilización de los mismos en espacios o ambientes del cliente.

        .col-md-6.mb-4.mb-md-0.order-md-last.order-sm-first
          figure(data-aos="fade-right")
            img(src="@/assets/curso/temas/tema5/img-1.png")
              
    .row.justify-content-center.mb-5
      .col-lg-8.my-5
        .cajon.color-primario.p-4.mb-4.mb-5.color-cajon5(data-aos="fade-right")
          p El volumen se expresa en unidades cúbicas, a diferencia del área que se expresa en unidades cuadradas, pues además del largo y el ancho de una figura (que configuran su área), en el volumen interviene la altura. En este caso, <b>la altura</b> es un factor preponderante porque establece o delimita el uso del diseño de un producto a cierto tipo de público, permitiendo que pueda interactuar y acceder fácilmente al mismo en función de su altura y ubicación.
          
    .row.mb-5
      .col-lg-6
        figure(data-aos="fade-left")
          img(src="@/assets/curso/temas/tema5/img-4.png") 
      .col-lg-6
          p.ms-4 Al hablar de cuerpos con volumen encontramos intrínsecamente el término <b>capacidad</b>, que hace referencia a lo que cabe dentro de un espacio. En el mobiliario se vuelve un factor importante, pues hay productos o construcciones diseñados y construidos con este propósito exclusivamente, por ejemplo, los armarios, archivadores, cómodas, mesas de noche, entre otros.

          p.ms-4 La capacidad o medida de volumen de un cuerpo está dada en función de la altura de la figura plana, proyectada en el espacio, por ejemplo, una gaveta de un mueble de cocina es una proyección de un rectángulo en el espacio, así mismo, un armario, el cual se puede referenciar como un rectángulo en el piso proyectado o extendido en el espacio (hacia arriba).

    .row.mb-5
      .col-lg-6
        p Un cuerpo geométrico (con volumen) representado en el plano, recibe el nombre de <b>isométrico</b>, la representación de éste, conlleva el uso y aplicación de técnicas de perspectiva, basada en tres ejes, en donde es posible apreciar las proporciones en cada eje como la altura, el ancho (anchura) y el largo (longitud). La descomposición, o representación en dos dimensiones de cada una de las caras del isométrico, se denominan vistas, en éstas solo se aprecian dos características como largo y ancho, altura y ancho, altura y largo, siendo estas:
      .col-lg-6
        figure(data-aos="fade-right")
          img(src="@/assets/curso/temas/tema5/img-5.png")


    AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="Vista superior o de planta ")
        p Es la vista que un observador tendría desde arriba y perpendicular a la cara superior del isométrico.
      div(titulo="Vista inferior ")
        p Es la vista de la cara de la parte de abajo del sólido o isométrico, al igual que la superior es perpendicular, pero esta vez a la cara inferior.
      div(titulo="Vista lateral derecha")
        p Indica la vista de la cara lateral derecha del isométrico.
      div(titulo="Vista lateral izquierda")
        p Indica la vista de cara lateral izquierda del isométrico.
      div(titulo="Vista posterior")
        p Si se requiere o necesita la proyección de esta vista, corresponde a la cara posterior del isométrico; al igual que las vistas laterales izquierda y derecha, es perpendicular a la cara del isométrico.

    SlyderA.tarjeta.color-gris.my-4.p-5.mb-5(tipo="b")
      .row.color-gris.justify-content-center.align-items-center
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema5/img-2.png')
        .col-md-5.my-5
          p.col-lg-11.col-md-10 Ejemplo de representación de un dibujo isométrico en un plano.
      .row.color-gris.justify-content-center.align-items-center
        .col-md-5.mb-4
          p.col-lg-11.col-md11 Ejemplo de representación vista frontal y lateral izquierda de silla gris (arriba), vista frontal y posterior o trasera de sillón gris (abajo).
        .col-md-5
          figure
            img.img-250.img-cen(src='@/assets/curso/temas/tema5/img-3.png')

    p.mb-5 En el video relacionado a continuación, y mediante el uso de un programa tipo CAD, se profundizan y ejemplifican más detalladamente, los conceptos de perspectiva, isométrico y vistas. 

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2HNNtWVQNOs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>
<script>
export default {
  name: 'Tema5',
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
