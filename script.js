(() => {
  const FALLBACK_ICONS = [
    "3balls.gif",
    "dvd.gif",
    "erors.gif",
    "explode.gif",
    "hallway.gif",
    "icon_spin.gif",
    "randomframes.gif",
    "scroll.gif",
    "spinningball.gif",
    "wiggle.gif",
  ];

  const unique = (list) =>
    [...new Set(list.filter((name) => /\.gif$/i.test(name)).map((name) => name.split("/").pop()))];

  async function discoverIcons() {
    try {
      const res = await fetch("icons/", { cache: "no-store" });
      if (res.ok) {
        const html = await res.text();
        const found = unique(
          [...html.matchAll(/href\s*=\s*["']([^"']+\.gif)["']/gi)].map((m) => m[1])
        );
        if (found.length) return found;
      }
    } catch {
    }

    try {
      const res = await fetch("icons/manifest.json", { cache: "no-store" });
      if (res.ok) {
        const data = await res.json();
        const found = unique(Array.isArray(data) ? data : data.icons || []);
        if (found.length) return found;
      }
    } catch {
    }

    return FALLBACK_ICONS;
  }

  function pickIcon(icons) {
    let last = null;
    try {
      last = sessionStorage.getItem("djcheesus:icon");
    } catch {
    }

    const pool = icons.length > 1 ? icons.filter((name) => name !== last) : icons;
    const choice = pool[Math.floor(Math.random() * pool.length)];

    try {
      sessionStorage.setItem("djcheesus:icon", choice);
    } catch {
    }

    return choice;
  }

  function applyFavicon(file) {
    const href = `icons/${encodeURIComponent(file)}`;

    document.querySelectorAll("link[rel~='icon']").forEach((link) => link.remove());

    const icon = document.createElement("link");
    icon.rel = "icon";
    icon.type = "image/gif";
    icon.href = href;
    document.head.appendChild(icon);

    const touch = document.createElement("link");
    touch.rel = "apple-touch-icon";
    touch.href = href;
    document.head.appendChild(touch);
  }

  discoverIcons()
    .then((icons) => {
      if (icons.length) applyFavicon(pickIcon(icons));
    })
    .catch(() => {});

  const CHANNEL = "dj_cheesuslive";
  const frame = document.getElementById("twitch-player");
  const offline = document.getElementById("stream-offline");

  if (!frame || !offline) return;

  if (window.location.protocol === "file:") {
    frame.hidden = true;
    offline.hidden = false;
    return;
  }

  const parent = window.location.hostname || "localhost";
  const params = new URLSearchParams({
    channel: CHANNEL,
    parent,
    autoplay: "false",
    muted: "true",
  });

  frame.src = `https://player.twitch.tv/?${params.toString()}`;
})();
