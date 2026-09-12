# Portfólio — Caio Firmino (React)

Redesign completo do portfólio pessoal, em **React + Vite + Tailwind CSS v4 + Framer Motion**.

## Conceito

Identidade visual escura, inspirada em terminal e Git: tipografia serifada (Fraunces) para
personalidade, monoespaçada (IBM Plex Mono) para labels e dados, paleta em tons de carvão quente
com destaque âmbar. A seção de experiência é um "git log" navegável, e o hero abre com uma
sequência de terminal (`whoami`) que se desenrola em uma única animação orquestrada.

## Rodando localmente

```bash
npm install
npm run dev       # ambiente de desenvolvimento
npm run build     # gera a pasta dist/ para produção
npm run preview   # serve a build de produção localmente
```

## Estrutura

```
src/
├── data/content.js       # todo o conteúdo (currículo) centralizado aqui
├── components/
│   ├── Nav.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Experience.jsx    # timeline em estilo "git log"
│   ├── Education.jsx
│   ├── Contact.jsx       # formulário de contato
│   └── Toast.jsx
└── App.jsx
public/
└── curriculo-caio-firmino.pdf   # currículo baixável pelo botão do hero
```

## Editando o conteúdo

Praticamente todo texto (nome, resumo, projetos, experiências, educação, cursos) vive em
`src/data/content.js` — não precisa mexer nos componentes pra atualizar currículo ou projetos.

## Configurando o envio de mensagens (EmailJS)

O formulário de contato usa [EmailJS](https://www.emailjs.com) pra mandar as mensagens direto pro
seu email, sem precisar de um servidor próprio. Passo a passo:

1. Crie uma conta gratuita em https://www.emailjs.com (o plano free cobre uso pessoal de portfólio).
2. Em **Email Services**, adicione um serviço (ex: conecte seu Gmail) e anote o **Service ID**.
3. Em **Email Templates**, crie um template usando estas variáveis no corpo do email:
   `{{name}}`, `{{email}}`, `{{subject}}`, `{{message}}`. Anote o **Template ID**.
4. Em **Account → General**, copie sua **Public Key**.
5. Na raiz do projeto, copie `.env.example` para `.env` e preencha os três valores:

   ```bash
   cp .env.example .env
   ```

   ```
   VITE_EMAILJS_SERVICE_ID=seu_service_id
   VITE_EMAILJS_TEMPLATE_ID=seu_template_id
   VITE_EMAILJS_PUBLIC_KEY=sua_public_key
   ```

6. Reinicie o `npm run dev` (variáveis de ambiente só são lidas na inicialização).

**Se for fazer deploy (Vercel/Netlify)**: adicione essas mesmas três variáveis nas configurações
de "Environment Variables" do projeto na plataforma — o arquivo `.env` nunca é enviado pro Git
(está no `.gitignore`), então sem isso o formulário não vai funcionar em produção.

Sem essas variáveis configuradas, o botão "Enviar mensagem" mostra um aviso educado em vez de travar.

## Deploy

O projeto gera arquivos estáticos padrão (`npm run build` → pasta `dist/`), então funciona direto
em Vercel, Netlify ou GitHub Pages. Na Vercel, é só importar o repositório com o framework preset
"Vite" — nenhuma configuração extra é necessária.

## O que foi mantido do site anterior

- Mensagem de sucesso ao enviar o formulário (toast).
- Dados de contato reais (email, telefone, GitHub, LinkedIn).
