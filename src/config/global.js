export const global = {
  componenteFormativo: 'El extensionismo y sus fundamentaciones',
  descripcionCurso:
    'El programa de extensionismo tecnológico del SENA busca que los profesionales consultores, que trabajan la metodología desde los roles de gestor consultor y extensionista tecnológico, adquieran las competencias propicias y desarrolladas en el marco de la implementación de la estrategia y, al mismo tiempo, fortalezcan sus saberes, conocimientos y competencias relacionados con la gestión empresarial e informática requerida para el cambio de la transformación digital en las empresas en Colombia. </br>Los consultores requieren contar con el conocimiento que permita facilitar el procedimiento de asistencia técnica, metodológica y especializada bajo el concepto de extensionismo tecnológico y habilidades gerenciales, comerciales, administrativas o de soporte que en el marco del programa MiPyme Se Transforma para la intervención de las micro, pequeñas y medianas empresas (MiPymes) del país.',
  imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
  fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
}

export const menuPrincipal = {
  menu: [
    {
      nombreRuta: 'inicio',
      icono: 'fas fa-home',
      titulo: 'Volver al inicio',
    },
    {
      nombreRuta: 'tema1',
      icono: 'far fa-file-alt',
      numero: '1',
      titulo: 'Fundamentos del extensionismo, tipos y consultoría empresarial',
      desarrolloContenidos: true,
      subMenu: [
        {
          icono: 'far fa-file-alt',
          numero: '1.1',
          titulo:
            'Apropiación y uso de herramientas digitales para la transformación digital',
          hash: 't_1_1',
        },
        {
          icono: 'far fa-file-alt',
          numero: '1.2',
          titulo: 'Conceptos básicos sobre organización y procesos',
          hash: 't_1_2',
        },
        {
          icono: 'far fa-file-alt',
          numero: '1.3',
          titulo: 'Conceptos básicos de consultoría empresarial',
          hash: 't_1_3',
        },
        {
          icono: 'far fa-file-alt',
          numero: '1.4',
          titulo: 'Elementos generales del extensionismo tecnológico',
          hash: 't_1_4',
        },
      ],
    },
  ],
  subMenu: [
    // {
    //   nombreRuta: 'actividad',
    //   icono: 'far fa-question-circle',
    //   titulo: 'Actividad didáctica',
    //   desarrolloContenidos: true,
    // },
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
}

export const creditos = {
  liderEquipo: {
    nombre: 'Maria Camila Garcia Santamaria',
    cargo: 'Líder del equipo',
  },
  contenidoInstruccional: [
    {
      nombre: 'Rafael Neftalí Lizcano Reyes',
      cargo: 'Asesor metodológico y pedagógico',
      centro: 'Centro Industrial del Diseño y la Manufactura',
      regional: 'Regional Santander',
    },
    {
      nombre: 'Luis Guillermo Alvarez García',
      cargo: 'Experta temática',
      centro: 'Centro De Servicios y Gestión Empresarial',
      regional: 'Regional Antioquia',
    },
    {
      nombre: 'Alejandro Moncada Betancur',
      cargo: 'Experta temática',
      centro: 'Centro De Procesos Industriales y Construcción',
      regional: 'Regional Caldas',
    },
    {
      nombre: 'Leidy Yohana Ortiz Diaz',
      cargo: 'Experto temático',
      centro: 'Centro de la Industria, la Empresa y los Servicios',
      regional: 'Regional Norte de Santander',
    },
    {
      nombre: 'Gimena Santacruz Benítez',
      cargo: 'Experto temático',
      centro: 'Centro de la Industria, la Empresa y los Servicios Regional,',
      regional: 'Regional Huila',
    },
    {
      nombre: 'Sergio Arturo Medina Castillo',
      cargo: 'Diseñador instruccional',
      centro: 'Centro para la industria de la Comunicación Gráfica',
      regional: 'Regional Distrito Capital',
    },
    {
      nombre: 'José Gabriel Ortiz Abella',
      cargo: 'Evaluador instruccional',
      centro: 'Centro para la Industria de la Comunicación Gráfica',
      regional: 'Regional Distrito Capital',
    },
    {
      nombre: 'María Isabel Román Rueda',
      cargo: 'Revisora de estilo',
      centro: 'Centro Industrial Del Diseño Y La Manufactura',
      regional: 'Regional Santander',
    },
  ],
  desarrolloProducto: [
    {
      nombre: 'Francisco José Lizcano Reyes',
      cargo: 'Responsable del equipo',
    },
    {
      nombre: 'Leyson Fabian Castaño Perez',
      cargo: 'Integración de recursos y pruebas',
    },
    {
      nombre: [
        'Camilo Andrés Villamizar Lizcano',
        'Eulises Orduz Amezquita',
        'José Jaime Luis Tang Pinzón',
        'Lady Adriana Ariza Luque',
        'Oleg Litvin',
        'Victor Raúl Cárdenas Cáceres',
        'Zuleidy Maria Ruiz Torres',
      ],
      cargo: 'Diseño web y Producción Audiovisual',
    },
    {
      nombre: 'Edward Leonardo Pico Cabra',
      cargo: 'Desarrollo Front-End',
    },
    {
      centro: 'Centro Industrial del Diseño y la Manufactura',
      regional: 'Regional Santander',
    },
  ],
  gestoresRepositorio: [
    {
      nombre: 'Milady Tatiana Villamil Castellanos',
      cargo: 'Validación de recursos',
      centro: 'Centro de comercio y servicios',
      regional: 'Regional Tolima',
    },
  ],
}

export const referencias = [
  {
    referencia:
      'Academia de Extensionismo Tecnológico. (05 de noviembre de 2020). Cuento MiPyme se transforma. [Video]. YouTube. ',
    link: 'https://youtu.be/Fecs2dgIZZk',
  },
  {
    referencia:
      'Alsina G. (2017). Definición de digitalización. Definición ABC. ',
    link: 'https://www.definicionabc.com/tecnologia/digitalizacion.php',
  },
  {
    referencia:
      'ANDI. (2017). Economía y transformación digital (Cap. 2). ANDI.',
  },
  {
    referencia:
      'Congreso de la República de Colombia. (27 de diciembre de 2017). Por medio de la cual se crea el Sistema Nacional de Innovación Agropecuaria y se dictan otras disposiciones. [Ley 1876 de 2017]. ',
  },
  {
    referencia: 'Landini. (2016). ¿Qué es extensionismo? ',
    link:
      'https://extensionvitivinicoladelsur.cl/nosotros/que-es-el-extensionismo/',
  },
  {
    referencia:
      'Ministerio de Tecnologías de la Información y las Comunicaciones de Colombia – MinTIC. (2019). Caracterización de las MiPymes Colombianas y conocimiento de su relación con las Tecnologías de la Información y las Comunicaciones – TIC. MinTIC.',
  },
  {
    referencia:
      'Portafolio. (05 de diciembre de 2017). El 34% de las empresas están rezagadas en digitalización. Portafolio.',
    link:
      'https://www.portafolio.co/negocios/empresas/empresas-en-colombia-estan-rezagadas-en-digitalizacion-512341',
  },
  {
    referencia:
      'Portafolio. (30 de julio de 2019). Colombia está quedada en transformación digital. Portafolio ',
    link:
      'https://www.portafolio.co/economia/colombia-quedada-en-transformacion-digital-532068',
  },
  {
    referencia:
      'Power Data. (s. f.). Transformación digital. Qué es y su importancia y relación con los datos. ',
    link:
      'https://www.powerdata.es/transformacion-digital#:~:text=Como%20primera%20definici%C3%B3n%20podr%C3%ADamos%20decir,oportunidades%20de%20generaci%C3%B3n%20de%20ingresos',
  },
  {
    referencia:
      'Presidencia de Colombia. (17 de marzo de 2020). Por el cual se declara un Estado de Emergencia Económica, Social y Ecológica en todo el territorio Nacional. [Decreto 417 de 2020]. ',
  },
  {
    referencia: 'Pwc Interaméricas. (s. f.). ¿Qué es consultoría? ',
    link: 'https://www.pwc.com/ia/es/carreras/consultoria.html',
  },
  {
    referencia: 'Roldán P. (s. f.). Definición de tecnología. ',
    link:
      'https://economipedia.com/definiciones/tecnologia.html#:~:text=La%20tecnolog%C3%ADa%20es%20el%20conjunto,mejorar%20su%20calidad%20de%20vida',
  },
]

export const glosario = [
  {
    termino: 'Consultoría',
    significado:
      'servicio de asesoría especializada e independiente al que recurren las empresas en diferentes industrias con el fin de encontrar soluciones a uno o más de sus problemas de negocio o necesidades empresariales y que se sustenta en la innovación, la experiencia, el conocimiento, las habilidades de los profesionales, los métodos y las herramientas. ',
  },
  {
    termino: 'Digitalización',
    significado:
      'proceso mediante el que algo real (físico, tangible) es pasado a datos digitales para que pueda ser manejado por una computadora (de naturaleza, a su vez, digital), modelándolo, modificándolo y aprovechándolo para otros propósitos distintos de su cometido o función originales.',
  },
  {
    termino: 'Extensionismo',
    significado:
      'se concibe como un proceso de facilitación de aprendizajes e intercambio de información, conformación de redes de colaboración y uso de plataformas de innovación.',
  },
  {
    termino: 'Transformación digital',
    significado:
      'aplicación de capacidades digitales a procesos, productos y activos para mejorar la eficiencia, mejorar el valor para el cliente, gestionar el riesgo y descubrir nuevas oportunidades de generación de ingresos.',
  },
  {
    termino: 'Tecnología',
    significado:
      'conjunto de conocimientos y técnicas que se aplican de manera ordenada para alcanzar un determinado objetivo o resolver un problema.',
  },
]

export const complementario = [
  {
    texto: 'REDHAT',
    tipo: 'Página web',
    link:
      'https://www.redhat.com/es/topics/digital-transformation/what-is-digital-transformation',
  },
  {
    texto:
      'Ministerio del Interior, Ministerio Hacienda y Crédito, Ministerio de Agricultura y Desarrollo Rural.',
    tipo: 'Normativa',
    link:
      'http://es.presidencia.gov.co/normativa/normativa/LEY%201876%20DEL%2029%20DE%20DICIEMBRE%20DE%202017.pdf',
  },
  {
    texto:
      'Política Nacional de Desarrollo Productivo – PDP (Documento Conpes 3866). Agosto 2016.',
    tipo: 'Documento',
    link: 'https://colaboracion.dnp.gov.co/CDT/Conpes/Econ%C3%B3micos/3866.pdf',
  },
  {
    texto:
      'Academia de Extensionismo Tecnológico. (2020). Cuento MiPyme se transforma.',
    tipo: 'Video',
    link: 'https://youtu.be/Fecs2dgIZZk',
  },
]
