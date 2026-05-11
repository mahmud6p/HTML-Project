// Commit 1: Show alert
alert("Welcome to DevPort! Today is May 7.");
// Commit 3: Added interactive features

// Alert on page load
alert("Hello Prince! Today is May 7.");

// Show current date in console
const now = new Date();
console.log("Current date and time: " + now.toLocaleString());

// Button click event
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.createElement("button");
  btn.textContent = "Click Me!";
  btn.style.padding = "10px";
  btn.style.backgroundColor = "purple";
  btn.style.color = "white";
  document.body.appendChild(btn);

  btn.addEventListener("click", () => {
    alert("Button clicked successfully!");
  });
});



// Commit 4: Show skill levels in console
const skills = {
  "HTML & CSS": 90,
  "JavaScript": 80,
  "Cyber Security": 95
};

for (const skill in skills) {
  console.log(`${skill}: ${skills[skill]}%`);
}

// Commit 4: Add social links dynamically
document.addEventListener("DOMContentLoaded", () => {
  const footer = document.createElement("footer");
  footer.style.padding = "20px";
  footer.style.textAlign = "center";

  const links = [
    { name: "GitHub", url: "https://github.com/mahmud6p" },
    { name: "LinkedIn", url: "https://linkedin.com/in/prince" }
  ];

  links.forEach(link => {
    const a = document.createElement("a");
    a.href = link.url;
    a.textContent = link.name;
    a.style.margin = "0 10px";
    footer.appendChild(a);
  });

  document.body.appendChild(footer);
});

// Commit 3: Dark mode toggle
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.createElement("button");
  toggle.textContent = "Toggle Dark Mode";
  toggle.style.margin = "20px";
  document.body.appendChild(toggle);

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
});
