# 🎮 Pequeno Programador

Um jogo de plataforma 2D de rolagem lateral onde você é um "Pequeno Programador" em uma jornada para se tornar Digno. Os inimigos? As próprias linguagens: **HTML**, **CSS** e **JavaScript**!

Este projeto foi desenvolvido como **Trabalho Final para a disciplina de Desenvolvimento Web II** do curso de Sistemas de Informação.
O objetivo era construir um jogo 2D funcional usando apenas tecnologias web nativas.

## 🕹️ Como Jogar

-   **Pular:** Seta para Cima (ou Barra de Espaço)
-   **Objetivo:** Coletar o máximo de "Fragmentos de Conhecimento" (itens) antes que o tempo acabe.
-   **Cuidado:** Os obstáculos (HTML, CSS, JS)  não te matam, mas te "atordoam" por 1 segundo, fazendo você perder um tempo valioso!

## ✨ Funcionalidades Implementadas

O jogo cumpre todos os requisitos obrigatórios do projeto:

* **Estrutura SPA:** O jogo roda como uma Single Page Application , com tela inicial, tela de jogo e tela de Game Over.
* **Personagem Animado:** Animação de corrida feita com *spritesheet* em CSS e troca de *sprite* para o pulo.
* **Efeito Parallax:** O fundo (nuvens) se move em uma velocidade diferente do cenário principal, criando profundidade.
* **Gameplay:**
    * Contador de itens.
    * Timer regressivo.
    * Mecânica de "Stun" ao colidir com obstáculos.
    * Botão para reiniciar o jogo.

## 🚀 Tecnologias Utilizadas

Este projeto foi construído do zero utilizando exclusivamente:

* **HTML5:** Para a estrutura semântica das telas (SPA).
* **CSS3:** Para toda a estilização, efeito parallax, animações de *spritesheet* (`@keyframes` e `steps()`) e o efeito de "hit".
* **JavaScript (ES6+):** Para toda a lógica do jogo, incluindo:
    * Manipulação do DOM (criação e remoção de elementos).
    * Física (gravidade e pulo).
    * Detecção de colisão.
    * Gerenciamento de estado (telas, timers, pontuação).
