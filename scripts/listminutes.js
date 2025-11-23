function formatDisplayDate(d) {
  if (!d) return "";

  // Format: "23/11/2025"
  if (d.includes("/")) return d;

  // Format: Date(2025,10,23)
  if (d.startsWith("Date(")) {
    const [y, m, day] = d.replace("Date(", "").replace(")", "").split(",");
    const dd = String(day).padStart(2, "0");
    const mm = String(Number(m) + 1).padStart(2, "0");
    return `${dd}/${mm}/${y}`;
  }

  return d;
}


/* -------------------------------------------
   CONFIG
-------------------------------------------- */
const SHEET_ID = "1u0EwB_p88FtdmGXkeP_FkYbNUaJR7Ce2Jusj9hFPQVI";
const SHEET_RANGE = "Sheet1";

let masterItems = [];   // full dataset
let filteredItems = []; // filtered dataset
let renderedCount = 0;
const PAGE_SIZE = 6;

/* -------------------------------------------
   Fetch Google Sheet - GViz API
-------------------------------------------- */
async function fetchSheet() {
  const url =
    `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=${SHEET_RANGE}`;

  const raw = await fetch(url).then(r => r.text());
  const json = JSON.parse(raw.substring(47, raw.length - 2));

  const cols = json.table.cols.map(c => c.label);
  const rows = json.table.rows;

  return rows.map((r, i) => {
    let obj = { _row: i };
    r.c.forEach((cell, idx) => {
      obj[cols[idx]] = cell ? cell.v : "";
    });
    return obj;
  });
}

/* -------------------------------------------
   Date Parser
-------------------------------------------- */
function parseDate(d) {
  if (!d) return new Date(0);

  if (d.includes("/")) {
    const [day, month, year] = d.split("/").map(Number);
    return new Date(year, month - 1, day);
  }

  if (d.startsWith("Date(")) {
    const nums = d.replace("Date(", "").replace(")", "").split(",");
    return new Date(nums[0], nums[1] - 1, nums[2]);
  }

  return new Date(0);
}

/* -------------------------------------------
   Render Cards (paged)
-------------------------------------------- */
function renderMinutes(start) {
  const container = document.getElementById("minutes-list");

  const slice = filteredItems.slice(start, start + PAGE_SIZE);

  slice.forEach(item => {
    let logosHTML = `
      <img src="assets/logo.png" style="width:55px;margin-right:10px;">
    `;

    const cat = (item["Category"] || "").toLowerCase();

    if (["warden", "wardens", "openhouse", "open house", "committee"].includes(cat)) {
      logosHTML += `<img src="assets/iiser.png" style="width:55px;">`;
    }

    container.innerHTML += `
      <div class="minutes-card fade-in">
        <img src="assets/iiser.jpeg" class="header-img">
        <div style="display:flex;align-items:center;margin-top:12px;">
          ${logosHTML}
        </div>
        <h3 class="minutes-title">${item["Meeting Name"]}</h3>
        <p class="minutes-date">${formatDisplayDate(item["Meeting Date"])}</p>
        <p class="minutes-cat">Category: <strong>${item["Category"]}</strong></p>

        <a class="minutes-btn" href="viewminutes.html?row=${item._row}">
          View Minutes
        </a>
      </div>
    `;
  });

  renderedCount += slice.length;

  if (renderedCount >= filteredItems.length) {
    document.getElementById("load-more").style.display = "none";
  } else {
    document.getElementById("load-more").style.display = "block";
  }
}

/* -------------------------------------------
   Apply search + filter
-------------------------------------------- */
function applyFilters() {
  const search = document.getElementById("searchBox").value.toLowerCase();
  const filter = document.getElementById("filterCategory").value.toLowerCase();

  // always filter from masterItems
  filteredItems = masterItems.filter(i => {
    const nameMatch = i["Meeting Name"].toLowerCase().includes(search);
    const cat = (i["Category"] || "").toLowerCase();

    const categoryMatch =
      filter === "all" || cat === filter;

    return nameMatch && categoryMatch;
  });

  // clear old cards
  document.getElementById("minutes-list").innerHTML = "";
  renderedCount = 0;

  renderMinutes(0);
}

/* -------------------------------------------
   Initial Load
-------------------------------------------- */
async function loadMinutesList() {
  const data = await fetchSheet();

  masterItems = data.filter(i => i["Meeting Name"]);

  // sort master list (latest first)
  masterItems.sort((a, b) =>
    parseDate(b["Meeting Date"]) - parseDate(a["Meeting Date"])
  );

  // default view = full list
  filteredItems = [...masterItems];

  renderMinutes(0);
}

/* -------------------------------------------
   Load More
-------------------------------------------- */
function loadMore() {
  renderMinutes(renderedCount);
}

/* Run on load */
loadMinutesList();
