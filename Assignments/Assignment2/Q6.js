let totalSeats = 120;
let bookedSeats = 78;

let availableSeats = totalSeats - bookedSeats;
console.log("Available Seats:", availableSeats);

let status =
    (availableSeats < 20) ? "Almost Full" :
    (availableSeats >= 20 && availableSeats <= 60) ? "Moderate Availability" :
    "Plenty of Seats Available";

console.log("Status:", status);
