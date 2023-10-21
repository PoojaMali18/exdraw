const canvas = document.getElementById("mycanvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext("2d");

// function drawLine(p1, p2, color, thickness) {
//     c.beginPath();
//     c.strokeStyle = color;
//     c.lineWidth = thickness;
//     c.moveTo(p1.x, p1.y);
//     c.lineTo(p2.x, p2.y);
//     c.stroke();
//     c.closePath();
// }

// canvas.addEventListener("mousedown",onmousedown)
// canvas.addEventListener("mouseup",onmouseup)

// function onmousedown(event)
// {
// let {clientX, clientY} =event;
// c.beginPath();
// c.moveTo(clientX,clientY);
// c.lineWidth=4;
// c.strokeStyle="blue";
// }

// function onmouseup(event)
// {
// let {clientX, clientY} =event;
// c.lineTo(clientX,clientY);
// c.stroke();
// c.closePath();
// }


canvas.addEventListener("mousedown",onmousedown)

let previousposition = null;

function onmousedown(e)
{
    previousposition = [e.clientX,e.clientY];
    c.strokeStyle="green";
    c.lineWidth=4;
    canvas.addEventListener("mousemove",onmousemove);
    canvas.addEventListener("mouseup",onmouseup);
}

function onmousemove(e)
{
    let currentposition =[e.clientX,e.clientY];
    c.beginPath();
    c.moveTo(...previousposition);
    c.lineTo(...currentposition);
    c.stroke();
    c.closePath();
    previousposition=currentposition;
}

function onmouseup(e)
{
    canvas.removeEventListener("mousemove",onmousemove);
}