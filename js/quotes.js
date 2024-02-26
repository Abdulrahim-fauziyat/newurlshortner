var quotes = [
    "An idea must make sense.Before you generate it.-Mr Zoetech",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Strive not to be a success, but rather to be of value. - Albert Einstein",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "You miss 100% of the shots you don’t take. - Wayne Gretzky",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The only thing we have to fear is fear itself. - Franklin D. Roosevelt"
];

var quoteTextElement = document.getElementById('quote-text');
var newQuoteButton = document.getElementById('new-quote-btn');
var countdownElement = document.getElementById('countdown');

var countdownValue = 4; 

function generateRandomQuote() {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    var randomQuote = quotes[randomIndex];
    quoteTextElement.textContent = randomQuote;
}

newQuoteButton.addEventListener('click', generateRandomQuote);

function updateQuoteAndTimer() {
    
    generateRandomQuote();

    
    countdownValue = 4;
    countdownElement.textContent = countdownValue;
    
  
    var quoteInterval = setInterval(function() {
        countdownValue--;
        countdownElement.textContent = countdownValue;

        if (countdownValue === 0) {
            generateRandomQuote();
            countdownValue = 4;
            countdownElement.textContent = countdownValue;
        }
    }, 1000); 
}


updateQuoteAndTimer();
