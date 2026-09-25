const attractionSlugs = {
  "Republic Square": "republic-square", "Northern Avenue": "northern-avenue", "Opera & Freedom Square": "opera", "Cascade": "cascade", "Saryan Street": "saryan-street",
  "GUM Market": "gum-market", "Matenadaran": "matenadaran", "הגלריה הלאומית": "national-gallery", "Bookinist": "bookinist",
  "Garni Temple": "garni", "Symphony of Stones": "symphony-of-stones", "Geghard": "geghard", "Charents Arch": "charents-arch", "Etchmiadzin": "etchmiadzin",
  "Lake Sevan": "lake-sevan", "Sevanavank": "sevanavank", "Old Dilijan": "old-dilijan", "Haghartsin": "haghartsin", "Goshavank": "goshavank",
  "Hayravank": "hayravank", "Noratus Cemetery": "noratus", "Orbelian Caravanserai": "orbelian-caravanserai", "Selim Pass": "selim-pass", "Yeghegis & Zorats Church": "yeghegis-zorats",
  "Shaki Waterfall": "shaki-waterfall", "Wings of Tatev": "wings-of-tatev", "Halidzor Viewpoint": "halidzor-viewpoint", "Tatev Monastery": "tatev",
  "Old Khndzoresk": "khndzoresk", "Noravank Canyon": "noravank", "Areni": "areni", "Khor Virap": "khor-virap"
};

const days = [
  {
    day: 1, weekday: "שלישי", date: "6.10", title: "נוחתים ומכירים את ירוואן",
    subtitle: "אחרי הצ׳ק־אין: מסלול ערב קל בין הכיכרות, האדריכלות והתצפית העירונית.", city: "ירוואן",
    drive: "נסיעה מהשדה + כ־3 ק״מ הליכה", duration: "ערב של 2.5–3 שעות", directions: "https://www.google.com/maps/dir/?api=1&origin=Hin+Yerevantsi+Hotel&destination=Saryan+Street+Yerevan&waypoints=Republic+Square+Yerevan%7CNorthern+Avenue+Yerevan%7CYerevan+Opera+Theatre%7CCascade+Complex+Yerevan&travelmode=walking", stops: [
      ["טיסה לתחנת הביניים", "תל אביב → לרנקה · 06:30–07:40"],
      ["טיסה לארמניה", "לרנקה → ירוואן · 11:00–13:50"],
      ["צ׳ק־אין", "Hin Yerevantsi Hotel · לילה 1 מתוך 3"],
      ["Republic Square", "להתחיל באור האחרון ולהתרשם מאבן הטוף הוורודה"],
      ["Northern Avenue", "טיילת נעימה שמחברת בין הכיכר לבית האופרה"],
      ["Opera & Freedom Square", "עצירה קצרה סביב בית האופרה ואגם הברבורים"],
      ["Cascade", "להגיע לקראת שקיעה; אפשר לעלות רק חלק מהמדרגות"],
      ["Saryan Street", "לסיים בארוחת ערב או כוס יין באזור התוסס"]
    ], map: "Yerevan Armenia"
  },
  {
    day: 2, weekday: "רביעי", date: "7.10", title: "ירוואן של שווקים וספרים",
    subtitle: "יום עירוני בין אמנות, כתבי יד, שוק מקומי וחנויות ספרים.", city: "ירוואן",
    drive: "הליכה ומוניות בעיר", duration: "יום מלא", directions: "https://www.google.com/maps/dir/?api=1&origin=Hin+Yerevantsi+Hotel&destination=National+Gallery+of+Armenia&waypoints=Matenadaran&travelmode=walking", stops: [
      ["GUM Market", "שוק אוכל מקומי · במסלול רשום 09:00–18:00"],
      ["Matenadaran", "10:00–17:50 · פתוח ג׳–שבת, לפי האתר הרשמי"],
      ["הגלריה הלאומית", "11:00–18:00 · הקופה נסגרת 45 דקות לפני"],
      ["Bookinist", "חנות ספרים · יש שני סניפים ושעות שונות"]
    ], map: "GUM Market Yerevan"
  },
  {
    day: 3, weekday: "חמישי", date: "8.10", title: "מקדשים, בזלת ואמונה",
    subtitle: "טיול כוכב מירוואן אל האתרים שממזרח וממערב לעיר.", city: "ירוואן",
    drive: "כ־3–3.5 שעות נהיגה", duration: "כ־9 שעות עם עצירות", directions: "https://www.google.com/maps/dir/?api=1&origin=Yerevan&destination=Yerevan&waypoints=Garni+Temple%7CSymphony+of+Stones%7CGeghard+Monastery%7CCharents+Arch%7CEtchmiadzin+Cathedral&travelmode=driving", stops: [
      ["Garni Temple", "10:00–21:30 לפי אתר המוזיאון · כרטיס מבוגר 1,500 AMD"],
      ["Symphony of Stones", "עמודי הבזלת בקניון גארני"],
      ["Geghard", "מנזר המערות החצוב בסלע"],
      ["Charents Arch", "תצפית לכיוון אררט, בהתאם לראוּת"],
      ["Etchmiadzin", "המרכז הרוחני של הכנסייה הארמנית"],
      ["חזרה לירוואן", "לילה אחרון ב-Hin Yerevantsi Hotel"]
    ], map: "Garni Temple Armenia"
  },
  {
    day: 4, weekday: "שישי", date: "9.10", title: "אגם סוואן והיערות של דיליג׳אן",
    subtitle: "יוצאים מירוואן צפונה, דרך האגם הכחול אל העיירה הירוקה.", city: "דיליג׳אן",
    drive: "כ־3.5–4 שעות נהיגה", duration: "כ־9 שעות עם עצירות", directions: "https://www.google.com/maps/dir/?api=1&origin=Yerevan&destination=Dilijan&waypoints=Sevanavank%7COld+Dilijan%7CHaghartsin+Monastery%7CGoshavank+Monastery&travelmode=driving", stops: [
      ["Lake Sevan", "עצירה על שפת אחד האגמים הגבוהים בעולם"],
      ["Sevanavank", "המנזר שעל חצי האי ותצפית לאגם"],
      ["Old Dilijan", "רחוב היסטורי, בתי עץ וסדנאות"],
      ["Haghartsin", "מנזר בתוך היער"],
      ["Goshavank", "מתחם מנזר וכפר הררי"],
      ["צ׳ק־אין בדיליג׳אן", "Amrots Dsegheni · Boutique Castle Stay"]
    ], map: "Sevanavank Armenia"
  },
  {
    day: 5, weekday: "שבת", date: "10.10", title: "חוצים את מעבר סלים",
    subtitle: "יום דרך ארוך ורב־נוף מדיליג׳אן אל עמק יגגיס.", city: "יגגנאדזור",
    drive: "כ־5 שעות נהיגה", duration: "כ־10 שעות עם עצירות", directions: "https://www.google.com/maps/dir/?api=1&origin=Dilijan&destination=Yeghegnadzor&waypoints=Hayravank%7CNoratus+Cemetery%7COrbelian+Caravanserai%7CYeghegis&travelmode=driving", stops: [
      ["Hayravank", "מנזר אבן על שפת אגם סוואן"],
      ["Noratus Cemetery", "שדה חצ׳קרים היסטורי"],
      ["Orbelian Caravanserai", "תחנת דרכים עתיקה על דרך המשי"],
      ["Selim Pass", "מעבר הרים · לבדוק מזג אוויר ותנאי דרך"],
      ["Yeghegis & Zorats Church", "עמק היסטורי וכנסייה ייחודית"],
      ["צ׳ק־אין", "Cherry Garden Boutique Hotel"]
    ], map: "Orbelian Caravanserai Armenia"
  },
  {
    day: 6, weekday: "ראשון", date: "11.10", title: "אל טאטב מעל העננים",
    subtitle: "מפל, רכבל, תצפיות ומנזר בקצה הדרום.", city: "גוריס",
    drive: "כ־4 שעות נהיגה", duration: "כ־9 שעות עם עצירות", directions: "https://www.google.com/maps/dir/?api=1&origin=Yeghegnadzor&destination=Goris&waypoints=Shaki+Waterfall%7CWings+of+Tatev%7CTatev+Monastery&travelmode=driving", stops: [
      ["Shaki Waterfall", "מפל שצורת הזרימה בו עשויה להשתנות"],
      ["Wings of Tatev", "באוקטובר נהוג לפעול 10:00–18:00; כרגע הרכישה המקוונת באתר הרשמי אינה זמינה ויש להתקשר"],
      ["Halidzor Viewpoint", "תצפית אל קניון וורוטאן"],
      ["Tatev Monastery", "אחד המנזרים המרשימים בארמניה"],
      ["צ׳ק־אין בגוריס", "View point by HarMar hotels"]
    ], map: "Tatev Monastery Armenia"
  },
  {
    day: 7, weekday: "שני", date: "12.10", title: "כפרי מערות וארץ היין",
    subtitle: "חוזרים לירוואן דרך חנדזורסק, נוראוונק ועמק ארני.", city: "ירוואן",
    drive: "כ־6 שעות נהיגה", duration: "כ־11 שעות עם עצירות", directions: "https://www.google.com/maps/dir/?api=1&origin=Goris&destination=Yerevan&waypoints=Khndzoresk+Swinging+Bridge%7CNoravank+Monastery%7CAreni%7CKhor+Virap&travelmode=driving", stops: [
      ["Old Khndzoresk", "כפר המערות והגשר התלוי"],
      ["Noravank Canyon", "דרך בין מצוקי אבן אדומים"],
      ["Areni", "כפר היין · אפשר לתאם טעימה ביקב"],
      ["Khor Virap", "תצפית איקונית אל הר אררט"],
      ["צ׳ק־אין בירוואן", "Azoyan Guest House · הלילה האחרון"]
    ], map: "Khor Virap Armenia"
  },
  {
    day: 8, weekday: "שלישי", date: "13.10", title: "חוזרים הביתה",
    subtitle: "יציאה מוקדמת לשדה, קונקשן בלרנקה ונחיתה אחר הצהריים.", city: "תל אביב",
    drive: "כ־20 דקות לשדה", duration: "יום טיסות", directions: "https://www.google.com/maps/dir/?api=1&origin=Azoyan+Guest+House&destination=Zvartnots+International+Airport&travelmode=driving", stops: [
      ["יציאה לשדה התעופה", "יש לקבוע שעת איסוף לאחר אימות הכרטיס"],
      ["ירוואן → לרנקה", "שעת יציאה משוערת 08:10 · דורש אימות"],
      ["המתנה בלרנקה", "זמן טוב לארוחה לפני הטיסה האחרונה"],
      ["לרנקה → תל אביב", "15:20–16:25"]
    ], map: "Zvartnots International Airport"
  }
];

const hotels = [
  { name: "Hin Yerevantsi Hotel", city: "ירוואן", dates: "6–9 באוקטובר", nights: "3 לילות", price: 1539 },
  { name: "Amrots Dsegheni · Boutique Castle Stay", city: "דיליג׳אן", dates: "9–10 באוקטובר", nights: "לילה אחד", price: 295 },
  { name: "Cherry Garden Boutique Hotel", city: "יגגנאדזור", dates: "10–11 באוקטובר", nights: "לילה אחד", price: 210 },
  { name: "View point by HarMar hotels", city: "גוריס", dates: "11–12 באוקטובר", nights: "לילה אחד", price: 166 },
  { name: "Azoyan Guest House", city: "ירוואן", dates: "12–13 באוקטובר", nights: "לילה אחד", price: 289 }
];

const checklist = [
  ["לאמת את טיסת החזור", "שעת היציאה מירוואן אינה ברורה בקובץ"],
  ["להזמין רכב או נהג", "לוודא התאמה לדרך ההררית ולכיסוי הביטוחי"],
  ["לרכוש ביטוח נסיעות", "כולל ביטול, מטען ופעילות מתוכננת"],
  ["להזמין Wings of Tatev", "לבדוק ימי פעילות ושעות באוקטובר"],
  ["לבדוק תנאי ביטול מלונות", "ההזמנות מסומנות עם ביטול חינם"],
  ["להוריד מפות לשימוש לא מקוון", "ירוואן, סוואן, ויוטס דזור וסיוניק"],
  ["לבדוק מזג אוויר 5 ימים לפני", "במיוחד מעבר סלים, טאטב וגוריס"]
];

const tabs = document.querySelector(".day-tabs");
const panel = document.querySelector(".day-panel");

function renderDay(index) {
  const item = days[index];
  document.querySelectorAll(".day-tab").forEach((tab, i) => tab.setAttribute("aria-selected", i === index));
  panel.innerHTML = `
    <div class="day-visual" data-day="${item.day}">
      <div class="day-date">${item.weekday} · ${item.date} · לינה: ${item.city}</div>
      <div><h3>${item.title}</h3><p>${item.subtitle}</p></div>
    </div>
    <div class="day-detail">
      <h4>תחנות היום</h4>
      <div class="day-meta"><span>${item.drive}</span><span>${item.duration}</span></div>
      <ol class="stop-list">
        ${item.stops.map(([name, note]) => {
          const slug = attractionSlugs[name];
          const label = slug ? `<a class="site-link" href="attractions.html#${slug}">${name}<span aria-hidden="true">↗</span></a>` : name;
          return `<li><strong>${label}</strong><span>${note}</span></li>`;
        }).join("")}
      </ol>
      <div class="map-actions">
        <a class="map-button" target="_blank" rel="noreferrer" href="${item.directions}">מסלול מלא במפות</a>
        <a class="map-button secondary" target="_blank" rel="noreferrer" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.map)}">התחנה המרכזית</a>
      </div>
    </div>`;
}

days.forEach((item, index) => {
  const button = document.createElement("button");
  button.className = "day-tab";
  button.type = "button";
  button.role = "tab";
  button.setAttribute("aria-selected", index === 0);
  button.innerHTML = `<span>${item.weekday}</span><strong>${item.date}</strong>`;
  button.addEventListener("click", () => renderDay(index));
  tabs.appendChild(button);
});
renderDay(0);

document.querySelector("#hotel-list").innerHTML = hotels.map((hotel, index) => `
  <article class="hotel-card">
    <div class="hotel-index">${String(index + 1).padStart(2, "0")}</div>
    <div class="hotel-name"><strong>${hotel.name}</strong><span>${hotel.city} · מאושר · ביטול חינם</span></div>
    <div class="hotel-dates"><strong>${hotel.dates}</strong><span>${hotel.nights}</span></div>
    <strong class="hotel-price">₪${hotel.price.toLocaleString("he-IL")}</strong>
    <a class="hotel-map" target="_blank" rel="noreferrer" aria-label="פתיחת ${hotel.name} במפות" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(hotel.name + " Armenia")}">↗</a>
  </article>`).join("");

const checklistRoot = document.querySelector("#checklist-items");
const saved = JSON.parse(localStorage.getItem("armenia-checklist") || "[]");

function updateProgress() {
  const checks = [...checklistRoot.querySelectorAll("input")];
  const completed = checks.filter(input => input.checked).length;
  document.querySelector("#progress-label").textContent = `${completed} מתוך ${checks.length} הושלמו`;
  document.querySelector("#progress-bar").style.width = `${(completed / checks.length) * 100}%`;
  localStorage.setItem("armenia-checklist", JSON.stringify(checks.map(input => input.checked)));
}

checklist.forEach(([title, note], index) => {
  const label = document.createElement("label");
  label.className = "check-item";
  label.innerHTML = `<input type="checkbox" ${saved[index] ? "checked" : ""}><span class="fake-check"></span><span class="check-text"><strong>${title}</strong><small>${note}</small></span>`;
  label.querySelector("input").addEventListener("change", updateProgress);
  checklistRoot.appendChild(label);
});
updateProgress();

document.querySelector("#reset-checklist").addEventListener("click", () => {
  checklistRoot.querySelectorAll("input").forEach(input => { input.checked = false; });
  updateProgress();
});

const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector("#main-nav");
menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", isOpen);
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}));

const weatherStops = [
  { city: "ירוואן", date: "2026-10-06", label: "6–8.10", lat: 40.1872, lon: 44.5152 },
  { city: "דיליג׳אן", date: "2026-10-09", label: "9.10", lat: 40.7408, lon: 44.8636 },
  { city: "יגגנאדזור", date: "2026-10-10", label: "10.10", lat: 39.7639, lon: 45.3324 },
  { city: "גוריס", date: "2026-10-11", label: "11.10", lat: 39.5078, lon: 46.3387 }
];

const weatherLabels = {
  0: ["☀️", "בהיר"], 1: ["🌤️", "בהיר לרוב"], 2: ["⛅", "מעונן חלקית"], 3: ["☁️", "מעונן"],
  45: ["🌫️", "ערפל"], 48: ["🌫️", "ערפל קפוא"], 51: ["🌦️", "טפטוף"], 53: ["🌦️", "טפטוף"],
  55: ["🌧️", "טפטוף חזק"], 61: ["🌧️", "גשם קל"], 63: ["🌧️", "גשם"], 65: ["🌧️", "גשם חזק"],
  71: ["🌨️", "שלג קל"], 73: ["🌨️", "שלג"], 75: ["❄️", "שלג כבד"], 80: ["🌦️", "ממטרים"],
  81: ["🌧️", "ממטרים"], 82: ["⛈️", "ממטרים חזקים"], 95: ["⛈️", "סופות רעמים"]
};

async function loadWeather() {
  const grid = document.querySelector("#weather-grid");
  const status = document.querySelector("#weather-status");
  const cards = await Promise.all(weatherStops.map(async stop => {
    try {
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${stop.lat}&longitude=${stop.lon}&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=auto&forecast_days=16`;
      const response = await fetch(url);
      if (!response.ok) throw new Error("weather unavailable");
      const data = await response.json();
      const index = data.daily.time.indexOf(stop.date);
      if (index === -1) return null;
      return { ...stop, code: data.daily.weather_code[index], max: Math.round(data.daily.temperature_2m_max[index]), min: Math.round(data.daily.temperature_2m_min[index]), rain: data.daily.precipitation_probability_max[index] };
    } catch { return null; }
  }));

  grid.innerHTML = cards.map((forecast, index) => {
    const stop = weatherStops[index];
    if (!forecast) return `<article class="weather-card pending"><div class="weather-place"><strong>${stop.city}</strong><span>${stop.label}</span></div><div class="weather-main">התחזית טרם זמינה לטווח הזה</div></article>`;
    const [icon, description] = weatherLabels[forecast.code] || ["🌡️", "תחזית זמינה"];
    return `<article class="weather-card"><div class="weather-place"><strong>${forecast.city}</strong><span>${forecast.label}</span></div><div class="weather-main"><span class="weather-icon">${icon}</span><div><div class="weather-temp">${forecast.min}°–${forecast.max}°</div><span class="weather-desc">${description} · ${forecast.rain}% לגשם</span></div></div></article>`;
  }).join("");
  status.textContent = cards.some(Boolean) ? "תחזית עדכנית להיום" : "התחזית תופיע כשהתאריכים ייכנסו לטווח";
}

loadWeather();
