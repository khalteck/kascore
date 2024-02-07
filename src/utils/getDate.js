export default function getDate(originalTime) {
  const today = new Date();
  const dateObject = new Date(originalTime);

  const todayDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );

  const yesterday = new Date(todayDate);
  yesterday.setDate(today.getDate() - 1);

  if (
    dateObject.getFullYear() === today.getFullYear() &&
    dateObject.getMonth() === today.getMonth() &&
    dateObject.getDate() === today.getDate()
  ) {
    return "Today";
  } else if (
    dateObject.getFullYear() === yesterday.getFullYear() &&
    dateObject.getMonth() === yesterday.getMonth() &&
    dateObject.getDate() === yesterday.getDate()
  ) {
    return "Yesterday";
  } else {
    // For any other date, return the formatted date
    const options = { year: "numeric", month: "long", day: "numeric" };
    return dateObject.toLocaleDateString(undefined, options);
  }
}
