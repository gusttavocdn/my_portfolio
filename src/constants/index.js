import {
  mobile,
  backend,
  web,
  typescript,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  trybe,
  atento,
  classSolutions,
  dotNet,
  c,
  jest,
  python,
  shellScript,
  tfcImage,
  blogImage,
  born2beRoot,
  libft,
  teamsImage,
  ftPrintF,
  habitsImage,
  getNextLine,
  igniteGym,
  apiImage,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'Sobre',
  },
  {
    id: 'work',
    title: 'Trabalhos',
  },
  {
    id: 'contact',
    title: 'Contato',
  },
];

const services = [
  {
    title: 'Desenvolvedor Web',
    icon: web,
  },
  {
    title: 'Desenvolvedor React-Native',
    icon: mobile,
  },
  {
    title: 'Desenvolvedor Backend',
    icon: backend,
  },
];

const technologies = [
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'docker',
    icon: docker,
  },
  {
    name: '.Net',
    icon: dotNet,
  },
  {
    name: 'C',
    icon: c,
  },
  {
    name: 'Jest',
    icon: jest,
  },
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'Shell Script',
    icon: shellScript,
  },
];

const experiences = [
  {
    title: 'Summer de Instrução',
    company_name: 'Trybe',
    icon: trybe,
    date: 'Outubro de 2022 - Março de 2023',
    points: [
      'Realização de monitorias técnicas individuais e coletivas, revisão de conteúdo de forma síncrona e suporte alunos pelo Slack para resolução de dúvidas sobre o conteudo.',
      'As monitorias abordavam temas já ensinados no curriculo da Trybe tais quais: Lógica de Programação, React, Testes Únitarios, Redux, Backend, Clean-Arch, etc.',
    ],
  },
  {
    title: 'Estagio em Desenvolvimento Frontend',
    company_name: 'Class Solutions LTDA',
    icon: classSolutions,
    date: 'Junho de 2022 - Outubro de 2022',
    points: [
      'Desenvolvimento de Intranets empresariais utilizando SharePoint, React, JQuery, Typescript',
    ],
  },
  {
    title: 'Analista de Mídias Digitais Bilingue',
    company_name: 'Atento',
    icon: atento,
    date: 'Dezembro de 2018 - Novembro de  2021',
    points: [
      'Suporte técnico a comunidade de jogadores de jogos da Riot Games',
      'Gerencimaneto das comunidades de jogos como Valorant e LoL em canais como Discord, Facebook, Forum.',
      'Suporte e manutenção do ambiente desses jogos, tratando denuncias de toxicidade, hacking, violação de regras.',
      'Analise de relatorios de bugs para passar para o time de Devs',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Trybe Futebol Clube',
    description:
      'Uma aplicação FullStack que exemplifica o gerenciamento de um campoenato de futebol. Usuarios comuns são capazes de se logar, utlizando jwt auth e vizualizar tabelas e partidas em andamento ou finalizada. O Administrador é capaz de realizar um CRUD completo nas partidas. Esse projeto foi desenvolvido seguindo o padrão de Arquitetura limpa.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'sequelize',
        color: 'green-text-gradient',
      },
      {
        name: 'typescript',
        color: 'pink-text-gradient',
      },
      {
        name: 'clean-arch',
        color: 'blue-text-gradient',
      },
      {
        name: 'express',
        color: 'green-text-gradient',
      },
    ],
    image: tfcImage,
    source_code_link: 'https://github.com/gusttavocdn/trybe_futebol_clube',
    preview_url: 'https://trybe-futebol-clube-three.vercel.app/leaderboard',
  },
  {
    name: 'Otaku Dev Blog',
    description: 'Um blog utilizando a API do Github para gerenciar os posts',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'typescript',
        color: 'pink-text-gradient',
      },
      {
        name: 'chakraUI',
        color: 'green-text-gradient',
      },
    ],
    image: blogImage,
    source_code_link: 'https://github.com/gusttavocdn/otaku_dev_blog',
    preview_url: 'https://otaku-dev-blog.vercel.app/',
  },
  {
    name: 'AluraFlix - Server',
    description:
      'Uma API feita como parte do Challenge Backend 5°Edição da Alura. Basicamente essa API permite o gerenciamento de um CRUD de videos, sendo necessario autenticação de usuarios para gerenciar o sistema.',
    tags: [
      {
        name: '.NET',
        color: 'blue-text-gradient',
      },
      {
        name: 'entityframework',
        color: 'pink-text-gradient',
      },
      {
        name: 'mvc',
        color: 'green-text-gradient',
      },
    ],
    image: apiImage,
    source_code_link: 'https://github.com/gusttavocdn/aluraflix_backend',
  },
  {
    name: 'Ignite Gym',
    description:
      'O Ignite Gym é um applicativo mobile capaz de mostrar alguns exercicios para os usuarios fazerem. Permite criação de contas e os dados são salvos no celular utilizando Async Storage.',
    tags: [
      {
        name: 'reactnative',
        color: 'blue-text-gradient',
      },
      {
        name: 'asyncstorage',
        color: 'pink-text-gradient',
      },
      {
        name: 'styledcomponents',
        color: 'green-text-gradient',
      },
    ],
    image: igniteGym,
    source_code_link: 'https://github.com/gusttavocdn/ignite_gym',
  },
  {
    name: 'Habits',
    description:
      'Essa aplicação é um Habit Tracker onde o usuario pode cadastrar habitos diarios e fazer controle dos habitos cumpridos durante o dia. Foi desenvolvida uma versão Web e Mobile mais a API para gerenciamento.',
    tags: [
      {
        name: 'reactnative',
        color: 'blue-text-gradient',
      },
      {
        name: 'prisma',
        color: 'green-text-gradient',
      },
      {
        name: 'fastify',
        color: 'pink-text-gradient',
      },
    ],
    image: habitsImage,
    source_code_link: 'https://github.com/gusttavocdn/habits_tracker',
  },
  {
    name: 'Teams',
    description:
      'Teams é um app mobile que permite a criação de turmas para administração de competições e jogos. Esse é um projeto desenvolvido com o intuito de aprimorar meus conhecimentos em React Native e Typescript.',
    tags: [
      {
        name: 'reactnative',
        color: 'blue-text-gradient',
      },
      {
        name: 'asyncStorage',
        color: 'green-text-gradient',
      },
      {
        name: 'styledcomponents',
        color: 'pink-text-gradient',
      },
    ],
    image: teamsImage,
    source_code_link: 'https://github.com/gusttavocdn/teams',
  },
  {
    name: 'Born2BeRoot',
    description:
      'Esse é o quarto projeto do curriculo da 42SP. Consiste em configurar um servidor debian utilizando conceitos básicos de segurança.',
    tags: [
      {
        name: 'debian',
        color: 'blue-text-gradient',
      },
      {
        name: 'shellscript',
        color: 'green-text-gradient',
      },
      {
        name: 'virtualbox',
        color: 'pink-text-gradient',
      },
    ],
    image: born2beRoot,
    source_code_link: 'https://github.com/gusttavocdn/born2beroot',
  },
  {
    name: 'FT_PRINTF',
    description:
      'Esse é o terceiro projeto do curriculo da 42SP. Consiste em criar uma versão propria da função printf do C.',
    tags: [
      {
        name: 'C',
        color: 'blue-text-gradient',
      },
      {
        name: 'makefile',
        color: 'green-text-gradient',
      },
      {
        name: 'logica',
        color: 'pink-text-gradient',
      },
    ],
    image: ftPrintF,
    source_code_link: 'https://github.com/gusttavocdn/ft_printf',
  },
  {
    name: 'GET_NEXT_LINE',
    description:
      'Esse é o segundo projeto do curriculo da 42SP. Consiste em criar uma função que seja capaz de ler de um fd uma linha por vez até o fim.',
    tags: [
      {
        name: 'C',
        color: 'blue-text-gradient',
      },
      {
        name: 'makefile',
        color: 'green-text-gradient',
      },
      {
        name: 'logica',
        color: 'pink-text-gradient',
      },
    ],
    image: getNextLine,
    source_code_link: 'https://github.com/gusttavocdn/get_next_line',
  },
  {
    name: 'LIBFT',
    description:
      'Esse é o primeiro projeto do curriculo da 42. Consiste em recriar diversas funções padrão da linguagem para serem usadas durante o desenvolvimento du curso, visto que não podemos usar as originais. Essa é uma biblioteca vive e novas funções podem ser adicionadas a ela aumentando suas funcionalidades.',
    tags: [
      {
        name: 'C',
        color: 'blue-text-gradient',
      },
      {
        name: 'makefile',
        color: 'green-text-gradient',
      },
      {
        name: 'logica',
        color: 'pink-text-gradient',
      },
    ],
    image: libft,
    source_code_link: 'https://github.com/gusttavocdn/libft',
  },
];

export { services, technologies, experiences, testimonials, projects };
