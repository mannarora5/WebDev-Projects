// grab the count-el element, store it in a countEl variable
let count = 0
let countEl = document.getElementById("count-el")

// function adds cookie and updates countEl 
function increment() {
    count = count + 1
    // set countEl's innerText to the count
    countEl.innerText = count;
    
}

// function removes cookie and updates countEl
function remove() {
    if (count > 0) {
        count = count - 1;
        countEl.innerText = count;
    }
}

// function saves the number of cookies and then resets count to 0
function save() {
  let saveEl = document.getElementById("save-el")
  saveEl.innerText = saveEl.innerText + " " + count + " -" 
  count = 0;
  countEl.innerText = count;
}



