<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Dibujo técnico, elementos y herramientas

    .row
      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-4
        .bloque-texto-g__img.color-gris.img-cover(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img-1.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p <b>El dibujo técnico</b> es la manera en que se lleva a cabo la <b>representación gráfica,</b> plasmada generalmente en una hoja o papel, de objetos o cosas. A diferencia del dibujo libre o boceto, éste contiene la información necesaria para ser leído e interpretado por quien lo tiene en sus manos para llevar a cabo la <b>producción,</b> <b>elaboración</b> o<b> prototipado</b>. El dibujo técnico se ajusta a un conjunto de normativas y reglas bajo las cuales el proyectista o diseñador lleva a cabo la representación gráfica, la manera en la cual se escribe el texto, la acomodación de líneas, el tipo de unidades de medida, y el tipo de letra utilizada en el dibujo técnico, lo cual permite que este pueda ser interpretado universalmente.

      em.my-4.mx-4 El dibujo técnico y las normas que sobre este aplican, permiten que la información para la comprensión de un diseño pueda darse de manera universal.

    .row.justify-content-center.pt-4
      .col-lg-8
        .cajon.color-acento-contenido.p-4.mb-4.color-gris
          p El objetivo del dibujo técnico consiste en representar los objetos de forma clara e inequívoca para su correcta lectura, análisis e interpretación.

    .tarjeta.p-4.p-md-5.mb-5.color-gris
      .row.justify-content-end.align-items-center
        .col-lg-6.mb-4.mb-lg-0(data-aos="fade-left")
          figure
            img(src="@/assets/curso/temas/tema2/img-2.png")
        .col-md-6.order-md-first.order-sm-last
          p El <b>plano,</b> es el recurso o herramienta sobre la cual se basa el dibujo técnico para plasmar o representar ideas y/o conceptos, en éste se emplean instrumentos de dibujo, ya sean tradicionales como la regla, escuadra, lápiz de carbón, etc., así mismo los encontramos en los modernos programas de <b>CAD</b> <em>(Computer Added Design).</em>
          br
          br
          p En los planos se emplea la <b>escala,</b> el uso de esta herramienta debe ser entendido por cualquier persona con formación técnica básica. 
          .col-auto.px-3
          a.boton.color-acento-botones.indicador__container(@click="modal1 = true")
            span.me-1 Nota
            <i class="fas fa-bookmark"></i>
    .row.justify-content-center
      .bloque-texto-a.color-primario.p-4.p-md-5.mb-5 
        .row.align-items-center.justify-content-between
          .col-lg-8
            .bloque-texto-a__texto.p-4
              p.mb-0 Los siguientes, son algunos de los principales elementos y herramientas utilizados normalmente en el dibujo técnico:
          .col-lg-4.mb-4.mb-lg-0(data-aos="fade-up")
            figure
              img(src="@/assets/curso/temas/tema2/img-3.png")
        
    p.mb-3 Para conocer más sobre las herramientas usadas en dibujo técnico, lea el documento que se encuentra a continuación.

    a.boton.color-acento-botones.me-3(:href="obtenerLink('downloads/prueba.pdf')" target="_blank" type="application/pdf")
      span Descargar
      i.fas.fa-file-download
</template>

<script>
export default {
  name: 'Tema2',
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
