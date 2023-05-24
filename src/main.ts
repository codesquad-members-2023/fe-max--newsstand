import './styles/main.scss';
import { getHeaderTemplate } from './components/header.ts';

document.querySelector<HTMLDivElement>('#app')!.innerHTML =
  getHeaderTemplate();
