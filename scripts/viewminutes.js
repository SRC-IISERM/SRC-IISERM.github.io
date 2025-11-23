const params = new URLSearchParams(window.location.search);
const file = params.get("file");

async function loadMinutes() {
  if (!file) {
    document.getElementById("content").innerHTML = "<p>No file selected.</p>";
    return;
  }

  // Load metadata from JSON
  const metaRes = await fetch("minutes/index.json");
  const allData = await metaRes.json();
  const item = allData.find(m => m.file === file.split("minutes/")[1]);

  // Load markdown content
  const mdRes = await fetch(file);
  const md = await mdRes.text();

  // Render markdown
  document.getElementById("content").innerHTML = marked.parse(md);

  // Render header metadata
  if (item) {
    const headerHTML = `
      <img src="assets/logo.png">
      ${
        ["warden", "committee", "openhouse"].includes(item.type)
          ? `<img src="assets/iiser.png">`
          : ""
      }
      <h2>${item.title}</h2>
    `;
    document.getElementById("minutes-header").innerHTML = headerHTML;

    const metaHTML = `
      <strong>Date:</strong> ${item.date.replace(/-/g, " / ")}<br>
      ${item.venue ? `<strong>Venue:</strong> ${item.venue}<br>` : ""}
      <strong>Type:</strong> ${item.type.toUpperCase()}
    `;
    document.getElementById("minutes-meta").innerHTML = metaHTML;
  }
}

loadMinutes();
