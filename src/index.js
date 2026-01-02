const cursor = document.querySelector(".cursor")
var span = document.getElementById('clock')

document.addEventListener("mousemove", (event)=> {

    cursor.style.left = `${event.clientX }px`
    cursor.style.top = `${event.clientY}px`
})

function time() {
    var d = new Date();
    var m = d.getMinutes();
    var h = d.getHours();

    m = checkTime(m);
    h = checkTime(h);

    span.textContent = h + ":" + m;
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    } return i;
}

setInterval(time, 1000);