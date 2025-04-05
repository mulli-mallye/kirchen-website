const translations = {
  de: {
    welcome: "Willkommen auf unserer Website",
    calendar: "📅 Zum Kalender",
    admin: "🔧 Admin-Bereich",
    reminder: "🔔 Erinnerung erhalten"
  },
  en: {
    welcome: "Welcome to our website",
    calendar: "📅 Go to calendar",
    admin: "🔧 Admin area",
    reminder: "🔔 Get a reminder"
  },
  ti: {
    welcome: "እንቋዕ ብደሓን መፃእኩም ኣብ ድሕረ ገፅና",
    calendar: "📅 ወደ ካለንደር ኣቐምጡ",
    admin: "🔧 ኣብ ኣድሚን ክፍሊ ኩተል",
    reminder: "🔔 ሓደጋ ውሰድ"
  },
  am: {
    welcome: "እንኳን ወደ ድህረ ገፃችን በደህና መጡ",
    calendar: "📅 ወደ ቀን መቁጠሪያ",
    admin: "🔧 የአድሚን ክፍል",
    reminder: "🔔 አስታዋሽ ያግኙ"
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
}

window.addEventListener("DOMContentLoaded", () => {
  const gespeicherteSprache = localStorage.getItem("lang") || "de";
  applyLanguage(gespeicherteSprache);
});
