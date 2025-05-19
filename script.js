const socials = [{
        platform: "twitch",
        username: "dj_cheesuslive",
        bio: "Watch me play games live.",
        link: "https://twitch.tv/dj_cheesuslive"
    },
    {
        platform: "youtube",
        username: "@dj_cheesus",
        bio: "Watch longer videos.",
        link: "https://youtube.com/@dj_cheesus"
    },
    {
        platform: "tiktok",
        username: "@dj_cheesus",
        bio: "Watch short form videos.",
        link: "https://tiktok.com/@dj_cheesus"
    },
    {
        platform: "discord",
        username: "dj_cheesus server",
        bio: "Hang out with the community and get notifications when new videos are released.",
        link: "https://dsc.gg/cheesus"
    },
    {
        platform: "twitter",
        username: "@dj_cheesus",
        bio: "Get my latest updates.",
        link: "https://x.com/@dj_cheesus"
    },
    {
        platform: "bluesky",
        username: "djcheesus.com",
        bio: "Get my latest updates but on a different website.",
        link: "https://bsky.app/profile/djcheesus.com"
    }
];

const container = document.getElementById("card-container");

socials.forEach(({ platform, username, bio, link }) => {
    const card = document.createElement("div");
    card.className = `social-card ${platform}`;

    const iconHTML = platform === "bluesky" ?
        `<img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Bluesky_Logo.svg" alt="Bluesky Logo" class="platform-icon" style="width:32px; height:32px;">` :
        `<i class="platform-icon fab fa-${platform}"></i>`;

    card.innerHTML = `
    <div class="card-header">
      ${iconHTML}
      <h2 class="card-title">${platform.charAt(0).toUpperCase() + platform.slice(1)}</h2>
    </div>
    <div class="card-content">
      <span class="username">${username}</span>
      <p class="bio">${bio}</p>
    </div>
    <a href="${link}" class="action-button" target="_blank">Visit</a>
    <div class="card-bg"></div>
  `;

    container.appendChild(card);
});