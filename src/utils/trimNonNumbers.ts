const trimNonNumbers = (text: string): string => {
  return text.toString().replace(/\D/g, "");
};

export default trimNonNumbers;
