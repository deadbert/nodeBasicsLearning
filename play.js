const userName = 'Nick';
let age = 33;
const hasHobbies = true;


const summarizeUser = (userName, userAge, userHasHobby) => {
    return (
        'Name is ' + 
        userName + 
        ', age is ' + 
        userAge + 
        ' and the user has hobbies: ' + 
        userHasHobby
    );
}

console.log(summarizeUser(userName, age, hasHobbies));
