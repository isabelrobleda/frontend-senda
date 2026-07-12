import sharp from "sharp";
import { readdirSync, statSync, renameSync } from "fs";
import { join, extname } from "path";

const MAX_W = 1920;
const MIN_BYTES = 300 * 1024;
let saved = 0, count = 0;

async function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) { await walk(p); continue; }
    const ext = extname(name).toLowerCase();
    if (![".jpg", ".jpeg", ".png"].includes(ext)) continue;
    if (st.size < MIN_BYTES) continue;
    try {
      const img = sharp(p);
      const meta = await img.metadata();
      let pipe = sharp(p);
      if (meta.width > MAX_W) pipe = pipe.resize({ width: MAX_W });
      const tmp = p + ".tmp";
      if (ext === ".png") {
        await pipe.png({ quality: 82, palette: true, compressionLevel: 9 }).toFile(tmp);
      } else {
        await pipe.jpeg({ quality: 74, mozjpeg: true }).toFile(tmp);
      }
      const newSize = statSync(tmp).size;
      if (newSize < st.size * 0.9) {
        renameSync(tmp, p);
        saved += st.size - newSize;
        count++;
        console.log(`${p.replace(process.cwd()+"/", "")}: ${(st.size/1e6).toFixed(1)}MB -> ${(newSize/1e6).toFixed(1)}MB`);
      } else {
        renameSync(tmp, p + ".skip"); const { unlinkSync } = await import("fs"); unlinkSync(p + ".skip");
      }
    } catch (e) { console.error("skip", p, e.message); }
  }
}
await walk("src/assets");
console.log(`\nCompressed ${count} images, saved ${(saved/1e6).toFixed(1)} MB total`);
