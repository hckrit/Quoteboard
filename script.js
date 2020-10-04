let quotes = [

    'The secret to life is to love who you are.',
    'Look for opportunities in every change in your life.',
    'Persist while others are quitting.',
    'Talk is cheap. Show me the code.',
    'Programs must be written for people to read, and only incidentally for machines to execute.',
    'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    "I'm not a great programmer; I'm just a good programmer with great habits.",
    'Truth can only be found in one place: the code.',
    "Give a man a program, frustrate him for a day. Teach a man to program, frustrate him for a lifetime.",
    "A language that doesn't affect the way you think about programming is not worth knowing.",
    "The most disastrous thing that you can ever learn is your first programming language.",
    "Perl – The only language that looks the same before and after RSA encryption.",
    "The most important property of a program is whether it accomplishes the intention of its user.",
    "Object-oriented programming offers a sustainable way to write spaghetti code. It lets you accrete programs as a series of patches.",
    "First, solve the problem. Then, write the code.",
    "Java is to JavaScript what car is to Carpet.",
    "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code.",
    "Code is like humor. When you have to explain it, it’s bad.",
    "Before software can be reusable it first has to be usable.",
    "Make it work, make it right, make it fast.",

];


function displayQuote() {
    let index = Math.floor(Math.random() * quotes.length);

    //display the quote of that index
    let div = document.querySelector('#quote');
    let quote = `<div class="card">
    <img src="icons/favicon.png">
    <p>${quotes[index]}</p>
    <img src="./icons/favicon2.png">
    </div>
    `;
    div.innerHTML = quote;
}

let btn = document.querySelector('.btn');
btn.addEventListener('click', displayQuote);