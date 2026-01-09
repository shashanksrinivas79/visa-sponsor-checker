let timeout = null;

const KEYWORDS = {
  positive: [/sponsorship available/i,/Limited immigration sponsorship/i, /visa sponsorship/i, /h1-b/i, /h1b/i, /will sponsor/i],
  negative: [/no sponsorship/i, /without visa sponsorship/i, /without the need for employer sponsorship/i, /cannot sponsor/i, /not eligible for sponsorship/i,  /U.S. citizenship/i]
};

function analyzeSponsorship() {
  const jobContainer = document.querySelector('.jobs-description__container') || 
                       document.querySelector('.jobs-search__job-details--container');

  if (!jobContainer) return;

  const text = jobContainer.innerText;
  let status = "Not Mentioned";
  let color = "#6c757d"; // Grey

  if (KEYWORDS.negative.some(regex => regex.test(text))) {
    status = "No Sponsorship";
    color = "#dc3545"; // Red
  } else if (KEYWORDS.positive.some(regex => regex.test(text))) {
    status = "Sponsorship Available!";
    color = "#28a745"; // Green
  }

  updateUI(status, color);
}

function updateUI(status, color) {
  let badge = document.getElementById('visa-checker-badge');
  if (!badge) {
    badge = document.createElement('div');
    badge.id = 'visa-checker-badge';

    badge.style.cssText = `position:fixed;top:100px;right:20px;padding:12px 20px;color:white;font-weight:bold;border-radius:8px;z-index:99999;box-shadow:0 4px 12px rgba(0,0,0,0.3);pointer-events:none;`;
    document.body.appendChild(badge);
  }
  badge.innerText = `Visa: ${status}`;
  badge.style.backgroundColor = color;
}


const observer = new MutationObserver(() => {
  clearTimeout(timeout);
  timeout = setTimeout(analyzeSponsorship, 500);
});

observer.observe(document.body, { childList: true, subtree: true });