function excercise1 () {
    alert('Hello!');
}

function excercise2 () {
    let num = parseInt(prompt('Enter a number:'));
    alert(num+1);
}

function excercise3 () {
    let a = parseInt(prompt('Enter a number:'));
    let b = parseInt(prompt('Enter a number:'));
    if (a>b){
        alert('First number great more than second number!')
    }
    else {
        alert(a+b);
    }
}

function excercise4 () {
    function addNumbers() {
        firstNum = 4;
        secondNum = 8;
        result = firstNum + secondNum;
        return result;
    }
    result = 0; alert(result);
    result = addNumbers(); alert(result);
}

function excercise5 () {
    let array1 = ['Polaris', 'Aldebaran', 'Deneb', 'Vega', 'Altair', 'Dubhe', 'Regulus'];
    let array2 = ['Ursa Minor', 'Tarurus', 'Cygnus', 'Lyra', 'Aquila', 'Ursa Major', 'Leo'];
    let input1 = prompt('Enter a name of star');
    for (i=0;i<array1.length;i++){
        if (array1[i] == input1) {
            alert(array2[i]);
            break;
        }
        else if (i==array1.length-1)  {
            alert('Have not this star in list!');
        }
    }
}