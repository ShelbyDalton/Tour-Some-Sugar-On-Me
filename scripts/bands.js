import { getBands, getSchedules, getVenues } from "./database.js"

const bands = getBands()
const venues = getVenues()
const schedules = getSchedules()

export const Bands = () => {
    let html = "<ul>"

    for (const band of bands) {
        html += `<li id="band--${band.id}">${band.name}</li>`
    }

    html += "</ul>"

    return html
}



document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("band")) {
            const [, bandId] = itemClicked.id.split("--")
            let scheduledBand = null
            for (const band of bands) {
                if (band.id === parseInt(bandId)) {
                    scheduledBand = band
                }
            }
            let selectedVenue = []
            for (const schedule of schedules) {
                if (schedule.bandId === scheduledBand.id) {
                    for (const venue of venues) {
                        if (venue.id === schedule.venueId) {
                            selectedVenue.push(venue.name)
                        }
                    }
                }
            }
            let allVenues = selectedVenue.join(" and ")
            window.alert(`${allVenues}`)
        }
    }
)