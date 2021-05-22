console.log('We are making calculator');


let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('button text is', buttonText);
        if (buttonText == 'x') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else if (buttonText === 'del') {
            let num = screen.value;
            screen.value = num.substr(0, num.length - 1);
        }
        else if (buttonText == 'C') {
            screenValue = '';
            screen.value = screenValue;
        }
        else if (buttonText === 'CE') {
            screenValue = '0';
            screen.value = screenValue;
        }
        else if (buttonText == 'Ext') {
            screenValue = '';
            screen.value = screenValue;
        }
        else if (buttonText == 'sin') {
            // screen.value=Math.sin(screen.value);//It will give value from Radians 
            screen.value = screenValue;
            screen.value = Math.sin(screenValue * (Math.PI / 180));//It will give value from Degree
        }
        else if (buttonText == 'cos') {
            // screen.value = Math.cos(screen.value);
            screen.value = screenValue;
            screen.value = Math.cos(screenValue * (Math.PI / 180));
        }
        else if (buttonText == 'tan') {
            // screen.value = Math.tan(screen.value);
            screen.value=screenValue;
            screen.value = Math.tan(screenValue * (Math.PI / 180));
        }
        else if (buttonText == '^2') {
            screen.value = Math.pow(screen.value, 2);
        }
        else if (buttonText == 'rt') {
            // screen.value=Math.pow(screen.value,1/2);//the sqrt is written as also
            screen.value = Math.sqrt(screen.value);//But we wriiten as this.
        }
        else if (buttonText == 'log') {

            screen.value = Math.log(screen.value);
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
        for (item of buttons) {
            item.addEventListener('click', (e) => {
                e.target.className += ' item';
                console.log('Button hover is triggered');
            })
        }

    })
    // // function openWindow() {
    // //     window.open();
    // //     // window.open('http://www.google.com', '', 'width=500px,height=500px left=100px,top=200px');//open new  with respected width and height window from Exit button on the calculator.
    // // }
    function reload() {
        window.location.reload();
    }

}
let element = document.getElementById('heading');
element.style.color = 'blue';
