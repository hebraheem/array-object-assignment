let button = document.getElementById('object');
button.addEventListener('click', getQuote);
let output = document.getElementById('Quote');
let authour = document.getElementById('author');
let main = document.getElementById('main');
let text = document.getElementById('display');

function getQuote(){
    let ObjectArray = [
        {
            quote: '"All our dreams can come true, if we have the courage to pursue them."',
            authour: "Walt Disney"
        },
        {
            quote: '"The secret of getting ahead is getting started"',
            authour: "Mark Twain"
        },
        {
            quote: '"I’ve missed more than 9,000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life and that is why I succeed."',
            authour: "Micheal Jordan"
        },
        {
            quote: '“Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.”',
            authour: "Mary Kay Ash"
        },
        {
            quote: '“The best time to plant a tree was 20 years ago. The second best time is now.” ',
            authour: "Chinese Proverb"
        },
        {
            quote: '“Only the paranoid survive.”',
            authour: "Andy Grove"
        },
        {
            quote: '“It’s hard to beat a person who never gives up.” ',
            authour: "Babe Ruth"
        },
        {
            quote: '“I wake up every morning and think to myself, ‘how far can I push this company in the next 24 hours.’”',
            authour: "Leah Busque"
        },
        {
            quote: '“If people are doubting how far you can go, go so far that you can’t hear them anymore.”',
            authour: "Michele Ruiz"
        },
        {
            quote: '“We need to accept that we won’t always make the right decisions, that we’ll screw up royally sometimes – understanding that failure is not the opposite of success, it’s part of success.”',
            authour: "Arianna Huffington"
        },
        {
            quote: '“Write it. Shoot it. Publish it. Crochet it, sauté it, whatever. MAKE.”',
            authour: "Joss Whendon"
        },
        {
            quote: '“You’ve gotta dance like there’s nobody watching, love like you’ll never be hurt, sing like there’s nobody listening, and live like it’s heaven on earth.” ',
            authour: "William W. Purkey"
        },
        {
            quote: '“Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.”',
            authour: "Neil Gaiman"
        },
    
        {
            quote: '“Everything you can imagine is real.”',
            authour: "Pablo Piacasso"
        },
        {
            quote: '“When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.” ',
            authour: "Helen Keller"
        },
        {
            quote: '“Do one thing every day that scares you.”',
            authour: "Eleanor Roosevelt"
        },
        {
            quote: '“It’s no use going back to yesterday, because I was a different person then.”',
            authour: "Lewis Carroll"
        },
        {
            quote: '“Smart people learn from everything and everyone, average people from their experiences, stupid people already have all the answers.”',
            authour: "Socrates"
        },
        {
            quote: '“Do what you feel in your heart to be right – for you’ll be criticized anyway.”',
            authour: "Eleanor Roosevelt"
        },
        {
            quote: '“Happiness is not something ready made. It comes from your own actions.”',
            authour: "Dalai Lama XIV"
        },
        {
            quote: '“Whatever you are, be a good one.”',
            authour: "Abraham lincoln"
        },
        {
            quote: '“The same boiling water that softens the potato hardens the egg. It’s what you’re made of. Not the circumstances.”',
            authour: "Unknown"
        },
        {
            quote: '“If we have the attitude that it’s going to be a great day it usually is.”',
            authour: "Catherine Pulsifier"
        },
        {
            quote: '“You can either experience the pain of discipline or the pain of regret. The choice is yours.”',
            authour: "UNknown"
        },
        {
            quote: '“Impossible is just an opinion.”',
            authour: "Paulo Coelho"
        },
        {
            quote: '“Your passion is waiting for your courage to catch up.”',
            authour: "Isabelle Laflenche"
        },
        {
            quote: '“Magic is believing in yourself. If you can make that happen, you can make anything happen.”',
            authour: "Johann Wolfgang Von Goethe"
        },
        {
            quote: '“If something is important enough, even if the odds are stacked against you, you should still do it.”',
            authour: "Elon Musk"
        },
        {
            quote: '“Hold the vision, trust the process.”',
            authour: "Unknown"
        },
        {
            quote: '“Don’t be afraid to give up the good to go for the great.”',
            authour: "John D. Rockefeller"
        }
    
    ]
    let showQuote = ObjectArray[Math.floor(Math.random() * ObjectArray.length)];
    author.innerHTML = showQuote.authour;
    Quote.innerHTML = showQuote.quote;
    authour.style.color = "white";
    Quote.style.color = "white";
    // text.style.display = "none";
    text.innerHTML = "continue with the button to see more"
}

button.addEventListener('click', changeBg);
function changeBg(){

    let a = Math.floor(Math.random() * 235);
    let b = Math.floor(Math.random() * 235);
    let c = Math.floor(Math.random() * 235);

    let changeB = `rgb(${a},${b},${c})`;
    // console.log(changeB)
    main.style.background = changeB;
}