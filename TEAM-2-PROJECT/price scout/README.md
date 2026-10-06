# PriceScout — Product Low Price Finder (Demo)

A lightweight HTML/CSS/JavaScript demo that compares **fictional sample prices** across Amazon India, Flipkart, Meesho, and Myntra.

## Important: demo only

- All product prices are made-up sample values for demonstrating the interface.
- This project does not fetch live prices, stock, coupons, or shipping costs.
- Retailer buttons open the retailer home pages, not verified product listings.
- Do not present the sample prices as real offers.

## Files

- `index.html` — page structure
- `style.css` — responsive styling
- `script.js` — sample data, search, comparison cards, and retailer links

## Run on Windows with VS Code

### Option A: Open the HTML file
1. Extract the project folder.
2. Open the folder in VS Code.
3. Open `index.html`.
4. Right-click the editor and choose **Open with Live Server** if you have the Live Server extension installed.

You can also double-click `index.html` in File Explorer to open it in your browser. No server or Node.js is required for this demo.

### Option B: Use VS Code Live Server
1. In VS Code, select Extensions.
2. Search for **Live Server** and install it.
3. Open `index.html`.
4. Click **Go Live** in the bottom status bar.

## API keys and external services

**No API key is required for this demo.** It uses local sample data in `script.js` and makes no API requests.

## Turning it into a real price comparison service

For real current prices, replace the sample array in `script.js` with data from retailer-approved APIs, affiliate product feeds, or a compliant price-comparison provider. Each source has its own access rules and may require credentials or an affiliate account. Never put private API secrets in browser-side JavaScript; use a backend server to keep secrets private. Confirm that prices include relevant shipping, offers, variants, and stock status before calling an offer the lowest price.

## Customize sample products

Edit the `demoProducts` array near the top of `script.js`. Each item has:
- `title`
- `category` and `query` (used for matching searches)
- `emoji`
- `platform`
- `price` and `oldPrice` (fictional sample prices)
- `url` (retailer home page)

Keep the demo notice visible if you continue to use sample data.
