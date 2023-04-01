output = document.querySelector("#output");
selectColor = document.querySelector("#selectColor");
copyColorCodeBtn = document.querySelector("#copyColorCodeBtn");


function selectedColor(){
    output.innerText = selectColor.value;
    document.body.style.backgroundColor = selectColor.value;
}

copyColorCodeBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(selectColor.value);
})
