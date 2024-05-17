const activities = [];
let usageLimit = 120; // Set the usage limit to 120 minutes

function addActivity(
  activity,
  duration,
  date = new Date().toLocaleDateString()
) {
  const newActivity = {
    date: date,
    activity: activity,
    duration: duration,
  };

  activities.push({ date, activity, duration });
}

function calculateTotalDuration(total, activity) {
  return total + activity.duration;
}

function showStatus(date = new Date().toLocaleDateString()) {
  const filteredActivities = activities.filter(
    (activity) => activity.date === date
  );

  const totalActivities = filteredActivities.length;

  if (filteredActivities.length === 0) {
    return `No activities found for ${date}`;
  }

  const totalDuration = filteredActivities.reduce(calculateTotalDuration, 0);

  return `You have added ${totalActivities} activities for ${date}. They amount to ${totalDuration} min. of usage`;
}

function mostTimeSpentActivity() {
  if (activities.length === 0) {
    return "No activities recorded yet";
  }

  const activitiesByType = {};
  activities.forEach(({ activity, duration }) => {
    if (!activitiesByType[activity]) {
      activitiesByType[activity] = 0;
    }
    activitiesByType[activity] += duration;
  });

  const sortedActivities = Object.entries(activitiesByType).sort(
    (a, b) => b[1] - a[1]
  );

  return `You have spent the most time on ${sortedActivities[0][0]} (${sortedActivities[0][1]} min)`;
}

// Test addActivity with auto-detecting date
addActivity("YouTube", 30);
addActivity("Reading", 20);
addActivity("Exercise", 28);
addActivity("Gaming", 50, "23/7-18"); // Specify a date

// Test showStatus with specific date
console.log(showStatus()); // Show activities for today
console.log(showStatus("23/7-18")); // Show activities for a specific date

// Test mostTimeSpentActivity
console.log(mostTimeSpentActivity());

//  ***********The last part is resolved with chat GPT. It comes too complicated to understand this.**************
