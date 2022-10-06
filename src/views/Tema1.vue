<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Titulo de primer nivel

    .titulo-segundo.color-acento-contenido.pb-2
      h2 1. Introducción al diseño

    .row
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-4
      .bloque-texto-g__img.color-gris.img-cover(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-introduccion.svg')})`}"
      )
      .bloque-texto-g__texto.p-4

        p Diseño: es un proceso que inicia a partir de la generación de ideas entre una o varias personas, para lograr algo en común; es, además, la solución a situaciones problemáticas con la creación de productos, vestimentas, juguetes, entre otros. Dentro del proceso de diseño, existen aspectos que deben ser tenidos en cuenta por la persona o diseñador      como: la forma, la función a desempeñar, el tamaño, algunas veces el olor, la sensación que produce al tacto, la facilidad o grado de dificultad para fabricarlo, el costo, etc.
          br
          br
        p En el caso del diseño mobiliario, el uso y la función del mueble juegan un papel muy importante, pues esto determina el tipo de espacio y público al cual va a ser dirigido.
          br
          br
        p Todo producto que puede ser adquirido por un cliente, ha sido creado a partir de ideas que se plasmaron en un papel.  
    .row.justify-content-center.pt-4
      .col-lg-8
        .cajon.color-acento-contenido.p-4.mb-4.color-gris
            p Los mobiliarios no solo cumplen la función de proveer solución a necesidades laborales, industriales o ejecutivas, también son muy importantes para el disfrute de momentos de ocio y descanso de las personas y, recientemente, muy posicionado, para el disfrute de mascotas y animales de compañía. Así mismo, el aspecto decorativo juega un papel preponderante al momento de llevar a cabo proyectos habitacionales y comerciales, siendo un factor determinante la escogencia de materiales, texturas, formas y colores que combinen con las propuestas o diseños arquitectónicos y de espacios. 
    .separador.p-3
    .titulo-segundo.color-acento-contenido.pb-2
      h2 1.1. Teoría del color

    p El diseño de mobiliario, al igual que el diseño en otras categorías, depende en gran medida de la comprensión que existe entre los colores de los productos que se quieren producir o fabricar y su relación con el entorno. Visualmente, el cerebro humano establece relaciones entre tonalidades que producen distintas sensaciones como: complacencia, frescura, calor, alegría, tristeza, calidez, etc. Este tipo de asociaciones están dadas a partir de la denominada gama de colores o escala cromática que el ojo humano es capaz de percibir.
    br
    p Para comprender el concepto de gama de colores o escala cromática, es indispensable conocer algunas definiciones:

    AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="Colores primarios")
        .col-md-6.mb-4.mb-md-0
          p.mt-5 Son los colores que no se pueden generar combinando dos o más colores.

        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/img-color-primarios.png')

      .row(titulo="Titulo item 2")
        .col-md-6
          figure
            img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
        .col-md-6.mb-4.mb-md-0
          p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
      .row(titulo="Titulo item 2")
        .col-md-6
          figure
            img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
        .col-md-6.mb-4.mb-md-0
          p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
              


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
