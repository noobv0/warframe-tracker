# Warframe Tracker

> 🚧 Projeto em desenvolvimento ativo — funcionalidades, dados e design ainda podem mudar bastante.

App em React para acompanhar seu progresso no Warframe. A ideia é ser o lugar único onde você marca o que já farmou e o que falta, sem precisar ficar recorrendo à wiki toda hora.

## Como funciona

### Aba Warframes

Lista todos os Warframes do jogo e, logo em seguida de cada um, sua versão **Prime** (quando existe) — ex: Ash, Ash Prime, Atlas, Atlas Prime...

Clicando em um card, abre um painel com:
- As 4 peças (Blueprint, Neuroptics, Chassis, Sistemas), cada uma com checkbox e a **fonte onde ela dropa** (chefe, missão, bounty ou, no caso das Primes, a relíquia).
- Um campo de notas livre (ex: "falta farmar Neuroptics").

Peças e notas salvam sozinhas conforme você marca/digita — não tem botão de salvar. Frames sem versão Prime farmável (caso raro, como Excalibur Prime, exclusivo de Founders) mostram um aviso no lugar do checklist.

Dá pra buscar por nome, filtrar (todos/pendentes/completos) e ordenar.

### Aba Semanais

Checklist de tudo que reseta toda segunda-feira 00:00 UTC — baseado na [wiki oficial](https://wiki.warframe.com/w/Reset), sem eventos, sem Baro Ki'Teer e sem itens únicos. Dividido em:
- **Atividades**: Archon Hunt, Netracells, Nightwave, Archimedeas, Circuito, etc.
- **Vendedores**: ofertas semanais da Palladino, Yonta, Teshin, Bird 3, Kaya, Acrithis, Cavalero...

O **Circuito** (normal e Steel Path) mostra automaticamente qual é a leva de frames/armas Incarnon da semana atual, calculado pela rotação fixa conhecida — sem precisar buscar isso em nenhum site toda semana.

A checklist reseta sozinha a cada virada de semana, mantendo as notas.

### Geral

- Tema claro/escuro (alterna no ícone do cabeçalho).
- Todo o progresso fica salvo só no seu navegador (`localStorage`) — nada é enviado pra nenhum servidor.

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

## Roadmap

- Aba de resets diários
- Mais fontes de drop revisadas (dados levantados manualmente da wiki, podem ter algum erro pontual)
