<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 11
      h1 Maderas y materias primas especiales

    p Tradicionalmente el mobiliario, como se ha revisado hasta ahora, ha sido trabajado principalmente en madera a lo largo del tiempo y alrededor del mundo.  Madera como la guadua o bambú, son ampliamente utilizados en varias geografías, y en nuestro país particularmente en la zona del eje cafetero; sin embargo, en la actualidad, la tendencia desarrollada lleva a la combinación de otras materias primas, que junto con  las maderas, los materiales metálicos y plásticos, le agregan atributos y propiedades a los productos mobiliarios.

    p.mb-5 Algunas de las materias primas más usadas son:


    ImagenInfograficaB.color-primario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema11/img-4.png')

      .tarjeta.colormodal(x="4.5%" y="15%" numero="1")
        .row.justify-content-center.mb-5.p-4
          .col-12
            p.mt-5.color-texto.text-center <b>Resina epóxica</b> 

            p.mt-4.color-texto.text-center De alta resistencia y alto brillo, se utiliza para recrear diferentes texturas y agregar diferentes colores.
      .tarjeta.colormodal(x="39.5%" y="15%" numero="2")
        .row.justify-content-center.mb-5.p-4
          .col-12
            p.mt-5.color-texto.text-center <b>Fibra de vidrio</b> 

            p.mt-4.color-texto.text-center Su altísima resistencia y muy bajo peso posibilita la creación de productos especializados para necesidades especiales.
      .tarjeta.colormodal(x="74.5%" y="15%" numero="3")
        .row.justify-content-center.mb-5.p-4
          .col-lg-12
            p.mt-5.color-texto.text-center <b>Plástico reciclado</b> 

            p.mt-4.color-texto.text-center Normalmente polipropileno, son materias primas de envases transformados en vigas para mecanizar, similar a la madera.

    .row.justify-content-center.mt-5
      .col-lg-10
        .cajon.color-acento-contenido.p-4.mb-4.color-gris
          .row.justify-content-center
            .col-1
              figure
                img(src="@/assets/curso/temas/tema2/icono.png")
            .col-10
              p Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.
              
                
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
