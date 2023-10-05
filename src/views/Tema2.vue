<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Dibujo técnico, elementos y herramientas

    .row.justify-content-center
      .col-lg-10.col-12
        figure
          img(src='@/assets/curso/temas/tema2/img1.svg')

    .row.justify-content-center.pt-4.mb-5
      .col-lg-8
        .cajon.color-acento-contenido.p-4.mb-4.color-gris
          p El objetivo del dibujo técnico consiste en representar los objetos de forma clara e inequívoca para su correcta lectura, análisis e interpretación.

    .row.justify-content-end.align-items-center
      .col-lg-6.mb-4.mb-lg-0(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/tema2/img-2.png")
      .col-md-6
        p El <b>plano</b>, es el recurso o herramienta sobre la cual se basa el dibujo técnico para plasmar o representar ideas y/o conceptos, en éste se emplean instrumentos de dibujo, ya sean tradicionales como la regla, escuadra, lápiz de carbón, etc., así mismo los encontramos en los modernos programas de <b>CAD</b> <em>(Computer Added Design)</em>.

        p En los planos se emplea la <b>escala</b>, el uso de esta herramienta debe ser entendido por cualquier persona con formación técnica básica.

        p Los <b>símbolos</b> también son empleados en los planos, estos nos facilitan la representación de los elementos.

        .cajon.color-acento-contenido.p-4.mb-4.color-gris
          .row.justify-content-center
            .col-2
              figure
                img(src="@/assets/curso/temas/tema2/icono.png")
            .col-10
              p Los símbolos, cuyo compendio se denomina simbología, están sujetos a aplicación de distintas normas estandarizadas a nivel internacional.

    p.mb-5 Los siguientes, son algunos de los principales elementos y herramientas utilizados normalmente en el dibujo técnico:

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/temas/tema2/img-4.png')
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/temas/tema2/img-5.png')

      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/temas/tema2/img-6.png')

      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/temas/tema2/img-7.png')

      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/temas/tema2/img-8.png')

    .tarjeta.color-acento-contenido.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema2/icono2.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1 Herramientas de dibujo técnico
              p.text-small Para conocer más sobre las herramientas usadas en dibujo técnico, lea el documento que se encuentra a continuación: Herramientas de dibujo técnico.

            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_01.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download

</template>

<script>
export default {
  name: 'Tema2',
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
