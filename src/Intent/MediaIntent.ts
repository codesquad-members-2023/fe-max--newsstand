import model from '../Model/MediaModel';

const handleNextButtonClick = () => {
  const state = model.getState();
  model.setState({
    currentPage: state.currentPage + 1, //next 버튼이니 1을 증가
    gridStartPoint: state.gridStartPoint + state.itemsPerGrid,
  });
};
const handlePrevButtonClick = () => {
  const state = model.getState();
  model.setState({
    currentPage: state.currentPage - 1, //prev 버튼이니 1을 감소
    gridStartPoint: state.gridStartPoint - state.itemsPerGrid,
  });
};

const handleMouseEnter = (currentEnterGrid: HTMLElement) => {
  model.setState({ currentEnterGrid: currentEnterGrid, isInsideGrid: true });
};

const handleGridLeave = () => {
  model.setState({ isInsideGrid: false });
};

const handleHoverOverlay = (currentOverlay: HTMLElement) => {
  model.setState({ currentOverlay: currentOverlay });
};

export default {
  handleNextButtonClick,
  handlePrevButtonClick,
  handleMouseEnter,
  handleGridLeave,
  handleHoverOverlay,
};
