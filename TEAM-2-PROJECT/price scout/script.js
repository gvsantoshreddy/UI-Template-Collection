// PriceScout demo: all prices below are fictional sample data.
// This project does not connect to retailer APIs or fetch live prices.

const demoProducts = [
  { id: 1, title: "Wireless Bluetooth Headphones", category: "headphones audio wireless", emoji: "🎧", platform: "Amazon India", price: 1499, oldPrice: 1999, query: "wireless bluetooth headphones", url: "https://www.amazon.in/" },
  { id: 2, title: "Wireless Bluetooth Headphones", category: "headphones audio wireless", emoji: "🎧", platform: "Flipkart", price: 1399, oldPrice: 1899, query: "wireless bluetooth headphones", url: "https://www.flipkart.com/" },
  { id: 3, title: "Wireless Bluetooth Headphones", category: "headphones audio wireless", emoji: "🎧", platform: "Meesho", price: 999, oldPrice: 1499, query: "wireless bluetooth headphones", url: "https://www.meesho.com/" },
  { id: 4, title: "Wireless Bluetooth Headphones", category: "headphones audio wireless", emoji: "🎧", platform: "Myntra", price: 1599, oldPrice: 2199, query: "wireless bluetooth headphones", url: "https://www.myntra.com/" },
  { id: 5, title: "Everyday Running Shoes", category: "shoes sneakers running footwear", emoji: "👟", platform: "Amazon India", price: 1799, oldPrice: 2499, query: "running shoes", url: "https://www.amazon.in/" },
  { id: 6, title: "Everyday Running Shoes", category: "shoes sneakers running footwear", emoji: "👟", platform: "Flipkart", price: 1649, oldPrice: 2299, query: "running shoes", url: "https://www.flipkart.com/" },
  { id: 7, title: "Everyday Running Shoes", category: "shoes sneakers running footwear", emoji: "👟", platform: "Meesho", price: 799, oldPrice: 1299, query: "running shoes", url: "https://www.meesho.com/" },
  { id: 8, title: "Everyday Running Shoes", category: "shoes sneakers running footwear", emoji: "👟", platform: "Myntra", price: 1899, oldPrice: 2799, query: "running shoes", url: "https://www.myntra.com/" },
  { id: 9, title: "Smartphone (128 GB)", category: "phone smartphone mobile electronics", emoji: "📱", platform: "Amazon India", price: 12999, oldPrice: 14999, query: "smartphone 128gb", url: "https://www.amazon.in/" },
  { id: 10, title: "Smartphone (128 GB)", category: "phone smartphone mobile electronics", emoji: "📱", platform: "Flipkart", price: 12499, oldPrice: 14499, query: "smartphone 128gb", url: "https://www.flipkart.com/" },
  { id: 11, title: "Smartphone (128 GB)", category: "phone smartphone mobile electronics", emoji: "📱", platform: "Meesho", price: 11999, oldPrice: 13999, query: "smartphone 128gb", url: "https://www.meesho.com/" },
  { id: 12, title: "Smartphone (128 GB)", category: "phone smartphone mobile electronics", emoji: "📱", platform: "Myntra", price: 13499, oldPrice: 15499, query: "smartphone 128gb", url: "https://www.myntra.com/" },
  { id: 13, title: "Casual Everyday Backpack", category: "bag backpack travel school", emoji: "🎒", platform: "Amazon India", price: 899, oldPrice: 1299, query: "backpack", url: "https://www.amazon.in/" },
  { id: 14, title: "Casual Everyday Backpack", category: "bag backpack travel school", emoji: "🎒", platform: "Flipkart", price: 849, oldPrice: 1199, query: "backpack", url: "https://www.flipkart.com/" },
  { id: 15, title: "Casual Everyday Backpack", category: "bag backpack travel school", emoji: "🎒", platform: "Meesho", price: 499, oldPrice: 899, query: "backpack", url: "https://www.meesho.com/" },
  { id: 16, title: "Casual Everyday Backpack", category: "bag backpack travel school", emoji: "🎒", platform: "Myntra", price: 999, oldPrice: 1499, query: "backpack", url: "https://www.myntra.com/" }
];

const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const resultsGrid = document.getElementById("resultsGrid");
const resultsTitle = document.getElementById("resultsTitle");
const resultCount = document.getElementById("resultCount");
const emptyState = document.getElementById("emptyState");
const showAllButton = document.getElementById("showAllButton");

const platformDetails = {
  "Amazon India": { mark: "a", className: "amazon" },
  "Flipkart": { mark: "F", className: "flipkart" },
  "Meesho": { mark: "M", className: "meesho" },
  "Myntra": { mark: "MY", className: "myntra" }
};

function formatINR(amount) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(amount);
}

function renderProducts(products, query = "") {
  resultsGrid.innerHTML = "";
  emptyState.hidden = products.length !== 0;
  resultsGrid.hidden = products.length === 0;
  resultCount.textContent = `${products.length} sample offer${products.length === 1 ? "" : "s"}`;

  if (query) {
    resultsTitle.textContent = products.length
      ? `Demo results for “${query}”`
      : `No demo results for “${query}”`;
  } else {
    resultsTitle.textContent = "Popular demo deals";
  }

  const cheapestByTitle = {};
  for (const product of products) {
    if (!(product.title in cheapestByTitle) || product.price < cheapestByTitle[product.title]) {
      cheapestByTitle[product.title] = product.price;
    }
  }

  for (const product of products) {
    const platform = platformDetails[product.platform];
    const isCheapest = product.price === cheapestByTitle[product.title];
    const card = document.createElement("article");
    card.className = "product-card";

    const visual = document.createElement("div");
    visual.className = "product-visual";
    const sampleLabel = document.createElement("span");
    sampleLabel.className = "sample-label";
    sampleLabel.textContent = "SAMPLE PRICE";
    const emoji = document.createElement("span");
    emoji.className = "product-emoji";
    emoji.setAttribute("aria-hidden", "true");
    emoji.textContent = product.emoji;
    visual.append(sampleLabel, emoji);

    const content = document.createElement("div");
    content.className = "product-content";
    const title = document.createElement("h3");
    title.className = "product-title";
    title.textContent = product.title;

    const platformLine = document.createElement("div");
    platformLine.className = "platform";
    const mark = document.createElement("span");
    mark.className = `platform-mark ${platform.className}`;
    mark.textContent = platform.mark;
    const platformName = document.createElement("span");
    platformName.textContent = product.platform;
    platformLine.append(mark, platformName);

    const priceLine = document.createElement("div");
    priceLine.className = "price-line";
    const price = document.createElement("span");
    price.className = "price";
    price.textContent = formatINR(product.price);
    const oldPrice = document.createElement("span");
    oldPrice.className = "old-price";
    oldPrice.textContent = formatINR(product.oldPrice);
    priceLine.append(price, oldPrice);

    const best = document.createElement("div");
    best.className = "best-price";
    best.textContent = isCheapest ? "LOWEST SAMPLE PRICE" : "DEMO OFFER";

    const link = document.createElement("a");
    link.className = "offer-button";
    link.href = product.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = `Visit ${product.platform}`;
    link.setAttribute("aria-label", `Visit ${product.platform}; search for ${product.query}`);
    link.addEventListener("click", () => {
      // Retailer home page only; this demo does not generate or verify a specific product URL.
    });

    content.append(title, platformLine, priceLine, best, link);
    card.append(visual, content);
    resultsGrid.append(card);
  }
}

function searchProducts() {
  const query = searchInput.value.trim().toLowerCase();
  if (!query) {
    renderProducts(demoProducts);
    searchInput.focus();
    return;
  }

  const terms = query.split(/\s+/).filter(Boolean);
  const matching = demoProducts.filter(product => {
    const searchable = `${product.title} ${product.category} ${product.platform} ${product.query}`.toLowerCase();
    return terms.some(term => searchable.includes(term));
  });
  renderProducts(matching, searchInput.value.trim());
}

searchButton.addEventListener("click", searchProducts);
searchInput.addEventListener("keydown", event => {
  if (event.key === "Enter") searchProducts();
});

document.querySelectorAll(".chip").forEach(chip => {
  chip.addEventListener("click", () => {
    searchInput.value = chip.dataset.query;
    searchProducts();
  });
});

showAllButton.addEventListener("click", () => {
  searchInput.value = "";
  renderProducts(demoProducts);
});

renderProducts(demoProducts);
