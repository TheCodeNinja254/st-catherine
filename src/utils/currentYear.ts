const getCurrentYear = () => {
  const currentDate: Date = new Date();
  return currentDate.getFullYear();
};

export default getCurrentYear;
