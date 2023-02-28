let btnRandom = document.querySelector('button');
let result = document.querySelector('h1');
let users = ['train', 'siren', 'horn','guitar','laugh','doorbell','firework'];
function getRandomNumber(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;
    return result;
}
btnRandom.addEventListener('click', () => {
    let index = getRandomNumber(0, users.length-1);
    result.innerText = users[index];
    if(result.innerText==="train"){
        document.getElementById("mp3player").src = "D:/project final/train.wav";
        document.getElementById("audio").load();
    }

    if(result.innerText==="siren"){
        document.getElementById("mp3player").src = "D:/project final/siren.wav";
        document.getElementById("audio").load();
    }
    if(result.innerText==="horn"){
        document.getElementById("mp3player").src = "D:/project final/horn.wav";
        document.getElementById("audio").load();
    }

    if(result.innerText==="doorbell"){
        document.getElementById("mp3player").src = "D:/project final/doorbell.wav";
        document.getElementById("audio").load();
    }

    if(result.innerText==="guitar"){
        document.getElementById("mp3player").src = "D:/project final/guitar.wav";
        document.getElementById("audio").load();
    }

    if(result.innerText==="firework"){
        document.getElementById("mp3player").src = "D:/project final/firework.wav";
        document.getElementById("audio").load();
    }

    if(result.innerText==="laugh"){
        document.getElementById("mp3player").src = "D:/project final/laugh.wav";
        document.getElementById("audio").load();
    }
});

function captcha(){
    var b = document.getElementById('ans').value;
    if(b==result.innerText){
        window.location.replace('file:///D:/project final/homepage.html')
    }
    else{
        window.alert("Your input is incorrect");
    }
    
};




