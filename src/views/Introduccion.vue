<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción 
    .tarjeta.p-4.p-md-5.mb-5.fondo3(data-aos="fade-left")
      .row.justify-content-end.align-items-center
        .col-md-7.order-md-first.order-sm-last
          p En este componente formativo, nos enfocaremos en el estudio del proceso de fabricación digital de mobiliario; el aprendiz adquirirá las herramientas y habilidades básicas para llevar la generación de ideas de productos mobiliarios, desde propuestas plasmadas en bocetos o #[i sketchs] rápidos a mano, hasta recreaciones técnicas de productos, para muestra y exposición a clientes y mercados potenciales. 

          p Para lograrlo, se tendrán en cuenta las características y requerimientos esenciales en un proceso de producción. Lo anterior se obtiene comprendiendo la relación entre el diseño, la arquitectura, la ergonomía, tipos de clientes y varios métodos de #[i marketing] y de ventas de productos mobiliarios. 

        .col-md-5.mb-4.mb-md-0.order-md-last.order-sm-first
          figure
            img(src="@/assets/curso/introduccion/img-1.png")

    p En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
