const tacheInput = document.getElementById("tacheInput");
const ajouterBtn = document.getElementById("ajouterBtn");
const tacheList = document.getElementById("tacheList");

let taches = JSON.parse(localStorage.getItem("taches")) || [];
taches.forEach(t => {
  const li = document.createElement("li");
  li.textContent = t;
  tacheList.appendChild(li);
});

ajouterBtn.addEventListener("click", () => {
  const tache = tacheInput.value.trim();
  if (!tache) return;
  taches.push(tache);
  localStorage.setItem("taches", JSON.stringify(taches));

  const li = document.createElement("li");
  li.textContent = tache;
  tacheList.appendChild(li);

  tacheInput.value = "";
});
