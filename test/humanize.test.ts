import { humanizeError } from '../src/index.js';
import assert from 'assert';

assert.strictEqual(
  humanizeError('execution reverted: ERC20: transfer amount exceeds allowance').title,
  'Insufficient Allowance'
);

assert.strictEqual(humanizeError('random weird error').title, 'Unknown Error');

console.log('All tests passed!');
