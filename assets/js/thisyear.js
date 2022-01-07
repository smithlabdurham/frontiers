firstClass = new Date("2022-01-13");
wenlockDeadline = new Date(firstClass.valueOf());
wenlockDeadline.setDate(wenlockDeadline.getDate() + 72 + 17);

days = document.querySelectorAll('[day]');
for (var i = 0; i != days.length; i++) {
  dateI = new Date(firstClass.valueOf());
  dateI.setDate(dateI.getDate() + parseInt(days[i].getAttribute('day')));
  days[i].innerHTML = dateI.toDateString();
}

weeks = document.querySelectorAll('[week]');
for (var i = 0; i != weeks.length; i++) {
  dateI = new Date(firstClass.valueOf());
  dateI.setDate(dateI.getDate() + ((parseInt(weeks[i].getAttribute('week')) - 1) * 7));
  weeks[i].innerHTML = dateI.toDateString();
}

const links = {
  'discussionBoard': 'https://blackboard.durham.ac.uk/ultra/courses/_5402_1/outline/discussion/_685527_1?view=discussions&courseId=_5402_1',
  'blackboard': 'https://blackboard.durham.ac.uk/ultra/courses/_5402_1/outline',
  'readingList': 'https://rl.talis.com/3/durham/lists/719102AD-4B96-6917-9F03-5537497D5654.html',
};

for (const [aClass, aHref] of Object.entries(links)) {
  const a = document.getElementsByClassName(aClass);
  for (var i = 0; i != a.length; i++) {
    a[i].href = aHref;
  }
}

