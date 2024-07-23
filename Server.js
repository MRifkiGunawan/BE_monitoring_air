const express = require('express');
const bodyParser = require('body-parser');
const mqtt = require ('mqtt');
//var client  = mqtt.connect('mqtt://test.mosquitto.org');
var client = mqtt.connect({
	host: '103.150.190.35',
	port: 1883,
	username: 'user',
	password: '12344321'
})
const db = require('./db');

const app = express();
const port = 3015;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Endpoint untuk menyimpan data ke database
app.get('/', (req, res) => {
  try {
    const timestamp =  new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();
    const { data } = req.query;

    if (!data) {
      return res.status(400).json({ success: false, message: 'Data harus diisi' });
    }

    console.log(data)

    const query = 'INSERT INTO monitoring_air (data, timestamp) VALUES ($1, $2)';

    db.query(query, [data,timestamp], (error, results) => {
      if (error) {
        console.error('Error inserting data to MySQL:', error);
        return res.status(500).json({ success: false, message: 'Internal Server Error' });
      }

      res.status(200).json({ success: true, message: 'Data berhasil ditambahkan', result: data +";"+ timestamp});
    });
  } catch (error) {
    console.error('Error handling request:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

    app.get('/data', (req, res) => {
        const query = 'SELECT * FROM monitoring_air ORDER BY id DESC LIMIT 10';
      
        db.query(query, (error, results) => {
          if (error) {
            console.error('Error fetching data from MySQL:', error);
            return res.status(500).json({ success: false, message: 'Internal Server Error' });
          }
      
          res.status(200).json({ success: true, data: results });
        });
      });

app.listen(port, () => {
  console.log(`Server berjalan pada http://localhost:${port}`);
});

client.on('connect', function () {
  client.subscribe('12345678');
  console.log('client has subscribed successfully');
});

client.on('message', function (topic, message){
  console.log(message.toString()); //if toString is not given, the message comes as buffer
  try {
    const timestamp =  new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();
    const query = 'INSERT INTO monitoring_air_mqtt (data, timestamp) VALUES ($1, $2)';

    db.query(query, [message.toString(),timestamp], (error, results) => {
      res.status(200).json({ success: true, message: 'Data berhasil ditambahkan', result: data +";"+ timestamp});
      if (error) {
        console.error('Error inserting data to MySQL:', error);
      }
    });
  } catch (error) {
    console.error('Error handling request:', error);
  }
});
