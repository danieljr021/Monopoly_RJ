# 🎮 Pequeno Programador

Um jogo de plataforma 2D de rolagem lateral onde você é um "Pequeno Programador" em uma jornada para se tornar Digno. Os inimigos? As próprias linguagens: **HTML**, **CSS** e **JavaScript**!

[cite_start]Este projeto foi desenvolvido como **Trabalho Final para a disciplina de Desenvolvimento Web II**  [cite_start]do curso de Análise e Desenvolvimento de Sistemas (UniLaSalle)[cite: 1]. [cite_start]O objetivo era construir um jogo 2D funcional usando apenas tecnologias web nativas.

## 🕹️ Como Jogar

-   **Pular:** Seta para Cima (ou Barra de Espaço)
-   [cite_start]**Objetivo:** Coletar o máximo de "Fragmentos de Conhecimento" (itens) [cite: 35] [cite_start]antes que o tempo acabe[cite: 37].
-   [cite_start]**Cuidado:** Os obstáculos (HTML, CSS, JS) [cite: 32] não te matam, mas te "atordoam" por 1 segundo, fazendo você perder um tempo valioso!

## ✨ Funcionalidades Implementadas

O jogo cumpre todos os requisitos obrigatórios do projeto:

* [cite_start]**Estrutura SPA:** O jogo roda como uma Single Page Application [cite: 61][cite_start], com tela inicial [cite: 62][cite_start], tela de jogo e tela de Game Over[cite: 45].
* [cite_start]**Personagem Animado:** Animação de corrida feita com *spritesheet* em CSS e troca de *sprite* para o pulo[cite: 31].
* [cite_start]**Efeito Parallax:** O fundo (nuvens) se move em uma velocidade diferente do cenário principal, criando profundidade[cite: 27].
* **Gameplay:**
    * [cite_start]Contador de itens[cite: 36].
    * [cite_start]Timer regressivo[cite: 37].
    * [cite_start]Mecânica de "Stun" ao colidir com obstáculos[cite: 32].
    * [cite_start]Botão para reiniciar o jogo[cite: 47].

## 🚀 Tecnologias Utilizadas

Este projeto foi construído do zero utilizando exclusivamente:

* **HTML5:** Para a estrutura semântica das telas (SPA).
* **CSS3:** Para toda a estilização, efeito parallax, animações de *spritesheet* (`@keyframes` e `steps()`) e o efeito de "hit".
* **JavaScript (ES6+):** Para toda a lógica do jogo, incluindo:
    * Manipulação do DOM (criação e remoção de elementos).
    * Física (gravidade e pulo).
    * Detecção de colisão.
    * Gerenciamento de estado (telas, timers, pontuação).
