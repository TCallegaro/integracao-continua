# integracao-continua
Repositório para a disciplina de Integração Contínua - Engenharia de Software - UTFPR-DV
# 🐍 Iguaçu Seguro

> Guia digital de prevenção de acidentes com animais peçonhentos na Região do Iguaçu — Foz do Iguaçu e entorno do Parque Nacional do Iguaçu (PR).

## 📖 Sobre o projeto

O **Iguaçu Seguro** é uma SPA (Single Page Application) educativa que reúne informações de prevenção, primeiros socorros e identificação de animais peçonhentos comuns na região do Iguaçu. Conteúdo baseado em duas fontes oficiais:

- Guia **"Animais Venenosos e Peçonhentos da Região do Iguaçu — Prevenção e Cuidados"** (Projeto Onças do Iguaçu — ICMBio / WWF-Brasil / CENAP);
- Aplicativo **"Animais Peçonhentos"** do Ministério da Saúde (CGZV/DEDT/SVSA/MS — Meu SUS Digital).

> ⚠️ Material informativo e educativo. **Não substitui avaliação médica.** Em caso de acidente, procure imediatamente o serviço de saúde mais próximo.

## ✨ Funcionalidades

- **Navegação SPA real** — router por hash (`#/inicio`, `#/emergencia`, `#/socorros`, `#/prevencao`, `#/animais`, `#/quiz`, `#/soro`, `#/rede`), com histórico do navegador e link ativo destacado;
- **Galeria de animais** com busca em tempo real, filtro por grupo e fichas expansíveis;
- **Quiz interativo** com feedback imediato e melhor pontuação salva em `localStorage`;
- **Botões de ligação direta** (SAMU 192, Bombeiros 193, Hospital Municipal de Foz do Iguaçu);
- **Modo claro/escuro** salvo em `localStorage`;
- **Barra de emergência fixa** no rodapé (mobile) e botão "voltar ao topo";
- **Layout 100% responsivo** (mobile-first), contraste AA e navegação acessível.

## 🧭 Rotas da aplicação

|
 Rota 
|
 Conteúdo 
|
|
---
|
---
|
|
`#/inicio`
|
 Apresentação, aviso de emergência e atalhos 
|
|
`#/emergencia`
|
 Telefones de emergência e rede de atendimento 
|
|
`#/socorros`
|
 Primeiros socorros em picada de cobra (fazer × nunca fazer) 
|
|
`#/prevencao`
|
 Prevenção no mato, em casa, contra aranhas/escorpiões e sapos 
|
|
`#/animais`
|
 Galeria com 19 espécies da região (busca + filtro) 
|
|
`#/quiz`
|
 Quiz educativo com pontuação 
|
|
`#/soro`
|
 Como o soro antiofídico é produzido (6 passos) 
|
|
`#/rede`
|
 Hospitais de referência, UPA, CIATox e curiosidades 
|
