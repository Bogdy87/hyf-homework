// ******************Series duration of my life**********************************

const seriesDurations = [
  {
    title: "The Good Doctor",
    days: 73,
    hours: 16,
    minutes: 18,
  },
  {
    title: "Breaking Bad",
    days: 73,
    hours: 13,
    minutes: 40,
  },
  {
    title: "Squid Game",
    days: 74,
    hours: 2,
    minutes: 26,
  },
];

// Calculate the total time spent watching all series in minutes
function calculateTotalTime(seriesDurations) {
  let totalTimeMinutes = 0;
  for (let i = 0; i < seriesDurations.length; i++) {
    const { title, days, hours, minutes } = seriesDurations[i];
    const totalSeriesMinutes = days * 24 * 60 + hours * 60 + minutes;
    totalTimeMinutes += totalSeriesMinutes;
  }
  return totalTimeMinutes;
}

// Calculate Percentage of Life Spent Watching Series
function calculatePercentageOfLife(totalTimeMinutes) {
  const averageLifespanMinutes = 80 * 365 * 24 * 60; // minutes in 80 years
  return (totalTimeMinutes / averageLifespanMinutes) * 100;
}

// Function that logs out the text using the seriesDurations array
function logOutSeriesText(seriesDurations) {
  const totalTimeMinutes = calculateTotalTime(seriesDurations);
  const totalPercentage = calculatePercentageOfLife(totalTimeMinutes);

  console.log("Here are the percentages of your life spent watching series:");
  for (let i = 0; i < seriesDurations.length; i++) {
    const { title, days, hours, minutes } = seriesDurations[i];
    const totalSeriesMinutes = days * 24 * 60 + hours * 60 + minutes;
    const seriesPercentage =
      (totalSeriesMinutes / totalTimeMinutes) * totalPercentage;
    console.log(`${title} took ${seriesPercentage.toFixed(3)}% of your life`);
  }
  console.log(`In total that is ${totalPercentage.toFixed(3)}% of your life`);
}

logOutSeriesText(seriesDurations);
