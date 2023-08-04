<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 Tendencias de diseño mobiliario

    p Las tendencias en el diseño mobiliario han estado enmarcadas de acuerdo a los períodos de la humanidad y las sociedades. No existe una única línea en la historia del diseño mobiliario que pueda ser asumida como concreta o de referencia, pues el diseño es un proceso, como se revisó antes, depende del arte y la capacidad de recreación del diseñador o proyectista. Así pues, las culturas occidentales, orientales, escandinavas o asiáticas, tendrán percepciones distintas y subjetivas en función de sus épocas históricas.
      
    p Con base en lo anterior y tomando en cuenta las influencias que permean nuestra sociedad, se presentan algunas de las tendencias más representativas que se pueden reconocer:

    .row.justify-content-center
      .col-lg-10
        SlyderA.tarjeta.color-gris.my-4.p-3(tipo="b")
          .row.justify-content-center
            .col-md-6.p-5
              h2 Mobiliario clásico 
              p.col-lg-12.col-md-7 Son mobiliarios mayoritariamente construidos en madera maciza, en función del tipo de usuario, su rigidez y complejidad.
            .col-md-6
              figure
                img.img-250.img-cen(src='@/assets/curso/temas/tema8/img-1.png')
          .row.justify-content-center
            .col-md-6
              figure
                img.img-250.img-cen.mb-4.mt-4(src='@/assets/curso/temas/tema8/img-2.png')
            .col-md-6
              h2.mt-3 Clásico victoriano  
              p.col-lg-12.col-md-7.mt-4 El victoriano corresponde a la época del mismo nombre, se caracterizan por los labrados manuales extremadamente detallados en la madera, formas curvas y anchas, además de la amplia zona suave de reposo en brazos, espalda y asiento. Otra característica son los colores dorados, plateados o cobrizos con los que se pigmentaban.
          .row.justify-content-center
            .col-md-6
              h2 Clásico republicano 
              p.col-lg-12.col-md-7.mt-4 Similar al victoriano, las líneas conservan cierta curvatura, pero menos detalles de labrados manuales. Los colores de pigmentación o pintura por lo general son de la tonalidad de las maderas en la que se fabrican.
            .col-md-5
              figure
                img.img-250.img-cen(src='@/assets/curso/temas/tema8/img-3.png')
          .row.justify-content-center
            .col-md-6
              h2 Industrial
              p.col-lg-12.col-md-7.mt-4 Son los tipos de muebles que se producen a escala, con patrones y mediante una línea de producción. Se encuentran en variedad de maderas, siendo los aglomerados una de las principales; combinan distintos materiales como hierro, acero, plásticos y cueros.
            .col-md-5
              figure
                img.img-250.img-cen(src='@/assets/curso/temas/tema8/img-4.png')
          .row.justify-content-center
            .col-md-5
              figure
                img.img-250.img-cen.mb-4(src='@/assets/curso/temas/tema8/img-5.png')
            .col-md-5
              h2.mt-3 Rústico 
              p.col-lg-12.col-md-7.mt-4 Son mobiliarios que resaltan la naturalidad de la materia prima que los compone, la mayoría de los casos, madera de árboles sin procesar o transformar.
          .row.justify-content-center
            .col-md-6
              h2 Eco-amigable
              p.col-lg-12.col-md-7.mt-4 Son una nueva tendencia que toma más participación en los mercados cada día; en la fabricación de estos se utilizan excedentes industriales generalmente de madera.
            .col-md-5
              figure
                img.img-250.img-cen(src='@/assets/curso/temas/tema8/img-6.png')
            
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
