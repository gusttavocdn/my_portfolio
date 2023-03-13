import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
  trybe,
  atento,
  classSolutions,
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
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
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
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
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
    name: 'Car Rent',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Job IT',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: jobit,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Trip Guide',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: tripguide,
    source_code_link: 'https://github.com/',
  },
];

export { services, technologies, experiences, testimonials, projects };
