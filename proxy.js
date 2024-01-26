

exports.handler = async function (event, context) {
  const response = await fetch('https://huggingface.co/spaces/AfaqJamshaid/textclassification/predict', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json'
    },
    body: event.body  // Forward the request body
  });

  const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data),
    headers: {
      'Access-Control-Allow-Origin': 'https://textclassification.netlify.app',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  };
};
