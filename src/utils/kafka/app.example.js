const {initProducer, produceMessage} = require('./producer');
const {initConsumer, consumeMessages} = require('./consumer');

const run = async () => {
  await initProducer();
  await initConsumer();

  // Produce a message
  const message = {
    name: 'Kushagra',
    age: 25,
    city: 'New Delhi',
    country: 'India',
  };
  const topic = 'abdm';
  await produceMessage(topic, message);

  // Consume messages
  const handler = (message, topic, partition) => {
    console.log(
      `Received message: ${JSON.stringify(
        message
      )} from topic - ${topic}/${partition}`
    );
  };
  await consumeMessages(topic, handler);
};

run();
