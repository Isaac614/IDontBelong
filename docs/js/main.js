import { supabase } from './config.js'


await populate();

async function populate() {
    const {data, error} = await supabase
        .from('Events')
        .select('*')
    
    if (error) {
        console.log(error)
        return
    }
    
    data.forEach((event) => {
        const modal = createModal(event)
        const eventList = document.querySelector('#eventList');
        eventList.appendChild(modal);
    })
    
}

function createModal(event) {
    // Format the date
    const date = new Date(event.date);
    const formattedDate = date.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    // Format the time
    const time = new Date(`1970-01-01T${event.time}`);
    const formattedTime = time.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    });

    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="image">
            <img src="${event.image}" alt="image of event" />
        </div>
        <h1 class="title">${event.title}</h1>
        <h2 class="time">${formattedDate} at ${formattedTime}</h2>
        <h3 class="location">${event.location}</h3>
        <p class="about">${event.description}</p>
    `;

    return modal;
}