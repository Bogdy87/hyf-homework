// LOGIC
function howMuchTime(seriesDurations) {
  const lifeDays = 29200; // = 80 years
  const timeProperties = ["days", "hours", "minutes"];
  const timeConverter = [1, 24, 1440];
  let totalSeriesPercentage = 0;

  const percentageBySeriesName = {};

  for (let i = 0; i < seriesDurations.length; i++) {
    let seriesInDays = 0;
    for (let j = 0; j < timeProperties.length; j++) {
      seriesInDays += seriesDurations[i][timeProperties[j]] / timeConverter[j];
    }
    let eachSeriesTitle = seriesDurations[i]["title"];
    let eachSeriesPercentage = ((seriesInDays / lifeDays) * 100).toFixed(3);

    percentageBySeriesName[eachSeriesTitle] = eachSeriesPercentage;
    totalSeriesPercentage += parseFloat(eachSeriesPercentage);
  }

  // We return the data we've computed to create a SEAM where we can connect other logic that is related but not the same concern
  return {
    totalSeriesPercentage,
    percentageBySeriesName,
  };
}

// RENDER
function present(percentages) {
  console.log(
    `In total that is ${percentages.totalSeriesPercentage}% of my life`
  );
  // [title, percentage] is called array destructuring, it's a way to unpack an array or an object
  // It's the same as writing: const title = array[0];
  for (const [title, percentage] of Object.entries(
    percentages.percentageBySeriesName
  )) {
    console.log(`${title} took ${percentage}% of my life`);
  }
}

// DATA
const someSeries = [
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

const percentages = howMuchTime(someSeries);
present(percentages);
