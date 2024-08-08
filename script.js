function calculateCost() {
    // Get the values from the form
    const bedrooms = parseInt(document.getElementById('bedrooms').value);
    const flights = parseInt(document.getElementById('flights').value);
    const movers = parseInt(document.getElementById('movers').value);
    const truckNeeded = document.getElementById('truck').checked;
    
    // Calculate time based on bedrooms
    let time = 0;
    switch(bedrooms) {
        case 1: time += 5; break;
        case 2: time += 7; break;
        case 3: time += 9; break;
        case 4: time += 11; break;
        case 5: time += 12; break;
    }

    // Calculate time based on flights of stairs
    if (flights === 0) {
        time += 0; // No added time for 0 flights
    } else if (flights === 1) {
        time += 0.25; // 25 minutes for 1 flight (1/3 of an hour)
    } else if (flights === 2) {
        time += 0.5; // 30 minutes for 2 flights
    } else if (flights === 3) {
        time += 0.75; // 45 minutes for 3 flights
    } else if (flights === 4) {
        time += 1; // 60 minutes for 4 flights
    } else {
        time += 1.25; // 75 minutes for 5 flights
    } 

    // Calculate time based on specialty items
    const specialtyItems = document.querySelectorAll('input[name="specialtyItems"]:checked');
    specialtyItems.forEach(item => {
        time += parseInt(item.value) / 60; // Convert minutes to hours
    });

    // Calculate cost based on movers and whether a truck is needed
    let hourlyRate = 0;
    if (truckNeeded) {
        switch(movers) {
            case 2: hourlyRate = 175; break;
            case 3: hourlyRate = 225; break;
            case 4: hourlyRate = 275; break;
            case 5: hourlyRate = 275; break;
        }
    } else {
        switch(movers) {
            case 2: hourlyRate = 100; break;
            case 3: hourlyRate = 150; break;
            case 4: hourlyRate = 200; break;
            case 5: hourlyRate = 250; break;
        }
    }
    const totalCost = time * hourlyRate;

    // Calculate protection price
    let protectionPrice = 0;
    switch(bedrooms) {
        case 1: protectionPrice = 110; break;
        case 2: protectionPrice = 155; break;
        case 3: protectionPrice = 225; break;
        case 4: protectionPrice = 290; break;
        case 5: protectionPrice = 335; break;
    }

    // Display results
    document.getElementById('totalTime').innerText = `Total Time: ${time.toFixed(2)} hours`;
    document.getElementById('totalCost').innerText = `Total Cost: $${totalCost.toFixed(2)}`;
    document.getElementById('protectionPrice').innerText = `Protection Price: $${protectionPrice}`;
}
