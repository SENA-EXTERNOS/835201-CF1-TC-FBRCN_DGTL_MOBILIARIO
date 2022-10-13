<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Elementos y procesos del diseño

    .tarjeta.p-4.p-md-5.mb-5.fondo1.color-gris
      .row.justify-content-end.align-items-center
        .col-md-5.order-md-first.order-sm-last.py-4 
          p Es importante examinar en el diseño de producto mobiliario, cómo impacta de manera visual con el público, esto garantiza en gran medida su éxito y aceptación. En esta ocasión se revisarán los aspectos relacionados de la manera en la cual un producto puede ser mejor percibido por las personas en un ambiente en particular y los materiales y accesorios que facilitan esta mejor percepción de manera general.

        .col-md-6.mb-4.mb-md-0.order-md-last.order-sm-first
          figure
            img(src="@/assets/curso/temas/tema6/img-1.png")

    .separador.p-3

    .titulo-segundo.color-acento-contenido.pb-2
      h2#t_6_1 6.1 Dibujo y recreación de ambientes

    p Los ambientes a los cuales van dirigidos los productos mobiliarios son de muchos tipos, sin embargo, se resaltan según sean exteriores o interiores, en estos últimos, también destacan los espacios habitacionales como casas, dormitorios, y de trabajo como talleres u oficinas. En cada uno de estos hay aspectos importantes como los colores que componen el espacio, paredes, techo, tonalidad de la luz.

    SlyderA.color-gris.my-4.p-5(tipo="b")
      .row.justify-content-between
        .col-md-6.mt-4
          h2 Los colores cálidos 
          p.col-lg-12.col-md-7.mt-3 Son los colores que trasmiten o generan al espectador una sensación cálida. Se usa para un ambiente habitacional que pretenda trasmitir calidez y comodidad.
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema6/img-2.png')
      .row.justify-content-between
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema6/img-3.png')
        .col-md-5.mt-5
          h2 Los colores fríos  
          p.col-lg-12.col-md-7.mt-4 Son aquellos que le transmiten al espectador una sensación más fría o fresca.
      .row.justify-content-between
        .col-md-6.mt-4
          h2 Los colores pastel 
          p.col-lg-12.col-md-7.mt-5 Tienen una saturación muy baja, también se describen como ligeros, algunos de ellos son usados para generar sensaciones calmantes y tranquilizantes al espectador. 
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema6/img-4.png')
      .row.justify-content-between
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema6/img-5.png')
        .col-md-6.mt-5
          h2 Los colores neutros 
          p.col-lg-12.col-md-7.mt-3 Como gris, negro y blanco han sido los tradicionalmente utilizados en los diseños de los mobiliarios de oficina.
      .row.justify-content-between
        .col-md-5.mt-4
          h2 Los tonos “vivos”, primarios 
          p.col-lg-12.col-md-7.mt-5 E incluso “ácidos”, han tomado relevancia recientemente en espacios modernos y vanguardistas.
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema6/img-6.png')

    a.mx-4.boton.color-acento-botones.indicador__container(:href="obtenerLink('downloads/prueba.pdf')" target="_blank" type="application/pdf")
      span.me-1 Enlace
      i.fas.fa-link

    .separador.my-5

    .titulo-segundo.color-acento-contenido.pb-3
      h2#t_6_2 6.2 Materiales metálicos y accesorios.

    p Los ambientes a los cuales van dirigidos los productos mobiliarios son de muchos tipos, sin embargo, se resaltan según sean exteriores o interiores, en estos últimos, también destacan los espacios habitacionales como casas, dormitorios, y de trabajo como talleres u oficinas. En cada uno de estos hay aspectos importantes como los colores que componen el espacio, paredes, techo, tonalidad de la luz.

    SlyderA.color-gris.my-4.p-5(tipo="b")
      .row.justify-content-between
        .col-md-6
          p.col-lg-12.col-md-7.mt-3 La implementación de materiales metálicos en el diseño de mobiliario, permite entre otras cosas, variar las texturas del producto, y generarle al cliente o al usuario la posibilidad de experimentar diferentes sensaciones sensoriales, además de la percepción de firmeza o durabilidad que generalmente transmiten los metales.

          p.col-lg-12.col-md-7.mt-3 El acero en particular le otorga al inmueble la propiedad de robustez y le transmite al observador una característica de seguridad y durabilidad.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema6/img-7.png')
      .row.justify-content-between
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema6/img-8.png')
        .col-md-6
          p.col-lg-12.col-md-7.mt-5 Los accesorios en los muebles permiten realzar atributos y características, el brillo de los metales en agarraderas es un ejemplo. Así mismo, la utilización de rieles en materiales metálicos, facilita el movimiento y durabilidad de los productos fabricados en madera.
</template>
<script>
export default {
  name: 'Tema4',
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
