let op = document.getElementById("op");
let history = document.getElementById("history");

const getID = (element) => {
    let val = document.getElementById(element.id).innerHTML;
    op.innerHTML += val;
}

const equal = () => {
    try {
        let expression = op.innerHTML;
        if(expression) {
            let ans =  eval(expression.replace("^", "**"));
            op.innerHTML = ans;
            $("#history").prepend(`<div class="alert alert-primary">${expression} = ${ans}<div>`);
        } else {
            alert("Please enter expression.")
        }
    } catch (err) {
        alert("Invalid expression.");
    }
    
}
    
const backspace = () => op.innerHTML = op.innerHTML.slice(0, op.innerHTML.length - 1);

const clr = () => op.innerHTML = "";