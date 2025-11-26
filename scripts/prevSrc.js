/**********************************
 *   PHOTO PATHS
 **********************************/
const photo_src2022_2023 = "assets/src2022_2023";
const photo_src2023_2024 = "assets/src2023_2024";
const photo_src2024_2025 = "assets/src2024_2025"; // ← you must create this folder


/**********************************
 *   SRC 2022–2023
 **********************************/
const SRC2022_2023 = [
  { name: "Rochan Das", role: "Convener", group: "core", meta: "MS20052", photo: "rochaan.jpg" },
  { name: "Aman Saini", role: "General Secretary", group: "core", meta: "MS20025", photo: "aman.png" },
  { name: "Dhanuush B", role: "Academic Secretary", group: "core", meta: "MS??", photo: "dhanush.jpg" },
  { name: "Deep Sehgal", role: "Cultural Secretary", group: "core", meta: "MS??", photo: "deep.jpg" },
  { name: "Nishaant Kumar", role: "Sports Secretary", group: "core", meta: "MS??", photo: "nishaant.jpg" },

  { name: "Shivam Govind Jha", role: "BS-MS Biology", group: "department", meta: "MS19074", photo: "shivam.jpg" },
  { name: "Ishatpreet Singh", role: "BS-MS Biology", group: "department", meta: "MS20003", photo: "ishatpreet.jpg" },
  { name: "Koyel Nandy", role: "PhD Biology", group: "department", meta: "PH22021", photo: "koyel.jpeg" },
  { name: "Rishab Panda", role: "BS-MS Chemistry", group: "department", meta: "MS19008", photo: "rishab.jpg" },
  { name: "Aman Saini", role: "BS-MS Chemistry", group: "department", meta: "MS20025", photo: "aman.png" },
  { name: "Ramanpreet Kaur", role: "Int-PhD Chemistry", group: "department", meta: "MP21011", photo: "raman.jpg" },
  { name: "Arun Kumar", role: "PhD Chemistry", group: "department", meta: "PH21104", photo: "arun.jpg" },
  { name: "Rochan Das", role: "BS-MS Mathematics", group: "department", meta: "MS20052", photo: "rochaan.jpg" },
  { name: "Rupkatha Chand", role: "BS-MS Mathematics", group: "department", meta: "MS19170", photo: "rupkatha.jpg" },
  { name: "Tathagata Nayak", role: "Int-PhD Mathematics", group: "department", meta: "MP21007", photo: "tathagata.jpg" },
  { name: "Niranjan", role: "PhD Mathematics", group: "department", meta: "PH17042", photo: "niranjan.jpg" },
  { name: "Manpreet Singh", role: "BS-MS Physics", group: "department", meta: "MS19098", photo: "manpreet.jpeg" },
  { name: "Md Asad ul Haque", role: "BS-MS Physics", group: "department", meta: "MS20084", photo: "asad.jpg" },
  { name: "Kunal Banerjee", role: "BS-MS Physics", group: "department", meta: "MP21019", photo: "kunal.jpg" },
  { name: "Chetan Sadhotra", role: "PhD EES", group: "department", meta: "PH20038", photo: "chetan.jpeg" },
  { name: "Jonayed Rousan Mandal", role: "PhD HSS", group: "department", meta: "PH20007", photo: "jonayed.jpg" },

  { name: "Bhawna Chawla", role: "MS21 Class Representative", group: "batch", meta: "MS21137", photo: "bhawna.jpg" },
  { name: "Nikita", role: "MS21 Class Representative", group: "batch", meta: "MS21124", photo: "nik.jpg" },
  { name: "Rakeshkrishna K", role: "MS22 Class Representative", group: "batch", meta: "MS22137", photo: "rakesh.jpg" },
  { name: "Aneesh", role: "MS22 Class Representative", group: "batch", meta: "MS22160", photo: "aneesh.jpg" },

  { name: "Keerthana M", role: "Hostel 5", group: "hostel", meta: "MS20027", photo: "keerthana.jpg" },
  { name: "Aditya Seth", role: "Hostel 5", group: "hostel", meta: "MS19028", photo: "seth.jpg" },
  { name: "Shrreya Sudade", role: "Hostel 6", group: "hostel", meta: "MS19164", photo: "shrreya.jpeg" },
  { name: "Shivam Kumar", role: "Hostel 6", group: "hostel", meta: "MS20185", photo: "shivamk.jpg" },
  { name: "Aavani Babu", role: "Hostel 7", group: "hostel", meta: "MS19070", photo: "aavani.jpg" },
  { name: "Harpreet Singh", role: "Hostel 7", group: "hostel", meta: "MS20049", photo: "harpreet.png" },
  { name: "Shivani Dogra", role: "Hostel 8", group: "hostel", meta: "MS19158", photo: "shivani.jpg" },
  { name: "Jishnu Kesh", role: "Hostel 8", group: "hostel", meta: "MS21139", photo: "jishnu.jpg" },
  { name: "Ayan Mandal", role: "Visitors' hostel", group: "hostel", meta: "MS21030", photo: "ayan.jpg" },
];


/**********************************
 *   SRC 2023–2024
 **********************************/
const SRC2023_2024 = [
  { name: "Aditya Garai", role: "Convener", group: "core", meta: "", photo: "adigarai.jpg" },
  { name: "Govind Sharma", role: "General Secretary", group: "core", meta: "", photo: "govind.jpg" },
  { name: "Utsa Ray", role: "Academic Secretary", group: "core", meta: "", photo: "utsa.jpg" },
  { name: "Sanatan Bhardwaj", role: "Cultural Secretary", group: "core", meta: "", photo: "sanatan.jpg" },
  { name: "Sahil Kaushal", role: "Sports Secretary", group: "core", meta: "", photo: "sahil.jpg" },

  { name: "Ishatpreet Singh", role: "BS-MS Biology", group: "department", meta: "MS20003", photo: "ishatpreet.jpg" },
  { name: "Bhavani Srinivasan", role: "BS-MS Biology", group: "department", meta: "MS20242", photo: "bhavani.jpg" },
  { name: "Subhajit Pal", role: "PhD Biology", group: "department", meta: "PH21094", photo: "subhajit.jpg" },
  { name: "Aditya Garai", role: "BS-MS Chemistry", group: "department", meta: "MS21217", photo: "adigarai.jpg" },
  { name: "Geethu Prakash", role: "BS-MS Chemistry", group: "department", meta: "MS21246", photo: "geethu.jpg" },

  { name: "Atul Kumar Tiwary", role: "BS-MS Mathematics", group: "department", meta: "MS21012", photo: "atul.JPG" },
  { name: "Arnav Sinha", role: "BS-MS Mathematics", group: "department", meta: "MS21050", photo: "arnav.jpg" },
  { name: "Rifat Siddique", role: "Int-PhD Mathematics", group: "department", meta: "MP21008", photo: "rifat.jpg" },
  { name: "Anusha Bhattacharya", role: "PhD Mathematics", group: "department", meta: "MP21008", photo: "anusha.jpg" },

  { name: "Armaandeep Singh", role: "BS-MS Physics", group: "department", meta: "MS21021", photo: "armandeep.jpg" },
  { name: "Eshna Roy", role: "BS-MS Physics", group: "department", meta: "MS21029", photo: "eshna.jpg" },
  { name: "Kunal Banerjee", role: "Int-PhD Physics", group: "department", meta: "MP21019", photo: "kunal.jpg" },
  { name: "Himanshu Rajpoot", role: "PhD Physics", group: "department", meta: "PH21085", photo: "male.png" },
  { name: "Vir Pratap Singh Gautam", role: "PhD HSS", group: "department", meta: "PH23001", photo: "male.png" },

  { name: "Komeravelli Sulekha", role: "MS22 Class Representative", group: "batch", meta: "MS22259", photo: "komravelli.jpg" },
  { name: "Akshat Saini", role: "MS22 Class Representative", group: "batch", meta: "MS22085", photo: "male.png" },
  { name: "Manu A Sankaran", role: "MS23 Class Representative", group: "batch", meta: "MS23029", photo: "manu.jpg" },
  { name: "Sanya Osaan", role: "MS23 Class Representative", group: "batch", meta: "MS23173", photo: "sanya.jpg" },

  { name: "Govind Sharma", role: "Hostel 5 (Boys' Wing)", group: "hostel", meta: "MS20053", photo: "govind.jpg" },
  { name: "Nikita", role: "Hostel 5 (Girls' Wing)", group: "hostel", meta: "MS21124", photo: "nikita.jpg" },
  { name: "Ravale Sanket Sudam", role: "Hostel 6 (Boys' Wing)", group: "hostel", meta: "MS20145", photo: "sanket.jpg" },
  { name: "Jiyen Sachdeva", role: "Hostel 6 (Girls' Wing)", group: "hostel", meta: "MS21154", photo: "jiyen.jpg" },
  { name: "Kush Gulati", role: "Hostel 7 (Boys' Wing)", group: "hostel", meta: "MS20014", photo: "kush.png" },
  { name: "Riddhi Panja", role: "Hostel 7 (Girls' Wing)", group: "hostel", meta: "MS22237", photo: "riddhi.jpg" },

  { name: "Amarnath", role: "Hostel 8 (Boys' Wing)", group: "hostel", meta: "MS22070", photo: "amar.png" },
  { name: "Apurva Sharma", role: "Hostel 8 (Girls' Wing)", group: "hostel", meta: "MS21200", photo: "apurva.jpeg" },
  { name: "Guguloth Srikanth", role: "Visitors' hostel", group: "hostel", meta: "PH21101", photo: "gugloth.jpg" },
];

/************************************
 *  CARD COMPONENT (SAME AS MAIN PAGE)
 ************************************/
function makeTeamCard(member, photoDir) {
  const el = document.createElement("div");
  el.className = "team-card";
  el.dataset.group = member.group;

  const avatar = document.createElement("div");
  avatar.className = "team-avatar";

  const img = document.createElement("img");
  img.src = `${photoDir}/${member.photo}`;
  img.alt = member.name;
  avatar.appendChild(img);

  const info = document.createElement("div");
  info.className = "team-info";

  const name = document.createElement("div");
  name.className = "team-name";
  name.textContent = member.name;

  const role = document.createElement("div");
  role.className = "team-role";
  role.textContent = member.role;

  const meta = document.createElement("div");
  meta.className = "team-meta";
  meta.textContent = member.meta || "";

  info.appendChild(name);
  info.appendChild(role);
  info.appendChild(meta);

  el.appendChild(avatar);
  el.appendChild(info);

  return el;
}

/************************************
 * SETUP FOR EACH YEAR BLOCK
 ************************************/
function setupSRCYear(blockId, members, photoDir) {
  const block = document.getElementById(blockId);

  const grid = block.querySelector(".src-grid");
  const countEl = block.querySelector(".src-count");
  const tabs = block.querySelectorAll(".src-tab");

  function render(filter = "all") {
    grid.innerHTML = "";

    const list = members.filter(m =>
      filter === "all" ? true : m.group === filter
    );

    countEl.textContent = `Total Members: ${list.length}`;

    list.forEach(m => {
      grid.appendChild(makeTeamCard(m, photoDir));
    });
  }

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      render(tab.dataset.filter);
    });
  });

  render("all");
}

/************************************
 * INIT
 ************************************/
document.addEventListener("DOMContentLoaded", () => {
  setupSRCYear("src2023_2024", SRC2023_2024, photo_src2023_2024);
  setupSRCYear("src2022_2023", SRC2022_2023, photo_src2022_2023);
});
