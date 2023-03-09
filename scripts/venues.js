import { getBands, getSchedules, getVenues } from "./database.js"

const bands = getBands()
const venues = getVenues()
const schedules = getSchedules()

export const Venues = () => {
    let html = "<ul>"

    for (const venue of venues) {
        html += `<li id="venue--${venue.id}">${venue.name}</li>`
        html += `<div id="venue--${venue.id}">${venue.address}</div>`
        html += `<div id="venue--${venue.id}">${venue.squareFootage}</div>`
        html += `<div id="venue--${venue.id}">${venue.maximumOccupancy}</div>`
    }

    html += "</ul>"

    return html
}


document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("venue")) {
            const [,venueId] = itemClicked.id.split("--")
            let selectedVenue = null
            for (const venue of venues) {
                if (venue.id === parseInt(venueId)) {
                    selectedVenue = venue
                }
            }
            let scheduledBand = []
            for (const schedule of schedules) {
                if (schedule.venueId === selectedVenue.id) {
                    for (const band of bands) {
                        if (band.if === booking.bandId) {
                            scheduledBand.push(band.name)
                        }
                    }
                }
            }
            let allBands = scheduledBand.join(" and ")
            window.alert(`${allBands}`)
        }
    }
)