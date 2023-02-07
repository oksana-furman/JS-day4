//basic exercise 1 
// function printInfo() {
//     let fname = document.getElementById("fname").value;
//     let lname = document.getElementById("lname").value;
//     let age = document.getElementById("age").value;

//     if (fname.length >= 5) {
//         document.getElementById("container").innerHTML = `<span style="color:green">${fname}</span> ${lname} is ${age} years old.`
//     } else {
//         document.getElementById("container").innerHTML = `<span style="color:red">${fname}</span> ${lname} is ${age} years old.`
//     }

//     document.getElementById("container").innerHTML = `<span>${fname}</span> ${lname} is ${age} years old.`;
// }

// document.getElementById("btn").addEventListener("click", printInfo);
// end of basic exercise 1

// basic exercise 2
function printInfo() {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let age = document.getElementById("age").value;
    let profession = document.getElementById("profession").value;

    document.getElementById("container").innerHTML += `<span>${fname}</span> ${lname} is ${age} years old and works in ${profession}.`;

    if (fname.length >= 5) {
        document.getElementById("container").innerHTML = `<span style="color:green">${fname}</span> ${lname} is ${age} years old and works in ${profession}.`
    } else {
        document.getElementById("container").innerHTML = `<span style="color:red">${fname}</span> ${lname} is ${age} years old and works in ${profession}.`
    }

    if (profession = "IT") {
        document.getElementById("container").style.background = "purple";
    } else if (profession = "Hospitality") {
        document.getElementById("container").style.background = "yellow";
    } else if (profession = "Hospitality") {
        document.getElementById("container").style.background = "blue";
    } else {
        document.getElementById("container").style.background = "pink";
    }


}
document.getElementById("btn").addEventListener("click", printInfo);