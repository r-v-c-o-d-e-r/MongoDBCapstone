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

//Display the flightId of all those flights in which no booking is done

//Display the flights from Chennai to Kolkata having more than 10 seats available

//Display the baseFare for each class of flight E6-2145

//Increase the baseFare for Economy Class of all the flights between any source and destination to 3800 if it is less than 3800

// Add a new booking for 1 passenger (Chennai to Delhi), in flight AI-766. Passenger Details are:

// {
//    "passengerName": "Jonty",
//    "passengerAge": 29,
//    "gender": "Male"
// }
//Note: The availability of seats should also be modified

//Passengers have decided to cancel the booking with BookingId 1, hence, set the ticketStatus to 'Cancelled' for the booking, set bookingStatus to 'Cancelled' for each passenger, increase the available seats

//Remove the bookings field from E6-2145

//Display the total Number of bookings done by each emaild

//Display all the bookings done with departure date in 2021.