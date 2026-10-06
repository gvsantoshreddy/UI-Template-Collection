# MediFind AI — Hospital Finder Demo

A lightweight hospital-discovery website built with HTML, CSS, and vanilla JavaScript.

## Important demo limitations

- Every hospital name, city/state pairing, specialty listing, rating, and bed count in this demo is fictional.
- The site does not connect to hospitals, government health directories, live bed dashboards, or emergency services.
- The “available beds” figure is fictional sample data, not current availability.
- Search ranking is a simple text/specialty match, not an AI medical recommendation or assessment of clinical quality.
- Do not use this demo to choose treatment or make healthcare decisions.

## Project files

- `index.html` — page layout and search form
- `style.css` — responsive styling
- `script.js` — fictional sample directory, filters, and detail dialogs
- `README.md` — setup and customization instructions

## Run on Windows in VS Code

1. Download and extract the project ZIP.
2. Open VS Code.
3. Choose **File → Open Folder** and select the extracted `MediFind_AI_Hospital_Finder` folder.
4. Open `index.html`.
5. Either double-click `index.html` in File Explorer to open it in a browser, or install the **Live Server** extension in VS Code and click **Go Live**.

No Node.js, server, package installation, API key, or external service is required for the demo.

## How to customize sample data

Open `script.js` and edit the `hospitals` array. Each fictional hospital entry includes:
- `name`, `city`, `state`, `region`
- `totalBeds`, `icuBeds`, `availableBeds`
- `specialties`, `facilities`
- `rating`, `icon`, `description`

Keep the demo disclaimer visible while using fictional data.

## To create a real service later

A real India-wide directory needs trustworthy and regularly updated sources for hospital identity, location, specialty, accreditation, and capacity. Live available-bed counts generally require a hospital or health-authority feed that explicitly supplies current occupancy. Confirm data licensing, update timestamps, and source quality before publishing.

For real integrations, you may need approved APIs, a government/health data agreement, or a vendor contract. API keys or credentials should be kept on a backend server, not placed in public browser JavaScript. Do not scrape sites against their terms or claim a bed is available without a current source and timestamp.
