// Sample data for workouts and goals (simulated API responses)
const workouts = [];
const goals = [];

// Function to log a workout
function logWorkout(activity, duration) {
    const workout = { activity, duration };
    workouts.push(workout);
    console.log("Workout logged:", workout);
}

// Function to set a fitness goal
function setGoal(goalType, target) {
    const goal = { goalType, target };
    goals.push(goal);
    console.log("Goal set:", goal);
}

// Function to handle login form submission
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission behavior
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // Here you can implement actual login logic, like sending a request to your backend server
    console.log("Email:", email, "Password:", password);
});

// Function to handle workout log form submission
document.getElementById("workout-log").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission behavior
    const activity = document.getElementById("activity").value;
    const duration = document.getElementById("duration").value;
    logWorkout(activity, duration);
    // Here you can add code to send workout data to your backend server using an API
    // For simplicity, we're just logging the workout data to the console
});

// Function to handle goal setting form submission
document.getElementById("goal-setting").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission behavior
    const goalType = document.getElementById("goal-type").value;
    const target = document.getElementById("target").value;
    setGoal(goalType, target);
    // Here you can add code to send goal data to your backend server using an API
    // For simplicity, we're just logging the goal data to the console
});
