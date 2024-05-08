// CactusIO-interactive (Smart phone usage app) optional

// Adding an activity

const activities = [];

function addActivity(date, activity, duration) {
  const newActivity = {
    date: date,
    activity: activity,
    duration: duration,
  };

  activities.push(newActivity);
}

addActivity("23/7-18", "YouTube", 30);
console.log(activities);

// Show my status
// Create a function called showStatus. This function should use the activities variable and return a string saying the following: "You have added 3 activities. They amount to 78 min. of usage"

function calculateTotalDuration(total, activity) {
  return total + activity.duration;
}

function showStatus(activities) {
  if (activities.length === 0) {
    return "Add some activities before calling showStatus";
  }

  let totalActivities = activities.length;
  let totalDuration = activities.reduce(calculateTotalDuration, 0);

  return `You have added ${totalActivities} activities. They amount to ${totalDuration} min. of usage`;
}

// Test with non-empty activities array
addActivity("23/7-18", "YouTube", 30);
addActivity("23/7-18", "Reading", 20);
addActivity("23/7-18", "Exercise", 28);
console.log(showStatus(activities)); // "You have added 3 activities. They amount to 78 min. of usage"

// Test with empty activities array
activities.length = 0; // Clear the activities array
console.log(showStatus(activities)); // "Add some activities before calling showStatus"

// Usage limit
