const express = require('express'); 
/*
 Imports the express library.
 This is necessary to have an express server.
*/
const bodyParser = require('body-parser');  // Node.js body parsing middleware.

const app = express(); // Creates an app for your servers client

app.use(bodyParser.json()); // Express modules / packages
app.use(bodyParser.urlencoded({ extended: true })); // Express modules / packages

app.use(express.static('public')); // load the files that are in the public directory

app.get('/', (req, res) => { // When someone tries to visit the root or / directory of your website it also imports the variables req and res
	// req is short for the request, includes the url, headers and more that the client has send to the server
	// res is the response you will send. includes sending files, redirects, codes, and more

// Temp
  res.sendFile(process.cwd() + '/public/scouting.html'); 
  
  // res.sendFile(process.cwd() + '/public/index.html'); // This sends a file to the client, Often on repl.it, you will get an error about a root directory is requires, this is why, you may need to add '/home/runner/<replname>' then the directory, in this case, 'public/index.html'
});

app.get('/scouting', (req, res) => { 
  res.sendFile(process.cwd() + '/public/scouting.html'); 
});

app.get('/csv', (req, res) => { 
  res.sendFile(process.cwd() + '/file.csv'); 
});

app.get('/error', (req, res) => { // When someone tries to visit the '/error' directory
	res.sendStatus(500) // Sends status codes to the client. find them https://www.restapitutorial.com/httpstatuscodes.html here
	res.send('Hello!') // send html to the client
	/*
		This will give an error as once something has been sent to the client, you can't send another. 
		This applies to most 'res' functions
	*/
})

app.get('/req', (req, res) => { // When someone tries to visit the '/req' directory. please note that the '/***' can be changed to anything you wish as long as it complies as a url path.
	console.log(req.query) // this logs all query strings such as '?hello=hi&ping=pong' you can get these through req.query.hello or req.query.ping. Remember, always send headers back to the client. ie:
	res.json(req.query) //send json to the client
})

app.get('/res', (req, res) => {
	/* Please note that this will error as multiple headers are sent to the client */
	res.send('Hello!')
	// or
	res.send('<p>Hello!</p>')

	res.json('{"hello":"hi","ping":"pong"}')

	res.sendStatus(200)
	//using res.send(200) is deprecated and will terminate the nodejs in future.

	res.sendFile('/home/runner/public/index.html')

	res.redirect('https://www.google.com')

	res.download(process.cwd() + '/public/index.html')
})

app.get('/submit-form', (req, res) => {
    const jsonData = req.body;

const fs = require('fs');
const json2csv = require('json2csv').parse;

const data = jsonData;

const fields = Object.keys(data);
const csv = json2csv(data, { header: false, fields });

fs.appendFile('file.csv', csv, function (err) {
  if (err) throw err;
  console.log('Appended to file');
});

});

app.get('/get', (req, res) => {
	// On get request
})

app.post('/post', (req, res) => {
	// On post request
})

// and more for most request types

app.route('/reqtypes')
  .get(function (req, res) {
    res.send('Get')
  })
  .post(function (req, res) {
    res.send('Post')
  })
  .put(function (req, res) {
    res.send('Put')
  })

app.get('/multiple/paths', (req, res) => {
	// exist
})

app.get('/multiple/paths/also/work/*', (req, res) => {
	// used for 404 if no other get functions are triggered in this path
})

app.get('/*', (req, res) => {
	// used for 404 if no other get functions are triggered
})

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', true);
    next();
});


  app.post('/submit-form', (req, res) => {
    const jsonData = req.body;
    
const fs = require('fs');
const json2csv = require('json2csv').parse;

const data = jsonData;

const fields = Object.keys(data);
const csv = json2csv(data, { header: false, fields });

fs.appendFile('file.csv', csv + "\n", function (err) {
  if (err) throw err;
  console.log('Appended to file');
});
    // sendToDiscordWebhook(jsonData);

    res.status(200).json({ success: true });
});

function sendToDiscordWebhook(data) {
    const webhookUrl = '';
    
    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => {
            if (response.ok) {
                console.log('Data sent to Discord webhook successfully');
            } else {
                console.error('Failed to send data to Discord webhook:', response.statusText);
            }
        })
        .catch(error => {
            console.error('Error sending data to Discord webhook:', error.message);
        });
}

app.listen(3000, () => console.log('server started'));
