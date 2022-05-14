var test = document.getElementsByClassName("test");


for (var i = 16; i <= test.length - 1; i++) {

    test[i].classList.add("img-" + randomNumber());
    test[i].style.gridColumn += tstCol();

    // test[j].style.gridColumn += randomNumber20End();

}
for (var j = 16; j <= test.length - 1; j++) {
    // test[i].classList.add("img-" + randomNumber());
    test[j].style.gridRow += tstRow();
}

function randomNumber() {
    //We have 12 images that why we use this from 1 to 12 
    var rand = Math.round(Math.random() * 11) + 1;
    return rand;
}

function randomNumber20Start() {
    var rand = Math.round(Math.random() * 19) + 1;
    return rand
}

function randomNumber20End() {

    var row = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    var col = randomNumber20Start();
    var result = '';
    for (var i = 1; i < row.length - 1; i++) {
        result = row[i] + '/' + col;
        // //console.log(row)
    }
    // //console.log(result)
    return result;

}

function tstCol() {
    var testCondition = randomNumber20Start()
    var rand = Math.round(Math.random() * 5) + testCondition;
    var result = testCondition + " / " + rand;

    while (rand >= 20) {
        rand = Math.round(Math.random() * 4) + testCondition;
        result = testCondition + " / " + rand;
        if (rand <= 20) {
            break;
        }
    }
    testCondition + " / " + rand;
    // //console.log(result);
    return result;
}


function tstRow() {
    var testCondition = randomNumber20Start();
    var rand = Math.round(Math.random() * 4) + testCondition;
    var result = testCondition + " / " + rand;

    while (rand >= 20) {
        rand = Math.round(Math.random() * 4) + testCondition;
        result = testCondition + " / " + rand;
        if (rand <= 20) {
            break;
        }
    }
    testCondition + " / " + rand;
    // //console.log(result);
    return result;
}