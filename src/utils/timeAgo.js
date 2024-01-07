export default function timeAgo(timestamp) {
  const currentTime = new Date();
  const previousTime = new Date(timestamp);

  const timeDifference = currentTime - previousTime;
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  if (hours >= 24) {
    return `${Math.floor(hours / 24)} days ago`;
  } else if (hours >= 1) {
    return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
  } else if (minutes >= 1) {
    return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
  } else {
    return "Just now";
  }
}
