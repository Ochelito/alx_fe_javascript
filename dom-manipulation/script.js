/*// Array of quote objects
let quotes = [
  { text: "The best way to get started is to quit talking and begin doing.", category: "Motivation" },
  { text: "Creativity is intelligence having fun.", category: "Inspiration" },
  { text: "Do not watch the clock. Do what it does. Keep going.", category: "Perseverance" }
];

// Reference DOM elements
const quoteDisplay = document.getElementById('quoteDisplay');
const newQuoteBtn = document.getElementById('newQuote');

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

// Add a new quote to the array
function addQuote() {
  const quoteText = document.getElementById('newQuoteText').value.trim();
  const quoteCategory = document.getElementById('newQuoteCategory').value.trim();

  if (!quoteText || !quoteCategory) {
    alert("Please enter both quote and category.");
    return;
  }

  quotes.push({ text: quoteText, category: quoteCategory });

  // Clear inputs
  document.getElementById('newQuoteText').value = "";
  document.getElementById('newQuoteCategory').value = "";

  quoteDisplay.innerHTML = `<span style="color: green;">New quote added successfully!</span>`;
}

// Dynamically create the quote addition form
function createAddQuoteForm() {
  const formContainer = document.createElement('div');
  formContainer.style.marginTop = "2em";

  const inputText = document.createElement('input');
  inputText.id = "newQuoteText";
  inputText.type = "text";
  inputText.placeholder = "Enter a new quote";

  const inputCategory = document.createElement('input');
  inputCategory.id = "newQuoteCategory";
  inputCategory.type = "text";
  inputCategory.placeholder = "Enter quote category";

  const addButton = document.createElement('button');
  addButton.textContent = "Add Quote";
  addButton.onclick = addQuote;

  // Add spacing between elements
  inputText.style.marginRight = "0.5em";
  inputCategory.style.marginRight = "0.5em";

  formContainer.appendChild(inputText);
  formContainer.appendChild(inputCategory);
  formContainer.appendChild(addButton);

  document.body.appendChild(formContainer);
}

// Initial setup
newQuoteBtn.addEventListener('click', showRandomQuote);
createAddQuoteForm(); // Call this to create the form when the page loads
*/

/*// Load quotes from localStorage or initialize with defaults
let quotes = JSON.parse(localStorage.getItem("quotes")) || [
  { text: "The best way to get started is to quit talking and begin doing.", category: "Motivation" },
  { text: "Creativity is intelligence having fun.", category: "Inspiration" },
  { text: "Do not watch the clock. Do what it does. Keep going.", category: "Perseverance" }
];

// Get DOM elements
const quoteDisplay = document.getElementById('quoteDisplay');
const newQuoteBtn = document.getElementById('newQuote');

// Show a random quote and save to sessionStorage
function showRandomQuote() {
  if (quotes.length === 0) {
    quoteDisplay.innerHTML = "<em>No quotes available.</em>";
    return;
  }

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  quoteDisplay.innerHTML = `"${quote.text}" <br><small>— ${quote.category}</small>`;

  // Save last viewed quote to sessionStorage
  sessionStorage.setItem("lastQuote", JSON.stringify(quote));
}

// Save quotes to localStorage
function saveQuotes() {
  localStorage.setItem("quotes", JSON.stringify(quotes));
}

// Add new quote
function addQuote() {
  const quoteText = document.getElementById('newQuoteText').value.trim();
  const quoteCategory = document.getElementById('newQuoteCategory').value.trim();

  if (!quoteText || !quoteCategory) {
    alert("Please enter both quote and category.");
    return;
  }

  quotes.push({ text: quoteText, category: quoteCategory });
  saveQuotes();

  document.getElementById('newQuoteText').value = "";
  document.getElementById('newQuoteCategory').value = "";

  quoteDisplay.innerHTML = `<span style="color: green;">Quote added successfully!</span>`;
}

// Dynamically create the form
function createAddQuoteForm() {
  const container = document.getElementById('formArea');

  const inputText = document.createElement('input');
  inputText.id = "newQuoteText";
  inputText.type = "text";
  inputText.placeholder = "Enter a new quote";
  inputText.style.marginRight = "0.5em";

  const inputCategory = document.createElement('input');
  inputCategory.id = "newQuoteCategory";
  inputCategory.type = "text";
  inputCategory.placeholder = "Enter quote category";
  inputCategory.style.marginRight = "0.5em";

  const addBtn = document.createElement('button');
  addBtn.textContent = "Add Quote";
  addBtn.onclick = addQuote;

  container.appendChild(inputText);
  container.appendChild(inputCategory);
  container.appendChild(addBtn);
}

// Export quotes to JSON
function exportToJson() {
  const blob = new Blob([JSON.stringify(quotes, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "quotes.json";
  a.click();
  URL.revokeObjectURL(url);
}

// Import from JSON file
function importFromJsonFile(event) {
  const fileReader = new FileReader();

  fileReader.onload = function(e) {
    try {
      const importedQuotes = JSON.parse(e.target.result);

      if (!Array.isArray(importedQuotes)) {
        throw new Error("Invalid JSON structure");
      }

      quotes.push(...importedQuotes);
      saveQuotes();
      alert("Quotes imported successfully!");
    } catch (err) {
      alert("Failed to import JSON: " + err.message);
    }
  };

  fileReader.readAsText(event.target.files[0]);
}

// Load last viewed quote from sessionStorage
function loadLastViewedQuote() {
  const lastQuote = sessionStorage.getItem("lastQuote");
  if (lastQuote) {
    const quote = JSON.parse(lastQuote);
    quoteDisplay.innerHTML = `"${quote.text}" <br><small>— ${quote.category}</small>`;
  }
}

// Init
newQuoteBtn.addEventListener('click', showRandomQuote);
createAddQuoteForm();
loadLastViewedQuote();*/

// Load quotes or use default
let quotes = JSON.parse(localStorage.getItem("quotes")) || [
  { text: "The best way to get started is to quit talking and begin doing.", category: "Motivation" },
  { text: "Creativity is intelligence having fun.", category: "Inspiration" },
  { text: "Do not watch the clock. Do what it does. Keep going.", category: "Perseverance" }
];

// DOM references
const quoteDisplay = document.getElementById('quoteDisplay');
const newQuoteBtn = document.getElementById('newQuote');
const categoryFilter = document.getElementById('categoryFilter');

// Show filtered or random quote
function showRandomQuote() {
  const selectedCategory = categoryFilter.value;
  let filtered = selectedCategory === "all"
    ? quotes
    : quotes.filter(q => q.category === selectedCategory);

  if (filtered.length === 0) {
    quoteDisplay.innerHTML = "<em>No quotes available in this category.</em>";
    return;
  }

  const randomIndex = Math.floor(Math.random() * filtered.length);
  const quote = filtered[randomIndex];
  quoteDisplay.innerHTML = `"${quote.text}" <br><small>— ${quote.category}</small>`;

  sessionStorage.setItem("lastQuote", JSON.stringify(quote));
}

// Save quotes to localStorage
function saveQuotes() {
  localStorage.setItem("quotes", JSON.stringify(quotes));
}

// Extract unique categories and populate filter
function populateCategories() {
  const categories = [...new Set(quotes.map(q => q.category))];
  categoryFilter.innerHTML = `<option value="all">All Categories</option>`;
  categories.forEach(category => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categoryFilter.appendChild(option);
  });

  // Restore last selected filter
  const savedFilter = localStorage.getItem("selectedCategory");
  if (savedFilter) {
    categoryFilter.value = savedFilter;
  }
}

// Filter quotes on dropdown change
function filterQuotes() {
  localStorage.setItem("selectedCategory", categoryFilter.value);
  quoteDisplay.innerHTML = "<em>Filter applied. Click 'Show Random Quote' to view.</em>";
}

// Add new quote and update categories
function addQuote() {
  const text = document.getElementById('newQuoteText').value.trim();
  const category = document.getElementById('newQuoteCategory').value.trim();

  if (!text || !category) {
    alert("Please enter both quote and category.");
    return;
  }

  quotes.push({ text, category });
  saveQuotes();
  populateCategories();

  document.getElementById('newQuoteText').value = "";
  document.getElementById('newQuoteCategory').value = "";

  quoteDisplay.innerHTML = `<span style="color: green;">Quote added!</span>`;
}

// Create quote form dynamically
function createAddQuoteForm() {
  const form = document.getElementById('formArea');
  form.innerHTML = "";

  const inputText = document.createElement('input');
  inputText.id = "newQuoteText";
  inputText.type = "text";
  inputText.placeholder = "Enter a new quote";
  inputText.style.marginRight = "0.5em";

  const inputCategory = document.createElement('input');
  inputCategory.id = "newQuoteCategory";
  inputCategory.type = "text";
  inputCategory.placeholder = "Enter category";
  inputCategory.style.marginRight = "0.5em";

  const addBtn = document.createElement('button');
  addBtn.textContent = "Add Quote";
  addBtn.onclick = addQuote;

  form.appendChild(inputText);
  form.appendChild(inputCategory);
  form.appendChild(addBtn);
}

// Export quotes to JSON
function exportToJson() {
  const blob = new Blob([JSON.stringify(quotes, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "quotes.json";
  a.click();
  URL.revokeObjectURL(url);
}

// Import JSON file
function importFromJsonFile(event) {
  const fileReader = new FileReader();

  fileReader.onload = function(e) {
    try {
      const imported = JSON.parse(e.target.result);
      if (!Array.isArray(imported)) throw new Error("Invalid structure");

      quotes.push(...imported);
      saveQuotes();
      populateCategories();
      alert("Quotes imported successfully!");
    } catch (err) {
      alert("Import failed: " + err.message);
    }
  };

  fileReader.readAsText(event.target.files[0]);
}

// Load last quote if available
function loadLastQuote() {
  const last = sessionStorage.getItem("lastQuote");
  if (last) {
    const quote = JSON.parse(last);
    quoteDisplay.innerHTML = `"${quote.text}" <br><small>— ${quote.category}</small>`;
  }
}

// Initialize
newQuoteBtn.addEventListener('click', showRandomQuote);
createAddQuoteForm();
populateCategories();
loadLastQuote();
