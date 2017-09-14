// This is the bootstrapping function that will run the custom tests
// upon the completion of web components construction by Polymer
document.addEventListener("WebComponentsReady", function() {
  runCustomTests();
});

// This is the wrapper for custom tests, called upon web components ready state
function runCustomTests() {

  describe('A static chip', function() {
    var staticChip = document.getElementById('static-chip');
    it('updates selected state on click', function() {
      var isSelected = staticChip.selected;
      staticChip.click();
      expect(staticChip.selected).to.equal(!isSelected);
    });
  });

  describe('An actionable chip', function() {
    var actionableChip = document.getElementById('actionable-chip');
    it('does not update selected state on click', function() {
      var isSelected = actionableChip.selected;
      actionableChip.click();
      expect(actionableChip.selected).to.equal(isSelected);
    });
  });
}
