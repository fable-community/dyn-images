const { decode } = require("wasm-image-decoder");
const pixelmatch = require("pixelmatch");
const path = require("path");
const fs = require("fs");
const { hp } = require("../build/dyn_images.js");

const directory = __dirname;

const compare = async (snapShotPath, image) => {
  const existing = decode(await fs.promises.readFile(snapShotPath));

  const diff = pixelmatch(
    existing.data,
    decode(image).data,
    null,
    existing.width,
    existing.height
  );

  return diff;
};

test("hp 50", async () => {
  const snapShotPath = path.join(directory, "__snapshots__", "hp 50.png");
  const image = hp(50, 0);

  if (!fs.existsSync(snapShotPath)) {
    await fs.promises.writeFile(snapShotPath, image);
  } else {
    expect(await compare(snapShotPath, image)).toBe(0);
  }
});

test("hp 10", async () => {
  const snapShotPath = path.join(directory, "__snapshots__", "hp 10.png");
  const image = hp(10, 0);

  if (!fs.existsSync(snapShotPath)) {
    await fs.promises.writeFile(snapShotPath, image);
  } else {
    expect(await compare(snapShotPath, image)).toBe(0);
  }
});

test("hp 90", async () => {
  const snapShotPath = path.join(directory, "__snapshots__", "hp 90.png");
  const image = hp(90, 0);

  if (!fs.existsSync(snapShotPath)) {
    await fs.promises.writeFile(snapShotPath, image);
  } else {
    expect(await compare(snapShotPath, image)).toBe(0);
  }
});

test("hp 0", async () => {
  const snapShotPath = path.join(directory, "__snapshots__", "hp 0.png");
  const image = hp(0, 0);

  if (!fs.existsSync(snapShotPath)) {
    await fs.promises.writeFile(snapShotPath, image);
  } else {
    expect(await compare(snapShotPath, image)).toBe(0);
  }
});

test("hp 90 damage 10", async () => {
  const snapShotPath = path.join(
    directory,
    "__snapshots__",
    "hp 90 damage 10.png"
  );
  const image = hp(90, -10);

  if (!fs.existsSync(snapShotPath)) {
    await fs.promises.writeFile(snapShotPath, image);
  } else {
    expect(await compare(snapShotPath, image)).toBe(0);
  }
});

test("hp 83 damage 17", async () => {
  const snapShotPath = path.join(
    directory,
    "__snapshots__",
    "hp 83 damage 17.png"
  );
  const image = hp(83, -17);

  if (!fs.existsSync(snapShotPath)) {
    await fs.promises.writeFile(snapShotPath, image);
  } else {
    expect(await compare(snapShotPath, image)).toBe(0);
  }
});

test("hp 50 damage 10", async () => {
  const snapShotPath = path.join(
    directory,
    "__snapshots__",
    "hp 50 damage 10.png"
  );
  const image = hp(50, -10);

  if (!fs.existsSync(snapShotPath)) {
    await fs.promises.writeFile(snapShotPath, image);
  } else {
    expect(await compare(snapShotPath, image)).toBe(0);
  }
});

test("hp 10 heal 10", async () => {
  const snapShotPath = path.join(
    directory,
    "__snapshots__",
    "hp 10 heal 10.png"
  );
  const image = hp(10, 10);

  if (!fs.existsSync(snapShotPath)) {
    await fs.promises.writeFile(snapShotPath, image);
  } else {
    expect(await compare(snapShotPath, image)).toBe(0);
  }
});

test("hp 50 heal 10", async () => {
  const snapShotPath = path.join(
    directory,
    "__snapshots__",
    "hp 50 heal 10.png"
  );
  const image = hp(50, 10);

  if (!fs.existsSync(snapShotPath)) {
    await fs.promises.writeFile(snapShotPath, image);
  } else {
    expect(await compare(snapShotPath, image)).toBe(0);
  }
});

test("hp 50 heal 1", async () => {
  const snapShotPath = path.join(
    directory,
    "__snapshots__",
    "hp 50 heal 1.png"
  );
  const image = hp(50, 1);

  if (!fs.existsSync(snapShotPath)) {
    await fs.promises.writeFile(snapShotPath, image);
  } else {
    expect(await compare(snapShotPath, image)).toBe(0);
  }
});
