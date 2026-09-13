async function run() {
  try {
    const res = await fetch("https://www.pexels.com/video/students-listening-to-their-teacher-8471835/", {
      headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" }
    });
    const html = await res.text();
    const urls = html.match(/https:\/\/videos\.pexels\.com\/video-files\/[^"'\s]+mp4/g);
    console.log("Found URLs:", urls);
  } catch (err) {
    console.error(err);
  }
}
run();
