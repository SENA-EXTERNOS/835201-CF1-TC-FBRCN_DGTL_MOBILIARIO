<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Elementos y procesos del diseño

    .tarjeta.p-4.p-md-5.mb-5.fondo6.color-gris
      .row.justify-content-end.align-items-center
        .col-md-5.order-md-first.order-sm-last.py-4 
          p Es importante examinar en el diseño de producto mobiliario, cómo impacta de manera visual con el público, esto garantiza en gran medida su éxito y aceptación. En esta ocasión se revisarán los aspectos relacionados de la manera en la cual un producto puede ser mejor percibido por las personas en un ambiente en particular y los materiales y accesorios que facilitan esta mejor percepción de manera general.

        .col-md-6.mb-4.mb-md-0.order-md-last.order-sm-first
          figure(data-aos="fade-right")
            img(src="@/assets/curso/temas/tema6/img-1.png")

    .separador.p-3

    #t_6_1.titulo-segundo.color-acento-contenido.pb-2
      h2 6.1 Dibujo y recreación de ambientes

    p Los ambientes a los cuales van dirigidos los productos mobiliarios son de muchos tipos, sin embargo, se resaltan según sean exteriores o interiores, en estos últimos, también destacan los espacios habitacionales como casas, dormitorios, y de trabajo como talleres u oficinas. En cada uno de estos hay aspectos importantes como los colores que componen el espacio, paredes, techo, tonalidad de la luz.

    .row.mb-5 
      .col-6
        figure(data-aos="fade-right")
          img(src="@/assets/curso/temas/tema6/img-02.png")
      .col-6
        p En el caso de los ambientes habitacionales como las casas, normalmente se encuentran tonos neutros como el blanco, sobre el cual la mayoría de colores de un mobiliario tienen buena relación. En otros casos, cuando lo que se pretende en estos tipos de espacios es generar sensaciones de reposo, tranquilidad y descanso, los colores y tonos pasteles son los más empleados, así como los colores cálidos.
          .row.mb-5
            .col-auto
              a.boton.color-acento-botones.indicador__container(@click="modal1 = true")
                span Nota
                <i class="fas fa-bookmark"></i>
                .indicador--click(v-if="mostrarIndicador")

          ModalA(:abrir-modal.sync="modal1")
            .row.align-items-center
              .col-md-12.mb-4.mb-md-0 
                p De acuerdo al círculo cromático, los colores cálidos se encuentran debajo de la línea horizontal negra y los fríos por encima de ésta.

    p.mb-5 Algunas características especiales a tener en cuenta para el uso de los colores son:

    SlyderA.tarjeta.color-gris.mb-5.p-5(tipo="b")
      .row.justify-content-between
        .col-md-6.mt-4
          h2 Colores cálidos 
          p.col-lg-12.col-md-7.mt-3 Son los colores que trasmiten o generan al espectador una sensación cálida. Se usa para un ambiente habitacional que pretenda trasmitir calidez y comodidad.
        .col-md-5
          figure
            img.img-250.img-cen(src='@/assets/curso/temas/tema6/img-2.png')
      .row.justify-content-between
        .col-md-5
          figure
            img.img-250.img-cen(src='@/assets/curso/temas/tema6/img-3.png')
        .col-md-5.mt-5
          h2 Colores fríos  
          p.col-lg-12.col-md-7.mt-4 Son aquellos que le transmiten al espectador una sensación más fría o fresca.
      .row.justify-content-between
        .col-md-6.mt-4
          h2 Colores pastel 
          p.col-lg-12.col-md-7.mt-5 Tienen una saturación muy baja, también se describen como ligeros, algunos de ellos son usados para generar sensaciones calmantes y tranquilizantes al espectador. 
        .col-md-5
          figure
            img.img-250.img-cen(src='@/assets/curso/temas/tema6/img-4.png')
      .row.justify-content-between
        .col-md-5
          figure
            img.img-250.img-cen(src='@/assets/curso/temas/tema6/img-5.png')
        .col-md-6.mt-5
          h2 Colores neutros 
          p.col-lg-12.col-md-7.mt-3 Como gris, negro y blanco han sido los tradicionalmente utilizados en los diseños de los mobiliarios de oficina.
      .row.justify-content-around
        .col-md-6.mt-4
          h2.mt-5.ms-5 Tonos vivos
          p.col-lg-12.col-md-7.mt-5.ms-5 Los tonos “vivos”, primarios e incluso “ácidos”, han tomado relevancia recientemente en espacios modernos y vanguardistas.
        .col-md-5
          figure.tam-img-6
            img.img-250.ms-5(src='@/assets/curso/temas/tema6/img-6.png')

    .separador.mb-5

    #t_6_2.titulo-segundo.color-acento-contenido.pb-3
      h2 6.2 Materiales metálicos y accesorios

    p La mayoría del mobiliario producido es realizado con madera; sin embargo, en el trabajo de la madera para la conformación de productos, el uso de materiales como el acero, el hierro, fundiciones de hierro y aluminio, juega un rol importante al momento de otorgar propiedades como resistencia, vistosidad y robustez. 

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema6/img-7.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p La implementación de materiales metálicos en el diseño de mobiliario, permite entre otras cosas, variar las texturas del producto, y generarle al cliente o al usuario la posibilidad de experimentar diferentes sensaciones sensoriales, además de la percepción de firmeza o durabilidad que generalmente transmiten los metales.
        br
        br
        p El acero en particular le otorga al inmueble la propiedad de robustez y le transmite al observador una característica de seguridad y durabilidad.

    .row.justify-content-between
      .col-md-6
        figure
          img.img-250.img-cen(src='@/assets/curso/temas/tema6/img-8.png')
      .col-md-6
        p.col-lg-12.col-md-7.mt-5 Los accesorios en los muebles permiten realzar atributos y características, el brillo de los metales en agarraderas es un ejemplo. Así mismo, la utilización de rieles en materiales metálicos, facilita el movimiento y durabilidad de los productos fabricados en madera.
          
</template>
<script>
export default {
  name: 'Tema6',
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
