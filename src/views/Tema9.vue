<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 9
      h1 Ergonomía y anatomía básica

    .tarjeta.p-4.p-md-5.mb-5.fondo1.color-gris(data-aos="fade-left")
      .row.justify-content-end.align-items-center
        .col-md-5.order-md-first.order-sm-last
          p.py-5 La ergonomía es la disciplina que se encarga de estudiar las <b>condiciones, ambientes</b>y<b> parámetros</b> sobre los cuales deben ser diseñados los elementos, productos y demás objetos, que el ser humano emplea en los distintos espacios de trabajo, habitabilidad y demás. 

        .col-md-6.mb-4.mb-md-0.order-md-last.order-sm-first
          figure
            img(src="@/assets/curso/temas/tema9/img-1.png")

    .row.justify-content-center.mt-5
      .col-lg-9
        figure
          img(src='@/assets/curso/temas/tema9/img1.svg')

    .row.justify-content-center.mt-5
      .col-lg-8
        p Todo diseño de mobiliario debe estar orientado al cumplimiento de condiciones y normas que garanticen la correcta y adecuada postura de quien hace uso de los mismos, a esta condición se le conoce como ergonomía. Por lo general, los productos mobiliarios que tienen un diseño altamente enfocado a la ergonomía, poseen un valor económico superior, pues en la fabricación de productos altamente ergonómicos intervienen una gama de materiales distintos a la madera, acero, aluminio o plásticos, cuyo costo de manufactura y adquisición son, por lo general, superiores a las anteriores materias primas.
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema9/img-3.png')

    .row.justify-content-center.mt-5
      .col-lg-10
        .cajon.color-acento-contenido.p-4.mb-4.color-gris
          .row.justify-content-center
            .col-1
              figure
                img(src="@/assets/curso/temas/tema2/icono.png")
            .col-10
              p Para profundizar en la temática relacionada a ergonomía, se recomienda consultar el documento referenciado en el material complementario.


</template>
<script>
export default {
  name: 'Tema8',
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
