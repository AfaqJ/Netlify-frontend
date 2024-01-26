

function predict() {
  var inputText = document.getElementById('inputText').value;

  if (inputText.trim() === "") {
    alert("Please enter text before predicting.");
    return;
  }

  fetch('/.netlify/functions/proxy', {  // Point to your serverless function
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json'
    },
    body: JSON.stringify({ text: inputText })
  })
  .then(response => response.json())
  .then(data => {
    document.getElementById('outputLabel').innerText = 'Predicted Label: ' + data.predicted_label;
  })
  .catch(error => console.error('Error:', error));
}
