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
    testimonial: [
      'O Gustavo foi um dos grandes sujeitos que conheci na Trybe. Além de programar bem demais - e aplicando',
      'boas práticas de "clean code", SOLID e coisas mais avançadas que eu, particularmente, ainda vou levar muito',
      'tempo pra conseguir chegar aos pés do que ele faz -, ele tem uma didática fantástica e sempre fez questão de',
      'usar isso durante o curso: ele costumava ficar todo o dia até perto da meia noite ajudando o pessoal a revisar',
      'código, esclarecendo conceitos e, eventualmente, só trocando uma ideia mesmo. Também sempre trazia',
      'artigos interessantes e compartilhava com todos. ',
      'Enfim, o Gustavo é uma pessoa fantástica de se trabalhar por tudo o que ele traz para qualquer equipe:',
      'ele é muito ponderado, possui conhecimentos sólidos e procura aprender tudo sempre de uma maneira aprofundada,',
      'e tem um senso de coletividade que é raro.',
    ].join(''),
    name: 'Guilherme Garcia',
    designation: 'Deselvovedor FullStack',
    image: 'https://github.com/GuilhermeSoaresGarcia.png',
  },
  {
    testimonial: [
      'Gustavo é um DEV excelente que vai além dos frameworks e busca entender como as coisas funcionam por baixo dos panos.',
      'Em cada tópico ele estuda diversas fontes para ter um entendimento mais aprofundado,',
      ' não só apenas da aplicação imediata. ',
      'Além disso ele consegue ensinar de forma didática e engajar com a turma muito bem.',
      'Nos projetos ele entrega soluções além do pedido com testes, documentação detalhada ou novas funcionalidades.',
    ].join(''),
    name: 'Felipe Krein Rocha',
    designation: 'FullStack Developer',
    image: 'https://github.com/fkrein1.png',
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
