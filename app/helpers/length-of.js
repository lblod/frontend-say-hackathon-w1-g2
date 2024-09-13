import { helper } from '@ember/component/helper';

export default helper(function lengthOf([array]) {
  return array.length;
});
