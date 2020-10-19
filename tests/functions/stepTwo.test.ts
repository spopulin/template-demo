import {handler} from '../../src/functions/stepTwo';

test('should return the output message', async () => {
  const event = {
    Input: {
      Payload: {
        message: 'Step one executed succesfully!',
      },
    },
  };

  const result = await handler(event);
  expect(result.message).toBe('Step two executed succesfully!');
  expect(result.previousStateOutput).toBe('Step one executed succesfully!');
});
