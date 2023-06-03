import { App } from './component/App';
import { addEvent } from './component/main/grid/Grid';
import { setRolling } from './component/main/rolling/Rolling';

import '../../dist/style/index.css';

new App();
addEvent();

let count = 0;

setRolling(count);

setInterval(() => {
  if (count < 4) {
    count++;
  } else {
    count = 0;
  }

  setRolling(count);
}, 1000);
