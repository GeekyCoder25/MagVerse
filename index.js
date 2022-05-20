function pressMenu() {
    let x = document.getElementById('links');
    let y = document.getElementById('searchimg');

if (x.style.display === "block") {
    x.style.display = "none";
}
else {
    x.style.display = "block";
}   
}

function pressSearch() {
    let x = document.getElementById('search');
    if (x.style.display === "block") {
        x.style.display = "none";
    }
    else {
        x.style.display = "block"
    }
}