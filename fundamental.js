const myName = "Abu Daud Hossain";
let season = "winter";
season = "Spring" ;

if(season === "winter"){
    console.log("Now I am ",season);
}else{
    console.log("I am not winter ,Now I", season);
}

const myFriend = ['Abu Daud', 'Ashik', 'Rafat', 'Rajib'];

const ashikPosition = myFriend.indexOf('Ashik');
const emranPosition = myFriend.indexOf('Emran');

console.log(ashikPosition);
console.log(emranPosition);

myFriend.push("Emran");
myFriend[3] = "Abu Saiyd";
console.log(myFriend);

const newFriendList = [...myFriend, 'Kutu Mia'];
console.log(newFriendList);