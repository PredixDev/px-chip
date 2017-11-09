describe('A static chip', function() {
  let staticChip;

  beforeEach(function() {
    staticChip = fixture('static-chip');
  });

  it('displays content correctly', function(done) {
    flush(function() {
      var content = Polymer.dom(staticChip.root).querySelector('.chip__content').textContent.trim();
      expect(content).to.equal('my chip');
      done();
    });
  });

  it('updates selected state on click', function() {
    expect(staticChip.selected).to.be.false;
    staticChip.click();
    expect(staticChip.selected).to.be.true;
  });

  it('fires "px-chip-tapped" with correct detail', function() {
    var handleFn = sinon.spy(staticChip, '_handleTapped');
    var eventFn = sinon.stub();
    var detail = {"content":"my chip","selected":true};
    staticChip.addEventListener('px-chip-tapped', eventFn);
    staticChip.click();
    expect(handleFn).to.have.been.calledOnce;
    expect(eventFn).to.have.been.calledOnce;
    expect(eventFn.args[0][0].detail).to.deep.equal(detail);
  });
});

describe('An actionable chip', function() {
  let actionableChip;

  beforeEach(function() {
    actionableChip = fixture('actionable-chip');
  });

  it('does not update selected state on click', function() {
    var isSelected = actionableChip.selected;
    actionableChip.click();
    expect(actionableChip.selected).to.equal(isSelected);
  });

  it('fires "px-chip-tapped" with correct detail', function() {
    var handleFn = sinon.spy(actionableChip, '_handleTapped');
    var eventFn = sinon.stub();
    var detail = {"content":"chips yum","selected":false};
    actionableChip.addEventListener('px-chip-tapped', eventFn);
    actionableChip.click();
    expect(handleFn).to.have.been.calledOnce;
    expect(eventFn).to.have.been.calledOnce;
    expect(eventFn.args[0][0].detail).to.deep.equal(detail);
  });
});
