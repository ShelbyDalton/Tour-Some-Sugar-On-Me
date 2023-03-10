/* Venues can accomodate 2 bands per 1 night. Venues need a name, address, square footage, and maximum occupancy. 

Bands can perform 1 to 2 acts per 1 day. Bands need a name, number of members, musical genre, and year formed. 

Need list of bookings at the bottom of the page. Needs to show which bands are playing at each venue every night. 
Needs band name, venue name, and date of booking. 
Example
"Rocket Pumpkins are playing at The Cellar Moss on 12/13/2023"

The layout is going to be similar to DeShawn's and Brewed Awakenings, but slightly different. 
Samantha wants to see the current bookings at the top of the page. Below the bookings, she wants to see a 
list of all available venues, and a list of all available bands, side by side. Venues on the left, and 
bands on the right. */

const database = {
    venues: [{
        id: 1,
        name: "The Roxbury",
        address: "Location: 835 Bayberry Drive, Oklahoma City, OK 73169",
        squareFootage: "Venue Size: 300sqft",
        maximumOccupancy: "Maximum Occpancy: 100"
    }, {
        id: 2,
        name: "The Blue Steel",
        address: "65 Atlantic Street, Buena Vista, SK S2V 0T5",
        squareFootage: "Venue Size: 15000sqft",
        maximumOccupancy: "Maximum Occpancy: 500"
}, {
        id: 3,
        name: "It’ll Doo",
        address: "752 Garfield Ave., Fort Worth, TX 76116",
        squareFootage: "Venue Size: 6812sqft",
        maximumOccupancy: "Maximum Occpancy: 5500"
}, {
        id: 4,
        name: "The Venetian",
        address: "81 Gulf Street, Fort Lauderdale, FL 33317",
        squareFootage: "Venue Size: 1000sqft",
        maximumOccupancy: "Maximum Occpancy: 287"
}, {
        id: 5,
        name: "Kings Wood",
        address: "84 New Road, CAMBRIDGE, CB93 6NP",
        squareFootage: "Venue Size: 300000sqft",
        maximumOccupancy: "Maximum Occpancy: 30"
}],

    bands: [{
        id: 1,
        name: "The Laser Disk Cleaners",
        numberOfMembers: "Band Members: 5",
        genre: "Synthwave",
        yearFormed: "Est. Year: 2013"
    }, {
        id: 2,
        name: "Taking Back Friday",
        numberOfMembers: "Band Members: 4",
        genre: "Alternative/Punk Rock",
        yearFormed: "Est. Year: 2003"
    }, {
        id: 3,
        name: "A Box of Men with Green Fishing Rod",
        numberOfMembers: "Band Members: 18",
        genre: "Folky Banjo Music",
        yearFormed: "Est. Year: 2001"
    }, {
        id: 4,
        name: "Flight of the Forks",
        numberOfMembers: "Band Members: 4",
        genre: "Indie Pop/Rock",
        yearFormed: "Est. Year: 2007"
    }, {
        id: 5,
        name: "The Sweaty Surgeon's Club",
        numberOfMembers: "Band Members: 7",
        genre: "German House",
        yearFormed: "Est. Year: 1989"
    }],

    schedules: [{
        id: 1, 
        venueId: 2, 
        bandId: 3, 
        date: "06/01/2023"
    }, {
        id: 2, 
        venueId: 1, 
        bandId: 5, 
        date: "06/04/2023"
    }, {
        id: 3, 
        venueId: 2, 
        bandId: 1, 
        date: "06/09/2023"
    }, {
        id: 4, 
        venueId: 5, 
        bandId: 4, 
        date: "06/12/2023"
    }, {
        id: 5, 
        venueId: 4, 
        bandId: 3, 
        date: "06/17/2023"
    }, {
        id: 6, 
        venueId: 3, 
        bandId: 5, 
        date: "06/23/2023"
    }, {
        id: 7, 
        venueId: 2, 
        bandId: 4, 
        date: "06/25/2023"
    }, {
        id: 8, 
        venueId: 5, 
        bandId: 1, 
        date: "06/29/2023"
    }, {
        id: 9, 
        venueId: 1, 
        bandId: 2, 
        date: "06/30/2023"
    }]
}

export const getVenues = () => {
    return database.venues.map(venue => ({...venue}))
}

export const getBands = () => {
    return database.bands.map(band => ({...band}))
}

export const getSchedules = () => {
    return database.schedules.map(show => ({...show}))
}