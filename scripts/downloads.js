async function loadDownloads() {
  const res = await fetch("downloads/downloads.json");
  const data = await res.json();

  /* ----------------------------
     SECTION 1 — Constitution
  ----------------------------- */
  const c = data.constitution;
  document.getElementById("constitution-box").innerHTML = `
    <div class="constitution-card">
      <h3>${c.title}</h3>
      <p>The SRC constitution.</p>
      <a href="${c.file}" download class="download-btn">Download Constitution</a>
    </div>
  `;

  /* ----------------------------
     SECTION 2 — Reports
  ----------------------------- */
  const reportsEl = document.getElementById("reports-list");
  data.reports.forEach(doc => {
    reportsEl.innerHTML += `
      <div class="download-card fade-in">
        <img src="assets/file_icon.png" class="download-icon">
        <h3 class="download-title">${doc.title}</h3>
        <p class="download-cat">${doc.type}</p>
        <a href="${doc.file}" download class="download-btn">Download</a>
      </div>
    `;
  });

  /* ----------------------------
     SECTION 3 — Other Documents
  ----------------------------- */
  const othersEl = document.getElementById("others-list");
  data.others.forEach(doc => {
    othersEl.innerHTML += `
      <div class="download-card fade-in">
        <img src="assets/file_icon.png" class="download-icon">
        <h3 class="download-title">${doc.title}</h3>
        <a href="${doc.file}" download class="download-btn">Download</a>
      </div>
    `;
  });
}

loadDownloads();
