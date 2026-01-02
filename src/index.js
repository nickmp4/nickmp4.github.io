const cursor = document.querySelector(".cursor")
var clock_span = document.getElementById('clock')
var date_span = document.getElementById('date')
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

document.addEventListener("mousemove", (event)=> {

    cursor.style.left = `${event.clientX }px`
    cursor.style.top = `${event.clientY}px`
})

function time() {
    var d = new Date();
    var m = d.getMinutes();
    var h = d.getHours();
    var date = d.getDate();
    var month = d.getMonth();
    var day = days[d.getDay()];
    month++;

    m = checkTime(m);
    h = checkTime(h);

    clock_span.textContent = h + ":" + m;
    date_span.textContent = day + " " + month + "/" + date;
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    } return i;
}

setInterval(time, 1000);