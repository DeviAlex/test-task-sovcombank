export default (value) => {
  if (value) {
    try {
      return new Date(value).toLocaleDateString();
    } catch (error) {
      console.error(error);
    }
  }

  return value;
};
