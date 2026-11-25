// Fortune Cookies for Machines — one fortune an AI agent would get.
// The program writes the fortune to /output/entry.txt (at most 200 chars, UTF-8).
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Your future is bright. Your context window is not — spend it wisely.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
