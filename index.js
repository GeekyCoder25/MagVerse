function pressMenu() {
    var x = document.getElementById('links');
    var y = document.getElementById('searchimg');

if (x.style.display === "block") {
    x.style.display = "none";
}
else {
    x.style.display = "block";
}
}

function pressSearch(){
    var x = document.getElementById('search');
    if (x.style.display === "block") {
        x.style.display = "none";
    }
    else {
        x.style.display = "block"
    }
}