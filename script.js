const form = document.getElementById('inputForm');
const input = document.getElementById('userInput');
const log = document.getElementById('voiceLog');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const value = input.value.trim();
  if (!value) return;

  const userLine = document.createElement('div');
  userLine.className = 'message user';
  userLine.textContent = `You: ${value}`;
  log.appendChild(userLine);

  const responseLine = document.createElement('div');
  responseLine.className = 'message system';
  responseLine.textContent = `The Voice: "${getResponse(value)}"`;
  log.appendChild(responseLine);

  log.scrollTop = log.scrollHeight;
  input.value = '';
});

function getResponse(input) {
  const responses = [
    "The light dims, but the path remains.",
    "Your words echo in the dark.",
    "Not yet. Return when the stars align.",
    "The Gate listens, but does not answer.",
    "The silence holds its breath."
  ];
  return responses[Math.floor(Math.random() * responses.length)];
}
