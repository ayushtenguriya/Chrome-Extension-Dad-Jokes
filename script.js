fetch('https://icanhazdadjoke.com/slack')
    .then(data =>data.json())
    .then(jokeData =>{
        const jokeText = jokeData.attachments[0].text;
        const jokeElement = document.getElementById('jokeElement');
    
        jokeElement.innerHTML = jokeText;
    })

//This code is by Ayush Sharma 
// with the help of youtube "anuj bhaiya"