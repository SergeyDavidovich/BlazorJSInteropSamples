
function Hide() {
    document.getElementById('counter').style.visibility = "hidden";
}
function Show() {
    document.getElementById('inner').textContent = "Visible!";

    document.getElementById('counter').style.color = "red";
    document.getElementById('counter').style.visibility = "visible";
}