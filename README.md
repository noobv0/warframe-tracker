# Warframe Tracker

App em React para acompanhar seu progresso no Warframe:

- **Warframes**: marque quais Warframes você já masterizou, com busca, filtro (todos/pendentes/completos), ordenação e notas por frame.
- **Semanais**: checklist das atividades que resetam toda segunda-feira (Archon Hunt, Netracells, Nightwave, Archimedea), com reset automático a cada nova semana.

Tema claro/escuro alternável. Progresso salvo localmente no navegador (`localStorage`).

## Rodando o projeto

```bash
npm install
npm start
```

Abre em [http://localhost:3000](http://localhost:3000).

## Stack

- [React](https://react.dev/) (via [Create React App](https://github.com/facebook/create-react-app))
- [Tailwind CSS](https://tailwindcss.com/)
- [lucide-react](https://lucide.dev/) para ícones

## Scripts

- `npm start` — modo desenvolvimento
- `npm test` — roda os testes
- `npm run build` — build de produção
