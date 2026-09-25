const attractions = [
  { id:"republic-square", region:"ירוואן", name:"כיכר הרפובליקה", type:"עיר ואדריכלות", text:"הלב הטקסי של ירוואן, מוקף מבני ממשל ומוזיאונים מאבן טוף בגוונים ורודים. בערב התאורה מדגישה את הקשתות והעמודים והכיכר מתמלאת מטיילים מקומיים.", time:"30–45 דקות", tip:"התחילו כאן באור האחרון. מופע המזרקות עונתי ולכן כדאי לבדוק במקום.", map:"Republic Square Yerevan", source:"https://www.visityerevan.am/en/" },
  { id:"northern-avenue", region:"ירוואן", name:"השדרה הצפונית", type:"הליכה עירונית", text:"מדרחוב מודרני שמחבר את אזור כיכר הרפובליקה לבית האופרה. זו דרך קלה להרגיש את הקצב העירוני, עם בתי קפה, חנויות ומוזיקה ברחוב.", time:"20–30 דקות", tip:"לא צריך יעד מיוחד—פשוט ללכת צפונה ולעצור כשמתחשק.", map:"Northern Avenue Yerevan", source:"https://www.visityerevan.am/en/" },
  { id:"opera", region:"ירוואן", name:"בית האופרה וכיכר החירות", type:"תרבות ועיר", text:"בית האופרה העגול הוא אחד מסמליה של ירוואן. סביבו נמצאים כיכר החירות, גנים ואגם הברבורים, והאזור נעים במיוחד בשעות הערב.", time:"20–30 דקות", tip:"אם נשאר כוח, בדקו אם מתקיים מופע בזמן הביקור.", map:"Armenian National Opera and Ballet Theatre", source:"https://www.opera.am/en" },
  { id:"cascade", region:"ירוואן", name:"הקסקדה", type:"אמנות ותצפית", text:"גרם מדרגות מונומנטלי עם טרסות, מזרקות ופסלים, המחבר את מרכז העיר לרכס שמעליו. מלמעלה נפתחת תצפית רחבה על ירוואן ולעיתים גם על אררט.", time:"45–75 דקות", tip:"בערב הראשון אפשר להסתפק בטרסות התחתונות. העלייה המלאה כוללת הרבה מדרגות.", map:"Cascade Complex Yerevan", source:"https://www.visityerevan.am/en/" },
  { id:"saryan-street", region:"ירוואן", name:"רחוב סאריאן", type:"אוכל וערב", text:"אזור ערב אהוב במרכז העיר, המזוהה עם ברי יין, מסעדות קטנות ואווירה צעירה. הוא מתאים לסיום נינוח אחרי ההליכה מהקסקדה.", time:"שעה–שעתיים", tip:"להזמין מקום רק אם בוחרים מסעדה מסוימת; אחרת אפשר להגיע ולבחור לפי האווירה.", map:"Saryan Street Yerevan" },
  { id:"gum-market", region:"ירוואן", name:"שוק GUM", type:"שוק ואוכל", text:"שוק מקומי מקורה שמוכר פירות יבשים, אגוזים, תבלינים, גבינות, בשר ומוצרים יומיומיים. זה מקום טוב לטעימות ולהצצה לחיי היומיום בעיר.", time:"45–60 דקות", tip:"טעמו סուջուխ מתוק ופירות מיובשים, ושאלו מחיר לפני שקונים כמות גדולה.", map:"GUM Market Yerevan" },
  { id:"matenadaran", region:"ירוואן", name:"מטנדראן", type:"מוזיאון", text:"מכון ומוזיאון לכתבי יד עתיקים, עם אוסף שמספר את סיפור התרבות הארמנית דרך דת, רפואה, מדע, מפות ואמנות האיור.", time:"שעה וחצי", tip:"פתוח בדרך כלל ג׳–שבת 10:00–17:50. הסברים באנגלית משפרים מאוד את הביקור.", map:"Matenadaran Yerevan", source:"https://matenadaran.am/en/matenadaran/about-us/" },
  { id:"national-gallery", region:"ירוואן", name:"הגלריה הלאומית של ארמניה", type:"מוזיאון", text:"מוזיאון האמנות המרכזי במדינה, בבניין הגדול בכיכר הרפובליקה. האוסף כולל אמנות ארמנית, רוסית ואירופית מתקופות שונות.", time:"שעה וחצי–שעתיים", tip:"פתוח ג׳–שבת 11:00–18:00 וראשון עד 17:00; הקופה נסגרת לפני המוזיאון.", map:"National Gallery of Armenia", source:"https://www.gallery.am/en/visit" },
  { id:"bookinist", region:"ירוואן", name:"Bookinist", type:"ספרים וקניות", text:"רשת חנויות ספרים ותיקה ואהובה, עם ספרים בארמנית, רוסית ואנגלית, מחברות, מפות ומתנות קטנות.", time:"30–45 דקות", tip:"יש כמה סניפים בעיר; פתחו את המפה ובחרו את הקרוב למסלול של אותו יום.", map:"Bookinist Yerevan" },
  { id:"garni", region:"קוטאיק", name:"מקדש גארני", type:"עתיקות", text:"מקדש עמודים מן התקופה הקלאסית, היושב על רמה מעל קניון אזאט. המתחם כולל גם שרידי בית מרחץ ופסיפס.", time:"שעה–שעה וחצי", tip:"האור יפה בבוקר או לקראת ערב. נכון לבדיקה האחרונה: 10:00–21:30 וכרטיס מבוגר 1,500 AMD.", map:"Garni Temple Armenia", source:"https://garni.mus.am/en/" },
  { id:"symphony-of-stones", region:"קוטאיק", name:"סימפוניית האבנים", type:"טבע וגאולוגיה", text:"קיר עצום של עמודי בזלת משושים בקניון גארני, שנוצר מהתקררות זרמי לבה. הצורות הסדורות נראות כמעט מעשה ידי אדם.", time:"45–75 דקות", tip:"השביל בקניון עשוי להיות חלק או בוצי. נעליים סגורות עדיפות.", map:"Symphony of Stones Garni" },
  { id:"geghard", region:"קוטאיק", name:"מנזר גגהרד", type:"מורשת עולמית", text:"מתחם מנזר מימי הביניים שחלק מחדריו וכנסיותיו נחצבו ישירות בסלע. האקוסטיקה, הצללים והעיטורים יוצרים חוויה שונה מכל מנזר אחר במסלול.", time:"שעה–שעה וחצי", tip:"חפשו את הכנסיות החצובות ואת החצ׳קרים. זהו אתר דתי פעיל—לבוש והתנהגות מכבדים.", map:"Geghard Monastery", source:"https://whc.unesco.org/en/list/960" },
  { id:"charents-arch", region:"קוטאיק", name:"קשת צ׳רנץ", type:"תצפית", text:"אנדרטה קטנה בנוף פתוח, הממסגרת בימים בהירים את הר אררט כמו תמונה. היא מוקדשת למשורר הארמני יגישה צ׳רנץ.", time:"15–25 דקות", tip:"הראוּת היא כל הסיפור. אם אררט מכוסה, שמרו את העצירה קצרה.", map:"Charents Arch Armenia" },
  { id:"etchmiadzin", region:"ארמאוויר", name:"אצ׳מיאדזין", type:"דת ומורשת", text:"המרכז הרוחני של הכנסייה האפוסטולית הארמנית ומקום מושבו של הקתוליקוס. הקתדרלה נחשבת מן הקדומות בעולם הנוצרי.", time:"שעה וחצי–שעתיים", tip:"בדקו מראש אילו חלקים פתוחים בעקבות עבודות שימור וטקסים דתיים.", map:"Mother See of Holy Etchmiadzin", source:"https://whc.unesco.org/en/list/1011" },
  { id:"lake-sevan", region:"אגם סוואן", name:"אגם סוואן", type:"טבע", text:"אגם אלפיני עצום בגובה של כ־1,900 מטר, המכונה לעיתים הים של ארמניה. צבע המים משתנה במהירות עם האור ומזג האוויר.", time:"עצירות של שעה–שעתיים", tip:"גם ביום נעים בירוואן עלול להיות כאן קר ורוחי. שמרו שכבה חמה בהישג יד.", map:"Lake Sevan Armenia" },
  { id:"sevanavank", region:"אגם סוואן", name:"סוואנאוואנק", type:"מנזר ותצפית", text:"שתי כנסיות כהות על גבעה בחצי האי סוואן, עם תצפית פתוחה כמעט לכל הכיוונים. בעבר היה המקום אי מבודד.", time:"45–60 דקות", tip:"העלייה קצרה אך כוללת מדרגות. הרוח בפסגה יכולה להיות חזקה.", map:"Sevanavank Monastery", source:"https://armenia.travel/places-to-go/top-churches-monasteries/" },
  { id:"old-dilijan", region:"טאבוש", name:"דיליג׳אן העתיקה", type:"עיירה היסטורית", text:"קטע משוחזר של רחוב שרמביאן עם בתי עץ, מרפסות מגולפות, גלריות וסדנאות. העצירה קצרה ומכניסה לאווירת עיירת הנופש.", time:"45–60 דקות", tip:"מתאים לקפה או הפסקה, אך אל תבנו עליו כיום טיול שלם.", map:"Sharambeyan Street Dilijan" },
  { id:"haghartsin", region:"טאבוש", name:"מנזר האגארצין", type:"מנזר ויער", text:"מתחם מנזר בין יערות הפארק הלאומי דיליג׳אן. המבנים מן המאות ה־10–13 משתלבים בנוף הירוק והדרך אליו יפה במיוחד בסתיו.", time:"שעה", tip:"הכביש הסופי מפותל. באוקטובר שווה להשאיר זמן לעצירות צילום ביער.", map:"Haghartsin Monastery", source:"https://armenia.travel/places-to-go/top-churches-monasteries/" },
  { id:"goshavank", region:"טאבוש", name:"מנזר גושאוונק", type:"מנזר וכפר", text:"מנזר בלב הכפר גוש, שנקשר למלומד ולמחוקק מחיטאר גוש. במקום חצ׳קר מפורט במיוחד ומבנים צפופים סביב חצר.", time:"45–60 דקות", tip:"שלבו הליכה קצרה בכפר ואל תסתפקו בצילום החזית בלבד.", map:"Goshavank Monastery" },
  { id:"hayravank", region:"גגהרקוניק", name:"מנזר היירוואנק", type:"מנזר ואגם", text:"מנזר קטן ושקט על מצוק נמוך מעל אגם סוואן. הוא פחות עמוס מסוואנאוואנק ומציע זווית אחרת אל האגם וההרים.", time:"30–45 דקות", tip:"עצירה יעילה בתחילת יום ארוך; שמרו זמן לדרך דרומה.", map:"Hayravank Monastery" },
  { id:"noratus", region:"גגהרקוניק", name:"בית הקברות נוראטוס", type:"היסטוריה ואמנות אבן", text:"הריכוז הגדול והמפורסם ביותר של חצ׳קרים—אבני צלב ארמניות מגולפות. כל אבן שונה ומספרת משהו על האדם או התקופה.", time:"45–60 דקות", tip:"הקדישו זמן לפרטים הקטנים ולא רק לתמונה רחבה של השדה.", map:"Noratus Cemetery Armenia" },
  { id:"orbelian-caravanserai", region:"ואיוטס דזור", name:"קרוואנסראי אורבליאן", type:"דרך המשי", text:"תחנת דרכים מן המאה ה־14 ששירתה שיירות על דרך המשי. המבנה המאורך והאפל מאפשר לדמיין את הסוסים, הסוחרים והמסע במעבר ההרים.", time:"30–45 דקות", tip:"בתוך המבנה חשוך וקר; פנס הטלפון ושכבה חמה שימושיים.", map:"Orbelian Caravanserai" },
  { id:"selim-pass", region:"ואיוטס דזור", name:"מעבר סלים", type:"דרך הררית", text:"כביש הררי גבוה המחבר את אזור סוואן לעמק יגגנאדזור. הנוף פתוח, דרמטי ומשתנה במהירות עם הגובה.", time:"עצירות תצפית קצרות", tip:"לבדוק תחזית ותנאי כביש באותו בוקר. שלג מוקדם, ערפל או רוח יכולים לשנות את התוכנית.", map:"Vardenyats Pass Armenia" },
  { id:"yeghegis-zorats", region:"ואיוטס דזור", name:"יגגיס וכנסיית זוראטס", type:"כפר והיסטוריה", text:"עמק שקט עם שרידים מימי הביניים, כנסיות ובתי אבן. זוראטס בנויה בצורה יוצאת דופן, עם במה פתוחה שיוחסה לברכת חיילים רכובים.", time:"שעה–שעה וחצי", tip:"הגישה והסימון פחות ברורים מאתרי התיירות הגדולים; ניווט לא מקוון יעזור.", map:"Zorats Church Yeghegis" },
  { id:"shaki-waterfall", region:"סיוניק", name:"מפל שאקי", type:"טבע", text:"מפל רחב בגובה כ־18 מטר, הנופל מעל קיר בזלת אל ערוץ ירוק. עוצמת המים עשויה להשתנות בהתאם להפעלת המערכת ההידרואלקטרית.", time:"45–60 דקות", tip:"בדקו מקומית אם המים זורמים ובאילו שעות לפני הסטייה מהכביש.", map:"Shaki Waterfall Armenia" },
  { id:"wings-of-tatev", region:"סיוניק", name:"Wings of Tatev", type:"רכבל", text:"רכבל אווירי ארוך החוצה את קניון וורוטאן ומוביל מהלידזור אל מנזר טאטב. הנסיעה עצמה היא חלק מרכזי בחוויה.", time:"15 דקות לכל כיוון + המתנה", tip:"באוקטובר נהוג לפעול 10:00–18:00. כרגע האתר הרשמי מפנה להזמנה טלפונית בשל בעיה ברכישה המקוונת.", map:"Wings of Tatev Halidzor Station", source:"https://www.tatever.am/en/booking" },
  { id:"halidzor-viewpoint", region:"סיוניק", name:"תצפית הלידזור", type:"תצפית וקניון", text:"נקודות התצפית סביב תחנת הרכבל פותחות מבט לעומק קניון וורוטאן, אל הכביש המתפתל ואל רכס טאטב.", time:"20–30 דקות", tip:"אל תעמדו קרוב לשוליים לא מוסדרים. רוח חזקה נפוצה באזור.", map:"Halidzor Observation Deck Armenia" },
  { id:"tatev", region:"סיוניק", name:"מנזר טאטב", type:"מנזר ונוף", text:"מתחם מנזר גדול על שפת רמה מעל קניון וורוטאן. במשך מאות שנים היה מרכז דתי, לימודי ופוליטי חשוב בדרום ארמניה.", time:"שעה וחצי–שעתיים", tip:"חפשו את עמוד גוואזאן המתנדנד ואת התצפיות משולי המתחם.", map:"Tatev Monastery Armenia", source:"https://armenia.travel/destination/tatev-monastery/" },
  { id:"khndzoresk", region:"סיוניק", name:"חנדזורסק העתיקה", type:"כפר מערות", text:"עמק עם מאות חללי מגורים חצובים ומערות ששימשו קהילה עד המאה ה־20. גשר תלוי ארוך מחבר בין צדי הערוץ.", time:"שעה וחצי–שעתיים", tip:"יש ירידה ועלייה משמעותיות. נעליים טובות ומים חשובים, במיוחד אחרי יום קודם ארוך.", map:"Old Khndzoresk Swinging Bridge" },
  { id:"noravank", region:"ואיוטס דזור", name:"קניון ומנזר נוראוונק", type:"מנזר וקניון", text:"מנזר אבן בהירה בתוך קניון של מצוקים אדומים. כנסיית בורטלשן מפורסמת במדרגות החיצוניות הצרות העולות לקומה השנייה.", time:"שעה–שעה וחצי", tip:"העלייה במדרגות החיצוניות תלולה וללא מעקה מלא—אפשר ליהנות מהמבנה גם מלמטה.", map:"Noravank Monastery", source:"https://armenia.travel/places-to-go/top-churches-monasteries/" },
  { id:"areni", region:"ואיוטס דזור", name:"ארני וארץ היין", type:"יין וארכאולוגיה", text:"כפר במרכז אזור היין הארמני, סמוך למערת ארני שבה נמצאו עדויות עתיקות במיוחד לייצור יין. לאורך הדרך פועלים יקבים וחדרי טעימה.", time:"שעה–שעתיים", tip:"לתאם טעימה מראש, לבחור נהג שאינו שותה ולוודא מה כלול במחיר.", map:"Areni Wine Armenia" },
  { id:"khor-virap", region:"אררט", name:"חור ויראפ", type:"מנזר ותצפית", text:"מנזר המזוהה עם סיפורו של גרגורי המאיר, מול אחת התצפיות האיקוניות ביותר להר אררט. אפשר לרדת בסולם אל הבור ההיסטורי.", time:"שעה–שעה וחצי", tip:"הראוּת לאררט טובה לעיתים קרובות יותר בבוקר, אך שווה לעצור גם אחר הצהריים בדרך לירוואן.", map:"Khor Virap Monastery", source:"https://armenia.travel/hy/destination/khor-virap-monastery/" }
];

const regionOrder = ["ירוואן", "קוטאיק", "ארמאוויר", "אגם סוואן", "טאבוש", "גגהרקוניק", "ואיוטס דזור", "סיוניק", "אררט"];
const root = document.querySelector("#attractions-list");
const nav = document.querySelector("#region-nav");
const search = document.querySelector("#site-search");
const count = document.querySelector("#result-count");
let activeRegion = "הכול";

function mapUrl(query) { return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`; }

function render() {
  const query = search.value.trim().toLowerCase();
  const filtered = attractions.filter(item => {
    const regionMatch = activeRegion === "הכול" || item.region === activeRegion;
    const textMatch = !query || `${item.name} ${item.region} ${item.type} ${item.text}`.toLowerCase().includes(query);
    return regionMatch && textMatch;
  });
  count.textContent = `${filtered.length} אתרים`;
  if (!filtered.length) { root.innerHTML = `<div class="empty-state">לא נמצאו אתרים מתאימים. נסו חיפוש אחר.</div>`; return; }
  root.innerHTML = regionOrder.map(region => {
    const items = filtered.filter(item => item.region === region);
    if (!items.length) return "";
    return `<section class="region-group"><div class="region-title"><h2>${region}</h2><span>${items.length} תחנות</span></div><div class="attraction-grid">${items.map(item => `
      <article class="attraction-card" id="${item.id}">
        <header><h3>${item.name}</h3><span class="site-type">${item.type}</span></header>
        <p>${item.text}</p>
        <div class="fact-row"><div class="fact"><small>כמה זמן</small><strong>${item.time}</strong></div><div class="fact"><small>טיפ למסלול</small><strong>${item.tip}</strong></div></div>
        <div class="card-actions"><a class="card-action" target="_blank" rel="noreferrer" href="${mapUrl(item.map)}">פתיחה במפות</a>${item.source ? `<a class="card-action secondary" target="_blank" rel="noreferrer" href="${item.source}">מקור רשמי</a>` : ""}</div>
      </article>`).join("")}</div></section>`;
  }).join("");
}

["הכול", ...regionOrder].forEach(region => {
  const button = document.createElement("button");
  button.className = `region-filter${region === "הכול" ? " active" : ""}`;
  button.type = "button";
  button.textContent = region;
  button.addEventListener("click", () => {
    activeRegion = region;
    document.querySelectorAll(".region-filter").forEach(item => item.classList.toggle("active", item === button));
    render();
  });
  nav.appendChild(button);
});

search.addEventListener("input", render);
render();

if (location.hash) {
  requestAnimationFrame(() => document.querySelector(location.hash)?.scrollIntoView({ block: "start" }));
}
