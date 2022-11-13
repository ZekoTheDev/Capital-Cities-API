const express = require('express')
const app = express()
const PORT = 8000

const capitalCities = {

    'amsterdam': {
      'Mayor': 'Femke Halsema',
      'Country': 'The Netherlands',
      'Area': '219.3 km²'
    },

    'paris': {
      'Mayor': 'Anne Hidalgo',
      'Country': 'France',
      'Area': '105.4 km²'
    },

    'unknown': {
      'Mayor': 'Unknown',
      'Country': 'Unknown',
      'Area': 'Unknown'
    }
}

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html')
})

app.get('/api/:capital', (request, response) => {
  const chosenCapital = request.params.capital.toLowerCase()
  if (capitalCities[chosenCapital]){
    response.json(capitalCities[chosenCapital])
  }else {
    response.json(capitalCities['unknown'])
  };
})

app.listen(PORT, () => {
  console.log(`The server is now running on port ${PORT}`)
})