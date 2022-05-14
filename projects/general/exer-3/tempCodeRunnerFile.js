var test = document.getElementsByClassName("test");


for (var i = 16; i <= test.length - 1; i++) {

    test[i].classList.add("img-" + randomNumber());
    test[i].style.gridColumn += randomNumber20End();

    // test[j].style.gridColumn += randomNumber20End();

}
for (var j = 16; j <= test.length; j++) {
    // test[i].classList.add("img-" + randomNumber());
    test[j].style.gridRow += randomNumber20End();
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
    // var testCondition = randomNumber20Start()
    // var rand = Math.round(Math.random() * 4) + testCondition;
    // var result = testCondition + " / " + rand;

    // while (rand >= 20) {
    //     rand = Math.round(Math.random() * 4) + testCondition;
    //     result = testCondition + " / " + rand;
    //     if (rand <= 20) {
    //         break;
    //     }
    // }
    // testCondition + " / " + rand;
    // //console.log(result);
    // return result;

    var row = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    var col = randomNumber20Start();
    var result = '';
    for (var i = 1; i < row.length - 1; i++) {
        result = row[i] + '/' + col;
        // //console.log(row)
    }
    //console.log(result)
    return result;

}

function generateUniqueNumbers() {
    var arr = [];
    while (arr.length < 20) {
        var r = Math.round(Math.random() * 19) + 1;
        if (arr.indexOf(r) === -1) arr.push(r);
    }
    //console.log(arr);
}

function arrayTest() {
    // var x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];



    var col = [];
    var row = [];
    for (var x = 0; x <= 20; x++) {
        col.push(x);
        // test[i].classList.add("img-" + randomNumber());
        for (var y = 0; y < 5; y++) {
            row.push(y)
        }

        //console.log("Col: ", col);
        //console.log("Row: ", row);
    }


}

// function create2DArray(rows, columns, value = (x, y) => 0) {
//     var array = new Array(rows);
//     for (var i = 1; i < rows; i++) {
//         array[i] = new Array(columns);
//         for (var j = 1; j < columns; j++) {
//             array[i][j] = value(i, j);
//         }
//     }

//     return array;
// }