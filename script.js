//your code here
document.addEventListener("DOMContentLoaded", function () {
  const bandNames = [
    "The Virupaksha Temple",
    "Victoria Memorial",
    "Tajmahal",
  ];

  // Function to strip articles from band names and return a clean name
  function stripArticles(bandName) {
    return bandName.replace(/^(a|an|the)\s+/i, "").trim();
  }

  // Sort the band names without articles
  const sortedBands = bandNames.slice().sort((a, b) => {
    const cleanA = stripArticles(a);
    const cleanB = stripArticles(b);
    return cleanA.localeCompare(cleanB);
  });

  // Create the ul element
  const ul = document.createElement("ul");
  ul.id = "bands";

  // Populate the ul with sorted band names
  sortedBands.forEach((bandName) => {
    const li = document.createElement("li");
    li.textContent = bandName;
    ul.appendChild(li);
  });

  // Add the ul to the body
  document.body.appendChild(ul);
});

