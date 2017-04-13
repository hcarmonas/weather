# Projeto Front-End VueJs + Utilizar Material Design (utilizando o framework Vue Material) (Responsive)

Foi consumindo a API de consulta da previsão do tempo do OpenWeatherMap. A API é free, mas é necessário se registrar para criar uma chave para usar a API

```bash
npm install # ou yarn install
npm run dev
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
