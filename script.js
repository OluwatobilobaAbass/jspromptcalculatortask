const operator = prompt('Choose operator(+,-,/,*)')

const num1 = parseFloat (prompt('Enter number 1: '));
const num2 = parseFloat (prompt('Enter number 2: '));


let result = 0;
if(isNaN(num1) || isNaN(num2)){
    alert('Wrong Input! Refresh the page again and provide detail')
}else{
    if(operator == '+'){
        result = num1 + num2;
    }else if (operator == '-'){
        result = num1 - num2;
    }else if (operator== '/'){
        result = num1 / num2;
    }else if (operator == '*'){
        result = num1 * num2;
    }
    alert(num1 + operator + num2 + '=' + result);
}