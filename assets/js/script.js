//Global vars
let scheduledHours = [];
let counter = 0;
let timeStamp = {};
let currentTimeStamp;


// Main function
function main() {
    warning();
    currentTime();
    let accountAge = calculateAccountAge();

    //Generate schedule for the first time
    generateSchedule(accountAge);

    //Follow accounts
    action();
}

//Current Mill
//Note 24 hrs - 86400000 milli seconds
let currentTime = () => {
    let d = new Date();
    timeStamp.currentMonth = d.getMonth();
    timeStamp.currentDate = d.getDate();
    timeStamp.currentYear = d.getFullYear();
    timeStamp.currentHour = d.getHours();
    timeStamp.currentMinute = d.getMinutes();
    timeStamp.currentMilliseconds = d.getTime();
}

//Account Age
let calculateAccountAge = () => {
    let accountCreatedOn = timeStamp.currentMilliseconds - (86400000 * 13); // Get this from end user

    let accountAge = (timeStamp.currentMilliseconds - accountCreatedOn) / 86400000
    return accountAge;
}

//Generate Schedule
function generateSchedule(accountAge) {
    let min = parseInt(timeStamp.currentMilliseconds)
    // let max = min + 86400000
    let max = min + 300000;

    if (accountAge <= 14) {
        for (i = 0; i < 2; i++) {
            executionTime = Math.ceil(((Math.random() * (max - min) + min)) / (1000 * 60));
            scheduledHours.push(executionTime)
        }

    }
    else if (accountAge <= 30) {
        for (i = 0; i < 60; i++) {
            executionTime = Math.ceil(((Math.random() * (max - min) + min)) / (1000 * 60));
            scheduledHours.push(executionTime)
        }
    }
    else if (accountAge <= 180) {
        for (i = 0; i < 100; i++) {
            executionTime = Math.ceil(((Math.random() * (max - min) + min)) / (1000 * 60));
            scheduledHours.push(executionTime)
        }
    }
    else {
        for (i = 0; i < 180; i++) {
            executionTime = Math.ceil(((Math.random() * (max - min) + min)) / (1000 * 60));
            scheduledHours.push(executionTime)
        }
    }
    scheduledHours.sort(function (a, b) { return a - b });
    [...new Set(scheduledHours)]

    console.log(scheduledHours)
}

//click follow btns
function action() {


    const follow = setInterval(function () {
        currentTime();
        let minuteNow = Math.ceil(timeStamp.currentMilliseconds / 60000)
        let { currentMonth, currentDate, currentYear, currentHour, currentMinute } = timeStamp;
        let currentTimeStamp = currentMonth + "/" + currentDate + "/" + currentYear + " " + currentHour + ":" + currentMinute;

        let followBtns = document.querySelectorAll(".sqdOP");
        let totalFollowBtns = followBtns.length;

        if (scheduledHours.includes(minuteNow)) {
            followBtns[counter].click();
            followBtns[counter].style.cssText =
                "background: white; color: red; border:1px solid red";
            console.log("%c" + currentTimeStamp + " Followed..." + counter + 1 + "/" + totalFollowBtns,
                "color: green; font-weight: bold");
            counter += 1;
        } else if (counter == scheduledHours.length) {
            console.log(
                "%c EXECUTION COMPLETE, YOU MAY NOW CLOSE THE BROWSER",
                "color: #7122fa; font-weight: bold; text-align:center");
            clearInterval(follow)
        }
        else {
            console.log("%c" + currentTimeStamp + " Napping...",
                "color: gray; font-weight: bold");
        }

    }, 60000)
}

//Print Warning
function warning() {
    console.clear();
    console.log(
        "%c ********************************************************************** \n *   COPYING, ALTERING OR DISTRIBUTING THIS SOFTWARE IS PROHIBITED    * \n *   USE OF THIS SOFTWARE MAY BE UNLAWFUL, USE IT AT YOUR OWN RISK    * \n **********************************************************************",
        "color: red; font-weight: bold", );
    console.log(
        "%c PROCESS RUNNING - DO NOT CLOSE THIS BROWSER",
        "color: #7122fa; font-weight: bold; text-align:center"
    );
}

//Running main function
main();





