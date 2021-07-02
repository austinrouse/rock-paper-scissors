var arr = ["Rock","Paper","Scissors"];

function getItem(){
    document.getElementById("something").innerHTML = arr[Math.floor(Math.random() * arr.length)];
}
