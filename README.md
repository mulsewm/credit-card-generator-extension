
# Credit Card Generator Chrome Extension and WebApp

## Overview
The Credit Card Generator Chrome Extension allows users to generate fake credit card data for testing purposes. Users can select the type of credit card and the country to generate realistic credit card information. The extension also includes a rating feature and the ability to copy generated card details to the clipboard.

## Features
- Generate fake credit card data for Visa, Mastercard, and American Express.
- Select country for credit card data.
- Copy generated card details to the clipboard.
- Rate the extension using a star rating system.


## Installation
1. **Clone the repository:**
   ```sh
   git clone https://github.com/mulsewm/credit-card-generator-extension.git
   ```
2. **Navigate to the project directory:**
   ```sh
   cd credit-card-generator-extension
   ```
3. **Install backend dependencies:**
   ```sh
   cd backend
   npm install
   ```
4. **Start the backend server:**
   ```sh
   node server.js
   ```
5. **Load the extension into Chrome:**
   - Open Chrome and go to `chrome://extensions/`.
   - Enable "Developer mode".
   - Click "Load unpacked" and select the `chrome-extension` directory.

## Directory Structure
```
credit-card-generator-extension/
├── backend/
│   ├── models/
│   │   ├── CreditCard.js
│   ├── config/
│   │   ├── database.js
│   ├── server.js
│   ├── .env
│   ├── package.json
├── frontend/
│   ├── public/
│   │   ├── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── CardGenerator.js
│   │   ├── App.js
│   │   ├── index.js
│   ├── package.json
├── chrome-extension/
│   ├── icons/
│   │   ├── icon.png
│   ├── popup/
│   │   ├── popup.html
│   │   ├── popup.js
│   │   ├── popup.css
│   ├── manifest.json
├── README.md
```

## Usage
1. Click on the extension icon in the Chrome toolbar to open the popup.
2. Select the type of credit card and country.
3. Click the "Generate new card" button to generate fake credit card details.
4. Use the "Copy" buttons to copy the generated card details to the clipboard.
5. Rate the extension using the star rating system.

## Backend API
The backend API is used to generate and retrieve credit card data.

### Generate Credit Card
**Endpoint:** `POST /generate-card`

**Request:**
```json
{
  "cardType": "Visa",
  "country": "USA"
}
```

**Response:**
```json
{
  "cardNumber": "4111-9659-3126-7598",
  "cvv": "389",
  "date": "06/26",
  "name": "Teagan Considine",
  "zip": "50307",
  "country": "USA",
  "paymentSystem": "Visa",
  "dateGeneration": "06.06.2024 11:43"
}
```

### Get All Credit Cards
**Endpoint:** `GET /cards`

**Response:**
```json
[
  {
    "id": 1,
    "cardNumber": "4111-9659-3126-7598",
    "cvv": "389",
    "date": "06/26",
    "name": "Teagan Considine",
    "zip": "50307",
    "createdAt": "2024-06-10T09:40:32.935Z",
    "updatedAt": "2024-06-10T09:40:32.935Z"
  }
]
```

## Contributing
1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Submit a pull request.

## License
This project is licensed under the MIT License.

## Acknowledgments
- Thanks to the open-source community for providing valuable resources and inspiration.

## Contact
If you have any questions or feedback, please feel free to contact the project maintainer at mulsewm@protonmail.com
