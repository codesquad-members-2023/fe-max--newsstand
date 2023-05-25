import model from '../Model/MediaModel';

const handleNextButtonClick = () => {
  console.log('다음버튼');
  const state = model.getState();
  model.setState({
    currentPage: state.currentPage + 1,
    startPoint: state.startPoint + state.itemsPerGrid,
  });
  console.log(model.getState());
};
const handlePrevButtonClick = () => {
  console.log('이전버튼누름');
  const state = model.getState();
  model.setState({
    currentPage: state.currentPage - 1,
    startPoint: state.startPoint - state.itemsPerGrid,
  });
  console.log(model.getState());
};

export default {
  handleNextButtonClick,
  handlePrevButtonClick,
};
