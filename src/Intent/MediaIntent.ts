import model from '../Model/MediaModel';

const handleNextButtonClick = () => {
  const state = model.getState();
  model.setState({
    currentPage: state.currentPage + 1,
    startPoint: state.startPoint + state.itemsPerGrid,
  });
};
const handlePrevButtonClick = () => {
  const state = model.getState();
  model.setState({
    currentPage: state.currentPage - 1,
    startPoint: state.startPoint - state.itemsPerGrid,
  });
};

const handleMouseEnter = (currentEnterGrid: HTMLElement) => {
  model.setState({ currentEnterGrid: currentEnterGrid, isInsideGrid: true });
};

const handleGridLeave = () => {
  model.setState({ isInsideGrid: false });
};

export default {
  handleNextButtonClick,
  handlePrevButtonClick,
  handleMouseEnter,
  handleGridLeave,
};
