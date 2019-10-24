    //code written by Terry D'Arcy as part of the Distilled SCH technical challenge
    var input = [];
    var inputStream = "";
    var carryOver = false;

	function enterDigit(i){
		var div = document.getElementById('display');
        //console.log(input);
		//console.log(inputStream);

        if(!isNaN(i) || i === ".") {
        	inputStream += i;
        	div.innerHTML += i;
        } else {

            if(i == "-" && input[1] == "-"  && typeof input[2] === 'undefined' && inputStream == "") { // this if statement allows the user to do a double negative ex 5--5 = 10
                inputStream += i;
                div.innerHTML += i;
            }

        	if(i === "=" && typeof input[1] != 'undefined' && inputStream!="") { // check if the user has entered '=' and the sum is ready aka has two numbers and an operator
        		input.push(inputStream);
        		inputStream = "";
                console.log(input);
                if(typeof input[2] != 'undefined') calculate(parseFloat(input[0]), input[1], parseFloat(input[2]));
        	} else if( i != "=" && typeof input[1] === 'undefined' && (typeof input[0] != 'undefined' || inputStream!="" && inputStream != "-")){ 
        		div.innerHTML += i;
        		if(!carryOver) input.push(inputStream);
        		input.push(i);
        		inputStream = "";
        	}
        }
        if((inputStream==="" && i == "-" && typeof input[1] === 'undefined')){ //this if statements allows the user to insert a '-' as a first input
			inputStream += i;
        	div.innerHTML += i;
		} 
	}

	function calculate(x, operator,y) {
		clearDisplay();
	    var div = document.getElementById('display');		
		var result;
        if(operator == "+") {
        	result = x+y;
        } else if(operator == "-") {
        	result = x-y;
        } else if(operator == "x") {
        	result = x*y;
        } else if(operator == "/") {
        	result = x/y;
        }
        input.push(result);
        div.innerHTML += result;
        console.log("Equation: " + x + operator + y + "=" + result);
        carryOver = true;
    }

    function clearDisplay() {
		var div = document.getElementById('display');
		console.log("CLEARED");
		input = [];
		inputStream = "";
		div.innerHTML = "";
		carryOver = false;
	}

