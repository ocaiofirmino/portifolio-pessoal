export const profile = {
  name: "Caio Firmino da Silva Barbosa",
  shortName: "Caio Firmino",
  location: "Rio de Janeiro, RJ",
  phone: "(21) 96871-8287",
  email: "caio.firmino002@gmail.com",
  github: "github.com/ocaiofirmino",
  githubUrl: "https://github.com/ocaiofirmino",
  linkedin: "linkedin.com/in/caio-firmino-115344236",
  linkedinUrl: "https://linkedin.com/in/caio-firmino-115344236",
  role: "Desenvolvedor Front-end",
  summary:
    "Estudante de Análise e Desenvolvimento de Sistemas na UNISUAM, focado em front-end. Construo interfaces com HTML, CSS, JavaScript e React, e uso Python e PHP quando o projeto pede. Antes de programar, passei anos resolvendo problema de gente em atendimento e gestão de equipe isso ainda molda como eu organizo um projeto.",
};

export const skills = [
  {
    group: "Linguagens",
    items: ["JavaScript", "PHP", "Python", "SQL", "HTML5", "CSS3", "React"],
  },
  {
    group: "Sistemas & ferramentas",
    items: ["Linux (Arch, NixOS, Fedora, Ubuntu)", "Windows", "VS Code", "XAMPP", "Git & GitHub", "MySQL", "PostgreSQL"],
  },
  {
    group: "Competências",
    items: ["Lógica de programação", "Resolução de problemas", "Trabalho em equipe", "Suporte ao usuário"],
  },
];

export const projects = [
  {
    id: "zelo",
    name: "Zelo — Finanças pessoais",
    period: "2026",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "SQLite / Cloudflare D1", "ExcelJS"],
    description:
      "MVP de controle financeiro pessoal com dashboard, cadastro de receitas e despesas, acompanhamento de parcelas, metas e limites por categoria. Interface responsiva com modo demonstração e exportação de extratos para Excel, CSV e Power BI.",
    href: "https://github.com/ocaiofirmino/zelo-financas",
    demoUrl: "https://zelo-financas.vercel.app",
    status: "Publicado · MVP v0.1.0",
  },
  {
    id: "fitmanager",
    name: "FitManager",
    period: "2026",
    stack: ["HTML", "CSS", "JavaScript", "Supabase"],
    description:
      "Sistema de gerenciamento para academias, com front-end em HTML, CSS e JavaScript puro. Dashboard, controle de dados e autenticação com Supabase como backend.",
    href: "https://github.com/ocaiofirmino/fitmanager",
    status: "Publicado",
  },
  {
    id: "junta-ai",
    name: "Junta.ai",
    period: "2026 · projeto em grupo",
    stack: ["React", "Vite", "Spring Boot", "PostgreSQL", "Azure"],
    description:
      "Projeto em equipe, do curso. Colaboro no front-end com stack React + Vite, dentro de um fluxo de trabalho com Pull Requests e resolução de conflitos de versionamento no Git.",
    href: "https://github.com/Junta-ai-br/junta-ai",
    status: "Em desenvolvimento",
  },
  {
    id: "site-clima",
    name: "Consulte o Clima",
    period: "2025",
    stack: ["HTML", "CSS", "JavaScript", "OpenWeatherMap API"],
    description:
      "Consulta de clima em tempo real com previsão para 5 dias, via OpenWeatherMap. Fundo com animações reativas à condição climática (sol, nuvens, chuva, neve) e layout mobile-first.",
    href: "https://github.com/ocaiofirmino/site-clima",
    status: "Publicado",
  },
];

// timeline no estilo "git log" — cada experiência é um commit
export const experience = [
  {
    hash: "a1c3f9e",
    role: "Assistente Administrativo",
    org: "Città Vet",
    period: "Jun 2026 — Set 2026",
    bullets: [
      "Geri a rotina administrativa da clínica, coordenando agenda de consultas, exames e procedimentos.",
      "Supervisionei a equipe de atendimento e apoio, organizando escalas e otimizando o fluxo de trabalho.",
      "Controlei estoque, caixa e contas a pagar/receber, mantendo a organização de dados e processos internos.",
      "Realizei controle de escala, garantindo cobertura adequada e eficiência operacional.",
      "Realizei a comissão dos veterinários, calculando e distribuindo pagamentos de forma precisa e transparente.",
      "Realizei a comissão dos profissionais de estética, assegurando a correta remuneração e incentivando o desempenho da equipe.",
    ],
  },
  {
    hash: "7e2b40d",
    role: "Atendente",
    org: "PetFun (Anteriormente Espaço Pet)",
    period: "Dez 2025 — Jun 2026",
    bullets: [
      "Organizei demandas e mantive o controle das rotinas do setor.",
      "Atendimento ao cliente e vendas ativas via televendas e WhatsApp.",
    ],
  },
  {
    hash: "5f819ac",
    role: "Assistente de Gerente",
    org: "Rede Pés e Patas",
    period: "Fev 2025 — Dez 2025",
    bullets: [
      "Apoiei a gestão de pessoas e a organização das rotinas administrativas da loja.",
      "Apoiei no controle da escala de funcionários, garantindo cobertura adequada e eficiência operacional.",
      "Controle de estoque e fiscalização de caixa, reduzindo divergências no fechamento.",
    ],
  },
  {
    hash: "2d904b1",
    role: "Atendente",
    org: "Rede Pés e Patas",
    period: "Mai 2024 — Fev 2025",
    bullets: [
      "Atendimento direto ao cliente e suporte no uso de sistemas de vendas.",
      "Organização de produtos e controle do fluxo de estoque da loja.",
    ],
  },
];

export const education = [
  {
    school: "UNISUAM",
    degree: "Tecnólogo em Análise e Desenvolvimento de Sistemas (4º semestre)",
    period: "2025 — atual",
  },
  {
    school: "CIEP 223 Olympio Marquês dos Santos",
    degree: "Ensino Médio Completo",
    period: "Concluído em 2020",
  },
];

export const courses = [
  { name: "Desenvolvedor Full Stack Júnior", org: "+praTi e Codifica", status: "Cursando" },
  { name: "Crie um site simples usando HTML, CSS e JavaScript", org: "Fundação Bradesco", status: "Concluído" },
  { name: "Excel Intermediário", org: "Fundação Bradesco", status: "Concluído" },
  { name: "Montagem e Manutenção de Computadores", org: "MicroRio", status: "Concluído" },
];
