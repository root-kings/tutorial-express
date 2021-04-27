const mqtt = require('mqtt')

var client = mqtt.connect('mqtt://test.mosquitto.org')

client.on('connect', function () {
  client.subscribe('sharvari', function (err) {
    if (err) console.err(err)
    console.log('Subscribed to Sharvari')
  })
})

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(topic, ':', message.toString())
  // client.end()
})
