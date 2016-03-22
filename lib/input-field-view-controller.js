var FieldController = (function() {
  function FieldController(field, model) {
    this.field = field;
    this.field.setDelegate(this);

    this.model = model;
    this.model.onChange(this.modelDidChange.bind(this));
  }

  FieldController.prototype.modelDidChange = function() {
    console.log("The model changed!", this.model);
    throw "Overwrite me :)"
  }

  FieldController.prototype.didFinishTyping = function() {
    console.log("The user finished typing", this.field);
    throw "Overwrite me :)"
  }

  FieldController.extend = function(extension) {
    var newController = function(field, model) {
      FieldController.call(this, field, model);
    }

    newController.prototype = Object.create(FieldController.prototype, {
      constructor: {
        value: FieldController
      }
    });

    for(var key in extension) {
      newController.prototype[key] = extension[key];
    }

    return newController;
  }

  return FieldController;
})();
