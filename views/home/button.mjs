const game=document.getElementById("GAME");
const api=new XMLHttpRequest();

const Getgame=()=>{
    const api=new XMLHttpRequest();
    api.open('GET','http://localhost:3000/home/game');

};

game.addEventListener('click',Getgame);