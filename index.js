// Code your solutions in this file
for (let age=30; age <40;age++){
    console.log(`I'm ${age} years old. Happy Birthday me!`);
    
}

const gifts=["teddy bear","drone","doll"];

function wrapGifts(gifts){
    for(let i=0;i<gifts.length;i++){
        console.log(`Wrapped ${gifts[i]} and added a bowl!`)
    }
    return gifts;

}

wrapGifts(gifts);

function writeCards(person,event){
    let message=[];

    for(let i=0;i<person.length;i++){

        message[i]=`Thank you, ${person[i]}, for the wonderful ${event} gift!`


    }
    return message;



}

// const example1=writeCards(["anny","adam","james"],'earth day');
// console.log(example1);

function countDown(number){
    
    while(number>=0){
        console.log(number);
        number--;
    }
    return number;

}
// countDown(5);

