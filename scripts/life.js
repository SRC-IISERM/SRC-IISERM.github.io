// life.js

// ---------- CLUBS DATA (scraped snapshot) ----------
// Source: IISER clubs page (static snapshot) - kept minimal.
// If you want, I can expand fields or fetch live.
const CLUBS = [
  { name: "Biology Discussion Forum (BDF)", desc: "The Biology Club of IISER Mohali", email: "bdfclub@iisermohali.ac.in" },
  { name: "Curie Club", desc: "The Chemistry Club of IISER Mohali", email: "curieclub@iisermohali.ac.in" },
  { name: "Phi@i Club", desc: "The Physics Club of IISER Mohali", email: "phiclub@iisermohali.ac.in" },
  { name: "Infinity Club", desc: "The Mathematics Club of IISER Mohali", email: "infinityclub@iisermohali.ac.in" },
  { name: "Turing Club", desc: "The Coding Club of IISER Mohali", email: "turingclub@iisermohali.ac.in" },
  { name: "Astronomy Club", desc: "The Astronomy Club of IISER Mohali", email: "astronomyclub@iisermohali.ac.in" },
  { name: "Robotics Club", desc: "The Robotics Club of IISER Mohali", email: "roboticsclub@iisermohali.ac.in" },
  { name: "Miles Club", desc: "Runners & Marathon Club", email: "miles@iisermohali.ac.in" },
  { name: "Ambiente Club", desc: "The Environment Club", email: "ambienteclub@iisermohali.ac.in" },
  { name: "LDS Club", desc: "Literary & Debating Society", email: "ldsclub@iisermohali.ac.in" },
  { name: "IMQC Club", desc: "The Quiz Club", email: "imqcclub@iisermohali.ac.in" },
  { name: "DarpaN Club", desc: "The Drama Club", email: "darpanclub@iisermohali.ac.in" },
  { name: "Itehad Club", desc: "The Dance Club", email: "danceclub@iisermohali.ac.in" },
  { name: "Rang Club", desc: "The Arts Club", email: "rangclub@iisermohali.ac.in" },
  { name: "Aria Club", desc: "The Music Club", email: "ariaclub@iisermohali.ac.in" },
  { name: "Movie Club", desc: "The Movie Club", email: "movieclub@iisermohali.ac.in" },
  { name: "Gaming Club", desc: "The Gaming Club", email: "gamingclub@iisermohali.ac.in" },
  { name: "Lumiere Club", desc: "Photography & Videography Club", email: "lumiereclub@iisermohali.ac.in" },
  { name: "ASC Club", desc: "Adventure & Sports Club", email: "asc@iisermohali.ac.in" },
  { name: "Adaa Club", desc: "Fashion Club", email: "adaa@iisermohali.ac.in" }
];

// populate clubs grid
function renderClubs() {
  const grid = document.getElementById("clubsGrid");
  CLUBS.forEach(c => {
    const div = document.createElement("div");
    div.className = "club-card";
    div.innerHTML = `
      <h4>${c.name}</h4>
      <p>${c.desc}</p>
      <div class="club-email">✉ ${c.email}</div>
    `;
    grid.appendChild(div);
  });
}

// ---------- SVG NODE INTERACTIONS ----------
const NODE_INFO = {
  hostels: {
    title: "Hostels",
    desc: "Hostels host the majority of students. Wings, study spaces and committee contacts are available through SRC.",
    maps: "https://www.google.com/maps/search/?api=1&query=IISER+Mohali+hostel"
  },
  acad: {
    title: "Academic Block",
    desc: "Academic block houses classrooms, administrative offices and many faculty rooms. Seminars and colloquia happen here.",
    maps: "https://www.google.com/maps/place/IISER+Mohali"
  },
  lh: {
    title: "Lecture Halls",
    desc: "Lecture halls host lectures, seminars and departmental events.",
    maps: "https://www.google.com/maps/search/?api=1&query=IISER+Mohali+lecture+halls"
  },
  library: {
    title: "Library",
    desc: "Library with study cabins, digital subscriptions and large reading halls.",
    maps: "https://www.google.com/maps/search/?api=1&query=IISER+Mohali+library"
  },
  mess: {
    title: "Mess & Dining",
    desc: "Multiple messes and canteens. Food Monitoring Committee and mess committees handle issues.",
    maps: "https://www.google.com/maps/search/?api=1&query=IISER+Mohali+mess"
  },
  health: {
    title: "Health Centre",
    desc: "On-campus health services and emergency assistance available during working hours.",
    maps: "https://www.google.com/maps/search/?api=1&query=IISER+Mohali+health+centre"
  },
  sports: {
    title: "Sports Complex",
    desc: "Facilities include football ground, badminton courts and athletics track.",
    maps: "https://www.google.com/maps/search/?api=1&query=IISER+Mohali+sports+ground"
  },
  gate: {
    title: "Main Gate",
    desc: "Main entrance; bus pickups and taxis often meet here. Good reference for directions.",
    maps: "https://www.google.com/maps/place/IISER+Mohali"
  }
};

function initCampusSVG() {
  const svg = document.getElementById("lifeCampusSVG");
  if (!svg) return;

  svg.querySelectorAll("[data-node]").forEach(g => {
    const key = g.getAttribute("data-node");
    g.addEventListener("mouseenter", () => {
      g.querySelector(".node-circle")?.classList.add("node-pulse");
    });
    g.addEventListener("mouseleave", () => {
      g.querySelector(".node-circle")?.classList.remove("node-pulse");
    });
    g.addEventListener("click", (ev) => {
      showNodeCard(key);
    });
  });

  document.getElementById("campusNodeClose").addEventListener("click", hideNodeCard);
}

function showNodeCard(key) {
  const info = NODE_INFO[key];
  if (!info) return;
  const card = document.getElementById("campusNodeCard");
  document.getElementById("campusNodeTitle").textContent = info.title;
  document.getElementById("campusNodeDesc").textContent = info.desc;
  const nav = document.getElementById("campusNodeNav");
  nav.href = info.maps;
  nav.textContent = "Open on Google Maps";
  card.classList.remove("hidden");
  card.setAttribute("aria-hidden","false");
}

function hideNodeCard() {
  const card = document.getElementById("campusNodeCard");
  card.classList.add("hidden");
  card.setAttribute("aria-hidden","true");
}

// ---------- GITHUB REPOS (template) ----------
// The web tool couldn't fetch GitHub automatically earlier. If you'd like live repos,
// enable a GitHub token or allow unauthenticated calls (rate-limited).
// Example fetch (uncomment to use):
/*
async function loadRepos(){
  const url = 'https://api.github.com/orgs/IISERM/repos?per_page=8&sort=updated';
  const res = await fetch(url);
  if(!res.ok) return;
  const repos = await res.json();
  const grid = document.getElementById('reposGrid');
  grid.innerHTML = '';
  repos.forEach(r=>{
    const div = document.createElement('div');
    div.className='repo-card';
    div.innerHTML = `<h3>${r.name}</h3><p>${r.description||''}</p><a href="${r.html_url}" target="_blank" class="open-map-btn">View repo</a>`;
    grid.appendChild(div);
  });
}
*/

// ---------- INIT ----------
document.addEventListener("DOMContentLoaded", () => {
  renderClubs();
  initCampusSVG();
  // loadRepos(); // uncomment once you decide to enable GitHub fetching
});
