document.addEventListener("DOMContentLoaded", function () {
  // Helper function to fetch and embed HTML components dynamically
  function loadComponent(url, elementId) {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to load ${url}: ${response.statusText}`);
        }
        return response.text();
      })
      .then(data => {
        const placeholder = document.getElementById(elementId);
        if (placeholder) {
          placeholder.innerHTML = data;
        }
      })
      .catch(error => console.error("Error loading component:", error));
  }

  // Load Header and Footer components into placeholder containers
  loadComponent("header.html", "header-placeholder");
  loadComponent("footer.html", "footer-placeholder");
});