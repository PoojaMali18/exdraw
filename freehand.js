const pencil = document.getElementById("pencil");
let isPencilActive = false;

function togglePencil() {
    isPencilActive = !isPencilActive;
    pencil.classList.toggle("active");

    if (isPencilActive) 
    {
        canvas.style.cursor="crosshair";
        canvas.addEventListener("mousedown", onmousedown);
    } else {
        canvas.style.cursor="auto";
        canvas.removeEventListener("mousedown", onmousedown);
    }
}


pencil.addEventListener("click", togglePencil);
