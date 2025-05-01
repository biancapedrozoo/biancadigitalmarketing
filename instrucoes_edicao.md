# Instruções Básicas de Edição do Site Estático (HTML/CSS/JS)

Olá Bianca,

Este documento fornece orientações básicas sobre como editar o código-fonte do seu site estático.

## Estrutura dos Arquivos

O site está organizado da seguinte forma:

*   `/index.html`: A página inicial do site.
*   `/css/style.css`: O arquivo principal de estilos que define a aparência do site.
*   `/js/script.js`: O arquivo JavaScript, atualmente usado para o carrossel (Swiper.js).
*   `/images/`: Pasta contendo as imagens principais (logo, foto de perfil).
*   `/images/portfolio/`: Pasta contendo subpastas para cada projeto do portfólio, com suas respectivas imagens.
*   `/portfolio/`: Pasta contendo os arquivos HTML para cada página individual de projeto do portfólio (ex: `remax-station.html`, `fabricozi.html`, etc.).

## Ferramentas Necessárias

Para editar o site, você precisará de:

1.  **Editor de Código:** Um programa para editar arquivos de texto simples. Recomendações populares e gratuitas incluem:
    *   Visual Studio Code (VS Code)
    *   Sublime Text
    *   Atom
    *   Notepad++ (Windows)
2.  **Navegador Web:** Para visualizar as alterações (Chrome, Firefox, Edge, Safari).

## Editando Conteúdo

*   **Textos:** Para alterar textos (títulos, parágrafos, botões), abra o arquivo HTML correspondente (ex: `index.html` para a página inicial, ou um arquivo em `/portfolio/` para uma página de projeto) no seu editor de código. Localize o texto que deseja mudar e edite-o diretamente. Salve o arquivo.
*   **Imagens:**
    *   Para substituir uma imagem existente (como o logo ou sua foto de perfil), salve a nova imagem com o *mesmo nome e formato* da imagem antiga na pasta `/images/` ou na pasta específica do projeto em `/images/portfolio/`, substituindo o arquivo original.
    *   Para adicionar novas imagens (ex: a um projeto do portfólio), salve a imagem na pasta correspondente (ex: `/images/portfolio/novo-projeto/`) e adicione uma tag `<img>` no arquivo HTML do projeto (ex: `/portfolio/novo-projeto.html`), como nos exemplos existentes.
*   **Links:** Para alterar para onde um link ou botão aponta, edite o atributo `href` da tag `<a>` correspondente no arquivo HTML.
*   **Formulário de Contato (Google Forms):** O formulário está incorporado usando um `<iframe>` no `index.html`. Se você precisar alterar o formulário, faça as alterações diretamente no Google Forms. O `<iframe>` buscará a versão mais recente automaticamente. Se você criar um *novo* formulário no Google, precisará atualizar o atributo `src` do `<iframe>` no `index.html` com o novo link de incorporação.

## Editando Estilos (Avançado)

*   **Cores, Fontes, Layout:** A aparência do site é controlada pelo arquivo `/css/style.css`. Você pode editar este arquivo para alterar cores (definidas como variáveis `--pink`, `--dark-grey`, etc. no início), tamanhos de fonte, espaçamentos, etc. É recomendável ter algum conhecimento de CSS para fazer alterações significativas aqui.

## Visualizando Alterações

Após salvar as alterações em um arquivo HTML ou CSS, basta abrir o arquivo HTML correspondente no seu navegador (clicando duas vezes nele no seu explorador de arquivos) ou atualizar a página se ela já estiver aberta.

## Hospedando as Alterações

Como este é um site estático, para que as alterações fiquem visíveis online na URL pública (https://xlzasxlv.manus.space), os arquivos modificados precisam ser reenviados para a plataforma de hospedagem. Atualmente, o site está hospedado através do meu sistema. Se você precisar fazer alterações frequentes, podemos discutir opções para você ter controle direto sobre a hospedagem (como GitHub Pages, Netlify, Vercel, que oferecem planos gratuitos para sites estáticos).

Se precisar de ajuda com alguma edição específica ou com a hospedagem, pode me perguntar!

