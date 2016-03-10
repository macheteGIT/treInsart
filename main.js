var input = document.getElementById('disp');
var numbersArr = [];
var bufferNumbers = "";


function numbersandoperations() {
    var numbers = document.getElementsByClassName('number');
    for (var i = 0; i < numbers.length; i++) {
        var a = numbers[i].addEventListener("click", clickNumbers);

    }

    var operations = document.getElementsByClassName('operation');
    for (var j = 0; j < operations.length; j++) {
        operations[j].addEventListener("click", clickOperation);
        operations[j].addEventListener("click", clickEqually);

    }



    function clickNumbers() {
        input.value += this.value;
        bufferNumbers += this.value;
        console.log(bufferNumbers);
    };

    function clickOperation() {
        numbersArr.push(bufferNumbers);
        bufferNumbers = "";
        console.log(bufferNumbers);
        input.value += this.value
        numbersArr.push(this.value);

    };


    function clickEqually() {
        if (this.value == "=") {
            // console.log(numbersArr);
        }
        var val1 = numbersArr[0];
        var val2 = numbersArr[2];
        var oper = numbersArr[1];

        if (numbersArr.length >= 3) {
            if (val1 != NaN || val1 != undefined || val1 != null || val2 != NaN || val2 != undefined || val2 != null) {

                if (oper === "+") {
                    var afterOperation = parseInt(val1) + parseInt(val2);
                } else if (oper === "-") {
                    var afterOperation = parseInt(val1) - parseInt(val2);
                } else if (oper === "*") {
                    var afterOperation = parseInt(val1) * parseInt(val2);
                } else if (oper === "/") {
                    var afterOperation = parseInt(val1) / parseInt(val2);
                }

                alert(afterOperation);
                numbersArr = [];
                input.value = "";

            }
        };

    }

    }
    document.getElementById('reset').onclick = function reset() {
      input.value = "";
      bufferNumbers = "";
      numbersArr=[];
}

numbersandoperations();
