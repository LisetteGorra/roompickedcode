
document.getElementById("selectARoom").innerHTML = selectRoomList;


var roomPicked = document.getElementById("mySelect").value;

document.getElementById("demo").innerHTML = "You picked room" + roomPicked +
    hotel.roomNumbersAvailable.splice(hotel.roomNumbersAvailable.indexOf(roomPicked), 1);
hotel.roomNumbersBooked.push(roomPicked);
