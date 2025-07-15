const joke_element = document.getElementById("joke_element");
const new_joke_btn = document.getElementById("new_joke_btn");

function showJoke(jokeText) {
    joke_element.style.opacity = 0;
    joke_element.style.transform = 'translateY(10px)';
    setTimeout(() => {
        joke_element.innerHTML = jokeText;
        joke_element.style.animation = 'none';
        void joke_element.offsetWidth; // force reflow
        joke_element.style.animation = null;
        joke_element.style.opacity = 1;
        joke_element.style.transform = 'none';
    }, 120);
}

function fetchJoke() {
    fetch("https://icanhazdadjoke.com/slack")
        .then((data) => data.json())
        .then((jokeData) => {
            const jokeText = jokeData.attachments[0].text;
            showJoke(jokeText);
        });
}

if (new_joke_btn) {
    new_joke_btn.addEventListener('click', fetchJoke);
}

fetchJoke();
