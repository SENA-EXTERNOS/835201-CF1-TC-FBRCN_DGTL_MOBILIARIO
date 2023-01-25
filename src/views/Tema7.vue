<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Cliente y mercado

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema7/img-01.png')})`}"
      )
      .bloque-texto-g__texto.p-4.mb-5

        p.my-4 El mercado de los productos mobiliarios es tan diverso y amplio como el tipo de clientes que pueden existir. <b>Los clientes</b> son las personas que, en función de sus gustos, preferencias y actividades, demandan la adquisición de mobiliarios para el descanso, ocio, trabajo e incluso, mascotas. 
        br
        br
        p.my-2 El estudio y diferenciación de los tipos de clientes, es una actividad que se denomina <b>segmentación</b>, es importante saber que los productos mobiliarios, al igual que la ropa, tienen un público o clientes en particular; a este conglomerado de personas o clientes, se denomina <b></b>mercado.

    separador

    #t_7_1.titulo-segundo.color-acento-contenido.pt-3
      h2 7.1 Dibujo y recreación de ambientes

    p El mercadeo es la actividad desarrollada para entender las necesidades que tienen los clientes de un producto y de esta manera proveer o suministrar lo que necesitan. En el caso del mobiliario, es importante distinguir elementos como: si el mercado al que se quiere dirigir el producto está compuesto por familias jóvenes, personas solteras, personas mayores, tipo de nivel socioeconómico, entre otras.

    p Existen más tipos de estrategias de mercadeo, se recomienda consultar el documento referenciado en el material complementario.

    p.mb-5 Algunas de las técnicas para esta actividad  son:

    TabsB.color-primario
      .py-4.py-md-5(titulo="Segmentación " :icono="require('@/assets/curso/temas/tema7/img-1.png')")
        .row
          .col-md-6.mb-4.mb-md-0
            p La segmentación consiste en definir e identificar a determinados tipos de clientes de un mercado, para dirigir a estos el producto o servicio demandado por estos. Se resaltan cuatro tipos de segmentación:
            .col-11.mx-4
              ul.lista-ul
                li 
                  i.fa.fa-circle
                  p.mb-0 #[b Indiferenciada:] hace referencia a la oferta y muestra masiva del producto; esto, con el propósito de conseguir la mayor cantidad de clientes.
                li
              ul.lista-ul
                li 
                  i.fa.fa-circle
                  p.mb-0 #[b Diferenciada:] consiste en establecer diferentes grupos y definir de mercadeo para cada uno de ellos; esto hace que la estrategia sea más focalizada en los grupos identificados.  
                li
                ul.lista-ul
                li 
                  i.fa.fa-circle
                  p.mb-0 #[b Concentrada:] se enfoca en la escogencia de un solo segmento del mercado.
                li
                ul.lista-ul
                li 
                  i.fa.fa-circle
                  p.mb-0 #[b Uno a uno (1 a 1):] es la estrategia de segmentación más personalizada, está dirigida específicamente a clientes individuales.
                li
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema7/img02.png', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Posicionamiento o <em>branding</em>" :icono="require('@/assets/curso/temas/tema7/img-2.png')")
        .row
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema7/img-03.png')
          .col-md-6
            p.my-3 Esta estrategia se enfoca en el posicionamiento de una marca, al punto de que genere una recordación mental y permanente en el cliente en función de los atributos de la marca y sus productos.

    separador

    #t_7_2.titulo-segundo.color-acento-contenido.pb-2
      h2 7.2. Introducción a la administración

    p.mb-5 Como se vio en el tema cliente y mercado, se debe tener un gran entendimiento sobre el tipo de cliente y el mercado al cual se van a dirigir los productos mobiliarios elaborados, además, se debe comprender cómo implementar determinados recursos con el propósito del buen funcionamiento en el manejo y desarrollo de cualquier proceso. Todo esto está relacionado en la forma en que se administra una empresa.

    .tarjeta.p-4.p-md-5.mb-5.fondo1.color-gris
      .row.justify-content-end.align-items-center
        .col-md-5.order-md-first.order-sm-last
          p  La administración es la disciplina que estudia el uso óptimo de los recursos en una organización, empresa o negocio. A nivel de la industria del mobiliario, ya sea para grandes, medianas, pequeñas o emprendimientos, es importante tener en cuenta el correcto y adecuado uso de los recursos económicos, financieros, técnicos, humanos, logísticos y tecnológicos, orientados al aumento en la eficiencia de la producción.

        .col-md-6.mb-4.mb-md-0.order-md-last.order-sm-first
          figure(data-aos="fade-right")
            img(src="@/assets/curso/temas/tema7/img-6.png")

    br

    .row.mb-5
      .col-lg-4
        figure(data-aos="fade-right")
          img(src="@/assets/curso/temas/tema7/img-7.png")
      .col-lg-8
          p En cualquier proceso administrativo debe existir un <b>gerente</b> o responsable, que tenga conocimiento global o específico del objeto de la empresa o negocio; por ejemplo, para el caso del mobiliario, conocer sobre madera, precios asociados a las materias primas y herramientas, tipos de procesos que se llevan a cabo para la fabricación de productos, finanzas, marketing y ventas.

          p De acuerdo a lo señalado anteriormente, la administración requiere que quien ejerce la función de encargado o administrador, cumpla con una serie de requisitos; a estos requisitos se le denomina <b>perfil</b>. El perfil, es el compendio de aptitudes y actitudes que de acuerdo al tipo de organización, empresa o proyecto que se administre, se requieren para el éxito y sostenibilidad del mismo.


    tarjeta
</template>
<script>
export default {
  name: 'Tema7',
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
