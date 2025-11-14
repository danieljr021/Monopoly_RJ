#  Monopoly: Edição Rio de Janeiro

Este é um projeto de customização e modernização de um jogo Monopoly clássico de código aberto, desenvolvido em JavaScript, HTML e CSS.

O projeto original foi totalmente traduzido para Português do Brasil e adaptado com um tabuleiro temático, regras e cartas personalizadas para a cidade do Rio de Janeiro.



---

## 🚀 Principais Modificações e Recursos

Este projeto foi além de uma simples tradução, incorporando novas lógicas de jogo e modernizando a estrutura do código original.

### 1. Localização e Customização (Rio de Janeiro)
* **Tradução Completa:** Toda a interface, alertas, pop-ups e cartas foram traduzidos para Português do Brasil.
* **Tabuleiro Personalizado:** As propriedades do tabuleiro clássico foram substituídas por bairros e locais icônicos do Rio de Janeiro, desde Bangu até Leblon.
* **Cartas Temáticas "Cariocas":** As cartas de "Sorte" e "Cofre" foram reescritas com eventos temáticos do Rio, como "Multado por estacionar no calçadão" ou "Achou uma carteira na Lapa".

### 2. Mudanças de Lógica (Originalidade)
* **Nova Regra "Estacionamento Grátis":** Foi implementada a popular regra da casa onde todo o dinheiro pago em impostos (IPTU e IPVA) é acumulado em um pote. O primeiro jogador a cair em "Estacionamento Grátis" coleta todo o valor.

### 3. Modernização de Código (Refatoração)
* **HTML5 Moderno:** O `DOCTYPE` do projeto foi atualizado do antigo `XHTML 1.0 Strict` para o padrão moderno **HTML5**, e a tag `<html>` foi definida para `pt-br`.
* **Refatoração do Layout:** O painel de controle principal do jogo, que era estruturado com `<table>` (uma prática antiga), foi totalmente refatorado para usar `<div>`s semânticas e **CSS Flexbox**.
* **Restilização da Interface:** A folha de estilos (`styles.css`) foi atualizada para criar um visual mais limpo, incluindo:
    * Botões "flat" modernos.
    * Uso de `box-shadow` (sombras) em vez de bordas pretas grossas nos painéis.
    * Novas fontes (Roboto) e a cor verde clássica do tabuleiro.

---

## 🛠️ Como Executar

Este jogo roda inteiramente no navegador, sem necessidade de um servidor.

1.  Clone ou baixe este repositório.
2.  Certifique-se de que todos os arquivos (`index.html`, `tabuleiro.js`, `monopoly.js`, `ai.js`, `styles.css` e `jquery.min.js`) estão na mesma pasta.
3.  Abra o arquivo `index.html` em qualquer navegador web (Chrome, Firefox, Edge, etc.).

---

