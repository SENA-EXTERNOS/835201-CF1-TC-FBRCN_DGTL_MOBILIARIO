export default {
  global: {
    componenteFormativo: `Diseño de mobiliario con enfoque a mercado y clientes`,
    descripcionCurso: `Este componente se encuentra enfocado en la adquisición de las competencias básicas del dibujo y el diseño de prototipos para mobiliarios, tomando como referencia los elementos de ergonomía, estética, materiales, costos de producción y herramientas de las tecnologías 4.0, con el objetivo de aprender a orientarse en la satisfacción de las necesidades del cliente y del mercado.`,
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/elipse-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/elipse-1.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Introducción al diseño',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'teoría del color',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Diseño y arquitectura',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Dibujo técnico, elementos y herramientas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Geometría básica e introducción al <em>sketch</em>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: `Dibujo con perspectivas, utilización de uno y más puntos de fuga`,
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: `Dibujo de cuerpos con volumen, vistas e isométricos`,
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: `Elementos y procesos del diseño`,
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '6.1',
            titulo: 'Dibujo y recreación de ambientes',
            hash: 't_6_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.2',
            titulo: 'Materiales metálicos y accesorios.',
            hash: 't_6_2',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: `Cliente y mercado`,
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '7.1',
            titulo: 'Técnicas de mercadeo',
            hash: 't_7_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '7.2',
            titulo: 'Introducción a la administración',
            hash: 't_7_2',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        icono: 'far fa-file-alt',
        numero: '8',
        titulo: `Tendencias de diseño mobiliario`,
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema9',
        icono: 'far fa-file-alt',
        numero: '9',
        titulo: `Ergonomía y anatomía básica`,
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema10',
        icono: 'far fa-file-alt',
        numero: '10',
        titulo: `Introducción a la producción, servicios y productos de la cadena de valor`,
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema11',
        icono: 'far fa-file-alt',
        numero: '11',
        titulo: `Maderas y materias primas especiales`,
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Dibujo técnico, elementos y herramientas',
      referencia: `Departamento de Tecnología IES (2019) <em>Tema 2 Expresión gráfica y dibujo técnico</em>. `,
      tipo: `Documento que reúne el compendio de elementos y normas que hacen parte del dibujo técnico.`,
      link: `https://www3.gobiernodecanarias.org/medusa/ecoblog/dtrugar/files/2019/11/02-expresion-grafica-y-dibujo-tecnico.pdf`,
    },
    {
      tema: `Geometría básica e introducción al sketch`,
      referencia: `Marín, M. (2013). <em>Guía práctica de geometría área y perímetro de figuras</em>.`,
      tipo: `Guía para el estudio y manejo de figuras geométricas planas, propiedades y ejercicios.`,
      link: `https://lasmatematicasgaitanistas.files.wordpress.com/2020/03/guc3ada-de-geometrc3ada-c3a1rea-y-perc3admetro-3.pdf`,
    },
    {
      tema: `Dibujo con perspectivas, utilización de uno y más puntos de fuga`,
      referencia: `Way, M. Omega (1991) <em>La perspectiva en el dibujo</em>.`,
      tipo: `Guía para el dibujo con perspectiva`,
      link: `https://docs.google.com/file/d/0B87HcjSh5WzccDJFTTR5NFBtVTg/edit?resourcekey=0-KpilTagDYiLSXod87s-daQ`,
    },
    {
      tema: `Dibujo de cuerpos con volumen, vistas e isométricos`,
      referencia: `Rodríguez, S. (2013)<em> Fórmulas de área y volumen de cuerpos geométricos</em>. Recursos de una profesora de matemáticas de la enseñanza pública.`,
      tipo: `Fórmulas de área y volumen de cuerpos geométricos.`,
      link: `http://www.srbarreiro.es/Apuntes/DosESO/Geometria/TablaAreasVolumenes.pdf`,
    },
    {
      tema: `Cliente y mercado`,
      referencia: `Armstrong, G., Kotler, P. (2013) <em>Fundamentos del marketing</em>. `,
      tipo: `Libro de consulta.`,
      link: `https://frrq.cvg.utn.edu.ar/pluginfile.php/14584/mod_resource/content/1/Fundamentos%20del%20Marketing-Kotler.pdf`,
    },
    {
      tema: `Cliente y mercado`,
      referencia: `Universidad Nacional Autónoma de México, Facultad de contaduría y administración, División del sistema Universidad abierta. (2003). <em>Apuntes para la asignatura administración básica 1</em>. `,
      tipo: `Tutorial`,
      link: `http://fcasua.contad.unam.mx/apuntes/interiores/docs/98/1/admon_bas1.pdf`,
    },
    {
      tema: `Ergonomía y anatomía básica`,
      referencia: `Iglesias, F. (s/f). <em>Ergonomía y Salud en los entornos de oficina</em>.`,
      tipo: `Manual`,
      link: `https://www.jmcprl.net/PUBLICACIONES/F06/ERGO%20OFICINA/Ergo%20Oficina.pdf`,
    },
  ],
  glosario: [
    {
      termino: 'Administración',
      significado:
        'es la disciplina que estudia el uso óptimo de los recursos en una organización, empresa o negocio.',
    },
    {
      termino: 'Convergencia',
      significado: 'unión de varias líneas en un punto.',
    },
    {
      termino: 'Ergonomía',
      significado:
        'estudia la relación que existe de un objeto, vehículo o herramientas con las condiciones y características físicas, anatómicas y psicológicas del que las va a usar',
    },
    {
      termino: `Boceto`,
      significado: `esquema o proyecto que contiene solamente los rasgos principales de una obra artística o técnica.`,
    },
    {
      termino: `Convergencia`,
      significado: `unión de varias líneas en un punto.`,
    },
    {
      termino: `Cuantificar`,
      significado: `expresar numéricamente una magnitud.`,
    },
    {
      termino: `Ergonomía`,
      significado: `estudia la relación que existe de un objeto, vehículo o herramientas con las condiciones y características físicas, anatómicas y psicológicas del que las va a usar`,
    },
    {
      termino: `Escala`,
      significado: `relación que existe entre las magnitudes que tiene un dibujo y las dimensiones reales del objeto. Se representa con un cociente (división) entre dos números, donde el numerador expresa una dimensión en el dibujo y el denominador, la correspondiente en la realidad.`,
    },
    {
      termino: `Mercado`,
      significado: `conjunto de compradores potenciales de una mercancía o servicio.`,
    },
    {
      termino: `Textura`,
      significado: `forma en que están entrelazadas las fibras de un tejido, lo que produce una sensación táctil o visual.`,
    },
  ],
  referencias: [
    {
      referencia:
        'Escuela de diseño de Madrid. (s/f). <em>¿Qué es el diseño de arquitectura?</em>',
      link: 'https://esdima.com/que-es-el-diseno-de-arquitectura/',
    },
    {
      referencia:
        'Way, M. (1991). <em>Dibujo con perspectivas, utilización de uno y más puntos de fuga</em>. Ediciones Omega.',
      link: '',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
