// Array to hold quote objects
let quotes = [
  { text: "The best way to get started is to quit talking and begin doing.", category: "Motivation" },
  { text: "Creativity is intelligence having fun.", category: "Inspiration" },
  { text: "Do not watch the clock. Do what it does. Keep going.", category: "Perseverance" }
];

// Get DOM elements
const quoteDisplay = document.getElementById('quoteDisplay');
const newQuoteBtn = document.getElementById('newQuote');
const addQuoteBtn = document.getElementById('addQuoteBtn');

// Show a random quote
function showRandomQuote() {
  if (quotes.length === 0) {
    quoteDisplay.innerHTML = "<em>No quotes available.</em>";
    return;
  }

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  quoteDisplay.innerHTML = `"${quote.text}" <br><small>— ${quote.category}</small>`;
}

// Add a new quote
function addQuote() {
  const quoteText = document.getElementById('newQuoteText').value.trim();
  const quoteCategory = document.getElementById('newQuoteCategory').value.trim();

  if (!quoteText || !quoteCategory) {
    alert("Please enter both quote and category.");
    return;
  }

  // Add to quotes array
  quotes.push({ text: quoteText, category: quoteCategory });

  // Clear inputs
  document.getElementById('newQuoteText').value = "";
  document.getElementById('newQuoteCategory').value = "";

  // Optional: show confirmation
  quoteDisplay.innerHTML = `<span style="color: green;">New quote added successfully!</span>`;
}

// Event listeners
newQuoteBtn.addEventListener('click', showRandomQuote);
addQuoteBtn.addEventListener('click', addQuote);// Array to hold quote objects
let quotes = [
  { text: "The best way to get started is to quit talking and begin doing.", category: "Motivation" },
  { text: "Creativity is intelligence having fun.", category: "Inspiration" },
  { text: "Do not watch the clock. Do what it does. Keep going.", category: "Perseverance" }
];

// Get DOM elements
const quoteDisplay = document.getElementById('quoteDisplay');
const newQuoteBtn = document.getElementById('newQuote');
const addQuoteBtn = document.getElementById('addQuoteBtn');

// Show a random quote
function showRandomQuote() {
  if (quotes.length === 0) {
    quoteDisplay.innerHTML = "<em>No quotes available.</em>";
    return;
  }

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  quoteDisplay.innerHTML = `"${quote.text}" <br><small>— ${quote.category}</small>`;
}

// Add a new quote
function addQuote() {
  const quoteText = document.getElementById('newQuoteText').value.trim();
  const quoteCategory = document.getElementById('newQuoteCategory').value.trim();

  if (!quoteText || !quoteCategory) {
    alert("Please enter both quote and category.");
    return;
  }

  // Add to quotes array
  quotes.push({ text: quoteText, category: quoteCategory });

  // Clear inputs
  document.getElementById('newQuoteText').value = "";
  document.getElementById('newQuoteCategory').value = "";

  // Optional: show confirmation
  quoteDisplay.innerHTML = `<span style="color: green;">New quote added successfully!</span>`;
}

// Event listeners
newQuoteBtn.addEventListener('click', showRandomQuote);
addQuoteBtn.addEventListener('click', addQuote);