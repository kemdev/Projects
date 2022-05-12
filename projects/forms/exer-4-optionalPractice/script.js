var colorValue = document.getElementById("colorValue"); //input text where the color value will be displayed
var colorPicker = document.getElementById("colorPicker");
var rgbShow = document.getElementById("rgb");


colorPicker.addEventListener('input', () => {
    colorValue.value = colorPicker.value;
});


colorPicker.addEventListener('input', () => {
    printColor(colorPicker)
});

function printColor(ev) {
    const color = ev.value;
    const r = parseInt(color.substr(1, 2), 16);
    const g = parseInt(color.substr(3, 2), 16);
    const b = parseInt(color.substr(5, 2), 16);
    console.log(`rgb: (${r},  ${g}, ${b})`);
    var theRGBcolor = `rgb: (${r},  ${g}, ${b})`;
    rgbShow.innerHTML = theRGBcolor;
    rgbShow.style.color = "green";
}

// rgbShow.style.color = "blue"