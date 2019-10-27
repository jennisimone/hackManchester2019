const calendar = {
    aDate: new Date('October 27, 2018'),
    index: 0,
    incrementDays: function (date) {
        date.setDate(date.getDate() + 1)
        document.getElementById('date').innerHTML = date.toDateString()
        calendar.aDate = date;
    },

    getCurrentDate: function () {
        return calendar.aDate;
    },

    timedUpdated: function () {
        calendar.incrementDays(calendar.aDate)
        if (calendar.index < 363) {
            calendar.index++;
            window.setTimeout(calendar.timedUpdated, 100)
            window.setTimeout(randomAmount(1000000), 100)
        } else {
            window.location.href = 'updated-balance.html'
        }
    }
}