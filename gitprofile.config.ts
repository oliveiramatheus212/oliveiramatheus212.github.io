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
        limit: 10, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: ['oliveiramatheus212/oliveiramatheus212'], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
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
            'Center for Software Engineering Practices - UFMS: Online Evidence Grabber',
          description:
            "Development of Online Evidence Grabber, a desktop system created in partnership with the Federal Police, aimed at supporting the investigation of cybercrimes occurring on blogs, social networks, and other online platforms. The system was initially conceived for internal use by the Federal Police, already considering from the beginning an extensible architecture, allowing future collaboration with other police forces, including internationally. The project was developed as an MVP in Python, a language already consolidated in the client's software engineering division, ensuring rapid adoption, easy maintenance, and alignment with the existing technical ecosystem. There was a strong focus on clean architecture, code organization, and system sustainability, enabling future evolutions and even technological migration, if necessary. Technologies: Python, desktop application, clean architecture principles.",
          imageUrl:
            'https://nes.facom.ufms.br/storage/uploads/MuKHDReJS6n7rDUkU8WEBAo8JnVR8AuG9O3Xyi0n.jpg',
          link: 'https://nes.facom.ufms.br/projeto/online-evidence-grabber',
        },
        {
          title:
            'Center for Software Engineering Practices - UFMS : LibrixX - Library Manager',
          description:
            'Development and implementation of a library management system for a public school with over 2,500 students, completely replacing manual control using pen and paper. The system automated the entire book loan and return process, allowing for faster service to students during short break times, as well as significantly increasing the reliability of records and inventory control. The solution was designed with a focus on good performance and low resource consumption, considering the hardware limitations available at the school, ensuring a lightweight, responsive, and stable application. To modernize the process and reduce operational errors, the system includes integration with a barcode reader and thermal printer, facilitating book identification, collection management, and receipt issuance. Technologies: Vue.js, Node.js, REST APIs, integration with barcode reader and thermal printer.',
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
      name: 'Dev Global - Starter Pack',
      body: 'Completed a professional certification program at Rocketseat covering technology industry fundamentals, global market dynamics, business environment awareness, cultural intelligence, and professional communication. The program also included English interview preparation, technical interview simulations, and real-world scenario practice.',
      year: 'January 2026',
      link: 'https://app.rocketseat.com.br/certificates/ba56df9b-03de-4740-a69d-31ef9d0e9db3',
    },
    {
      name: 'NLW Journey - React Native',
      body: 'Received a participation certificate from Rocketseat for developing a mobile application with React Native and TypeScript. Applied core concepts such as props, state, and component architecture, utilized Expo Framework and Expo Router for file-based routing, built the interface with NativeWind, integrated a Node.js API, and implemented a calendar picker feature.',
      year: 'July 2024',
      link: 'https://app.rocketseat.com.br/certificates/c2eb90c4-e0d3-4809-8ed5-83e419c58619',
    },
    {
      name: 'NLW Expert React ',
      body: 'Earned a participation certificate from Rocketseat for developing a front-end application using React.js and TypeScript. Applied core concepts such as props, state, and component architecture, utilized Vite for tooling, built a responsive UI with Tailwind CSS, and integrated Web APIs including Web Storage and Web Speech.',
      year: 'February 2022',
      link: 'https://app.rocketseat.com.br/certificates/2324c46e-8d03-4a4a-9379-839b18b9bf7a',
    },
    {
      name: "Discover's path Connect",
      body: 'Received a participation certificate from Rocketseat for completing a foundational program covering essential concepts in web development, including HTML, CSS, JavaScript, and responsive design principles.',
      year: 'August 2022',
      link: '',
    },
    {
      name: 'Front-end Imersion',
      body: 'Received a participation certificate from Alura for completing a foundational program covering essential concepts in front-end development, including HTML, CSS, JavaScript, and responsive design principles.',
      year: 'February 2024',
      link: '',
    },
    {
      name: 'Scrum Fundamentals Certified',
      body: 'Successfully earned the Scrum Fundamentals Certified (SFC™) credential, demonstrating a solid understanding of Scrum principles, roles, events, and artifacts, as well as the ability to apply Agile methodologies in collaborative development environments.',
      year: 'September 2021',
      link: 'https://c46e136a583f7e334124-ac22991740ab4ff17e21daf2ed577041.ssl.cf1.rackcdn.com/Certificate/ScrumFundamentalsCertified-MatheusSilvaOliveira-872361.pdf',
    },
  ],
  educations: [
    {
      institution: 'Federal University of Mato Grosso do Sul',
      degree: 'Software Engineering Bachelor',
      from: '2020',
      to: '2024',
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
