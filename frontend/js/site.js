// var bg = document.getElementById('id1')
// bg.style.backgroundColor = "red";



var key = document.querySelectorAll('input')
for (var index = 0; index < key.length; index++) {
    key[index].addEventListener('input', function () {
        var red= document.getElementById('red').value,
            green = document.getElementById('green').value,
            blue = document.getElementById('blue').value

        var display = document.getElementById('id1')
        display.style.backgroundColor= "rgb(" + red +"," + green + "," + blue + ")"
        var h = document.getElementById('id3')
        h.style.color = "rgb(" + red +"," + green + "," + blue + ")"
        // var p = document.getElementById('id2')
        // p.innerHTML = "rgb(" + red + ", " + green + ", " + blue + ")"
    })
    // var p = document.getElementById('id2')
    // p.innerHTML = "rgb(" + red + ", " + green + ", " + blue + ")"
}