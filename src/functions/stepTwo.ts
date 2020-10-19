import 'source-map-support/register';

export const handler = async (event: any) => {
  return {
    message: 'Step two executed succesfully!',
    previousStateOutput: event.Input.Payload.message,
  };
};
