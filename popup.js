const quotes = [
    "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
    "Do what you can, with what you have, where you are. - Theodore Roosevelt",
    "It always seems impossible until it’s done. - Nelson Mandela",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Believe you can and you’re halfway there. - Theodore Roosevelt"
  ];
  
  const colors = [
    "#FFCDD2", "#F8BBD0", "#E1BEE7", "#D1C4E9", "#C5CAE9",
    "#BBDEFB", "#B3E5FC", "#B2EBF2", "#B2DFDB", "#C8E6C9",
    "#DCEDC8", "#F0F4C3", "#FFECB3", "#FFE0B2", "#FFCCBC"
  ];

  document.getElementById("get-quote-button").addEventListener("click", () => {
    // Select a random quote
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("quote").textContent = randomQuote;
  
    // Select a random background color
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById("quote-container").style.backgroundColor = randomColor;
  });
  