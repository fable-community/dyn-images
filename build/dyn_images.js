import * as wasm from "./dyn_images_bg.wasm";
export * from "./dyn_images_bg.js";
import { __wbg_set_wasm } from "./dyn_images_bg.js";
__wbg_set_wasm(wasm);