function hello() {
    console.log("hello");
}

hello();

let btn = document.querySelector("#btn");
// btn.hidden = true;
btn.onclick = hello;

let showModel = document.querySelector('#model-show');

function show() {
    let model = document.querySelector('.model');
    model.style.display = 'block';
}

showModel.onclick = show;