const quotes = [
    "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
    "Do what you can, with what you have, where you are. - Theodore Roosevelt",
    "It always seems impossible until it’s done. - Nelson Mandela",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Believe you can and you’re halfway there. - Theodore Roosevelt",
    "Make mistakes of ambition and not mistakes of sloth. Develop the strength to do bold things, not the strength to suffer. "
  ];
  
  const images = [
    "https://via.placeholder.com/400x300/FF9A9E/FAD0C4",
    "https://via.placeholder.com/400x300/FFDEE9/B5FFFC",
    "https://via.placeholder.com/400x300/A18CD1/FBC2EB",
    "https://via.placeholder.com/400x300/FEE140/FA709A",
    "https://via.placeholder.com/400x300/4CAF50/FFFFFF"
  ];
  
  const gradients = [
    "linear-gradient(to right, #ff9a9e, #fad0c4)",
    "linear-gradient(to right, #a18cd1, #fbc2eb)",
    "linear-gradient(to right, #fee140, #fa709a)",
    "linear-gradient(to right, #4caf50, #8bc34a)",
    "linear-gradient(to right, #ffdee9, #b5fffc)"
  ];
  
  document.getElementById("get-quote-button").addEventListener("click", () => {
    // Select a random quote
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("quote").textContent = randomQuote;
  
    // Randomly decide between gradient or image background
    const useGradient = Math.random() > 0.5; // 50% chance for gradient or image
  
    if (useGradient) {
      const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];
      document.getElementById("quote-container").style.background = randomGradient;
    } else {
      const randomImage = images[Math.floor(Math.random() * images.length)];
      document.getElementById("quote-container").style.background = `url('${randomImage}')`;
    }
  });
  