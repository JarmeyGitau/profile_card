
function updateTime() {
  const now = new Date();
  const options = {
    timeZone: 'Africa/Nairobi',
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  };

  const kenyanTime = now.toLocaleString('en-KE', options);
  const ms = now.getTime();
  document.getElementById('userTime').textContent = `${kenyanTime} (${ms} ms)`;
}

updateTime();
setInterval(updateTime, 1000);
