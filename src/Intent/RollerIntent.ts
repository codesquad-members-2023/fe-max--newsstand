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

const setLeftRollingAmount = () => {
  model.setState({ leftRollingAmount: 0 });
};

const setRightRollingAmount = () => {
  model.setState({ rightRollingAmount: 0 });
};

export default {
  handleLeftMouseEnter,
  handleRightMouseEnter,
  handleLeftMouseLeave,
  handleRightMouseLeave,
  setRightRollingAmount,
  setLeftRollingAmount,
};
