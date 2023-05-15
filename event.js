
function redColor() {
    document.body.style.backgroundColor = 'red';
}

function greenColor() {
    document.body.style.backgroundColor = 'green';
    
}

function OrangeColor() {
    document.body.style.backgroundColor = 'Orange';
    
}

const purpleButton = document.getElementById('make-purple');
console.log(purpleButton);
purpleButton.onclick = makePurple
function makePurple() {
document.body.style.backgroundColor = 'purple';

}

const aquaButton = document.getElementById('make-aqua');
        aquaButton.onclick = makeAqua;
        function makeAqua() {
            document.body.style.backgroundColor = 'aqua';
            
        }

        const makeGoldenButton = document.getElementById('make-golden');
        makeGoldenButton.addEventListener('click', function () {
            document.body.style.backgroundColor = 'gold'
            
        })

        document.getElementById('make-blue').addEventListener('click', function () {
            document.body.style.backgroundColor = 'blue';
            
        })