# DevBase 🔢

O **DevBase** é um conversor de bases numéricas (Decimal, Hexadecimal e Binário) moderno e de alta performance. Projetado especificamente para desenvolvedores, ele oferece conversão em tempo real com uma interface limpa, focada em produtividade e precisão.

## 🚀 Tecnologias

* **Vue 3** (Composition API)
* **TypeScript** (Typed Logic)
* **Tailwind CSS v4** (Modern UI)
* **Vite** (Next Generation Frontend Tooling)
* **Vitest** (Unit Testing)

## 🏗️ Arquitetura e Boas Práticas

Diferente de conversores simples, o **DevBase** foi construído utilizando princípios sólidos de engenharia:

* **Domain-Driven Design (DDD):** A lógica de conversão reside no `Value Object` `NumericValue`, protegendo as regras de negócio de efeitos colaterais da UI.
* **Object Calisthenics:** Código escrito sem o uso de `else` e com validações *fail-fast*, garantindo que apenas estados numéricos válidos sejam processados.
* **API Nativa:** Substituição de bibliotecas externas de clipboard pela API nativa do navegador (`navigator.clipboard`).
* **Erasable Syntax Only:** Total compatibilidade com compiladores TypeScript ultra-rápidos.

## 📦 Instalação e Execução

Para rodar o projeto localmente, siga os passos abaixo:

1. Clone o repositório:
```bash
git clone https://github.com/luizhanauer/devbase.git
```

2. Acesse a pasta do projeto:

```bash
cd devbase
```

3. Instale as dependências:

```bash
npm install
```

4. Execute o servidor de desenvolvimento:

```bash
npm run dev
```

## 🧪 Como rodar os testes

Para garantir a precisão matemática das conversões, rode os testes unitários com o comando:

```bash
npm run test

```

## Contribuição

Contribuições são bem-vindas! Se você encontrar algum problema ou tiver sugestões para melhorar a aplicação, sinta-se à vontade para abrir uma issue ou enviar um pull request.

Se você gostou do meu trabalho e quer me agradecer, você pode me pagar um café :)

<a href="https://www.paypal.com/donate/?hosted_button_id=SFR785YEYHC4E" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 40px !important;width: 150px !important;" ></a>

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo LICENSE para obter mais informações.

