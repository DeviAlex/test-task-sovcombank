export default (value) => {
  if (value) {
    try {
      return parseFloat(value).toLocaleString().replace(/,/g, '.');
    } catch (error) {
      console.error(error);
    }
  }

  return value;
};
