const addBtn = document.querySelector('.getJk');
const txt = document.querySelector('.txt');

addBtn.addEventListener('click',getRandom());

async function getRandom() {
    const jokeApi = await fetch('https://icanhazdadjoke.com/',{
        headers: {
            'Accept': 'application/json'
        }
    });
    const resJson = await jokeApi.json();
    txt.innerHTML = resJson.joke; 
}
getRandom();