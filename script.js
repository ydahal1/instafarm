//Global Variables
let currentDate, currentHour, currentMinute, accountAge;
let accountCreateOn = 1601209047435 / 60000; // Get this input from user
let scheduledHours = [];
scheduledHours.push(currentMinute + 1);
console.log("1");
console.log("Scheduled hrs" + scheduledHours);
let followBtns;
let totalFollowBtns;

let counter = 0;

//Calling Main function
warning();
today();
generateSchedule();
// const execute = setInterval(function() {
//   followBtns = document.querySelectorAll(".sqdOP");
//   totalFollowBtns = followBtns.length;
//   console.log(typeof totalFollowBtns);

//   today();
//   followAccount();
// }, 5000);

//Today
function today() {
  let today = new Date();
  currentHour = today.getHours();
  currentMinute = Math.round(Date.now() / (1000 * 60));
  minutes = today.getMinutes();
  currentYear = today.getFullYear();
  accountAge = (currentMinute - accountCreateOn) / 1440;

  currentDate =
    today.getMonth() +
    "/" +
    today.getDate() +
    "/" +
    currentYear +
    " - " +
    currentHour +
    ":" +
    minutes;

  // At 00:00 schedules hours for next 24 hours
  //   if ((currentHour = 0)) {
  //     generateSchedule(accountCreateOn, currentMinute);
  //   }
}

//Generate Schedule
function generateSchedule(accountCreateOn, currentMinute) {
  accountAge = (currentMinute - accountCreateOn) / 1440;
  let maxMinutes = currentMinute + 1440;

  if (accountAge <= 14) {
    while (scheduledHours.length != 40) {
      scheduledHours = [...Array(40)].map(() =>
        Math.round(Math.random() * (maxMinutes - currentMinute) + currentMinute)
      );
      scheduledHours = [...new Set(scheduledHours)];
    }
  } else if (accountAge <= 30) {
    while (scheduledHours.length != 60) {
      scheduledHours = [...Array(60)].map(() =>
        Math.round(Math.random() * (maxMinutes - currentMinute) + currentMinute)
      );
      scheduledHours = [...new Set(scheduledHours)];
    }
  } else if (accountAge <= 180) {
    while (scheduledHours.length != 100) {
      scheduledHours = [...Array(100)].map(() =>
        Math.round(Math.random() * (maxMinutes - currentMinute) + currentMinute)
      );
      scheduledHours = [...new Set(scheduledHours)];
    }
  } else {
    while (scheduledHours.length != 180) {
      scheduledHours = [...Array(180)].map(() =>
        Math.round(Math.random() * (maxMinutes - currentMinute) + currentMinute)
      );
      scheduledHours = [...new Set(scheduledHours)];
    }
  }
  console.log(scheduledHours);
}

//Follow users
function followAccount() {
  console.log("count x : " + counter);

  if (counter == totalFollowBtns) {
    console.log("TF" + totalFollowBtns);
    console.log("Counter : " + counter);
    console.log(
      "%c" +
        currentDate +
        " - EXECUTION COMPLETE, YOU MAY NOW CLOSE THIS BROWSER",
      "color: #7122fa; font-weight: bold"
    );
    clearInterval(execute, 60000);
  } else if (scheduledHours.includes(currentMinute)) {
    followBtns[counter].click();
    followLinks[counter].style.cssText =
      "background: white; color: red; border: red";
    counter += 1;
    console.log(
      "%c" + currentDate + " - " + counter + "/" + totalFollowBtns,
      "color: green; font-weight: bold"
    );
  } else {
    console.log(
      "%c" + currentDate + "  Nap time",
      "color: green; font-weight: bold"
    );
  }
}

//Print Warning
function warning() {
  console.clear();
  console.log(
    "%c **********************************************************************",
    "color: red; font-weight: bold"
  );
  console.log(
    "%c *   COPYING, ALTERING OR DISTRIBUTING THIS SOFTWARE IS PROHIBITED    *",
    "color: red; font-weight: bold"
  );
  console.log(
    "%c *   USE OF THIS SOFTWARE MAY BE UNLAWFUL, USE IT ON YOUR OWN RISK    *",
    "color: red; font-weight: bold"
  );
  console.log(
    "%c **********************************************************************",
    "color: red; font-weight: bold"
  );
  console.log(
    "%c PROCESS RUNNING - DO NOT CLOSE THIS BROWSER",
    "color: #7122fa; font-weight: bold; text-align:center"
  );
}
