function timeConversion(s) {
    // Extract hours, minutes, and seconds
    const timeArray = s.slice(0, 8).split(':');
    const hours = parseInt(timeArray[0], 10);
    const minutes = timeArray[1];
    const seconds = timeArray[2];

    // Check if it's AM or PM
    const period = s.slice(8, 10);

    // Convert to 24-hour format
    let militaryHours = hours;
    if (period === 'PM' && hours < 12) {
        militaryHours += 12;
    } else if (period === 'AM' && hours === 12) {
        militaryHours = '00';
    }

    // Construct the result string
    const militaryTime = `${militaryHours.toString().padStart(2, '0')}:${minutes}:${seconds}`;
    
    return militaryTime;
}

console.log(timeConversion('12:01:00PM')); // Output: '12:01:00'
console.log(timeConversion('12:01:00AM')); // Output: '00:01:00'
