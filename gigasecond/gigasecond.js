export const gigasecond = (input) => {
  const milliseconds = input.getTime() + 1000000000000;
  const newDate = new Date(milliseconds)
  return newDate
 };


