const twilio = require('twilio');
const { API_KEY_WEATHER, YOUR_NUM, NUM_TWILIO, ACCOUNT_ID_TWILIO, AUTH } = require('./config.json');

function createMessage(text){
  client.messages
  .create({
    body: text,
    from: `${NUM_TWILIO}`,
    to: `${YOUR_NUM}`
  })
  .then((message) => console.log(`Message SID: ${message.sid}`))
  .catch((error) => console.error(`Erreur d'envoi de SMS: ${error.message}`));
}

const url = `https://api.openweathermap.org/data/2.5/weather?q=La%20Rochelle&appid=${API_KEY_WEATHER}&lang=fr&units=metric`;


const client = new twilio(ACCOUNT_ID_TWILIO, AUTH);

// Récupérer la météo
fetch(url).then((response) => response.json()).then((data) => {
  const weather = data.weather[0].description;
  const temperature = data.main.temp;
  const message = `Aujourd'hui, il fait ${temperature}°C et ${weather} à La Rochelle.`;
  createMessage(message);
});
