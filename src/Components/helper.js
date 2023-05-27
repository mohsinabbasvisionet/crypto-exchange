export const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value) {
      return true;
    } else if (!emailRegex.test(value)) {
      return true
    } else {
      return false
    }
  };

 