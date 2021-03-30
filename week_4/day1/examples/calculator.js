function calculate(operand, num1, num2) {
    if (operand == "multiply") {
      result = num1 * num2
      console.log(`You selected ${operand} and your result is ${result}`);
    } else if (operand == "subtract") {
      result = num1 - num2
      console.log(`You selected ${operand} and your result  is ${result}`);
    } else if (operand == "add") {
      result = num1 + num2
      console.log(`You selected ${operand} and your result  is ${result}`);
    } else if (operand == "divide") {
      result = num1 / num2
      console.log(`You selected ${operand} and your result  is ${result}`);
    } else {
      console.log("Try again") //return error code//
    }
  };
  calculate("multiply", 10, 2)
//print each operation//
  calculate("subtract", 10, 2)
  //print each operation//
  calculate("add", 10, 2)
  //print each operation//
  calculate("divide", 10, 2)
  //print each operation//