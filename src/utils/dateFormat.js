export default function dateFormat(timeStampString) {
  const now = new Date();

  //for current time
  if (!timeStampString) {
    const option = {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    };
    return now.toLocaleString("en-us", option);
  }

  //for another time
  const timeStamp = new Date(timeStampString);

  const timeDifference = now - timeStamp;
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 1) {
    const option = {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    };
    return timeStamp.toLocaleString("en-gb", option);
  } else if (days === 1) {
    return "yesterday";
  } else if (hours > 0) {
    return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
  } else if (minutes > 0) {
    return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
  } else {
    return "just now";
  }
}
