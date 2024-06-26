document.addEventListener('DOMContentLoaded', function() {
  const flexContainer = document.getElementById('flex-container');

  // Flex Direction buttons
  const rowButton = document.getElementById('rowButton');
  const columnButton = document.getElementById('columnButton');

  rowButton.addEventListener('click', function() {
    flexContainer.style.flexDirection = 'row';
  });

  columnButton.addEventListener('click', function() {
    flexContainer.style.flexDirection = 'column';
  });

  // Justify Content buttons
  const justifyStartButton = document.getElementById('justifyStartButton');
  const justifyCenterButton = document.getElementById('justifyCenterButton');
  const justifyEndButton = document.getElementById('justifyEndButton');
  const justifySpaceBetweenButton = document.getElementById('justifySpaceBetweenButton');
  const justifySpaceAroundButton = document.getElementById('justifySpaceAroundButton');
  const justifySpaceEvenlyButton = document.getElementById('justifySpaceEvenlyButton');

  justifyStartButton.addEventListener('click', function() {
    flexContainer.style.justifyContent = 'flex-start';
  });

  justifyCenterButton.addEventListener('click', function() {
    flexContainer.style.justifyContent = 'center';
  });

  justifyEndButton.addEventListener('click', function() {
    flexContainer.style.justifyContent = 'flex-end';
  });

  justifySpaceBetweenButton.addEventListener('click', function() {
    flexContainer.style.justifyContent = 'space-between';
  });

  justifySpaceAroundButton.addEventListener('click', function() {
    flexContainer.style.justifyContent = 'space-around';
  });

  justifySpaceEvenlyButton.addEventListener('click', function() {
    flexContainer.style.justifyContent = 'space-evenly';
  });

  // Align Items buttons
  const alignStartButton = document.getElementById('alignStartButton');
  const alignCenterButton = document.getElementById('alignCenterButton');
  const alignEndButton = document.getElementById('alignEndButton');

  alignStartButton.addEventListener('click', function() {
    flexContainer.style.alignItems = 'flex-start';
  });

  alignCenterButton.addEventListener('click', function() {
    flexContainer.style.alignItems = 'center';
  });

  alignEndButton.addEventListener('click', function() {
    flexContainer.style.alignItems = 'flex-end';
  });

  // Reset Flexbox button
  const resetButton = document.getElementById('resetButton');
  resetButton.addEventListener('click', function() {
    flexContainer.style.flexDirection = '';
    flexContainer.style.justifyContent = '';
    flexContainer.style.alignItems = '';
    flexContainer.style.flexWrap = '';
    flexContainer.style.gap = '';
  });

  // Set Gap button
  const setGapButton = document.getElementById('setGapButton');
  setGapButton.addEventListener('click', function() {
    const gapInput = document.getElementById('gap').value;
    flexContainer.style.gap = `${gapInput}px`;
  });

  // Flex Grow buttons
  const resetGrowButton = document.getElementById('resetGrowButton');
  resetGrowButton.addEventListener('click', function() {
    document.querySelectorAll('.item').forEach(item => {
      item.style.flexGrow = '';
    });
  });

  const growAllButton = document.getElementById('growAllButton');
  growAllButton.addEventListener('click', function() {
    document.querySelectorAll('.item').forEach(item => {
      item.style.flexGrow = '1';
    });
  });

  // Individual Grow buttons
  const growButton1 = document.getElementById('growButton1');
  const growButton2 = document.getElementById('growButton2');
  const growButton3 = document.getElementById('growButton3');

  growButton1.addEventListener('click', function() {
    const inputValue = document.getElementById('growInput1').value;
    document.querySelector('.item:nth-child(1)').style.flexGrow = inputValue;
  });

  growButton2.addEventListener('click', function() {
    const inputValue = document.getElementById('growInput2').value;
    document.querySelector('.item:nth-child(2)').style.flexGrow = inputValue;
  });

  growButton3.addEventListener('click', function() {
    const inputValue = document.getElementById('growInput3').value;
    document.querySelector('.item:nth-child(3)').style.flexGrow = inputValue;
  });
});
