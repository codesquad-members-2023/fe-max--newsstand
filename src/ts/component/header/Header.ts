import { HeaderDate } from './date/HeaderDate';
import { $ } from '../../util/util';

export class Header {
  constructor() {
    new HeaderDate($('.date'));
  }
}
