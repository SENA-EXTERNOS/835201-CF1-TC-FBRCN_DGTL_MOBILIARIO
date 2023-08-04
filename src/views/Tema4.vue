<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Dibujo con perspectivas, utilización de uno y más puntos de fuga

    .row.justify-content-center.align-items-stretch.mb-5           
      .col-lg-5.bg1.j.p-5
        p.mb-0.text-white La perspectiva en el dibujo es la técnica que le permite al diseñador o proyectista trasmitirle al espectador la sensación de profundidad o un espacio de tres dimensiones en una ilustración, boceto o creación en un recurso plano como una hoja.
      .col-lg-4.bg2.p-0
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/1.png', alt='') 
        .p-4
          p.mb-0 El dibujo en perspectiva transporta al observador al espacio o realidad que el diseñador quiere transmitir, es fundamental para lograr trasmitir emociones a través de un dibujo.



    p.mb-5.mt-5 El proceso constructivo de dibujos, ilustraciones o bocetos con perspectiva consta de elementos como:
    
    AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="Visual ")
        p Es una línea imaginaria que parte de los ojos del espectador y se dirige al infinito.
      div(titulo="Línea de horizonte")
        p Es una línea horizontal que atraviesa el cuadro del dibujo por el punto de intersección con la visual.
      div(titulo="Base del espectador ")
        p Punto en el plano de tierra sobre el que se encuentra el observador.
      div(titulo="Cuadro o plano del cuadro ")
        p Es el plano vertical que puede imaginarse como una lámina transparente o de vidrio delante del espectador y a través del cual se ve el objeto.
      div(titulo="Línea de tierra ")
        p Es la línea horizontal que representa la intersección del cuadro con el plano de tierra.
      div(titulo="Plano de tierra ")
        p Es el plano horizontal sobre el que se encuentra el espectador.
      div(titulo="Cono de visión")
        p Hace referencia al campo visual que tiene el espectador.
      div(titulo="Escorzo, acortamiento ")
        p Hace referencia al tamaño más pequeño de los objetos que en un dibujo en perspectiva se muestran más lejos. Si la perspectiva es pequeña, el escorzo es lento y gradual, en las perspectivas intensas, el escorzo o acortamiento es mucho más pronunciado.
      div(titulo="Posición del espectador ")
        p La posición del observador, o la impresión desde un punto de observación sobre un dibujo que se quiera dar, hace que también cambie la visión del objeto u objetos contenidos en el dibujo. Cuanto más cerca se encuentra el espectador, un mayor escorzo se aprecia en el dibujo, aunque el tamaño del objeto no cambie excesivamente.
      div(titulo="Posición en el cuadro ")
        p Si el objeto y el espectador permanecen en posiciones fijas y se altera la localización del cuadro, el tamaño de la imagen puede variar considerablemente. Si el cuadro se encuentra cerca del objeto, el tamaño de la imagen experimenta tan solo una pequeña reducción respecto al tamaño del objeto, si el cuadro está muy lejos del objeto, es decir, cerca del espectador, la imagen se representa de menor tamaño.

    p.mb-5.ms-5 <em> Way, M. (1991) Dibujo con perspectivas, utilización de uno y más puntos de fuga.</em>

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-4.bg2.p-0
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/2.png', alt='') 
        .p-4
          p.mb-0 Ejemplo del boceto de un mueble en perspectiva utilizando un punto de fuga sobre la línea del horizonte.                
      .col-lg-5.bg1.j.p-5
        p.mb-0.text-white #[b El principio de convergencia] o, como a veces se le llama, #[b punto de fuga], corresponde al punto ubicado sobre la línea del horizonte, sobre el cual convergen las líneas oblicuas o las tres dimensiones que en la realidad, son paralelas.


    h2.mb-5.mt-5 La utilización de dos puntos de fuga

    p.mb-5 Tenemos comprensión sobre el uso de un punto de fuga, observe en la siguiente información donde se puede ver cuando tenemos más de un solo punto.

    SlyderA.color-gris.tarjeta.mb-5(tipo="b")
      .row.justify-content-center.align-items-center.mt-5
        .col-md-5
          p.col-lg-12.col-md-10.mx-5 En un dibujo los lados paralelos de los objetos forman ángulos diversos al momento de ser representados en el cuadro, en el caso de los objetos de forma regular, existen dos puntos de fuga en la línea del horizonte. 
          p.col-lg-12.col-md-10.mx-5 Ejemplo de objeto representado con dos puntos de fuga.
        .col-lg-5
          figure
            img.img-250.img-cen(src='@/assets/curso/temas/tema4/img-3.png')
      .row.color-gris.justify-content-center.align-items-center.mt-5
        .col-md-6.mt-5
          figure
            img.img-250.img-cen.mb-4(src='@/assets/curso/temas/tema4/img-4.png')
        .col-md-5
          p En un dibujo los lados paralelos de los objetos forman ángulos diversos al momento de ser representados en el cuadro, en el caso de los objetos de forma regular, existen dos puntos de fuga en la línea del horizonte. 
          br
          p.col-lg-10.col-md-10.mx-5 Ejemplo de varios objetos representados con dos puntos de fuga.
      .row.color-gris.justify-content-center.align-items-center.mt-5
        .col-md-6
          p.col-lg-10.col-md-10.mx-5 Ejemplo de un <em>sketch</em> representado con dos puntos de fuga.
        .col-md-5
          figure
            img.img-250.img-cen(src='@/assets/curso/temas/tema4/img-5.png')
      .row.color-gris.justify-content-center.align-items-center.mt-5
        .col-md-5
          figure
            img.img-250.img-cen(src='@/assets/curso/temas/tema4/img-6.png')    
        .col-md-6
          p.col-lg-10.col-md-10.mx-5.mt-5 Normalmente en el dibujo o proyecciones de mobiliarios, no suelen utilizarse más de tres puntos de fuga; sin embargo, la utilización de más de dos logra trasmitir mejores efectos de profundidad a las representaciones, en caso que se llegase a requerir o implementar más de dos puntos fuga, estos suelen ser <em>perpendiculares</em> entre sí, en vista de plana (vista superior), ejemplo de estos son puertas abiertas, calles que se separan en direcciones distintas. En cualquier caso, sin importar la cantidad de puntos de fuga que se utilicen, estos siempre están sobre la línea del horizonte.
          p.col-lg-10.col-md-10.mx-5 Ejemplo de dibujo con tres puntos de fuga.


    p.my-4.mb-5 El siguiente enlace conduce a una muestra de la realización del proceso de perspectiva, utilizando una herramienta digital mediante un dispositivo móvil. Lo invito a observar el video.

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/gipXIjgR9_c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

  

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
