var strOperation = [];
var result;

var themePicker = 1;

function changeTheme() {

  themePicker++;
  if (themePicker == 4) {
    themePicker = 1;
  }
  let count = document.querySelectorAll(".s-btn").length;

  switch (themePicker) {

    case 1:
      document.querySelector(".widget-container").classList.remove("theme-2");
      document.querySelector(".widget-container").classList.remove("theme-3");
      document.querySelector(".widget-container").classList.add("theme-1");
      document.querySelector("body").classList.remove("th2");
      document.querySelector("body").classList.remove("th3");
      document.querySelector("body").classList.add("th1");
      document.querySelector(".middle-div").classList.remove("th2");
      document.querySelector(".middle-div").classList.remove("th3");
      document.querySelector(".middle-div").classList.add("th1");
      document.querySelector(".bottom-div").classList.remove("th2");
      document.querySelector(".bottom-div").classList.remove("th3");
      document.querySelector(".bottom-div").classList.add("th1");
      for (let i = 0; i < count; i++) {
        document.querySelectorAll(".s-btn")[i].classList.remove("th2");
        document.querySelectorAll(".s-btn")[i].classList.remove("th3");
        document.querySelectorAll(".s-btn")[i].classList.add("th1");
      }
      document.querySelector(".reset-btn").classList.remove("th2");
      document.querySelector(".reset-btn").classList.remove("th3");
      document.querySelector(".reset-btn").classList.add("th1");
      document.querySelector(".delete-btn").classList.remove("th2");
      document.querySelector(".delete-btn").classList.remove("th3");
      document.querySelector(".delete-btn").classList.add("th1");
      document.querySelector(".iqual-btn").classList.remove("th2");
      document.querySelector(".iqual-btn").classList.remove("th3");
      document.querySelector(".iqual-btn").classList.add("th1");
      for (let i = 0; i < 3; i++) {
        document.querySelectorAll(".widget-nums>p")[i].classList.remove("th2");
        document.querySelectorAll(".widget-nums>p")[i].classList.remove("th3");
        document.querySelectorAll(".widget-nums>p")[i].classList.add("th1");
      }
      document.querySelector(".circle-selector").classList.remove("th2");
      document.querySelector(".circle-selector").classList.remove("th3");
      document.querySelector(".circle-selector").classList.add("th1");

      document.querySelector(".calc-div>h4").classList.remove("th2");
      document.querySelector(".calc-div>h4").classList.remove("th3");
      document.querySelector(".calc-div>h4").classList.add("th1");
      document.querySelector(".theme-text>h6").classList.remove("th2");
      document.querySelector(".theme-text>h6").classList.remove("th3");
      document.querySelector(".theme-text>h6").classList.add("th1");

      document.querySelector(".operation-div>h3").classList.remove("th2");
      document.querySelector(".operation-div>h3").classList.remove("th3");
      document.querySelector(".operation-div>h3").classList.add("th1");

      document.querySelector(".result-div>h1").classList.remove("th2");
      document.querySelector(".result-div>h1").classList.remove("th3");
      document.querySelector(".result-div>h1").classList.add("th1");

      break;

    case 2:
      document.querySelector(".widget-container").classList.remove("theme-1");
      document.querySelector(".widget-container").classList.remove("theme-3");
      document.querySelector(".widget-container").classList.add("theme-2");
      document.querySelector("body").classList.remove("th1");
      document.querySelector("body").classList.remove("th3");
      document.querySelector("body").classList.add("th2");
      document.querySelector(".middle-div").classList.remove("th1");
      document.querySelector(".middle-div").classList.remove("th3");
      document.querySelector(".middle-div").classList.add("th2");
      document.querySelector(".bottom-div").classList.remove("th1");
      document.querySelector(".bottom-div").classList.remove("th3");
      document.querySelector(".bottom-div").classList.add("th2");
      for (let i = 0; i < count; i++) {
        document.querySelectorAll(".s-btn")[i].classList.remove("th1");
        document.querySelectorAll(".s-btn")[i].classList.remove("th3");
        document.querySelectorAll(".s-btn")[i].classList.add("th2");
      }
      document.querySelector(".reset-btn").classList.remove("th1");
      document.querySelector(".reset-btn").classList.remove("th3");
      document.querySelector(".reset-btn").classList.add("th2");
      document.querySelector(".delete-btn").classList.remove("th1");
      document.querySelector(".delete-btn").classList.remove("th3");
      document.querySelector(".delete-btn").classList.add("th2");
      document.querySelector(".iqual-btn").classList.remove("th1");
      document.querySelector(".iqual-btn").classList.remove("th3");
      document.querySelector(".iqual-btn").classList.add("th2");
      for (let i = 0; i < 3; i++) {
        document.querySelectorAll(".widget-nums>p")[i].classList.remove("th1");
        document.querySelectorAll(".widget-nums>p")[i].classList.remove("th3");
        document.querySelectorAll(".widget-nums>p")[i].classList.add("th2");
      }
      document.querySelector(".circle-selector").classList.remove("th1");
      document.querySelector(".circle-selector").classList.remove("th3");
      document.querySelector(".circle-selector").classList.add("th2");

      document.querySelector(".calc-div>h4").classList.remove("th1");
      document.querySelector(".calc-div>h4").classList.remove("th3");
      document.querySelector(".calc-div>h4").classList.add("th2");

      document.querySelector(".theme-text>h6").classList.remove("th1");
      document.querySelector(".theme-text>h6").classList.remove("th3");
      document.querySelector(".theme-text>h6").classList.add("th2");

      document.querySelector(".operation-div>h3").classList.remove("th1");
      document.querySelector(".operation-div>h3").classList.remove("th3");
      document.querySelector(".operation-div>h3").classList.add("th2");

      document.querySelector(".result-div>h1").classList.remove("th1");
      document.querySelector(".result-div>h1").classList.remove("th3");
      document.querySelector(".result-div>h1").classList.add("th2");
      break;

    case 3:
      document.querySelector(".widget-container").classList.remove("theme-2");
      document.querySelector(".widget-container").classList.remove("theme-1");
      document.querySelector(".widget-container").classList.add("theme-3");
      document.querySelector("body").classList.remove("th2");
      document.querySelector("body").classList.remove("th1");
      document.querySelector("body").classList.add("th3");
      document.querySelector(".middle-div").classList.remove("th2");
      document.querySelector(".middle-div").classList.remove("th1");
      document.querySelector(".middle-div").classList.add("th3");
      document.querySelector(".bottom-div").classList.remove("th2");
      document.querySelector(".bottom-div").classList.remove("th1");
      document.querySelector(".bottom-div").classList.add("th3");
      for (let i = 0; i < count; i++) {
        document.querySelectorAll(".s-btn")[i].classList.remove("th2");
        document.querySelectorAll(".s-btn")[i].classList.remove("th1");
        document.querySelectorAll(".s-btn")[i].classList.add("th3");
      }
      document.querySelector(".reset-btn").classList.remove("th2");
      document.querySelector(".reset-btn").classList.remove("th1");
      document.querySelector(".reset-btn").classList.add("th3");
      document.querySelector(".delete-btn").classList.remove("th2");
      document.querySelector(".delete-btn").classList.remove("th1");
      document.querySelector(".delete-btn").classList.add("th3");
      document.querySelector(".iqual-btn").classList.remove("th2");
      document.querySelector(".iqual-btn").classList.remove("th1");
      document.querySelector(".iqual-btn").classList.add("th3");
      for (let i = 0; i < 3; i++) {
        document.querySelectorAll(".widget-nums>p")[i].classList.remove("th2");
        document.querySelectorAll(".widget-nums>p")[i].classList.remove("th1");
        document.querySelectorAll(".widget-nums>p")[i].classList.add("th3");
      }
      document.querySelector(".circle-selector").classList.remove("th2");
      document.querySelector(".circle-selector").classList.remove("th1");
      document.querySelector(".circle-selector").classList.add("th3");

      document.querySelector(".calc-div>h4").classList.remove("th2");
      document.querySelector(".calc-div>h4").classList.remove("th1");
      document.querySelector(".calc-div>h4").classList.add("th3");

      document.querySelector(".theme-text>h6").classList.remove("th2");
      document.querySelector(".theme-text>h6").classList.remove("th1");
      document.querySelector(".theme-text>h6").classList.add("th3");

      document.querySelector(".operation-div>h3").classList.remove("th2");
      document.querySelector(".operation-div>h3").classList.remove("th1");
      document.querySelector(".operation-div>h3").classList.add("th3");

      document.querySelector(".result-div>h1").classList.remove("th2");
      document.querySelector(".result-div>h1").classList.remove("th1");
      document.querySelector(".result-div>h1").classList.add("th3");
      break;

    default:

  }
}


//Having the complete and verified opartion saved in an array
//this function will be call when = is pressed and will print
//the result at the end
function renderOperation() {

  var arr = strOperation;
  var arr2 = [];

  //Op = 35 + 60*2 -50/5
  //Expected Output: 145

  //Convert the arr into a string
  var str = arr.join('');

  //Isolate division and multiplication
  for (let i = 0; i < str.length; i++) {
    for (let x = i + 1; x < str.length + 1; x++) {
      if (str[x] == '+') {
        arr2.push(str.slice(i, x));
        arr2.push('+');
        i = x + 1;
      } else if (str[x] == '-') {
        arr2.push(str.slice(i, x));
        arr2.push('-');
        i = x + 1;
      } else if (str[x] == undefined) {

        arr2.push(str.slice(i, x));
        var breakLoop = true;
        break;
      }
    }
    if (breakLoop) {
      break;
    }
  }


  function opMultDiv(argStr1) {

    let argStr = argStr1;
    let argArr = [];

    //Isolate Factors and multiplication
    for (let i = 0; i < argStr.length; i++) {
      for (let x = i + 1; x < argStr.length + 1; x++) {
        if (argStr[x] == 'x') {
          argArr.push(argStr.slice(i, x));
          argArr.push('x');
          i = x + 1;
        } else if (argStr[x] == '/') {
          argArr.push(argStr.slice(i, x));
          argArr.push('/');
          i = x + 1;
        } else if (argStr[x] == undefined) {

          argArr.push(argStr.slice(i, x));
          var breakLoop = true;
          break;
        }
      }
      if (breakLoop) {
        break;
      }
    }


    console.log(argArr);

    //Now is time to render the Mult and Division

    var divMult = argArr[0] * 1;

    console.log(argArr.length);

    for (let i = 0; i < argArr.length; i++) {

      if (argArr[i] == 'x') {

        divMult = divMult * (argArr[i + 1] * 1);

      } else if (argArr[i] == '/') {

        if (argArr[i + 1] * 1 != 0) {

          divMult = divMult / (argArr[i + 1] * 1);

        } else {
          //Division by zero detected
          return "∞";
          break;
        }
      }
    }

    console.log(divMult);
    console.log(divMult);
    return divMult;

  }



  //Scan for the division and multiplication and send them
  //to be calculated

  for (let i = 0; i < arr2.length; i++) {
    for (let x = 0; x < arr2[i].length; x++) {

      if (arr2[i][x] == 'x' || arr2[i][x] == '/') {

        let arg = opMultDiv(arr2[i]);

        arr2[i] = arg;

      } else {


      }

    }
  }

  //Get the final arr2 and render the sums and subtractios

  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] == "∞") {
      result = "∞";
    } else {
      if (arr2[i - 1] == undefined) {
        result = arr2[i] * 1;
      } else if (arr2[i - 1] == '+') {

        result = result + arr2[i] * 1;
      } else if (arr2[i - 1] == '-') {

        result = result - arr2[i] * 1;
      }
    }
  }

  console.log(arr);
  console.log(str);
  console.log(arr2);
  console.log(result);

  // result = Math.random() * 100;
  if (result != "∞") {
    result = roundUpTwoDecimals(result);
  }

  printResult();
}

//This function will work as validation for the Entries
// none of the operators . x / + - = can be one after the other or begin or start
//with them
function verifyEntry(btnClass) {

  //Not begining with operator simbol
  if (strOperation.length < 1 || strOperation == undefined) {

    switch (btnClass) {

      case "btn-minuns":
      case "btn-plus":
      case "btn-dot":
      case "btn-divide":
      case "btn-mult":
        return false;
        break;

      default:
        return true;
    }

  } else {
    //Dont do anything if you try to type multiple zeros at the begining
    if (strOperation.length == 1 && strOperation[0] == 0 && btnClass == "btn0") {
      return false;

    } else if ((strOperation.length == 1 && strOperation[0] == 0)) {
      //if you type a number having a cero at left, the zero will be removed
      switch (btnClass) {
        case "btn1":
        case "btn2":
        case "btn3":
        case "btn4":
        case "btn5":
        case "btn6":
        case "btn7":
        case "btn8":
        case "btn9":
          strOperation.pop();
          return true;
          break;

        default:
          return true;
      }

    } else if (strOperation.length > 2 && strOperation[strOperation.length - 1] == 0) {
      //If there is an operator and a zero after it, if you press another number
      //the zero at the left will be removed
      switch (strOperation[strOperation.length - 2]) {

        case " - ":
        case " + ":
        case " / ":
        case " x ":

          switch (btnClass) {
            case "btn0":
            case "btn1":
            case "btn2":
            case "btn3":
            case "btn4":
            case "btn5":
            case "btn6":
            case "btn7":
            case "btn8":
            case "btn9":
              strOperation.pop();
              return true;
              break;

            case "iqual-btn":
              console.log("Hello3");
              strOperation.pop();
              return false;
              break;

            default:
              return true;
          }
          break;


        default:
          return true;
      }
    } else {

      switch (strOperation[strOperation.length - 1]) {



        case " - ":
        case " + ":
        case " / ":
        case " x ":
        case ".":

          switch (btnClass) {
            case "btn-minuns":
            case "btn-plus":
            case "btn-dot":
            case "btn-divide":
            case "btn-mult":
              strOperation.pop();
              return true;
              break;

            case "iqual-btn":
              console.log("Hello4");
              strOperation.pop();
              return false;
              break;

            default:
              return true;
          }
          break;


        default:
          return true;
      }
    }
  }

  return returnValue;
}

//This function will be called to print in the Operation Space
function printOp() {
  document.querySelector(".op-space").innerHTML = strOperation.join("");
}

//This functoion is to round the result to two decimal places
function roundUpTwoDecimals(num) {
  return (Math.round(num * 100)) / 100;
}

//This function is calld to print the final resutl
function printResult() {
  document.querySelector(".result-space").innerHTML = result;
}

//This function will get the class btn pressed and save it insde and array
//at the end of verifing and saving it show print the operation
function saveOperation(btnClass) {

  if (verifyEntry(btnClass)) {
    switch (btnClass) {

      case "btn-minuns":
        strOperation.push(" - ");
        break;

      case "delete-btn":
        strOperation.pop();
        break;

      case "btn-plus":
        strOperation.push(" + ");
        break;

      case "btn-dot":
        strOperation.push(".");
        break;

      case "btn-divide":
        strOperation.push(" / ");
        break;

      case "btn-mult":
        strOperation.push(" x ");
        break;

      case "reset-btn":
        //Do nothing
        break;

      case "iqual-btn":
        //Do nothning
        break;

      default:
        strOperation.push(btnClass[3]);
    }

  } else {
    console.log("not valid");
    //We can add a warning here
  }
  printOp();

  switch (btnClass) {

    case "reset-btn":
      strOperation = [];
      result = "";
      printOp();
      printResult()
      break;

    case "iqual-btn":
      renderOperation();
      break;

    default:

  }


  console.log(strOperation);
}

// This function is to hightlight the buttons that get pressed
function hightlightBtn(itemClass) {
console.log(itemClass);
  if(itemClass!="reset-btn" && itemClass!="iqual-btn" && itemClass!="delete-btn" ){
    document.querySelector("." + itemClass).classList.add("btn-clicked");
    setTimeout(() => {
      document.querySelector("." + itemClass).classList.remove("btn-clicked");
    }, "100")
  } else
  {
    //Reset and DEL Bottom
    if(itemClass=="reset-btn" || itemClass=="delete-btn" ){
      document.querySelector("." + itemClass).classList.add("btn-rd-clicked");
      setTimeout(() => {
        document.querySelector("." + itemClass).classList.remove("btn-rd-clicked");
      }, "100")
    } else if(itemClass=="iqual-btn"){
      document.querySelector("." + itemClass).classList.add("btn-i-clicked");
      setTimeout(() => {
        document.querySelector("." + itemClass).classList.remove("btn-i-clicked");
      }, "100")
    }
  }
}

//Event Listener to get the class of the btn pressed
for (i = 0; i < 18; i++) {

  document.querySelectorAll(".btn")[i].addEventListener("click", function(e) {
    console.log(e.target.classList[2]);


    hightlightBtn(e.target.classList[2]);
    saveOperation(e.target.classList[2]);


  });
}

//Event Listener to change the picker selector
document.querySelector("#theme-picker").addEventListener("click", function() {
  changeTheme();
});
