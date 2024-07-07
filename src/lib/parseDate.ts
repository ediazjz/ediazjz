var options: Intl.DateTimeFormatOptions = {
  year: "2-digit",
  month: "short",
};

export const parseDate = (dateString: string) => {
  const dateObject = new Date(dateString);

  return dateObject.toLocaleString("en-US", options);
};
