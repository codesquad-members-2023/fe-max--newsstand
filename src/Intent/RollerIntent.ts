import model from '../Model/RollerModel';

const handleLeftMouseEnter = () => {
  model.setState({ leftRolling: false });
};
const handleRightMouseEnter = () => {
  model.setState({ rightRolling: false });
};
const handleLeftMouseLeave = () => {
  model.setState({ leftRolling: true });
};
const handleRightMouseLeave = () => {
  model.setState({ rightRolling: true });
};

const leftIncreaseNextIndex = () => {
  const state = model.getState();
  model.setState({ leftNextIndex: state.leftNextIndex + 2 });
};
const rightIncreaseNextIndex = () => {
  const state = model.getState();
  model.setState({ rightNextIndex: state.rightNextIndex + 2 });
};
const leftResetNextIndex = () => {
  model.setState({ leftNextIndex: 0 });
};
const rightResetNextIndex = () => {
  model.setState({ rightNextIndex: 1 });
};

export default {
  handleLeftMouseEnter,
  handleRightMouseEnter,
  handleLeftMouseLeave,
  handleRightMouseLeave,

  leftIncreaseNextIndex,
  rightIncreaseNextIndex,
  leftResetNextIndex,
  rightResetNextIndex,
};
