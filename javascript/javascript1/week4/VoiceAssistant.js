let name = "";
let todos = [];
let timerID;

function getReply(command) {
  const words = command.split(" ");

  if (command.startsWith("Hello my name is")) {
    const newName = words.slice(3).join(" ");
    if (!name) {
      name = newName;
      return `Nice to meet you ${name}`;
    } else {
      return `You've already told me your name, ${name}`;
    }
  }

  if (command === "What is my name?") {
    if (name) {
      return `Your name is ${name}`;
    } else {
      return `You haven't told me your name yet`;
    }
  }

  if (command.startsWith("Add")) {
    const task = words.slice(1, -3).join(" ");
    todos.push(task);
    return `${task} added to your todo`;
  }

  if (command.startsWith("Remove")) {
    const taskToRemove = words.slice(1, -3).join(" ");
    todos = todos.filter((todo) => todo !== taskToRemove);
    return `Removed ${taskToRemove} from your todo`;
  }

  if (command === "What is on my todo?") {
    const todoList =
      todos.length === 0
        ? "You have no todos"
        : `You have ${todos.length} todos - ${todos.join(" and ")}`;
    return todoList;
  }

  if (command === "What day is it today?") {
    const today = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const formattedDate = today.toLocaleDateString("en-US", options);
    return formattedDate;
  }

  if (/what is \d+ [+\-*\/] \d+/.test(command)) {
    const result = eval(command.slice(8));
    return result;
  }

  if (command.startsWith("Set a timer for")) {
    const minutes = parseInt(words[4]);
    const milliseconds = minutes * 60 * 1000;
    timerID = setTimeout(() => {
      console.log("Timer done");
    }, milliseconds);
    return `Timer set for ${minutes} minutes`;
  }

  return "Sorry, I didn't understand that command.";
}

// Example usage:
console.log(getReply("Hello my name is Benjamin")); // "Nice to meet you Benjamin"
console.log(getReply("What is my name?")); // "Your name is Benjamin"
console.log(getReply("Add fishing to my todo")); // "fishing added to your todo"
console.log(getReply("Add singing in the shower to my todo")); // "singing in the shower added to your todo"
console.log(getReply("Remove fishing from my todo")); // "Removed fishing from your todo"
console.log(getReply("What is on my todo?")); // "You have 1 todos - singing in the shower"
console.log(getReply("What day is it today?")); // e.g. "May 15, 2024"
console.log(getReply("What is 3 + 3?")); // 6
console.log(getReply("Set a timer for 2 minutes")); // "Timer set for 2 minutes"
