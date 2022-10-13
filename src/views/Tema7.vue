<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Cliente y mercado

    p.my-4 El mercado de los productos mobiliarios es tan diverso y amplio como el tipo de clientes que pueden existir. <b>Los clientes</b> son las personas que, en función de sus gustos, preferencias y actividades, demandan la adquisición de mobiliarios para el descanso, ocio, trabajo e incluso, mascotas. 

    p.my-2 El estudio y diferenciación de los tipos de clientes, es una actividad que se denomina <b>segmentación</b>, es importante saber que los productos mobiliarios, al igual que la ropa, tienen un público o clientes en particular; a este conglomerado de personas o clientes, se denomina <b></b>mercado.

    .titulo-segundo.color-acento-contenido.pt-3
      h2#t_7_1 7.1 Dibujo y recreación de ambientes

    p.pb-3 El mercadeo es la actividad desarrollada para entender las necesidades que tienen los clientes de un producto , y de esta manera proveer o suministrar lo que necesitan. En este sentido, en el caso del mobiliario, es importante distinguir elementos como, si el mercado al que se quiere dirigir el producto está compuesto por familias jóvenes, personas solteras, personas mayores, tipo de nivel socioeconómico, entre otras. Algunas de las técnicas para esta actividad  son:

    .tarjeta--container.row.mb-5.text-white
      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema7/img-1.png')
        h3.text-center.my-3 Segmentación:
        .col-11.mx-4.my-3
          p La segmentación consiste en definir e identificar a determinados tipos de clientes de un mercado, para dirigir a estos el producto o servicio demandado por estos. Se resaltan cuatro tipos de segmentación:
        .col-11.mx-4
          ul.lista-ul
            li 
              i.lista-ul__vineta
              | Indiferenciada: hace referencia a la oferta y muestra masiva del producto; esto, con el propósito de conseguir la mayor cantidad de clientes.
            li
          ul.lista-ul
            li 
              i.lista-ul__vineta
              | Diferenciada: consiste en establecer diferentes grupos y definir de mercadeo para cada uno de ellos; esto hace que la estrategia sea más focalizada en los grupos identificados.  
            li
            ul.lista-ul
            li 
              i.lista-ul__vineta
              | Concentrada: se enfoca en la escogencia de un solo segmento del mercado.
            li
            ul.lista-ul
            li 
              i.lista-ul__vineta
              | Uno a uno (1 a 1): es la estrategia de segmentación más personalizada, está dirigida específicamente a clientes individuales.
            li
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema7/img-2.png')
        h3.my-3.text-center Posicionamiento o branding:
        p.my-3 Esta estrategia se enfoca en el posicionamiento de una marca, al punto de que genere una recordación mental y permanente en el cliente en función de los atributos de la marca y sus productos.

    p Existen más tipos de estrategias de mercadeo, se recomienda consultar el documento referenciado en el material complementario.

    .separador.p-3.my-4

    .titulo-segundo.color-acento-contenido.pb-2
      h2#t_7_2 7.2. Introducción a la administración

    .tarjeta.p-4.p-md-5.mb-5.fondo1.color-gris
      .row.justify-content-end.align-items-center
        .col-md-5.order-md-first.order-sm-last
          p Es importante examinar en el diseño de producto mobiliario, cómo impacta de manera visual con el público, esto garantiza en gran medida su éxito y aceptación. En esta ocasión se revisarán los aspectos relacionados de la manera en la cual un producto puede ser mejor percibido por las personas en un ambiente en particular y los materiales y accesorios que facilitan esta mejor percepción de manera general.

        .col-md-6.mb-4.mb-md-0.order-md-last.order-sm-first
          figure
            img(src="@/assets/curso/temas/tema7/img-3.png")
      .col-lg-12.my-4
          p En cualquier proceso administrativo debe existir un <b>gerente</b> o responsable, que tenga conocimiento global o específico del objeto de la empresa o negocio; por ejemplo, para el caso del mobiliario, conocer sobre madera, precios asociados a las materias primas y herramientas, tipos de procesos que se llevan a cabo para la fabricación de productos, finanzas, marketing y ventas.

          p De acuerdo a lo señalado anteriormente, la administración requiere que quien ejerce la función de encargado o administrador, cumpla con una serie de requisitos; a estos requisitos se le denomina <b>perfil</b>. El perfil, es el compendio de aptitudes y actitudes que de acuerdo al tipo de organización, empresa o proyecto que se administre, se requieren para el éxito y sostenibilidad del mismo.

    p Existen más tipos de estrategias de mercadeo, se recomienda consultar el documento referenciado en el material complementario.

    tarjeta
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
