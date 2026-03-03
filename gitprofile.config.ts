const CONFIG = {
  github: {
    username: 'oliveiramatheus212',
  },
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: ['oliveiramatheus212'], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title:
            'Núcleo de Práticas em Engenharia de Software - UFMS : Online Evidence Grabber',
          description:
            'Desenvolvimento do Online Evidence Grabber, um sistema desktop criado em parceria com a Polícia Federal, voltado ao apoio na investigação de crimes cibernéticos ocorridos em blogs, redes sociais e outras plataformas online. O sistema foi concebido inicialmente para uso interno da Polícia Federal, já considerando desde o início uma arquitetura extensível, permitindo a futura colaboração com outras forças policiais, inclusive em âmbito internacional. O projeto foi desenvolvido como um MVP em Python, linguagem já consolidada na divisão de engenharia de software do cliente, garantindo rápida adoção, manutenção facilitada e alinhamento com o ecossistema técnico existente. Houve forte preocupação com arquitetura limpa, organização do código e sustentabilidade do sistema, possibilitando evoluções futuras e até migração tecnológica, caso necessário. Tecnologias: Python, aplicação desktop, princípios de arquitetura limpa.',
          imageUrl:
            'https://nes.facom.ufms.br/storage/uploads/MuKHDReJS6n7rDUkU8WEBAo8JnVR8AuG9O3Xyi0n.jpg',
          link: 'https://nes.facom.ufms.br/projeto/online-evidence-grabber',
        },
        {
          title:
            'Núcleo de Práticas em Engenharia de Software - UFMS : LibrixX - Gerenciador de Biblioteca',
          description:
            'Desenvolvimento e implantação de um sistema de gerenciamento de biblioteca para um colégio da rede pública com mais de 2.500 alunos, substituindo completamente o controle manual feito com papel e caneta. O sistema automatizou todo o fluxo de empréstimo e devolução de livros, permitindo maior agilidade no atendimento aos alunos durante o curto período de intervalo, além de aumentar significativamente a confiabilidade dos registros e o controle de estoque. A solução foi projetada com foco em bom desempenho e baixo consumo de recursos, considerando as limitações de hardware disponíveis na escola, garantindo uma aplicação leve, responsiva e estável. Para modernizar o processo e reduzir erros operacionais, o sistema conta com integração com leitor de código de barras e impressora térmica, facilitando a identificação dos livros, a gestão do acervo e a emissão de comprovantes. Tecnologias: Vue.js, Node.js, APIs REST, integração com leitor de código de barras e impressora térmica.',
          imageUrl:
            'https://nes.facom.ufms.br/storage/uploads/BS5hwpFw2T0kmhqLO6eRObjY44drcKl6r6GwgVJE.jpg',
          link: 'https://nes.facom.ufms.br/projeto/gerenciador-de-biblioteca',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Matheus Oliveira',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'oliveira-s-matheus',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '_oliveiramatheus',
    github: 'oliveiramatheus212',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
    website: 'https://oliveiramatheus212.github.io/',
    phone: '+55 (67) 98195-3025',
    email: 'matheussilvaoliveira@hotmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'Laravel',
    'JavaScript',
    'React.js',
    'Node.js',
    'Nest.js',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'PHPUnit',
    'CSS',
    'Antd',
    'Tailwind',
  ],
  experiences: [
    {
      company: 'Inferência TI',
      position: 'Front-end Developer',
      from: 'April 2025',
      to: 'Present',
    },
    {
      company: 'HTP Solution',
      position: 'FullStack Developer',
      from: 'January 2023',
      to: 'January 2024',
    },
    {
      company: 'Meta TI',
      position: 'Front-end Developer',
      from: 'September 2021',
      to: 'September 2022',
    },
    {
      company: 'Inside the Box LTDA',
      position: 'FullStack Developer',
      from: 'January 2021',
      to: 'September 2021',
    },
  ],
  certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com',
    },
  ],
  educations: [
    {
      institution: 'Institution Name',
      degree: 'Degree',
      from: '2015',
      to: '2019',
    },
    {
      institution: 'Institution Name',
      degree: 'Degree',
      from: '2012',
      to: '2014',
    },
  ],
  publications: [],
  // Display articles from your medium or dev account. (Optional)
  blog: {},
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'forest',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
