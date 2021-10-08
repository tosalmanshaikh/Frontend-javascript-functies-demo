// const = ["function"];
//
// const groente = ["tomaten", "sperziebonen"];

// function beriedGroente(groente){
//     //1. was groente
//     //2. laat groente uitlekken
//     //3. snij groente
//
//     return groente;
// }
//
// beriedGroente(0);
// beriedGroente(1);


//* Javascript video

// [] Functies declareren

function congratulate(){
    console.log("gefeliceteerd!");
}

function giveKisses() {
    console.log("smak");
}

// [] Functies aanroepen

congratulate();
//doe dingen
congratulate();
//doe dingen
congratulate();
giveKisses();


// [] Functies met parameters

function congratulateColleague(name) {
    console.log("Congratulations " + name + " ~yay!");
}

congratulateColleague ( "Siebe");
congratulateColleague("Khaled");
congratulateColleague("Klaudia");
congratulateColleague("Alex");
congratulateColleague("Harriet");
congratulateColleague("Ryan");
congratulateColleague("Levi");

// [] Return values

function area(width, length) {

    const outcome = width * length;

    return outcome;

//*this is better but lets get used to above first
    // return width * length;

}

const livingRoom = area(4,6);
const bedRoom = area(12,4);
const kitchen = area(4,8);
const bathroom = area(4,2);

const houseDescription = "The living room is " + livingRoom + "m2," + "The bedroom is " +bedRoom + "m2," + " kitchen is " + kitchen + "m2," + " bathroom is " + bathroom + "m2.";

console.log(houseDescription + " Perfect family home!");

// [] Regular vs Arrow functions


// function area(width, length){
//     return width * length;
// }

const area1 = function (width, length){
    return width * length;
}


//this is a shorter version 
const area2 = (width, length) => width * length;
