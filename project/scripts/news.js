document.addEventListener("DOMContentLoaded", () => {
    const newsSection = document.getElementById("news-section");
    const container = newsSection.querySelector(".news-container");
  
    const newsUpdates = [
      {
        title: "Dansuma Launches New Organic Clove Line",
        date: "April 10, 2025",
        content: "Our freshly harvested clove batch is now available. Cultivated using ancient methods passed down by local farmers!"
      },
      {
        title: "Irrigation Upgrade Completed",
        date: "April 6, 2025",
        content: "We're now equipped with sustainable drip irrigation systems that conserve water while boosting crop yield."
      },
      {
        title: "Community Training Workshop Held",
        date: "March 28, 2025",
        content: "We gathered over 80 local farmers to teach climate-smart farming and organic pest control. The response? Overwhelming!"
      }
    ];
  
    newsUpdates.forEach((item) => {
      const newsItem = document.createElement("div");
      newsItem.classList.add("news-item");
  
      newsItem.innerHTML = `
        <h4>${item.title}</h4>
        <small><em>${item.date}</em></small>
        <p>${item.content}</p>
      `;
  
      container.appendChild(newsItem);
    });
  });
  