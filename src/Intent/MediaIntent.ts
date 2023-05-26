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

const handleMouseEnter = (currentEnterGrid: HTMLElement) => {
  model.setState({ currentEnterGrid: currentEnterGrid, isInsideGrid: true });
};

const handleMouseLeave = (currentLeaveGrid: HTMLElement) => {
  model.setState({ currentLeaveGrid: currentLeaveGrid });
};

const handleGridLeave = () => {
  model.setState({ isInsideGrid: false });
};

export default {
  handleNextButtonClick,
  handlePrevButtonClick,
  handleMouseEnter,
  handleMouseLeave,
  handleGridLeave,
};
