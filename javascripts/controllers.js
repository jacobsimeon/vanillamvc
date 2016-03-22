var PasswordFieldController = FieldController.extend({
  modelDidChange: function() {
    var validation = this.model.validation();

    if(validation.hasErrorFor("password")) {
      this.field.setValidationMessage(validation.messageFor("password"))
    } else {
      this.field.clearValidationMessage()
    }
  },

  didFinishTyping: function() {
    this.model.setPassword(this.field.value());
  }
});

var PasswordConfirmationFieldController = FieldController.extend({
  didFinishTyping: function() {
    this.model.setPasswordConfirmation(this.field.value());
  },

  modelDidChange: function() {
    var validation = this.model.validation();

    if(validation.hasErrorFor("passwordConfirmation")) {
      this.field.setValidationMessage(validation.messageFor("passwordConfirmation"))
    } else {
      this.field.clearValidationMessage()
    }
  }
});

var UsernameFieldController = FieldController.extend({
  didFinishTyping: function() {
    this.model.setUsername(this.field.value());
  },
  modelDidChange: function() {
    var validation = this.model.validation();

    if(validation.hasErrorFor("username")) {
      this.field.setValidationMessage(validation.messageFor("username"))
    } else {
      this.field.clearValidationMessage()
    }
  }
});
