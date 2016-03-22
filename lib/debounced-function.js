var DebouncedFunction = (function() {
  function DebouncedFunction(func) {
    this.func = func;
    this.timeout = null;
  }

  DebouncedFunction.prototype.call = function() {
    this.cancel();
    this.timeout = setTimeout(this.func, 400);
  }

  DebouncedFunction.prototype.cancel = function() {
    clearTimeout(this.timeout);
  }

  DebouncedFunction.prototype.callImmediately = function() {
    this.cancel();
    this.func();
  }

  return DebouncedFunction;
})()

var debounce = function(func) {
  return new DebouncedFunction(func);
}
