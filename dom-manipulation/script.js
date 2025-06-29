/*// Array of quote objects
/*let quotes = [
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

let quotes = JSON.parse(localStorage.getItem("quotes")) || [
  { text: "The best way to get started is to quit talking and begin doing.", category: "Motivation" },
  { text: "Creativity is intelligence having fun.", category: "Inspiration" },
  { text: "Do not watch the clock. Do what it does. Keep going.", category: "Perseverance" }
];

const quoteDisplay = document.getElementById("quoteDisplay");
const newQuoteBtn = document.getElementById("newQuote");
const categoryFilter = document.getElementById("categoryFilter");
const formArea = document.getElementById("formArea") || document.createElement("div");
const syncStatus = document.createElement("div");
syncStatus.id = "syncStatus";
document.body.appendChild(syncStatus);

// Display a random quote
function showRandomQuote() {
  const selectedCategory = categoryFilter.value;
  const filtered = selectedCategory === "all"
    ? quotes
    : quotes.filter(q => q.category === selectedCategory);

  if (filtered.length === 0) {
    quoteDisplay.innerHTML = "<em>No quotes in this category.</em>";
    return;
  }

  const quote = filtered[Math.floor(Math.random() * filtered.length)];
  quoteDisplay.innerHTML = `"${quote.text}"<br><small>— ${quote.category}</small>`;
  sessionStorage.setItem("lastQuote", JSON.stringify(quote));
}

// Save to localStorage
function saveQuotes() {
  localStorage.setItem("quotes", JSON.stringify(quotes));
}

// Populate category dropdown
function populateCategories() {
  const categories = [...new Set(quotes.map(q => q.category))];
  categoryFilter.innerHTML = `<option value="all">All Categories</option>`;
  categories.forEach(cat => {
    const option = document.createElement("option");
    option.value = cat;
    option.textContent = cat;
    categoryFilter.appendChild(option);
  });

  const saved = localStorage.getItem("selectedCategory");
  if (saved) categoryFilter.value = saved;
}

// Filter quotes
function filterQuotes() {
  localStorage.setItem("selectedCategory", categoryFilter.value);
  quoteDisplay.innerHTML = "<em>Category filter applied. Click 'Show Random Quote'.</em>";
}

// Add a new quote
function addQuote() {
  const text = document.getElementById("newQuoteText").value.trim();
  const category = document.getElementById("newQuoteCategory").value.trim();

  if (!text || !category) {
    alert("Please enter both quote and category.");
    return;
  }

  const newQuote = { text, category };
  quotes.push(newQuote);
  saveQuotes();
  populateCategories();
  postNewQuoteToServer(newQuote);

  document.getElementById("newQuoteText").value = "";
  document.getElementById("newQuoteCategory").value = "";
  quoteDisplay.innerHTML = "<span style='color:green;'>New quote added!</span>";
}

// Create form to add quote
function createAddQuoteForm() {
  const input1 = document.createElement("input");
  input1.id = "newQuoteText";
  input1.placeholder = "Enter a new quote";
  input1.type = "text";

  const input2 = document.createElement("input");
  input2.id = "newQuoteCategory";
  input2.placeholder = "Enter category";
  input2.type = "text";

  const button = document.createElement("button");
  button.textContent = "Add Quote";
  button.onclick = addQuote;

  formArea.appendChild(input1);
  formArea.appendChild(input2);
  formArea.appendChild(button);
  document.body.appendChild(formArea);
}

// Export quotes
function exportToJson() {
  const blob = new Blob([JSON.stringify(quotes)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "quotes.json";
  a.click();
  URL.revokeObjectURL(url);
}

// Import quotes
function importFromJsonFile(event) {
  const reader = new FileReader();
  reader.onload = function (e) {
    try {
      const imported = JSON.parse(e.target.result);
      if (!Array.isArray(imported)) throw new Error("Invalid format");
      quotes.push(...imported);
      saveQuotes();
      populateCategories();
      alert("Quotes imported successfully.");
    } catch (err) {
      alert("Import failed: " + err.message);
    }
  };
  reader.readAsText(event.target.files[0]);
}

// Post to server (mock)
async function postNewQuoteToServer(quote) {
  try {
    await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(quote)
    });
  } catch (err) {
    console.error("Failed to post:", err);
  }
}

// Fetch from server (mock)
async function fetchQuotesFromServer() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    return data.slice(0, 5).map(post => ({
      text: post.title,
      category: "Server"
    }));
  } catch (err) {
    console.error("Fetch error:", err);
    return [];
  }
}

// ✅ Sync with server and show status
async function syncQuotes() {
  const serverQuotes = await fetchQuotesFromServer();
  let added = 0;

  serverQuotes.forEach(serverQuote => {
    if (!quotes.some(q => q.text === serverQuote.text && q.category === serverQuote.category)) {
      quotes.push(serverQuote);
      added++;
    }
  });

  if (added > 0) {
    saveQuotes();
    populateCategories();
    syncStatus.textContent = `${added} new quote(s) synced from server.`;
  } else {
    syncStatus.textContent = "No new quotes from server.";
  }

  setTimeout(() => (syncStatus.textContent = ""), 4000);
}

// Load previous quote from session
function loadLastQuote() {
  const last = sessionStorage.getItem("lastQuote");
  if (last) {
    const q = JSON.parse(last);
    quoteDisplay.innerHTML = `"${q.text}"<br><small>— ${q.category}</small>`;
  }
}

// ✅ Periodic Sync using setInterval every 30 seconds
setInterval(syncQuotes, 30000); // 30,000ms = 30 seconds

// Initialize
newQuoteBtn.addEventListener("click", showRandomQuote);
categoryFilter.addEventListener("change", filterQuotes);
createAddQuoteForm();
populateCategories();
loadLastQuote();
syncQuotes(); // Initial syn