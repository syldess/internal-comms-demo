export const getDate = (format) => {
  const date = new Date(Date.now());
  // letting place for different formats later down the road
  let formattedDate;
  switch (format) {
    case 'UTC':
      formattedDate = date.toUTCString();
      break;
    default:
      formattedDate = date.toString();
      break;
  }
  return formattedDate;
};
