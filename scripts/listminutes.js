fetch("minutes/index.json")
  .then(r => r.json())
  .then(items => {
    const container = document.getElementById("minutes-list");

    items.forEach(item => {
      const { file, type, title, date } = item;

      // Logo rules
      let logosHTML = `
          <img src="assets/logo.png" style="width:60px; margin-right:10px;">
      `;

      if (["warden", "committee", "openhouse"].includes(type)) {
        logosHTML += `
          <img src="assets/iiser.png" style="width:60px;">
        `;
      }

      container.innerHTML += `
        <div class="minutes-card">

          <img src="assets/iiser.jpeg" class="header-img">

          <div style="display:flex; align-items:center; margin-top:10px;">
            ${logosHTML}
          </div>

          <h3 class="minutes-title">${title}</h3>
          <p class="minutes-date">${date.replace(/-/g, " / ")}</p>

          <a class="minutes-btn" href="viewminutes.html?file=minutes/${file}">
            View Minutes
          </a>
        </div>
      `;
    });
  })
  .catch(err => {
    console.error(err);
    document.getElementById("minutes-list").innerHTML =
      "<p>Error loading minutes list.</p>";
  });
