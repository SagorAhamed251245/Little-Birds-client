
const NumericDate = () => {
    const formatDate = (dateStr) => {
      const date = new Date(dateStr);
      const options = {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      };
      return date.toLocaleString("en-US", options);
    };
    return { formatDate };
  };
  
  export default NumericDate;