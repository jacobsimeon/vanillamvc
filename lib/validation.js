var Validation = (function() {
  function Validation() {
    this.errors = {};
  };

  Validation.prototype.addError = function(key, error) {
    this.errors[key] = error;
  }

  Validation.prototype.isValid = function() {
    return Object.keys(this.errors).length > 0;
  }

  Validation.prototype.errorFor = function(key) {
    return this.errors[key];
  }

  Validation.prototype.hasErrorFor = function(key) {
    return this.errors.hasOwnProperty(key)
  }

  Validation.prototype.messageFor = function(key) {
    return this.errors[key];
  }

  return Validation;
})();
