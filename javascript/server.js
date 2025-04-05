const nodemailer = require('nodemailer');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Middleware für JSON-Daten
app.use(bodyParser.json());

// Transporter-Konfiguration (Gmail-Beispiel)
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'DEINE_EMAIL@gmail.com',
        pass: 'DEIN_APP_PASSWORT'  // Hinweis: Nutze kein normales Passwort, sondern ein Gmail-App-Passwort.
    }
});

// Route für das Versenden von E-Mails
app.post('/send-email', (req, res) => {
    const { email, reminderTime, gottesdienstDetails } = req.body;

    const mailOptions = {
        from: 'DEINE_EMAIL@gmail.com',
        to: email,
        subject: 'Erinnerung an deinen Gottesdienst',
        text: `Hallo! Vergiss nicht deinen Gottesdienst: ${gottesdienstDetails}.
        
        Deine Erinnerung wurde ${reminderTime} Tage vor dem Termin versendet.`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('Fehler beim Senden der E-Mail.');
        } else {
            console.log('E-Mail erfolgreich gesendet: ' + info.response);
            res.status(200).send('E-Mail erfolgreich gesendet!');
        }
    });
});

// Starte den Server
app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
});
