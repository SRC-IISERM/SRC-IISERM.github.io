/* -------------------------------------------
   DATE PARSER (GViz → DD/MM/YYYY)
-------------------------------------------- */
function parseGDate(g) {
  if (!g) return "";

  // Already in DD/MM/YYYY
  if (g.includes("/")) return g;

  // GViz Format: Date(2025,10,23)
  const m = g.match(/Date\((\d+),(\d+),(\d+)\)/);
  if (!m) return g;

  const year = m[1];
  const month = String(parseInt(m[2]) + 1).padStart(2, "0");
  const day = String(m[3]).padStart(2, "0");

  return `${day}/${month}/${year}`;
}

/* -------------------------------------------
   FIX MARKDOWN (heading spacing)
-------------------------------------------- */
function fixMarkdown(md) {
  return md
    .replace(/(^|\n)###([^#\n])/g, "$1### $2")
    .replace(/(^|\n)##([^#\n])/g, "$1## $2")
    .replace(/(^|\n)#([^#\n])/g, "$1# $2");
}

/* -------------------------------------------
   GET PARAM
-------------------------------------------- */
const params = new URLSearchParams(window.location.search);
const rowIndex = parseInt(params.get("row"));

/* -------------------------------------------
   CONFIG
-------------------------------------------- */
const SHEET_ID = "1u0EwB_p88FtdmGXkeP_FkYbNUaJR7Ce2Jusj9hFPQVI";
const SHEET_RANGE = "Sheet1";

/* -------------------------------------------
   Fetch Google Sheet – GViz API
-------------------------------------------- */
async function fetchSheet() {
  const url =
    `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=${SHEET_RANGE}`;

  const raw = await fetch(url).then(r => r.text());
  const json = JSON.parse(raw.substring(47, raw.length - 2));

  const cols = json.table.cols.map(c => c.label);
  const rows = json.table.rows;

  return rows.map(r => {
    let obj = {};
    r.c.forEach((cell, i) => {
      obj[cols[i]] = cell ? cell.v : "";
    });
    return obj;
  });
}

/* -------------------------------------------
   MAIN LOADER
-------------------------------------------- */
async function loadMinutes() {

  if (isNaN(rowIndex)) {
    document.getElementById("content").innerHTML =
      "<p>No minutes selected.</p>";
    return;
  }

  const items = await fetchSheet();
  const item = items[rowIndex];

  if (!item) {
    document.getElementById("content").innerHTML =
      "<p>No data found for this entry.</p>";
    return;
  }

  /* -------------------------------------------
     HEADER
  -------------------------------------------- */

  const type = (item["Category"] || "").toLowerCase();
  const showIiser = ["warden", "committee", "open house", "openhouse"].includes(type);

  const headerHTML = `
    <img src="assets/logo.png">
    ${showIiser ? `<img src="assets/iiser.png">` : ""}
    <h2>${item["Meeting Name"]}</h2>
  `;

  document.getElementById("minutes-header").innerHTML = headerHTML;

  /* -------------------------------------------
     METADATA
  -------------------------------------------- */

  const metaHTML = `
    <strong>Date:</strong> ${parseGDate(item["Meeting Date"])} <br>
    ${item["Short description"] ? `<strong>Description:</strong> ${item["Short description"]}<br>` : ""}
    ${item["Attendees"] ? `<strong>Attendees:</strong> ${item["Attendees"]}<br>` : ""}
    <strong>Category:</strong> ${item["Category"]}
  `;

  document.getElementById("minutes-meta").innerHTML = metaHTML;

  /* -------------------------------------------
     MARKDOWN CONTENT
  -------------------------------------------- */
  let mdText = item["Minutes"] || "";
  mdText = fixMarkdown(mdText);

  document.getElementById("content").innerHTML = marked.parse(mdText);
}

/* -------------------------------------------
   RUN
-------------------------------------------- */
loadMinutes();
