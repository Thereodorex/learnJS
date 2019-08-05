let userNum = document.querySelector("#user-num");

document.querySelector("#btn").onclick = checkNum;

function r(min, max) {
    let num = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(num);
    return num;
}


function checkNum() {
    let num = userNum.value;
    num = parseInt(num);
    if (isNaN(num)) {
        alert('Input correct number');
    } else if (num == r(0, 10)) {
        alert('good');
        location.reload();
    } else {
        alert('bad');
    }
}