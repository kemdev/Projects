function print(...arg) {
    console.log(...arg)
}

// get all html elements that we need
let li = document.querySelectorAll('li')
let section = document.querySelectorAll('section')
    // print(aside)
let selected = document.querySelector(".selected")
let active = document.querySelector(".active");
// swap the li class "selected" to the current selected li
// swap the section class "active" to the current selected li.

// li.forEach(e => e.addEventListener('click', () => buttonHandler(e)))

// for (const index in li) {
//         const element = li[index];
//         if(element.classList.contains('selected')) 

// }


for (let i = 0; i < li.length; i++) {

    li[i].addEventListener('click', function() {
        console.log("i is", li[i])

        for (let j = 0; j < li.length; j++) {
            li[j].className = '';
            console.log("j is", li[j])
            section[j].className = ''

        }

        this.className = 'selected';
        section[i].className = 'active'
    });

}

// check index of the current selected li.