<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Titulo de primer nivel

    .titulo-segundo.color-acento-contenido.pb-2
      h2 4. Dibujo con perspectivas, utilización de uno y más puntos de fuga

    p La perspectiva en el dibujo es la técnica que le permite al diseñador o proyectista trasmitirle al espectador la sensación de profundidad o un espacio de tres dimensiones en una ilustración, boceto o creación en un recurso plano como una hoja.

    .tarjeta.p-4.p-md-5.mb-5.fondo1.color-gris
      .row.justify-content-end.align-items-center
        .col-md-5.order-md-first.order-sm-last
          <h4>Introducción</h4>
          p El proceso constructivo de dibujos, ilustraciones o bocetos con perspectiva consta de elementos como:

        .col-md-6.mb-4.mb-md-0.order-md-last.order-sm-first
          figure
            img(src="@/assets/curso/temas/tema4/img-1.png")
    AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="Visual ")
        p Es una línea imaginaria que parte de los ojos del espectador y se dirige al infinito.
      div(titu lo="Línea de horizonte")
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

    .row.my-4
      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-4
        .bloque-texto-g__img.color-gris.img-cover(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img-2.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p El principio de convergencia o, como a veces se le llama, punto de fuga, corresponde al punto ubicado sobre la línea del horizonte, sobre el cual convergen las líneas oblicuas o las tres dimensiones que en la realidad, son paralelas.

    em.mx-5 Ejemplo del boceto de un mueble en perspectiva utilizando un punto de fuga sobre la línea del horizonte.

    p.my-4 La utilización de dos puntos de fuga. En un dibujo los lados paralelos de los objetos forman ángulos diversos al momento de ser representados en el cuadro, en el caso de los objetos de forma regular, existen dos puntos de fuga en la línea del horizonte. Para representar un objeto con dos puntos de fuga de manera sencilla, primero se establecen los ángulos que forma dicho objeto con el cuadro. 

    SlyderA.color-gris.my-4.p-5(tipo="b")
      .row.justify-content-center.align-items-center
        .col-md-5
          p.col-lg-12.col-md-10.mt-5 Ejemplo de objeto representado con dos puntos de fuga.
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema4/img-3.png')
      .row.color-gris.justify-content-center.align-items-center
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema4/img-4.png')
        .col-md-5
          p.col-lg-10.col-md-10 Ejemplo de varios objetos representados con dos puntos de fuga.
      .row.color-gris.justify-content-center.align-items-center
        .col-md-5
          p.col-lg-10.col-md-10 Ejemplo de un sketch representado con dos puntos de fuga.
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema4/img-5.png')

    a.boton.color-acento-botones.indicador__container(@click="modal1 = true")
      span.me-1 Nota
      <i class="fas fa-angle-right"></i>

    .row.my-4
      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-4
        .bloque-texto-g__img.color-gris.img-cover(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img-6.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p Normalmente en el dibujo o proyecciones de mobiliarios, no suelen utilizarse más de tres puntos de fuga; sin embargo, la utilización de más de dos logra trasmitir mejores efectos de profundidad a las representaciones, en caso que se llegase a requerir o implementar más de dos puntos fuga, estos suelen ser perpendiculares entre sí, en vista de plana (vista superior), ejemplo de estos son puertas abiertas, calles que se separan en direcciones distintas. En cualquier caso, sin importar la cantidad de puntos de fuga que se utilicen, estos siempre están sobre la línea del horizonte.
    
    em.mx-5 Ejemplo de dibujo con tres puntos de fuga.

    p El siguiente enlace conduce a una muestra de la realización del proceso de perspectiva, utilizando una herramienta digital mediante un dispositivo móvil. Lo invito a observar el video.

    a.boton--sm.color-acento-botones.texto-blanco.me-3(:href="obtenerLink('downloads/prueba.pdf')" target="_blank" type="application/pdf")
      span Enlace
      i.fas.fa-file-download

  
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
