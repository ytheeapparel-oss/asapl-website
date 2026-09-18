const INDEXNOW_KEY = "e4c9a59bdf1e48f79f82d1b068da6c49";
const HOST = "www.aspal.co.in";

const urls = [
  "https://www.aspal.co.in/",
  "https://www.aspal.co.in/about-us",
  "https://www.aspal.co.in/admissions",
  "https://www.aspal.co.in/programs",
  "https://www.aspal.co.in/happy-parenting",
  "https://www.aspal.co.in/contact-us",
  "https://www.aspal.co.in/happy-parenting/early-childhood-phonics-guide",
  "https://www.aspal.co.in/happy-parenting/concrete-mathematics-preschoolers",
  "https://www.aspal.co.in/happy-parenting/raising-confident-expressive-children",
  "https://www.aspal.co.in/happy-parenting/healthy-nutrition-brain-development",
  "https://www.aspal.co.in/happy-parenting/choosing-best-primary-school-noida"
];

async function submitIndexNow() {
  const payload = {
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
    urlList: urls
  };

  console.log(`Submitting ${urls.length} URLs to IndexNow for search engines (Bing, Yahoo, DuckDuckGo, Yandex)...`);

  try {
    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(payload)
    });

    console.log(`IndexNow Response: HTTP ${res.status} ${res.statusText}`);
    if (res.status === 200 || res.status === 202) {
      console.log("SUCCESS: Search engines have received your URLs for immediate indexing!");
    } else {
      const text = await res.text();
      console.log("Response body:", text);
    }
  } catch (err) {
    console.error("Failed to submit to IndexNow:", err);
  }
}

submitIndexNow();
