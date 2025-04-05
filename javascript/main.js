const translations = {
  de: {
    welcome: "Willkommen auf unserer Website",
    calendar: "📅 Zum Kalender",
    admin: "🔧 Admin-Bereich",
    reminder: "🔔 Erinnerung erhalten",
    alle: "📋 Alle Termine anzeigen"
  },
  en: {
    welcome: "Welcome to our website",
    calendar: "📅 Go to calendar",
    admin: "🔧 Admin area",
    reminder: "🔔 Get a reminder",
    alle: "📋 View all appointments"
  },
  ti: {
    welcome: "እንቋዕ ብደሓን መፃእኩም ኣብ ድሕረ ገፅና",
    calendar: "📅 ናብ ካለንደር ምምዝጋብ",
    admin: "🔧 ኣብ ኣድሚን ክፍሊ ኩተል",
    reminder: "🔔 ሓደጋ ውሰድ",
    alle: "📋 ኩሉ ቀጻሊ ምልክታት"
  },
  am: {
    welcome: "እንኳን ወደ ድህረ ገፃችን በደህና መጡ",
    calendar: "📅 ወደ መቁጠሪያ ቀን",
    admin: "🔧 የአድሚን ክፍል",
    reminder: "🔔 አስታዋሽ ያግኙ",
    alle: "📋 ሁሉንም ቀጠሮዎች አሳይ"
  }
};

function setLanguage(lang) {
  localStorage.setItem("lang", lang);
  applyLanguage(lang);
}

function applyLanguage(lang) {
  const t = translations[lang] || translations.de;
  document.getElementById("welcomeText").textContent = t.welcome;
  document.getElementById("calendarLink").textContent = t.calendar;
  document.getElementById("adminLink").textContent = t.admin;
  document.getElementById("reminderLink").textContent = t.reminder;
  document.getElementById("alleLink").textContent = t.alle;
}

// beim Start anwenden
applyLanguage(localStorage.getItem("lang") || "de");

function toggleMode() {
  document.body.classList.toggle("light");
}

// 📋 Vorschau
function ladeVorschau() {
  const termine = JSON.parse(localStorage.getItem("gottesdienste")) || [];
  const upcoming = termine
    .filter(e => new Date(e.datumISO) >= new Date())
    .sort((a, b) => new Date(a.datumISO) - new Date(b.datumISO))
    .slice(0, 3);

  const box = document.getElementById("termineVorschau");
  if (upcoming.length === 0) {
    box.textContent = "Keine Termine gespeichert.";
  } else {
    box.innerHTML = upcoming.map(e =>
      `📍 <strong>${e.ort}</strong> – ${e.datumISO} (${e.zeit})`
    ).join("<br><br>");
  }
}

ladeVorschau();
