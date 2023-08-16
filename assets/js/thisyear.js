firstClass = new Date("2024-01-08");

days = document.querySelectorAll("[day]");
for (var i = 0; i != days.length; i++) {
  dateI = new Date(firstClass.valueOf());
  dateI.setDate(dateI.getDate() + parseInt(days[i].getAttribute("day")));
  days[i].innerHTML = dateI.toDateString();
}

weeks = document.querySelectorAll("[week]");
for (var i = 0; i != weeks.length; i++) {
  dateI = new Date(firstClass.valueOf());
  dateI.setDate(dateI.getDate() + ((parseInt(weeks[i].getAttribute("week")) - 1) * 7));
  weeks[i].innerHTML = dateI.toDateString();
}

const links = {
  "discussionBoard": "https://blackboard.durham.ac.uk/ultra/courses/_53963_1/outline/discussion/_1678911_1?courseId=_53963_1",
  "blackboard": "https://blackboard.durham.ac.uk/ultra/courses/_53963_1/outline/",
  "groupList": "https://docs.google.com/spreadsheets/d/1k1-IIILRZWNH5PuNZLF4YSzke9eNJ_AiO-T4f64lEbE/edit?usp=sharing",
  "readingList": "https://rl.talis.com/3/durham/lists/4E54C64F-DBE1-5B97-B7CD-BB56DBB4A229.html",
};

for (const [aClass, aHref] of Object.entries(links)) {
  const a = document.getElementsByClassName(aClass);
  for (var i = 0; i != a.length; i++) {
    a[i].href = aHref;
  }
}

