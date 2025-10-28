import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/generate", async (req, res) => {
  const { title, style } = req.body;
  
  // Step 1: Text to script (AI)
  const script = `Here’s a short YouTube-safe ${style} video script about: ${title}. Keep it informative and clean.`;

  // Step 2: Voice generation (demo link)
  const voiceUrl = "https://www2.cs.uic.edu/~i101/SoundFiles/gettysburg10.wav";

  // Step 3: Video generation placeholder
  const videoUrl = "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4";

  res.json({ videoUrl, voiceUrl, script });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ JK AI STUDIO running on port ${PORT}`));
