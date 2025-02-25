import { test, expect } from "vitest";
import sharp from "sharp";
import pixelmatch from "pixelmatch";
import { join } from "path";
import { promises, existsSync } from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { hp } from "../build/dyn_images.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const directory = __dirname;

const compare = async (snapShotPath, image) => {
  const existing = sharp(await promises.readFile(snapShotPath));
  const decoded = sharp(image.buffer);

  // console.log(await existing.metadata());
  // console.log(await decoded.metadata());

  return pixelmatch(
    await existing.raw().toBuffer(),
    await decoded.raw().toBuffer(),
    null,
    (await existing.metadata()).width,
    (await existing.metadata()).height
  );
};

test("hp 50", async () => {
  const snapShotPath = join(directory, "__snapshots__", "hp 50.png");
  const image = hp(50, 0);

  if (!existsSync(snapShotPath)) {
    await promises.writeFile(snapShotPath, image);
  } else {
    expect(await compare(snapShotPath, image)).toBe(0);
  }
});

test("hp 10", async () => {
  const snapShotPath = join(directory, "__snapshots__", "hp 10.png");
  const image = hp(10, 0);

  if (!existsSync(snapShotPath)) {
    await promises.writeFile(snapShotPath, image);
  } else {
    expect(await compare(snapShotPath, image)).toBe(0);
  }
});

test("hp 90", async () => {
  const snapShotPath = join(directory, "__snapshots__", "hp 90.png");
  const image = hp(90, 0);

  if (!existsSync(snapShotPath)) {
    await promises.writeFile(snapShotPath, image);
  } else {
    expect(await compare(snapShotPath, image)).toBe(0);
  }
});

test("hp 0", async () => {
  const snapShotPath = join(directory, "__snapshots__", "hp 0.png");
  const image = hp(0, 0);

  if (!existsSync(snapShotPath)) {
    await promises.writeFile(snapShotPath, image);
  } else {
    expect(await compare(snapShotPath, image)).toBe(0);
  }
});

test("hp 90 damage 10", async () => {
  const snapShotPath = join(directory, "__snapshots__", "hp 90 damage 10.png");
  const image = hp(90, -10);

  if (!existsSync(snapShotPath)) {
    await promises.writeFile(snapShotPath, image);
  } else {
    expect(await compare(snapShotPath, image)).toBe(0);
  }
});

test("hp 83 damage 17", async () => {
  const snapShotPath = join(directory, "__snapshots__", "hp 83 damage 17.png");
  const image = hp(83, -17);

  if (!existsSync(snapShotPath)) {
    await promises.writeFile(snapShotPath, image);
  } else {
    expect(await compare(snapShotPath, image)).toBe(0);
  }
});

test("hp 50 damage 10", async () => {
  const snapShotPath = join(directory, "__snapshots__", "hp 50 damage 10.png");
  const image = hp(50, -10);

  if (!existsSync(snapShotPath)) {
    await promises.writeFile(snapShotPath, image);
  } else {
    expect(await compare(snapShotPath, image)).toBe(0);
  }
});

test("hp 10 heal 10", async () => {
  const snapShotPath = join(directory, "__snapshots__", "hp 10 heal 10.png");
  const image = hp(10, 10);

  if (!existsSync(snapShotPath)) {
    await promises.writeFile(snapShotPath, image);
  } else {
    expect(await compare(snapShotPath, image)).toBe(0);
  }
});

test("hp 50 heal 10", async () => {
  const snapShotPath = join(directory, "__snapshots__", "hp 50 heal 10.png");
  const image = hp(50, 10);

  if (!existsSync(snapShotPath)) {
    await promises.writeFile(snapShotPath, image);
  } else {
    expect(await compare(snapShotPath, image)).toBe(0);
  }
});

test("hp 50 heal 1", async () => {
  const snapShotPath = join(directory, "__snapshots__", "hp 50 heal 1.png");
  const image = hp(50, 1);

  if (!existsSync(snapShotPath)) {
    await promises.writeFile(snapShotPath, image);
  } else {
    expect(await compare(snapShotPath, image)).toBe(0);
  }
});
