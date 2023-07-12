import decode from 'https://deno.land/x/wasm_image_decoder@v0.0.7/mod.js';

import pixelmatch from 'https://esm.sh/pixelmatch@5.3.0';

import { dirname, join } from 'https://deno.land/std@0.188.0/path/mod.ts';

import { existsSync } from 'https://deno.land/std@0.188.0/fs/mod.ts';

import { assertEquals } from 'https://deno.land/std@0.188.0/testing/asserts.ts';

import { probability } from '../build/dyn_images.js';

const directory = dirname(import.meta.url);

const compare = async (
  snapShotPath: URL,
  image: Uint8Array,
): Promise<number> => {
  const existing = decode(await Deno.readFile(snapShotPath));

  const diff = pixelmatch(
    existing.data,
    decode(image).data,
    null,
    existing.width,
    existing.height,
  );

  return diff;
};

Deno.test('win probability 50-50', async (test) => {
  const snapShotPath = new URL(
    join(directory, `__snapshots__/${test.name}.jpeg`),
  );

  const image = probability(50, 50);

  if (!existsSync(snapShotPath)) {
    await Deno.writeFile(
      snapShotPath,
      image,
    );
  } else {
    assertEquals(await compare(snapShotPath, image), 0);
  }
});

Deno.test('win probability 10-90', async (test) => {
  const snapShotPath = new URL(
    join(directory, `__snapshots__/${test.name}.jpeg`),
  );

  const image = probability(10, 90);

  if (!existsSync(snapShotPath)) {
    await Deno.writeFile(
      snapShotPath,
      image,
    );
  } else {
    assertEquals(await compare(snapShotPath, image), 0);
  }
});
