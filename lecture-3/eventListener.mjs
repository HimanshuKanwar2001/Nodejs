import { UserEvents } from "./userEvents.mjs";

const userEvents = new UserEvents();

function saveToDatabase() {
  console.log("Saving post to database");
}

function sendNotifications() {
  console.log("Sending Notifications");
}

function updateTimeline() {
  console.log("Updating timeline");
}

userEvents.addListener("postCreated", saveToDatabase);
userEvents.addListener("postCreated", sendNotifications);
userEvents.addListener("postCreated", updateTimeline);

userEvents.createPost("This is my function post");