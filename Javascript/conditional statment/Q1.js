//Write an if-else to check if a number is positive or negative
const a = 10;
if(a < 0){
    console.log(a+" is negative number");
} else {
    console.log(a+" is postive number")
}

//Use a switch statement to print days of the week when given a number 1-7
const day = 5;
switch(day){
    case 1:
        console.log("This is Monday");
        break;
    case 2:
        console.log("This is Tuesday");
        break;
    case 3:
        console.log("This is Wednesday");
        break;
    case 4:
        console.log("This is Thursday");
        break;
    case 5:
        console.log("This is Friday");
        break;
    case 6:
        console.log("This is Saturday");
        break;
    case 7:
        console.log("This is Sunady");
        break;
    default:
        console.log("The number is not match")
}