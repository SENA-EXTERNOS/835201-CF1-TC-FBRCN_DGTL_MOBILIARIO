<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Dibujo técnico, elementos y herramientas

    .bloque-texto-a.color-primario.p-4.p-md-5.mb-5.fnd-der
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0.mt-5
          figure(data-aos="fade-right")
            img.img-250.img-cen(src='@/assets/curso/temas/tema2/img-1.png')
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p <b>El dibujo técnico</b> es la manera en que se lleva a cabo la <b>representación gráfica,</b> plasmada generalmente en una hoja o papel, de objetos o cosas. A diferencia del dibujo libre o boceto, éste contiene la información necesaria para ser leído e interpretado por quien lo tiene en sus manos para llevar a cabo la <b>producción,</b> <b>elaboración</b> o<b> prototipado</b>. El dibujo técnico se ajusta a un conjunto de normativas y reglas bajo las cuales el proyectista o diseñador lleva a cabo la representación gráfica, la manera en la cual se escribe el texto, la acomodación de líneas, el tipo de unidades de medida, y el tipo de letra utilizada en el dibujo técnico, lo cual permite que este pueda ser interpretado universalmente.

    em.my-4.mx-4 El dibujo técnico y las normas que sobre este aplican, permiten que la información para la comprensión de un diseño pueda darse de manera universal.

    .row.justify-content-center.pt-4
      .col-lg-8
        .cajon.color-acento-contenido.p-4.mb-4.color-gris
          p El objetivo del dibujo técnico consiste en representar los objetos de forma clara e inequívoca para su correcta lectura, análisis e interpretación.

    .tarjeta.p-4.mb-5.color-gris
      .row.justify-content-end.align-items-center
        .col-lg-6.mb-4.mb-lg-0(data-aos="fade-left")
          figure
            img(src="@/assets/curso/temas/tema2/img-2.png")
        .col-md-6.order-md-first.order-sm-last
          p El <b>plano,</b> es el recurso o herramienta sobre la cual se basa el dibujo técnico para plasmar o representar ideas y/o conceptos, en éste se emplean instrumentos de dibujo, ya sean tradicionales como la regla, escuadra, lápiz de carbón, etc., así mismo los encontramos en los modernos programas de <b>CAD</b> <em>(Computer Added Design).</em>
          br
          br
          p En los planos se emplea la <b>escala,</b> el uso de esta herramienta debe ser entendido por cualquier persona con formación técnica básica. 

          .rowd-flex.justify-content-start
            .col-12
              a.boton.color-acento-botones.indicador__container(@click="modal1 = true")
                .row 
                  .col-12
                    figure
                      img.taman-img(src='@/assets/curso/temas/tema2/icono.png')
                .indicador--click(v-if="mostrarIndicador")
                .row
                  h4.ms-3 Nota
                  p.ms-3 Los <b>símbolos</b> también son empleados en los planos, estos nos facilitan la representación de los elementos. 

          ModalA(:abrir-modal.sync="modal1")
            .row.align-items-center
              .col-md-12.mb-4.mb-md-0 
                p.text-center <em>Los símbolos, cuyo compendio se denomina simbología, están sujetos a aplicación de distintas normas estandarizadas a nivel internacional.</em>

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
    
    .row
      .col-lg-6
        a.anexo.mb-4(:href="obtenerLink('/downloads/Anexo_01.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Para conocer más sobre las herramientas usadas en dibujo técnico, lea el documento que se encuentra a continuación.  
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
