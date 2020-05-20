let username = "ucha";
let password = "pheradze";

let person = {
    username: "ucha",
    password: "pheradze",
}

let person2 = {
    username: "ucha2",
    password: "pheradze2",
}

let person3 = {
    username: "ucha3",
    password: "pheradze3",
}

let person4 = {
    username: "ucha4",
    password: "pheradze4",
}

let persons = []

persons.push(person);
persons.push(person2);
persons.push(person3);
persons.push(person4);

function foundPersons(persons, possibleUsername) {
    for (let i = 0; i < persons.length; i++)
    if (persons[i].username === possibleUsername) {
        return persons[i];
    }
}

function foundPassword(person, possiblePassword) {
    let foundPerson = person.password === possiblePassword;
    return foundPerson;
} 


function login(username, password) {
    let possiblePerson = foundPersons(persons, username);
    if(!possiblePerson) {
        console.log("სამწუხაროდ მომხმარებელი ვერ მოიძებნა");
    } else {
        let isPasswordValid = foundPassword(possiblePerson, password);
        if (isPasswordValid) {
            console.log("თქვენ წარმატებით შეხვედით");
        } else {
            console.log("პაროლი არასწორია,სცადეთ თავიდან");
        }
    }
}

login("ucha", "pheradze");