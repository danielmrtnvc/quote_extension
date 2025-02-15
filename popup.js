const quotes = [
    "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice, and most of all, love of what you are doing. – Pelé",
  "Don’t wish it were easier. Wish you were better. – Jim Rohn",
  "Hard work beats talent when talent doesn’t work hard. – Tim Notke",
  "Greatness is not in where we stand, but in what direction we are moving. – Oliver Wendell Holmes",
  "Do not pray for an easy life, pray for the strength to endure a difficult one. – Bruce Lee",
  "The warrior who cultivates his mind polishes his arms. – Anonymous",
  "Be strong when you are weak, brave when you are scared, and humble when you are victorious. – Anonymous",
  "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau",
  "The best way to predict the future is to create it. – Peter Drucker",
  "There is no substitute for hard work. – Thomas Edison",
  "Strength does not come from physical capacity. It comes from an indomitable will. – Mahatma Gandhi",
  "It’s not the will to win that matters—everyone has that. It’s the will to prepare to win that matters. – Paul Bryant",
  "Victory is reserved for those who are willing to pay its price. – Sun Tzu",
  "Fall seven times, stand up eight. – Japanese Proverb",
  "The man who moves a mountain begins by carrying away small stones. – Confucius",
  "Sweat more in practice, bleed less in war. – Spartan Proverb",
  "Perseverance is not a long race; it is many short races one after another. – Walter Elliot",
  "To uncover your true potential, you must first find your own limits and then have the courage to blow past them. – Picabo Street",
  "Challenges are what make life interesting, and overcoming them is what makes life meaningful. – Joshua J. Marine",
  "The harder the battle, the sweeter the victory. – Les Brown",
  "The pain you feel today will be the strength you feel tomorrow. – Anonymous",
  "Warriors are not born and they are not made… they create themselves through trial and error. – Anonymous",
  "Don’t count the days; make the days count. – Muhammad Ali",
  "What lies behind us and what lies before us are tiny matters compared to what lies within us. – Ralph Waldo Emerson",
  "A champion is someone who gets up when they can’t. – Jack Dempsey",
  "If you want to achieve greatness, stop asking for permission. – Anonymous",
  "Do something today that your future self will thank you for. – Anonymous",
  "The only limit to our realization of tomorrow will be our doubts of today. – Franklin D. Roosevelt",
  "Obsessed is just a word the lazy use to describe the dedicated. – Anonymous",
  "You miss 100% of the shots you don’t take. – Wayne Gretzky",
  "What we do in life echoes in eternity” - Gladiator",
    "Make mistakes of ambition and not mistakes of sloth. Develop the strength to do bold things, not the strength to suffer. – Anonymous ",
    "The fact is that the greatest crimes are caused by excess and not by necessity. Men do not become tyrants in order that they may not suffer cold; and hence great is the honour bestowed, not on him who kills a thief, but on him who kills a tyrant. - Aristotle "
  ]; 
  /** 
  const images = [
    "https://via.placeholder.com/400x300/FF9A9E/FAD0C4",
    "https://via.placeholder.com/400x300/FFDEE9/B5FFFC",
    "https://via.placeholder.com/400x300/A18CD1/FBC2EB",
    "https://via.placeholder.com/400x300/FEE140/FA709A",
    "https://via.placeholder.com/400x300/4CAF50/FFFFFF"
  ];
  */
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
  