describe("DebouncedFunction", function() {
  describe("#call", function() {
    it("invokes the wrapped function a single time within 400ms ", function(done) {
      var spy = jasmine.createSpy("bounce me");
      var debouncedSpy = debounce(spy);

      debouncedSpy.call();
      debouncedSpy.call();
      debouncedSpy.call();
      debouncedSpy.call();

      expect(spy).not.toHaveBeenCalled();
      setTimeout(function() {
        expect(spy.calls.count()).toEqual(1);
        done();
      }, 500);
    });
  });

  describe("#callImmediately", function() {
    it("calls the wrapped function immediately", function() {
      var spy = jasmine.createSpy("bounce me");
      var debouncedSpy = debounce(spy);

      debouncedSpy.callImmediately();

      expect(spy).toHaveBeenCalled();
    });

    it("clears any previously queued calls", function(done) {
      var spy = jasmine.createSpy("bounce me");
      var debouncedSpy = debounce(spy);

      debouncedSpy.call();
      debouncedSpy.callImmediately();

      setTimeout(function() {
        expect(spy.calls.count()).toEqual(1);
        done();
      }, 500);
    });
  });
});
