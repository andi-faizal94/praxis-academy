// for statment
function howMany(selectObject) {
    let numberSelected = 0;
    for (let i = 0; i < selectObject.options.length; i++) {
        if (selectObject.options[i].selected) {
            numberSelected++;
        }
    }
    return numberSelected;
}
let btn = document.getElementById('btn');
btn.addEventListener('click', function() {
    alert('Number of options selected: ' + howMany(document.selectForm.musicTypes));
});


// do...while statement
let i = 0;
do {
    i += 1;
    console.log(i);
} while (i < 5);

// while statement
let n = 0;
let x = 0;
while (n < 3) {
    n++;
    x += n;
}