const calendar = {
    aDate: new Date('October 27, 2018'),
    index: 0,
    allDates: [],
    incrementDays: function (date) {
        date.setDate(date.getDate() + 1)
        document.getElementById('date').innerHTML = date.toDateString()
        calendar.aDate = date;
    },

    getCurrentDate: function () {
        calendar.allDates.push(calendar.aDate);
        return calendar.aDate;
    },

    getSplitData: function() {
        fetch('https://pastebin.com/raw/NqK7g4mB').then(response => {
            splitData = response.text().then((data) => {
              splitData = data.split(',');
              calendar.timedUpdated();
            });
        });
    },

    timedUpdated: function() {
      calendar.incrementDays(calendar.aDate)
      if (calendar.index < 363) {
        calendar.index++;
        let timeout = 75
        window.setTimeout(calendar.timedUpdated, timeout)
        window.setTimeout(() => updateCurrency(splitData[calendar.index]), timeout)
      } else {
        window.location.href = 'updated-balance.html'
      }
    },

    init: function() {
      calendar.getSplitData();
    }
}
