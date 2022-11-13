const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors')

app.use(cors())

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

    'brussels': {
      'Mayor': 'Philippe Close',
      'Country': 'Belgium',
      'Area': '32.61 km²'
    },

    'sydney': {
      'Mayor': 'Clover Moore',
      'Country': 'Australia',
      'Area': '12,368 km²'
    },

    'berlin': {
      'Mayor': 'Franziska Giffey',
      'Country': 'Germany',
      'Area': '891.8 km²'
    },

    'copenhagen': {
      'Mayor': 'Frank Jensen',
      'Country': 'Denmark',
      'Area': '179.8 km²'
    },

    'dublin': {
      'Mayor': 'Paul McAuliffe',
      'Country': 'Ireland',
      'Area': '117.8 km²'
    },

    'london': {
      'Mayor': 'Sadiq Khan',
      'Country': 'United Kingdom',
      'Area': '1,572 km²'
    },

    'rabat': {
      'Mayor': 'Asmaa Rhlalou',
      'Country': 'Morocco',
      'Area': '117 km²'
    },

    'washington': {
      'Mayor': 'Muriel Bowser',
      'Country': 'United States',
      'Area': '177 km²'
    },

    'abu dhabi': {
      'Mayor': 'Khalifa bin Zayed Al Nahyan',
      'Country': 'United Arab Emirates',
      'Area': '972 km²'
    },

    'rome': {
      'Mayor': 'Roberto Gualtieri',
      'Country': 'Italy',
      'Area': '1,285 km²'
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