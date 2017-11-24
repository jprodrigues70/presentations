Getting started wiwth ARIA

Peraê, ARIA? O que é isso?

ARIA (Accessible Rich Internet Applications) - Bom, ARIA é uma especificação do W3C criada para prover acessibilidade às aplicações através de informações extra, passadas a leitores de tela via atributos de HTML. A ideia é dar um contexto melhor às interações dos usuários.

ARIA não afeta o modo como os elementos são exibidos, tão pouco afeta a funcionalidade e deve ser pensado apenas como uma camada extra de descrição para os leitores de tela.

## ARIA attributes

Os atributos ARIA são predefinidos e divididos em 2 categorias: roles e states & properties.

### ARIA roles

Um ARIA role é adicionado via `role="<ROLE TYPE>"` e não muda, uma vez definido.

Existem 4 categorias de ARIA roles.

- Landmark - indentifica
- Document
-
-

## Quando utilizar o ARIA

As definições de semântica nativas do HTML devem ser utilizadas e exploradas sempre, mas as vezes um padrão de design ou de interação torna essa tarefa impossível, e é aí que os atributos ARIA devem entrar em ação.

O ARIA também é útil para descrever elementos HTML mais recentes e que talvez não tenham suporte total no crossbrowser ou não sejam compreendidos pelos leitores de tela.

A ideia é preencher espaços em branco com os atributos ARIA. Em geral, para criar aplicações acessíveis, o nosso foco deve ser os princípios básicos de semântica do HTML, suporte ao teclado e contraste de cores.
