var InputFieldView = (function() {
  function InputFieldView(id) {
    this._el = document.getElementById(id);
    this._input = this._el.querySelector("input");
    this._validationMessage = this._el.querySelector(".text-input__validation-message")

    this._delegate = null;

    this._input.onblur = this.handleBlur.bind(this);
    this._input.onkeyup = this.handleKeyup.bind(this);
    this.notifyDidFinishTyping = debounce(this.notifyDidFinishTyping.bind(this))
  };

  InputFieldView.prototype.delegate = function() {
    return this._delegate;
  }

  InputFieldView.prototype.setDelegate = function(delegate) {
    this._delegate = delegate;
  }

  InputFieldView.prototype.notifyDidFinishTyping = function() {
    this.delegate().didFinishTyping();
  }

  InputFieldView.prototype.handleKeyup = function(e) {
    if(keyProducesCharacter(e)) {
      this.hasReceivedInput = true;
    }

    if(this.hasReceivedInput) {
      this.notifyDidFinishTyping.call();
    }
  }

  InputFieldView.prototype.handleBlur = function(e) {
    if(this.hasReceivedInput) {
      this.notifyDidFinishTyping.callImmediately();
    }
  }

  InputFieldView.prototype.value = function() {
    return this._input.value;
  }

  InputFieldView.prototype.setValidationMessage = function(message) {
    if(this.shouldShowValidationMessage()) {
      this._validationMessage.textContent = message;
      this._el.classList.add("text-input__invalid");
    }
  }

  InputFieldView.prototype.clearValidationMessage = function() {
    this._validationMessage.innerHTML = "&nbsp;";
    this._el.classList.remove("text-input__invalid");
  }

  InputFieldView.prototype.shouldShowValidationMessage = function() {
    return this.hasReceivedInput;
  }

  return InputFieldView;
})();
