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

        html += `<li>${band.name} will be playing at ${venue.name} on ${schedule.date}</li>`
    }

    html += "</ul>"

    return html
}



document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("schedule")) {
            const [,scheduleId] = itemClicked.id.split("--")
            let showSchedule = null
            for (const schedule of schedules) {
                if (schedule.id === parseInt(scheduleId)) {
                    showSchedule = schedule
                }
            }
            let scheduledBand = null
            for (const band of bands) {
                if (band.id === showSchedule.bandId) {
                    scheduledBand = band
                }
            }
            window.alert(`${scheduledBand.name}, ${scheduledBand.numberOfMembers}, ${scheduledBand.genre}, ${scheduledBand.yearFormed}`)
        }
    }
)