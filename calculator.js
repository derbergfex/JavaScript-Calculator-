<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js">
$(document).ready(function(){
  
  //Input.
  var inputArr = [""];
  //Total.
  var totalString = "";
  //Numbers array for verification.
  var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  //Operators array for verification, excluding the dot.
  var operators = ["+", "/", "*", "-"];
  //Dot operator for verification.
  var dotOperator = ["."];
  
    $("button").on("click", function(){
    if (this.id === "AC")
      {
        inputArr = [""];
        updateVal();
      }
    else if (this.id === "CE")
      {
        inputArr.pop();
        updateVal();
      }
    else if (this.id === "=")
      {
        evalTotal();
      }
    else 
      {
        evalInput(this.id);
      }
  

  function evalInput(input)
  { 
    //If input is a '.' and the last element of inputArr is a '.'. [Cannot have double entries of '.']
    if (dotOperator.includes(inputArr[inputArr.length - 1]) === true && input === ".")
      {
        console.log("Error: duplicate entry of '.'");
      }
    //If inputArr is yet to be modified and input is NOT an operator (other than '.'). [Cannot have double entries of an operator]
    else if (inputArr.length === 1 && operators.includes(input) === false)
      {
             inputArr.push(input);
      }
    //If the last element of inputArr is NOT an operator. [Cannot have last entry as an operator]
    else if (operators.includes(inputArr[inputArr.length - 1]) === false)
      {
             inputArr.push(input);
      }
    //If input is a valid number.
    else if (nums.includes(Number(input)))
      {
             inputArr.push(input);
      }
    updateVal();
  }
  function updateVal()
  {
   totalString = inputArr.join(""); 
    $("#calculatorLog").html(totalString);
  }
  function evalTotal()
  {
    totalString = inputArr.join("");
    $("#calculatorLog").html(eval(totalString));
  }
   
  });
   
});
</script>
