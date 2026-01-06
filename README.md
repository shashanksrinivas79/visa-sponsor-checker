# 🌍 Visa Sponsor Pro: Job Analysis Extension

**Visa Sponsor Pro** is a Chrome Extension designed to save international job seekers time. It automatically scans job descriptions on **LinkedIn** and **Indeed** to detect whether a role offers visa sponsorship or explicitly denies it.

---

## 🚀 Features

* **Real-time Analysis:** Scans job details as you browse without needing to refresh the page.
* **Visual Badging:** Displays a color-coded status badge directly on the job page:
    * 🟢 **Sponsorship Available:** Found positive keywords like "H1-B" or "Sponsorship provided."
    * 🔴 **No Sponsorship:** Found restrictive language like "No sponsorship" or "US Citizens only."
    * ⚪ **Not Mentioned:** Neither positive nor negative terms were detected.
* **Performance Optimized:** Uses a debounced observer to ensure it doesn't slow down your browser or interfere with site loading.

---

## 🛠️ Installation (Developer Mode)

Since this is a custom extension, you can install it locally following these steps:

1.  **Download/Clone** this repository to your local machine.
2.  Open Google Chrome and navigate to `chrome://extensions/`.
3.  In the top right corner, toggle **Developer mode** to **ON**.
4.  Click the **Load unpacked** button.
5.  Select the folder containing this project (the folder with `manifest.json`).
6.  The extension is now active! Pin it to your toolbar for easy access.

---

## 📂 Project Structure

```text
visa-sponsor-checker/
├── manifest.json      # Extension configuration and permissions
├── content.js         # The core logic for scanning DOM and keyword matching
├── styles.css         # Styling for the UI badge
├── popup.html         # The extension's toolbar menu
└── README.md          # Project documentation