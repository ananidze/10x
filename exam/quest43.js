const sectors = ["alpha", "beta", "gamma"];

function breachSector(name) {
  return new Promise((resolve, reject) => {
    if (Math.random() < 0.5) {
      resolve(name);
    } else {
      reject(new Error(`${name} failed`));
    }
  });
}

async function runBreach() {
  statusPanel.innerHtml = ''
  for (const sector of sectors) {
    try {
      const result = await breachSector(sector);
      const p = document.createElement('p');
      p.textContent = `Sector ${result} breached`;
      statusPanel.appendChild(p);
    } catch (error) {
      const p = document.createElement('p');
      p.textContent = `Sector ${sector} failed: ${error.message}`;
      statusPanel.appendChild(p);
    }
}

document
  .getElementById("startBreach")
  .addEventListener("click", runBreach)
