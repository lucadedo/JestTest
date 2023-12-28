function capitalize(str) {
  for (let i = 0; i < str.length; i++) {
    if (isUpperCase(str[i])) {
      return str
    }else if (isLowerCase(str[i])) {
      let res = str.replace(str[0], str[0].toUpperCase());
      return res
    }
    
  }
  return 'invalid characters in string'
  
}






const isLowerCase = (char) => {
  if (char == char.toLowerCase() && char != char.toUpperCase()) {
    return true;
  }
  return false;
};

const isUpperCase = (char) => {
  if (char == char.toUpperCase() && char != char.toLowerCase()) {
    return true;
  }
  return false;
};
module.exports = capitalize;