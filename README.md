# Desafio da vaga: Desenvolvedor Front-end

Mais detalhes sobre a vaga através desse por [meio deste link](https://www.itflex.com.br/vaga/desenvolvedor-front-end/)

Lembre que deve ser enviado o link do repositório com a resolução do desafio junto com seu currículo no formulátio final.

O desafio é criar uma aplicação de previsão do tempo, consumindo a [API de consulta da previsão do tempo do OpenWeatherMap](https://openweathermap.org/forecast5). A API é free, mas é necessário se [registrar](https://openweathermap.org/appid) para criar uma chave para usar a API. Favor **não incluir a sua chave no repositório**, por motivos de segurança.

A interface deve ser responsiva (desktop e mobile), deve utilizar Material Design e permitir
pesquisar a previsão do tempo para uma cidade pelo nome da cidade. Devem ser exibidos os seguintes
items na previsão:

- A previsão dos próximos 5 dias (utilizando a API de consulta da previsão)
- Temperatura mínima e máxima de cada dia
- Status da previsão (nublado, ensolarado, etc)
- Umidade (percentual)

O visual e as formas de interação com o webapp também serão utilizados como parte da avaliação.
O mapeamento dos códigos de status da previsão podem ser vistos [aqui](https://openweathermap.org/weather-conditions).

Neste repositório está a estrutura base para o desenvolvimento da aplicação, para realizar o desafio crie um fork deste repositório e desenvolva a aplicação com base nele

Requisitos do desafio:

- Utilizar este respositório como base para o desenvolvimento
- Utilizar VueJS
- Utilizar Material Design (utilizando o framework [Vue Material](https://vuematerial.github.io/))

Para ganhar alguns pontos extras, podem ser implementadas as funcionalidades abaixo:

- Autocompletar com as capitais do Brasil
- Salvar cidades favoritas (em memória, não é necessário ser permanente)
- Exibir as informações de tempo atuais
- Testes de código

Para rodar a aplicação, use o comando abaixo:

```bash
npm install # ou yarn install
npm run dev
```

O acesso a api já está implementado em `src/api.js`, e pode ser utilizado das seguintes formas:

```javascript
import api from './api'

// Via callback
api.forecast({q: 'Joinville,BR'}, function(data, err) {
  if (err) {
    console.error(err)
  }
  console.log(data)
})

// Com promises
api.forecast({q: 'Joinville,BR'})
  .then(data => console.log(data))
  .catch(err => console.error(err))

// Com a sintaxe async/await
try {
  let data = await api.forecast({q: 'Joinville,BR'})
  console.log(data)
} catch (err) {
  console.error(err)
}
```

Para passar a chave da api para a aplicação, o recomendado é o uso via variável de ambiente:

```bash
API_KEY="sua chave aqui" npm run dev
```

mas também é possível utilizar via código:

```javascript
const API_KEY = 'sua chave aqui'

import {OpenWeatherApi} from './api'

const api = new OpenWeatherApi({apiKey: API_KEY})

api.forecast({q: 'Joinville'}, (data, err) => console.log(data))
```
