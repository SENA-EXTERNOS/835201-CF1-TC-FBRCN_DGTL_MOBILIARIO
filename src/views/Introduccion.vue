<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción 
    .tarjeta.p-4.p-md-5.mb-5.fondo1.color-gris(data-aos="fade-left")
      .row.justify-content-end.align-items-center
        .col-md-5.order-md-first.order-sm-last
          p.py-5 En el desarrollo de esta primera parte del proceso de Fabricación digital de mobiliario, el aprendiz adquirirá las herramientas y habilidades básicas para llevar la generación de ideas de productos mobiliarios a propuestas plasmadas en bocetos o sketchs rápidos a mano, hasta recreaciones técnicas de productos para muestra y exposición a clientes y mercados potenciales. Para ello, tendrá en cuenta las características y requerimientos esenciales en un proceso de producción. Lo anterior se logrará comprendiendo la relación entre el diseño, la arquitectura, la ergonomía, tipos de clientes y varios métodos de marketing y de ventas de productos mobiliarios. 

        .col-md-6.mb-4.mb-md-0.order-md-last.order-sm-first
          figure
            img(src="@/assets/curso/introduccion/principal.png")

    .titulo-segundo.color-acento-contenido.pb-2
      h2 Diseño de mobiliario

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
