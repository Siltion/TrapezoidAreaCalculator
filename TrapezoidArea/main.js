// Trapezoid Area Calculator


// Event Listeners
document.getElementById('calculate').addEventListener('click', press);


// Event Functions
function press() {
    let A;
    let b1 = document.getElementById('b1').value;
    let b2 = document.getElementById('b2').value;
    let h = document.getElementById('h').value;
    A = (1/2)*(b1 + b2)*h;
    document.getElementById('output').innerHTML= A;
}