---

# SWAPI Project

Este projeto é uma aplicação que consome a [SWAPI (Star Wars API)](https://swapi.dev/) para obter dados sobre o universo Star Wars, incluindo planetas, naves, personagens, filmes, espécies, e veículos. O projeto foi desenvolvido com uma estrutura de testes usando **Jest**, verificando tanto os endpoints existentes quanto o manuseio de rotas incorretas.

## Sumário

- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Uso](#uso)
- [Testes](#testes)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Pré-requisitos

- **Node.js** (v14 ou superior)
- **npm** (v6 ou superior)

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/ClaytonRochaJr/Testes-com-WorkFlow-Pipeline
   cd swapi-project
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

## Uso

Para rodar o projeto e fazer requisições à API SWAPI:

```bash
node app.js
```

> Este projeto é configurado para consumir dados da SWAPI, então certifique-se de ter uma conexão com a internet.

## Testes

Este projeto utiliza **Jest** para realizar testes automatizados nas requisições feitas à API SWAPI. 

### Executando os Testes

Para rodar todos os testes, execute:

```bash
npm test
```

### Cobertura dos Testes

Os testes cobrem os seguintes pontos:
- Requisições a diferentes endpoints da SWAPI (`/planets`, `/starships`, `/films`, etc.).
- Verificação de rotas válidas e retorno dos dados corretos.
- Verificação de rotas inexistentes para garantir que a aplicação trate erros (ex.: `/heroes` e `/jedi`).
- Dados específicos em endpoints, como nomes de planetas, naves e diretores de filmes.

### Exemplos de Testes

1. Teste para listar todos os planetas e verificar se retorna uma lista válida.
2. Teste para verificar se a nave "Millennium Falcon" está presente nos dados da API.
3. Teste para validar o retorno correto do filme "A New Hope".
4. Teste para garantir que uma rota inválida (`/heroes`) retorna erro 404.

Para detalhes, consulte o arquivo `tests/swapi.test.js`.

## Funcionalidades

- **Obtenção de dados sobre Star Wars**:
  - Planetas
  - Naves
  - Filmes
  - Espécies
  - Veículos
  - Personagens
- **Cobertura de Testes**:
  - Testes de endpoints existentes e dados específicos.
  - Testes de rotas inexistentes para garantir que a aplicação responde adequadamente aos erros.

## Tecnologias Utilizadas

- **Node.js** - Plataforma de desenvolvimento
- **Jest** - Framework de testes
- **node-fetch** - Biblioteca para requisições HTTP

## Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Fork o projeto.
2. Crie uma branch para sua feature (`git checkout -b minha-feature`).
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`).
4. Envie para a branch (`git push origin minha-feature`).
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a Licença MIT - consulte o arquivo [LICENSE](LICENSE) para detalhes.

---
