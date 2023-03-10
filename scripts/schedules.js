import { getBands, getVenues, getSchedules } from "./database.js"

const venues = getVenues()
const bands = getBands()
const schedules = getSchedules()


const findVenues = (schedule, venues) => {
    let pickVenue = null

    for (const venue of venues) {
        if (venue.id === schedule.venueId) {
            pickVenue = venue
        }
    }

    return pickVenue
}


const findBands = (schedule, bands) => {
    let pickBand = null

    for (const band of bands) {
        if (band.id === schedule.bandId) {
            pickBand = band
        }
    }

    return pickBand
}


export const Schedules = () => {
    let html = ""
    html = "<ul>"

    for (const schedule of schedules) {
        const band = findBands(schedule, bands)
        const venue = findVenues(schedule, venues)

        html += `<li id="schedule--${schedule.id}">${band.name} will be playing at ${venue.name} on ${schedule.date}</li>`
    }

    html += "</ul>"

    return html
}


document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("schedule")) {
            const [, scheduleId] = itemClicked.id.split("--")
            for (let schedule of schedules) {
                if (schedule.id === parseInt(scheduleId)) {
                    for (let band of bands) {
                        if (band.id === schedule.bandId) {
                            window.alert(`${band.name}\n${band.numberOfMembers}\n${band.genre}\n${band.yearFormed}`)
                        }
                    }
                }
            }
        }
    }
)




// document.addEventListener(
//     "click",
//     (clickEvent) => {
//         const itemClicked = clickEvent.target
//         if (itemClicked.id.startsWith("schedule")) {
//             const [,scheduleId] = itemClicked.id.split("--")
//             for (const schedule of schedules) {
//                 const selectedBand = findBands(schedule, bands)
//                 if (schedule.id === parseInt(scheduleId)) {
//                     window.alert(`${selectedBand.name}\n${selectedBand.numberOfMembers}\n${selectedBand.genre}\n${selectedBand.yearFormed}`)
//                 }
//             }
//         }
//     }
// )



// window.alert(`${selectedBand.name}\n${selectedBand.numberOfMembers}\n${selectedBand.genre}\n${selectedBand.yearFormed}`)
