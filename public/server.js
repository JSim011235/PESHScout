const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const app = express();
const PORT = 3000;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', true);
    next();
});


  app.post('/submit-form', (req, res) => {
    const jsonData = req.body;

    sendToDiscordWebhook(jsonData);

    res.status(200).json({ success: true });
});

function sendToDiscordWebhook(data) {
    const webhookUrl = 'https://discord.com/api/webhooks/1170549923809345566/V4ickxGuLo3TTwa60XZGygDJrS8wbvK5e_Z_vF_qA3M3AZM4aX-D6YyCvocpXYTdYVp_';

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

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
