# Hackadev - Fashionista

## ❓ O que é:

Projeto prático em grupo de longo prazo que vai simular ambiente das empresas durante a construção de um e-commerce.

## Membros do Grupo

- Igor Matheus (Líder) - https://github.com/Igor-mt | https://www.linkedin.com/in/igor-matheus-lopes-de-lima-800788163/
- Lucas Santana - https://github.com/LukSantana | https://www.linkedin.com/in/luksantana/
- Gustavo Araújo - https://github.com/Gustavo-Ae | https://www.linkedin.com/in/gustavoae/
- Davi Silveira - https://github.com/Kayzwk | https://www.linkedin.com/in/kayzwk/
- Pedro Paulo - https://github.com/pp-gomes | https://www.linkedin.com/in/pp-gomes/

## 💻 Construção da aplicação:

- Front-End
  - Criação de telas e interatividade utilizando React.
  - Criação de um carrinho funcional.

- Back-End
  - Criação de um banco de dados em PostgreSQL.
  - Criação de uma API para comunicação do front-end com o banco de dados.

## 👨‍💻👩‍💻 Tecnologias
- React
- NodeJS
- PostgreSQL
- CSS

## 🎯 Objetivo

Estimular o trabalho em grupo, comunicação e organização. Auxiliar no desenvolvimento das habilidades técnicas. Simular ambiente de trabalho em uma empresa.

## Regras

- Deve-se implementar todas funcionalidades pedidas em cada fase.
- Deve ser mobile first, possuindo uma experiência satisfatória tanto em mobile quanto em desktop.
- Deve ser um SPA (Single Page Application).
- Deve-se fazer deploy do projeto, servindo-o no Netlify.
- Não utilize frameworks CSS como Bootstrap, Foundation e afins.

## Requisitos obrigatórios

- Para cada item do catálogo de produtos as seguintes informações devem estar na página:
  - Imagem
  - Nome
  - Preço
  - Status "Em promoção"
  - Preço promocional (se disponível)
  - Tamanhos disponíveis
  - Selo "Promoção"
- Deve ser possível adicionar itens por tamanho no carrinho de compras.
- Deve ser possível visualizar os itens adicionados no carrinho de compras, exibindo imagem, nome, preço e quantidade.
- Deve ser possível remover itens do carrinho de compras.

### Propriedades de um produto (referência):

```json
{
  "id": "Id do produto",
  "name": "Nome do produto",
  "category": "Código de categoria",
  "color": "Nome da cor do produto",
  "on_sale": "booleano - Se o produto está em promoção",
  "regular_price": "preço sem promoção",
  "actual_price": "preço com promoção",
  "discount_percentage": "% de desconto da promoção",
  "installments": "quantidade de parcelas",
  "sizes": [
    {
      "available": "booleano - indica se o tamanho está disponível",
      "size": "nome do tamanho",
      "sku": "código do produto + código do tamanho (para adicionar no carrinho)"
    }
  ]
}
```

## Deploy

A recomendação é para que o deploy seja feito no Netlify ou similar para o Front-End e Heroku ou similar para o back-end.

## 🗃 Links de organização 

- Notion (Fase 2): https://broad-ground-81b.notion.site/Hackadev-Fashionista-Fase-2-c4af1190883d46b0af4d930bf58cae9a
- Notion (Fase 3): https://broad-ground-81b.notion.site/Hackadev-Fashionista-Fase-3-1c76f29cd07147878ca2fef4c31936d5
- Layout no Figma: https://www.figma.com/file/hVS7dnhOhsgdaSw1zi57pL/Fashionista-E-commerce?node-id=0%3A1