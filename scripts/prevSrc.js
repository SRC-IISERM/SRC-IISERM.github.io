/**********************************
 *   PHOTO PATHS
 **********************************/
const photo_src2022_2023 = "assets/src2022_2023";
const photo_src2023_2024 = "assets/src2023_2024";
const photo_src2024_2025 = "assets/src2024_2025"; // ← you must create this folder

/**********************************
 *    SRC 2024-2025
 **********************************/

const SRC2024_2025 = [{ name: "Soham Shannigrahi", role: "SRC Convenor", group: "core", meta: "MS22232", photo: "GEN00023 - Soham Shannigrahi.JPG" },
    { name: "Kumar Twarit", role: "General Secretary", group: "core", meta: "MS23018", photo: "src photo - Kumar Twarit.jpg" },

    // secretary
    { name: "Swagotom Bhattacharjee", role: "Academic Secretary", group: "core", meta: "MS22112", photo: "IMG-20241012-WA0035 - Swagotom Bhattacharjee.jpg" },
    { name: "Vishal Koli", role: "Cultural Secretary", group: "core", meta: "MS22175", photo: "-cpmvre - Vishal Vaibhav Koli.jpg" },
    { name: "Arjun Kumar Sah", role: "Sports Secretary", group: "core", meta: "PH21099", photo: "Arjun - Arjun Kumar Sah.jpg" },

    // hostel rep
    { name: "Dhruv Kapoor", role: "H5 - Boys Rep", group: "hostel", meta: "MS22184", photo: "IMG_20240806_193108_609~2 - Dhruv Kapoor.jpg" },
    { name: "Shraddha Agrawal", role: "H5 - Girls Rep", group: "hostel", meta: "MS22171", photo: "PXL_20230828_121733063.MP - Shraddha Agrawal.jpg" },
    { name: "Koustav Maitra", role: "H6 - Boys Rep", group: "hostel", meta: "MS22146", photo: "" },
    { name: "Deep Sehgal", role: "H7 - Boys Rep", group: "hostel", meta: "MS21022", photo: "Dance_Photo - Deep Sehgal.JPG" },
    { name: "Sanjana Patil", role: "H7 - Girls Rep", group: "hostel", meta: "MS21201", photo: "" },
    { name: "Mohak Sharma", role: "H8 - Boys Rep", group: "hostel", meta: "PH21012", photo: "" },
    { name: "Simar Thind", role: "H8 - Girls Rep", group: "hostel", meta: "MS22048", photo: "IMG_20241221_105850 - Simar Thind.jpg" },
    { name: "Pankaj Kumar", role: "H3 - Boys Rep", group: "hostel", meta: "MS22129", photo: "" },
    { name: "Vedantika Dey", role: "H3 - Girls Rep", group: "hostel", meta: "MS23239", photo: "IMG_2099 - Vedantika Dey.jpeg" },
    { name: "Sahil Deshmukh", role: "H4 - Boys Rep", group: "hostel", meta: "MS22233", photo: "IMG-20241112-WA0033~2 - Sahil Deshmukh.jpg" },
    
    // batch reps
    { name: "Vishal Murali", role: "MS24 Batch Rep", group: "batch", meta: "MS24235", photo: "327c442f-d765-42ab-8b6e-4d30361fdff5 - VISHAL MURALI.jpeg" },
    { name: "Divya Jyoti Ray", role: "MS24 Batch Rep", group: "batch", meta: "MS24056", photo: "IMG_20241208_140123_552 - DIVYA JYOTI RAY.webp" },
    { name: "Agantuk Saha", role: "MS20 Thesis Rep", group: "batch", meta: "MS20076", photo: "Keyboard - AGANTUK SAHA.jpeg" },
    { name: "Sharat Sapna Anuj", role: "MS20 Thesis Rep", group: "batch", meta: "MS20094", photo: "PXL_20241203_102212060 - SHARAT SAPNA ANUJ.jpg" },
 

    //department rep
    
    { name: "Shruti Swaminathan", role: "MS22 Bio Dept. Rep", group: "department", meta: "MS22139", photo: "IMG_1620 - Shruti Swaminathan.jpeg" },
    { name: "Tushti Govind", role: "MS23 Bio Dept. Rep", group: "department", meta: "MS23144", photo: "Tushti_MS23 - Tushti Govind.jpg" },

    { name: "Dibyendu Sarkar", role: "MS22 Chem Dept. Rep", group: "department", meta: "MS22243", photo: "PHOTO - Dibyendu Sarkar.jpg" },
    { name: "Sai Harshita", role: "MS23 Chem Dept. Rep", group: "department", meta: "MS23043", photo: "InCollage_20241219_204616684 - Sai Harshita.jpg" },

    { name: "Kumar Twarit", role: "MS23 EES Dept. Rep", group: "department", meta: "MS23018", photo: "src photo - Kumar Twarit.jpg" },
    
    { name: "Aditya Bora", role: "MS22 Maths Dept. Rep", group: "department", meta: "MS22181", photo: "IMG-20241220-WA0025 - Aditya Sobham Bora.jpg" },
    { name: "Archisha Mukherjee", role: "MS23 Maths Dept. Rep", group: "department", meta: "MS23201", photo: "" },
    
    { name: "Aditya Rao", role: "MS23 Phy Dept. Rep", group: "department", meta: "MS23195", photo: "IMG-20250101-WA0052~2 - Aditya Rao.jpg" },
    
    { name: "Arpit Awasthi", role: "EES PhD Rep", group: "department", meta: "PH22062", photo: "IMG-20240919-WA0044 - Arpit Awasthi.jpg" },
    { name: "Aayush Gagneja", role: "HSS PhD Rep", group: "department", meta: "PH24011", photo: "" },
    { name: "Shivika Gupta", role: "MS21 Bio Dept. Rep", group: "department", meta: "MS21173", photo: "PXL_20240415_150749162.MP - Shivika Gupta.jpg" },
    { name: "Arnav Sinha", role: "MS21 Maths Dept. Rep", group: "department", meta: "MS21050", photo: "src - Arnav Sinha.jpeg" },
    { name: "Shivam Kumar", role: "MS21 Chem Dept. Rep", group: "department", meta: "MS21084", photo: "IMG_20241219_223634 - Shivam Kumar.jpg" },
    { name: "Subhamn Mahapatra", role: "MS21 Phy Dept. Rep", group: "department", meta: "MS21134", photo: "" },

    { name: "Soham Shannigrahi", role: "MS22 Phy Dept. Rep", group: "department", meta: "MS22232", photo: "GEN00023 - Soham Shannigrahi.JPG" },
    { name: "Vyshnav PT", role: "Int-PhD Maths Dept. Rep", group: "department", meta: "MP21013", photo: "" },
    { name: "Kunal Banerjee", role: "Int-PhD Phy Dept. Rep", group: "department", meta: "MP21019", photo: "IMG-20241230-WA0004(1) - Kunal Banerjee.jpg" },
    { name: "Sumonta Sarkar", role: "Int-PhD Chem Dept. Rep", group: "department", meta: "MP", photo: "" },
    { name: "Sidhant Jakhar", role: "Phy PhD Rep", group: "department", meta: "PH20036", photo: "Sidhant_Jakhar - SIDHANT JAKHAR.jpg" },
    { name: "Arun Kumar ", role: "Chem PhD Rep", group: "department", meta: "PH21104", photo: "IMG_5167 - Arun Kumar.jpeg" },
];
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
  setupSRCYear("src2024_2025", SRC2024_2025, photo_src2024_2025);
  setupSRCYear("src2023_2024", SRC2023_2024, photo_src2023_2024);
  setupSRCYear("src2022_2023", SRC2022_2023, photo_src2022_2023);
});
