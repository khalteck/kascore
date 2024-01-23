export default function generateDateArray() {
  const today = new Date();
  const currentDate = today.toISOString().split("T")[0]; // Format: "yyyy-mm-dd"

  const dateArray = [];

  const getFormattedDate = (date) => {
    const options = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
      date
    );
    return formattedDate.toUpperCase();
  };

  // Get the 2 previous dates
  for (let i = 2; i >= 1; i--) {
    const previousDate = new Date(today);
    previousDate.setDate(today.getDate() - i);
    dateArray.push({
      date: previousDate.toISOString().split("T")[0],
      day: getFormattedDate(previousDate),
    });
  }

  // Add today's date
  dateArray.push({ date: currentDate, day: getFormattedDate(today) });

  // Add the next two days
  for (let i = 1; i <= 2; i++) {
    const nextDate = new Date(today);
    nextDate.setDate(today.getDate() + i);
    dateArray.push({
      date: nextDate.toISOString().split("T")[0],
      day: getFormattedDate(nextDate),
    });
  }

  return dateArray;
}
