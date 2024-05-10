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

  activities.push(newActivity);
}

function calculateTotalDuration(total, activity) {
  return total + activity.duration;
}

function showStatus(date = new Date().toLocaleDateString()) {
  const filteredActivities = activities.filter(
    (activity) => activity.date === date
  );

  if (filteredActivities.length === 0) {
    return `No activities found for ${date}`;
  }

  let totalActivities = filteredActivities.length;
  let totalDuration = filteredActivities.reduce(calculateTotalDuration, 0);

  return `You have added ${totalActivities} activities for ${date}. They amount to ${totalDuration} min. of usage`;
}

function mostTimeSpentActivity() {
  if (activities.length === 0) {
    return "No activities recorded yet";
  }

  const activitiesByType = {};
  activities.forEach((activity) => {
    if (!activitiesByType[activity.activity]) {
      activitiesByType[activity.activity] = 0;
    }
    activitiesByType[activity.activity] += activity.duration;
  });

  const maxTime = Math.max(...Object.values(activitiesByType));
  const mostTimeSpentActivity = Object.keys(activitiesByType).find(
    (key) => activitiesByType[key] === maxTime
  );

  return `You have spent the most time on ${mostTimeSpentActivity} (${maxTime} min)`;
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

//  ***********The last part is resolved with chat GPT. It's too  difficult for me to understand this.**************
