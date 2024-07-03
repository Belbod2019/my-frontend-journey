// scripts.js

window.onload = function() {
    updateTimeAndDay();
};

function updateTimeAndDay() {
    const currentTimeElement = document.getElementById('current-time');
    const currentDayElement = document.getElementById('current-day');

    const now = new Date();
    const utcTime = now.toUTCString().split(' ')[4];
    const weekDay = now.toLocaleDateString('en-US', { weekday: 'long' });

    currentTimeElement.textContent = utcTime;
    currentDayElement.textContent = weekDay;
}
