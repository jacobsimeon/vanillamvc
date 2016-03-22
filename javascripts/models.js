var User = (function() {
  function User() {
    this._username = "";
    this._password = "";
    this._passwordConfirmation = "";

    this.listeners = [];
  };

  User.new = function() {
    return new User();
  }

  User.prototype.setUsername = function(username) {
    this._username = username;
    this.didChange();
  }

  User.prototype.username = function() {
    return this._username;
  }

  User.prototype.setPassword = function(password) {
    this._password = password;
    this.didChange();
  };

  User.prototype.password = function() {
    return this._password;
  };

  User.prototype.setPasswordConfirmation = function(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation;
    this.didChange();
  };

  User.prototype.passwordConfirmation = function() {
    return this._passwordConfirmation;
  };

  User.prototype.didChange = function() {
    this.listeners.forEach(function(listener) {
      listener();
    });
  };

  User.prototype.onChange = function(listener) {
    this.listeners.push(listener);
  };

  User.prototype.validation = function() {
    var validation = new Validation()

    if(this.username().length < 5) {
      validation.addError("username", "must be at least 5 characters");
    }

    if(this.password().indexOf("a") < 0) {
      validation.addError("password", "must contain the letter a");
    }

    if(this.password() != this.passwordConfirmation()) {
      validation.addError("passwordConfirmation", "must match password");
    }

    return validation;
  }

  return User;
})();
