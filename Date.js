process.on("message", (message) => {
  const jsonResponse = showDate(message.number);
  process.send(jsonResponse);
  process.exit();
});

function showDate(number) {
  const date = new Date();
  const day = date.getDay();
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const weekDay = weekDays[day];
  const month = date.getMonth()+1;
  const year = date.getFullYear();
  return {
    day: weekDay,
    month: month,
    year: year,
  };
}
