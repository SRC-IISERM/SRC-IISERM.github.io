srcphoto_directory = "assets/src2025_2026/"
const TEAM_MEMBERS = [
    // convenor and gen sec
    { name: "Rohan Sushil", role: "SRC Convenor", group: "core", meta: "MS23220", photo: "rohan.jpeg" },
    { name: "Vedantika Dey", role: "General Secretary", group: "core", meta: "MS23239", photo: "IMG_7246 - Vedantika Dey.jpeg" },

    // secretary
    { name: "Aaradhya Sharma", role: "Academic Secretary", group: "core", meta: "MS23047", photo: "" },
    { name: "Manu A Sankaran", role: "Cultural Secretary", group: "core", meta: "MS23029", photo: "bld - Manu Sankaran.jpg" },
    { name: "Dinesh Kumar Sethi", role: "Sports Secretary", group: "core", meta: "PH23023", photo: "" },

    // hostel rep
    { name: "Tanmay Pandey", role: "H7 - Boys Rep", group: "hostel", meta: "MS22113", photo: "IMG-20251124-WA0003 - Tanmay Pandey.jpg" },
    { name: "Rishikesh Vijay Singh", role: "H3 - Boys Rep", group: "hostel", meta: "MS23060", photo: "IMG-20251001-WA0289 - Rishikesh Singh.jpg" },
    { name: "Vedantika Dey", role: "H3 - Girls Rep", group: "hostel", meta: "MS23239", photo: "IMG_7246 - Vedantika Dey.jpeg" },
    { name: "Vishvendra Singh", role: "H4 - Boys Rep", group: "hostel", meta: "MS25284", photo: "IMG20251015143851 - VISHVENDRA SINGH.jpg" },
    
    // batch reps
    { name: "Yash Sharma", role: "MS25 Batch Rep", group: "batch", meta: "MS25230", photo: "IMG_20251123_155723 - YASH SHARMA.jpg" },
    { name: "Ananya Shyam", role: "MS25 Batch Rep", group: "batch", meta: "MS25072", photo: "IMG_20250829_082106 - Ananya Shyam.jpg" },
    { name: "Aditya Garai", role: "MS21 Thesis Rep", group: "batch", meta: "MS21217", photo: "" },
    

    //department rep
    
    { name: "Amey Chandak", role: "MS22 Bio Dept. Rep", group: "department", meta: "MS22096", photo: "IMG_20230201_001830_057 - sam sam.webp" },
    { name: "Diljit Singh Tiwana", role: "MS23 Bio Dept. Rep", group: "department", meta: "MS22096", photo: "img_4731 - Diljit Singh.jpeg" },

    { name: "Anjela Datta", role: "MS22 Chem Dept. Rep", group: "department", meta: "MS22261", photo: "" },
    { name: "Sakshi", role: "MS23 Chem Dept. Rep", group: "department", meta: "MS23105", photo: "IMG-20250921-WA0127 - Sakshi.jpg" },

    { name: "Kumar Twarit", role: "MS23 EES Dept. Rep", group: "department", meta: "MS23018", photo: "src photo - Kumar Twarit.jpg" },
    
    { name: "Shubham Sehgal", role: "MS22 Maths Dept. Rep", group: "department", meta: "MS22030", photo: "" },
    { name: "Daksh Arora", role: "MS23 Maths Dept. Rep", group: "department", meta: "MS23206", photo: "" },
    
    { name: "Rohan Sushil", role: "MS23 Phy Dept. Rep", group: "department", meta: "MS23220", photo: "rohan.jpeg" },
    
    { name: "Sachin Kumar Mishra", role: "EES PhD Rep", group: "department", meta: "PH22064", photo: "IMG_20251017_174016 - Sachin Mishra.jpg" },
    { name: "Himganga Joji", role: "HSS PhD Rep", group: "department", meta: "PH24059", photo: "IMG-20251123-WA0077(1) - Himaganga Joji.jpg" },
    { name: "Achalesh Nimbikial", role: "EES Pre-Major Rep", group: "department", meta: "MS24255", photo: "MS24255.   8737 - ACHALESH NIMBIWAL.jpg" },
    { name: "Varun Arora", role: "Chem Pre-Major Rep", group: "department", meta: "MS24261", photo: "IMG-20250927-WA0017 - VARUN ARORA.jpg" },
    { name: "Saivi Dhanesh Zaveri ", role: "Bio Pre-Major Rep", group: "department", meta: "MS24216", photo: "" },
    

];

// Utility: create a card
function makeCard(member) {
  const el = document.createElement('div');
  el.className = 'team-card';
  el.dataset.group = member.group || 'all';

  const avatar = document.createElement('div');
  avatar.className = 'team-avatar';
  const img = document.createElement('img');
  img.src = srcphoto_directory+member.photo || 'assets/avatars/placeholder.png';
  img.alt = member.name;
  avatar.appendChild(img);

  const info = document.createElement('div');
  info.className = 'team-info';
  const name = document.createElement('div');
  name.className = 'team-name';
  name.textContent = member.name;
  const role = document.createElement('div');
  role.className = 'team-role';
  role.textContent = member.role;
  const meta = document.createElement('div');
  meta.className = 'team-meta';
  meta.textContent = member.meta || '';

  info.appendChild(name);
  info.appendChild(role);
  info.appendChild(meta);

  // highlight convenor / GS
  //if (/convenor|general secretary|secretary/i.test(member.role)) {
  //  const badge = document.createElement('span');
  ////  badge.className = 'badge';
    // short label
  ////  if (/convenor/i.test(member.role)) badge.textContent = 'Convenor';
  //  else if (/general secretary/i.test(member.role)) badge.textContent = 'General Sec.';
 //   else badge.textContent = 'Officer';
  //  info.appendChild(badge);
   // info.style.marginTop = '6px';
 // }

  el.appendChild(avatar);
  el.appendChild(info);
  return el;
}

// Render grid
function renderTeam(filter = 'all') {
  const grid = document.getElementById('teamGrid');
  grid.innerHTML = '';
  const list = TEAM_MEMBERS.filter(m => filter === 'all' ? true : m.group === filter);
  if (list.length === 0) {
    grid.innerHTML = '<p style="opacity:.8">No members in this category.</p>';
    return;
  }
  list.forEach(m => grid.appendChild(makeCard(m)));
}
function updateCount() {
  const countEl = document.getElementById('memberCount');
  countEl.textContent = `Total Members: ${TEAM_MEMBERS.length - 2} / 43`;
}

// Tabs behavior
document.addEventListener('DOMContentLoaded', () => {
  renderTeam('all');
  updateCount(); // ← NEW

  document.querySelectorAll('.tab').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      renderTeam(filter);
    });
  });
});

