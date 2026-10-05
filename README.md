# 🐍 Iguaçu Seguro

> Guia digital de prevenção de acidentes com animais peçonhentos na Região do Iguaçu — Foz do Iguaçu e entorno do Parque Nacional do Iguaçu (PR).

## Sobre o projeto

O **Iguaçu Seguro** é uma SPA (Single Page Application) educativa que reúne, em um só lugar, informações de prevenção, primeiros socorros e identificação de animais peçonhentos comuns na região do Iguaçu. O conteúdo é baseado em duas fontes oficiais:

- Guia **"Animais Venenosos e Peçonhentos da Região do Iguaçu — Prevenção e Cuidados"** (Projeto Onças do Iguaçu — ICMBio / WWF-Brasil / CENAP);
- Aplicativo **"Animais Peçonhentos"** do Ministério da Saúde (CGZV/DEDT/SVSA/MS — Meu SUS Digital).

> ⚠️ Material informativo e educativo. **Não substitui avaliação médica.** Em caso de acidente, procure imediatamente o serviço de saúde mais próximo.

## Problema que o serviço pretende resolver

A região do Iguaçu concentra grande biodiversidade — incluindo espécies peçonhentas de relevância médica como jararaca, cascavel, coral, aranha-armadeira, escorpião-amarelo e a lagarta Lonomia. Ao mesmo tempo, convive com um fluxo intenso de **trabalhadores rurais, moradores de áreas de mata, guias de turismo e visitantes** do Parque Nacional.

Os problemas que o serviço ataca:

- **Informação dispersa**: as orientações de prevenção estão espalhadas em guias em PDF, cartazes e aplicativos nacionais, sem foco regional;
- **Desconhecimento de conduta correta**: mitos populares (garrote, "chupar a picada", pó de café) ainda causam agravamento de quadros clínicos;
- **Dificuldade de identificar a espécie**: sem saber qual animal causou o acidente, a vítima não consegue relatar informações úteis ao hospital;
- **Demora no atendimento adequado**: muitas vítimas não sabem qual unidade procurar (hospital de referência × UPA), atrasando a soroterapia.

O Iguaçu Seguro centraliza essa informação em um site rápido, leve e acessível pelo celular — o dispositivo mais presente em campo.

## Público-alvo

- **Trabalhadores rurais** da região (agricultores, lenhadores, jardineiros);
- **Moradores** de áreas próximas à mata e ao Parque Nacional;
- **Guias de turismo e condutores de visitantes** de Foz do Iguaçu e região;
- **Professores e escolas** rurais, como material de apoio educativo;
- **Famílias** com crianças, para prevenção doméstica.

## Funcionalidades

- **Navegação SPA real** — router por hash (`#/inicio`, `#/emergencia`, `#/socorros`, `#/prevencao`, `#/animais`, `#/quiz`, `#/soro`, `#/rede`), com histórico do navegador e link ativo destacado;
- **Galeria de animais** com **busca em tempo real** e filtro por grupo (cobras, aranhas, escorpiões, outros), com fichas expansíveis por espécie (descrição, sintomas, tratamento e onde procurar atendimento);
- **Quiz interativo** "Teste seus conhecimentos" com feedback imediato, placar e melhor pontuação salva em `localStorage`;
- **Botões de ligação direta** (`tel:`) para SAMU 192, Bombeiros 193 e Hospital Municipal Padre Germano Lauck (referência para cobras e Lonomia, 24h);
- **Modo claro/escuro** com preferência salva em `localStorage`;
- **Barra de emergência fixa** no rodapé (mobile) e botão "voltar ao topo";
- **Layout 100% responsivo** (mobile-first), contraste AA e navegação acessível.

### Rotas da aplicação

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

## Tecnologias utilizadas

- **HTML5, CSS3 e JavaScript puro (vanilla)** — sem frameworks, sem CDNs, sem backend;
- **Roteamento SPA por hash** implementado à mão (evento `hashchange`);
- **Dados estáticos** em constantes tipo JSON (`js/dados.js`), prontos para migração para API;
- **`localStorage`** para preferências do usuário (tema e recorde do quiz);
- **GitHub Actions + GitHub Pages** para deploy automático da pasta `src/`.

## Possibilidades de monetização

O produto tem vocação social, mas admite modelos sustentáveis sem comprometer o acesso gratuito ao conteúdo de emergência:

- **Patrocínio institucional**: apoio de órgãos públicos (Prefeitura de Foz do Iguaçu, ICMBio, Secretaria de Saúde do Paraná) ou ONGs ambientais (WWF-Brasil) para manutenção e expansão do conteúdo;
- **Publicidade contextual não intrusiva**: anúncios de produtos de segurança rural (botas, perneiras, luvas) e de operações de turismo responsável, exibidos apenas em seções de prevenção — nunca na seção de emergência;
- **Versão white-label para prefeituras**: licenciamento da plataforma para outros municípios com fauna peçonhenta relevante, com conteúdo regionalizado (dados, hospitais e espécies locais);
- **Conteúdo educacional licenciado**: pacotes de treinamento para escolas rurais, cooperativas agrícolas e empresas do setor (agro, energia, construção) com obrigações de segurança do trabalho;
- **Integrações pagas**: API de dados regionais para apps de turismo e trilhas do Parque Nacional.

> Princípio adotado: as informações de emergência e primeiros socorros permanecem **sempre gratuitas e sem barreiras**.

## Como executar o projeto localmente

## Como executar o projeto localmente

```bash
git clone https://github.com/SEU-USUARIO/integracao-continua.git
cd integracao-continua
npm start        # abre em http://localhost:8080
# alternativa sem npm: abra src/index.html direto no navegador
