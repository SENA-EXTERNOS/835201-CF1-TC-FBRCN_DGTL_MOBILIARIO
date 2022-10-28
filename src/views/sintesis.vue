<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-sexto.color-secundario.linea-1.pb-0
      h5.mt-1 Fabricación digital de mobiliario
      br
      p Diseño de mobiliario con enfoque a mercado y cliente


    p La fabricación digital de un producto, requiere además de las habilidades del manejo de un software, la capacidad de entender las necesidades de un cliente.  Este proceso nace a partir de una idea, que nuestro cerebro plasma mediante la representación gráfica de conceptos artísticos y técnicos, que posibilitan la materialización de la misma y beneficio de un cliente. Observe esta síntesis de lo estudiado hasta ahora.

    .titulo-sexto.color-secundario.linea-2.pb-0.ms-5
      p.mt-1 <b>Figura 2</b>. <em>Diseño de mobiliario con enfoque a mercado y clientes</em>

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.png", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
