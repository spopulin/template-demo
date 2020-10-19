import {handler} from '../../src/functions/stepOne';

test('should return the output message', async () => {
  const result = await handler();
  expect(result.message).toBe('Step one executed succesfully!');
});
