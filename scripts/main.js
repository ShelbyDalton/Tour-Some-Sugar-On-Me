import { Bands } from "./bands.js"
import { Schedules } from "./schedules.js"
import { Venues } from "./venues.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1 class="header">Tour Some Sugar On Me</h1>
<article class="schedule">
    <h2>Schedule</h2>
    <div class="schedule-list">${Schedules()}</div>
</article>
<article class="details">
    <section class="detail--column list details__bands">
        <h2>Bands</h2>
        ${Bands()}
    </section>
    <section class="detail--column list details__venues">
        <h2>Venues</h2>
        ${Venues()}
    </section>
</article>
`

mainContainer.innerHTML = applicationHTML

