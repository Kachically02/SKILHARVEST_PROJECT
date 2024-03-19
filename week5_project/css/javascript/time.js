function determineTimeOfDay() {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    let greeting;

    if (currentHour >= 0 && currentHour < 6) {
        greeting = "Good morning";
    } else if (currentHour >= 6 && currentHour < 12) {
        greeting = "Good afternoon";
    } else if (currentHour >= 12 && currentHour < 18) {
        greeting = "Good evening";
    } else {
        greeting = "Good night";
    }

    return greeting;
}

const timeOfDay = determineTimeOfDay();
console.log(`It's ${timeOfDay}.`);