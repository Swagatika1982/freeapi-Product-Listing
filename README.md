# Product Listing App

A simple and responsive product listing application built using React. This app fetches product data from a public API and displays it in a clean, modern e-commerce style layout.



## Live Features

- Fetch products from API dynamically
- Display product image, title, brand, category, and price
- Responsive grid layout
- Loading and error handling states
- Clean and user-friendly UI



## API Used

``txt
https://api.freeapi.app/api/v1/public/randomproducts

Tech Stack
React (Vite)
JavaScript (ES6+)
CSS (Custom styling)

Project Structure
product-listing-app/
│
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── package.json
└── README.md

Getting Started
1. Clone the repository
git clone https://github.com/your-username/product-listing-app.git
cd product-listing-app
2. Install dependencies
npm install
3. Run the project
npm run dev

How It Works
The app makes a fetch request to the Products API
Data is received and stored in state
Products are mapped and displayed as cards
UI updates automatically based on loading/error state
