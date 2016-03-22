var keyProducesCharacter = function(e) {
  if(e.code.indexOf("Key") > -1) {
    return true;
  }

  if(e.code.indexOf("Digit") > -1) {
    return true;
  }

  return false
}
