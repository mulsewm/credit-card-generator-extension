const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const CreditCard = require('./models/CreditCard');
const sequelize = require('./config/database');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Test Route
app.get('/', (req, res) => {
    res.send('API is running');
});

// Generate Credit Card Route
app.post('/generate-card', async (req, res) => {
    const { cardNumber, cvv, date, name, zip } = req.body;

    const cardData = {
        cardNumber: cardNumber || '4111-9659-3126-7598',
        cvv: cvv || '389',
        date: date || '06/26',
        name: name || 'Teagan Considine',
        zip: zip || '50307'
    };

    try {
        const card = await CreditCard.create(cardData);
        res.json(card);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get All Credit Cards Route
app.get('/cards', async (req, res) => {
    try {
        const cards = await CreditCard.findAll();
        res.json(cards);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Sync Database and Start Server
sequelize.sync({ force: true }).then(() => {
    app.listen(process.env.PORT || 3002, () => {
        console.log(`Server running on port ${process.env.PORT || 3002}`);
    });
});