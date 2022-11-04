exports.calculateDate = (currDate, tripDate) => {
    // get the time in ms then find the difference between the currnet and the new dates 
    let difference = currDate.getTime() - tripDate.getTime();
    // to transform the differecne from ms to days" (1000 milliseconds * (60 seconds * 60 minutes) * 24 hours)
    let days = Math.ceil(Math.abs(difference) / (1000 * 3600 * 24))
    return days
}