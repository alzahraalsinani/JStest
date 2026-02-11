
/*
var user = [
    {
        name: "alzahra",
        age: 23,
        city: "saham",
    },

    {
        name: "noor",
        age: 24,
        city: "sohar",
    },

    {
        name: "ali",
        age: 25,
        city: "shinas",
    },

    {
        name: "abdullah",
        age: 26,
        city: "muscat",
    },
];


console.log(user[2]);
/**/


/*
var BigArray = [
[[1,2,3],[1,2,3]],
[[1,2,3],[1,2,3],["Talaal","Yousef"]],
[["Ahemd","Eid","Saieed"],[1,2,3]],
[["Mahmoud","Hassan","Soliman"],[1,2,3]],
[[1,2,3],[1,2,3],[{name:"Monsef",id:[45,999,["SARA"]]}]],
]

console.log(BigArray[4][2][0].id[1]);
/**/

/*
for(var i=100; i<10 ; i++)

    console.log(100)
    /***/



// loops for , while  


/*
var gender = prompt("are you male or femal");

if (gender == "male") {
    for (var i = 1; i <= 10; i++)
        console.log(i);

}

else if (gender== "femal") {
    for (var j = 30;j <= 40;j++)
        console.log(j);

}


else {
    console.log("are you male or femal?");

}
    //** */



/*
var randomNumber = Math.floor(Math.random() * 10)
console.log("random Number is:" ,randomNumber)

for (i = 1; i <= 1; ++i)
    var A = prompt("Enter a Number Frome 1 to 10")

if (A > randomNumber){  console.log("too cold")

}
  
else if (A < randomNumber){ console.log("too hoot")
}
   
else {
console.log("correct")
}
//***/


//****//







/**

var userEmail = prompt("Please Enter Your Email")
var userpass = prompt("Please Enter Your password")

var A = 0;
while (userEmail != "ahmed@gmail" && userpass != "12345A") {


    A++;
    if (A < 3) {
        alert("error")
        userEmail = prompt("Please Enter Your Email")
        userpass = prompt("Please Enter Your password")
    }
    else {
        alert("stop")
    }

alert("Wait 3 seconds");
        setTimeout(function() {
        }, 3000); 
        break;

}
/***/



var userEmail = prompt("enter Email")
var userpass = prompt("enter password")
var number_of_tries = 0
while (userEmail != "aaaa" || userpass != "45") {
    number_of_tries++
    if (number_of_tries < 3) {
        userEmail = prompt("enter Email")
        userpass = prompt("enter password")
    }
    else {
        alert("you try too many times")
        break
    }
}
if (userEmail == "aaaa" && userpass == "45") {
    alert("successfully logged in")
    var number_of_questions = +prompt("please enter number of questions:")
    var Operators = ["+", "-", "*", "/", "**", "%"]
    var score = 0

    for (var i = 1; i <= number_of_questions; i++) {
        var num1 = Math.floor(Math.random() * 10)
        var num2 = Math.floor(Math.random() * 10)
        var operation = Operators[Math.floor(Math.random() * Operators.length)]
        var userAnswer = +prompt(`${i}) ${num1} ${operation} ${num2} =`);
        var correctAnswer;

        if (operation === "+") {
            correctAnswer = num1 + num2;
        } else if (operation === "-") {
            correctAnswer = num1 - num2;
        } else if (operation === "*") {
            correctAnswer = num1 * num2;
        } else if (operation === "**") {
            correctAnswer = num1 ** num2;
        } else if (operation === "/") {

            correctAnswer = num1 / num2;
        } else if (operation === "%") {
            correctAnswer = num1 % num2;
        }

        if (userAnswer === correctAnswer) {
            score++;
        }
    }

    alert("Your total score is: " + score + " out of " + number_of_questions);
}