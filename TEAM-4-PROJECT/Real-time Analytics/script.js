// Real-time Analytics JavaScript

// Refresh button function

function refreshData() {

    var activeUsers =
        document.getElementById("activeUsers");

    var pageViews =
        document.getElementById("pageViews");

    // Add some random numbers

    var newUsers =
        Math.floor(Math.random() * 500) + 1000;

    var newViews =
        Math.floor(Math.random() * 3000) + 7000;

    activeUsers.innerText = newUsers;

    pageViews.innerText = newViews;

    alert("Live data has been refreshed!");

}