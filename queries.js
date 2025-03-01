//Create a database with name InfyAirlinesDB
use InfyAirlinesDB;

//Create a collection with name Flights in InfyAirlinesDB
db.createCollection("Flights");

//Insert the data (downloaded from the above link) into Flights collection,
db.Flights.insertMany([
        {
            "source": "Bengaluru",
            "destination": "Delhi",
            "flights": [
                {
                    "flightId": "I5-2878",
                    "flightStatus": "Running",
                    "airlinesName": "Air Asia",
                    "departureTime": new Date("2001-01-01 06:15").toLocaleTimeString(),
                    "arrivalTime": new Date("2001-01-01 08:45").toLocaleTimeString(),
                    "seatsAvailable": 96,
                    "fare": [
                        {
                            "travelClass": "Economy",
                            "baseFare": 4485
                        },
                        {
                            "travelClass": "Business",
                            "baseFare": 9485
                        }
                    ],
                    "stops": 0,
                    "bookings": [
                        {
                            "emailId": "tom123@gmail.com",
                            "bookingId": 2001,
                            "bookingCost": 13455,
                            "travelBookingClass": "Economy",
                            "departureDate": new Date(2021, 7, 9),
                            "noOfTickets": 3,
                            "ticketStatus": "Confirmed",
                            "passengerDetails": [
                                {
                                    "passengerName": "John",
                                    "passengerAge": 45,
                                    "gender": "Male",
                                    "bookingStatus": "Confirmed"
                                },
                                {
                                    "passengerName": "David",
                                    "passengerAge": 35,
                                    "gender": "Male",
                                    "bookingStatus": "Confirmed"
                                },
                                {
                                    "passengerName": "Maria",
                                    "passengerAge": 38,
                                    "gender": "Female",
                                    "bookingStatus": "Confirmed"
                                }
                            ]
                        },
                        {
                            "emailId": "John94@gmail.com",
                            "bookingId": 2002,
                            "bookingCost": 4485,
                            "departureDate": new Date(2021, 11, 23),
                            "travelBookingClass": "Ecomomy",
                            "noOfTickets": 1,
                            "ticketStatus": "Confirmed",
                            "passengerDetails": [
                                {
                                    "passengerName": "Emily",
                                    "passengerAge": 29,
                                    "gender": "Female",
                                    "bookingStatus": "Confirmed"
                                }
                            ]
                        }
                    ]
                },
                {
                    "flightId": "E6-2135",
                    "flightStatus": "Running",
                    "airlinesName": "Indigo",
                    "departureTime": new Date("2001-01-01 06:00").toLocaleTimeString(),
                    "arrivalTime": new Date("2001-01-01 08:50").toLocaleTimeString(),
                    "seatsAvailable": 4,
                    "fare": [
                        {
                            "travelClass": "Economy",
                            "baseFare": 3988
                        },
                        {
                            "travelClass": "Business",
                            "baseFare": 9999
                        }
                    ],
                    "stops": 0,
                    "bookings": [
                        {
                            "emailId": "John94@gmail.com",
                            "bookingId": 2003,
                            "bookingCost": 3988,
                            "travelBookingClass": "Economy",
                            "departureDate": new Date(2022, 01, 01),
                            "noOfTickets": 1,
                            "ticketStatus": "Confirmed",
                            "passengerDetails": [
                                {
                                    "passengerName": "Steve",
                                    "passengerAge": 25,
                                    "gender": "Male",
                                    "bookingStatus": "Confirmed"
                                }
                            ]
                        },
                        {
                            "emailId": "John94@gmail.com",
                            "bookingId": 2004,
                            "bookingCost": 3988,
                            "departureDate": new Date(2021, 03, 27),
                            "travelBookingClass": "Economy",
                            "noOfTickets": 0,
                            "ticketStatus": "Cancelled",
                            "passengerDetails": [
                                {
                                    "passengerName": "Richard",
                                    "passengerAge": 29,
                                    "gender": "Male",
                                    "bookingStatus": "Cancelled"
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "source": "Chennai",
            "destination": "Kolkata",
            "flights": [
                {
                    "flightId": "AI-766",
                    "flightStatus": "Running",
                    "airlinesName": "Air India",
                    "departureTime": new Date("2001-01-01 11:35").toLocaleTimeString(),
                    "arrivalTime": new Date("2001-01-01 13:55").toLocaleTimeString(),
                    "seatsAvailable": 23,
                    "fare": [
                        {
                            "travelClass": "Economy",
                            "baseFare": 3587
                        },
                        {
                            "travelClass": "Economy",
                            "baseFare": 3600
                        },
                        {
                            "travelClass": "Economy",
                            "baseFare": 3988
                        },
                        {
                            "travelClass": 'Business',
                            "baseFare": 9649
                        }
                    ],
                    "stops": 1,
                    "bookings": [
                        {
                            "emailId": "maria10@gmail.com",
                            "bookingId": 2005,
                            "bookingCost": 7174,
                            "travelBookingClass": "Economy",
                            "departureDate": new Date(2021, 02, 08),
                            "noOfTickets": 1,
                            "ticketStatus": "Confirmed",
                            "passengerDetails": [
                                {
                                    "passengerName": "Joe",
                                    "passengerAge": 25,
                                    "gender": "Male",
                                    "bookingStatus": "Confirmed"
                                },
                                {
                                    "passengerName": "Jack",
                                    "passengerAge": 35,
                                    "gender": "Male",
                                    "bookingStatus": "Cancelled"
                                }
                            ]
                        },
                        {
                            "emailId": "John94@gmail.com",
                            "bookingId": 2006,
                            "bookingCost": 4485,
                            "noOfTickets": 1,
                            "departureDate": new Date(202, 01, 12),
                            "travelBookingClass": "Ecomomy",
                            "ticketStatus": "Confirmed",
                            "passengerDetails": [
                                {
                                    "passengerName": "Emily",
                                    "passengerAge": 29,
                                    "gender": "Female",
                                    "bookingStatus": "Confirmed"
                                }
                            ]
                        }
                    ]
                },
                {
                    "flightId": "E6-2145",
                    "flightStatus": "Cancelled",
                    "airlinesName": "Indigo",
                    "departureTime": new Date("2001-01-01 06:00").toLocaleTimeString(),
                    "arrivalTime": new Date("2001-01-01 08:50").toLocaleTimeString(),
                    "seatsAvailable": 10,
                    "fare": [
                        {
                            "travelClass": "Economy",
                            "baseFare": 3988
                        },
                        {
                            "travelClass": "Business",
                            "baseFare": 9999
                        }
                    ],
                    "stops": 0,
                    "bookings": []
                }
            ]
        }
])

//Display all the NON STOP filgts from Bengaluru to Delhi.
db.Flights.aggregate([
    {$unwind:"$flights"},
    {$match:{source:"Bengaluru",destination:"Delhi","flights.stops":0}},
    {$project:{flights:1}}
])

//Display the flightId of all those flights in which no booking is done
db.Flights.aggregate([ 
    { $unwind: "$flights" }, 
    { $match: { "flights.bookings": { $size: 0 } } }, 
    { $project: { "flights.flightId": 1 } }
])

//Display the flights from Chennai to Kolkata having more than 10 seats available
db.Flights.aggregate([ 
    {$unwind:"$flights"}, 
    {$match:{source:"Chennai",destination:"Kolkata","flights.seatsAvailable":{$gt:10}}}, 
    {$project:{source:1,destination:1,flights:1}}
])

//Display the baseFare for each class of flight E6-2145
db.Flights.aggregate([
    { $unwind: "$flights" }, 
    { $match: { "flights.flightId": "E6-2145" } },
    { $unwind: "$flights.fare" },
    { 
      $project: { 
        _id: 0,  
        travelClass: "$flights.fare.travelClass",  
        baseFare: "$flights.fare.baseFare"  
      } 
    }
  ]).pretty()

//Increase the baseFare for Economy Class of all the flights between any source and destination to 3800 if it is less than 3800
db.Flights.updateMany(
    { "flights.fare.travelClass": "Economy", "flights.fare.baseFare": { $lt: 3800 } }, 
    { $set: { "flights.$[].fare.$[elem].baseFare": 3800 } }, 
    { arrayFilters: [{ "elem.travelClass": "Economy", "elem.baseFare":{$lt:3800} }] }
)

// Add a new booking for 1 passenger (Chennai to Kolkata), in flight AI-766. Passenger Details are:

// {
//    "passengerName": "Jonty",
//    "passengerAge": 29,
//    "gender": "Male"
// }
//Note: The availability of seats should also be modified
var bookingData = db.Flights.aggregate([
    { $unwind: "$flights" },
    { $unwind: "$flights.bookings" },
    { $match: { "flights.bookings.bookingId": 2001 } },
    { $project: { _id: 0, noOfTickets: "$flights.bookings.noOfTickets" } }
  ]).toArray();
  
var ticketsToIncrease = bookingData.length > 0 ? bookingData[0].noOfTickets : 0;

db.Flights.updateOne(
{ "flights.bookings.bookingId": 2001 }, 
{ 
    $set: { 
    "flights.$[].bookings.$[booking].ticketStatus": "Cancelled",
    "flights.$[].bookings.$[booking].passengerDetails.$[].bookingStatus": "Cancelled"
    }, 
    $inc: { "flights.$[].seatsAvailable": ticketsToIncrease }  // ✅ Use the numeric value
},
{ arrayFilters: [ { "booking.bookingId": 2001 } ] }  
)

//Passengers have decided to cancel the booking with BookingId 2001, hence, set the ticketStatus to 'Cancelled' for the booking, set bookingStatus to 'Cancelled' for each passenger, increase the available seats
db.Flights.updateOne(
    { "flights.bookings.bookingId": 2001 }, 
    { 
      $set: { 
        "flights.$[].bookings.$[booking].ticketStatus": "Cancelled",
        "flights.$[].bookings.$[booking].passengerDetails.$[].bookingStatus": "Cancelled"
      }, 
      $inc: { "flights.$[].seatsAvailable": "flights.$[].bookings.$[booking].noOfTickets" } 
    },
    { arrayFilters: [ { "booking.bookingId": 2001 } ] }  
  )
//Remove the bookings field from E6-2145
db.Flights.updateOne( { "flights.flightId": "E6-2145" }, { $unset: { "flights.$.bookings": 1 } } )

//Display the total Number of bookings done by each emaild
db.Flights.aggregate([
    { $unwind: "$flights" },
    { $unwind: "$flights.bookings" },
    { $group: { _id: "$flights.bookings.emailId", totalBookings: { $sum: 1 } } }
  ])
//Display all the bookings done with departure date in 2021.
db.Flights.aggregate([
    { $unwind: "$flights" },
    { $unwind: "$flights.bookings" },
    { 
      $match: { 
        "flights.bookings.departureDate": { 
          $gte: ISODate("2021-01-01"), 
          $lt: ISODate("2022-01-01") 
        } 
      } 
    },
    { 
      $project: { 
        _id: 0,
        flightId: "$flights.flightId",
        bookingId: "$flights.bookings.bookingId",
        emailId: "$flights.bookings.emailId",
        departureDate: "$flights.bookings.departureDate",
        ticketStatus: "$flights.bookings.ticketStatus"
      } 
    }
  ]).pretty()