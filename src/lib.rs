use wasm_bindgen::prelude::*;

// #[wasm_bindgen]
// extern "C" {
//     #[wasm_bindgen(js_namespace = console)]
//     fn log(s: &str);
// }

// macro_rules! console_log {
//     ($($t:tt)*) => (log(&format_args!($($t)*).to_string()))
// }

const WHITE: image::Rgba<u8> = image::Rgba([255, 255, 255, 255]);
const GREY: image::Rgba<u8> = image::Rgba([163, 163, 163, 255]);
const RED: image::Rgba<u8> = image::Rgba([222, 38, 38, 255]);
const GREEN: image::Rgba<u8> = image::Rgba([43, 181, 64, 255]);
// const BLANK: image::Rgba<u8> = image::Rgba([0, 0, 0, 0]);

#[wasm_bindgen]
pub fn hp(left: u32, diff: i32) -> js_sys::Uint8Array {
    console_error_panic_hook::set_once();

    let w: u32 = 350 * u32::max(if diff > 0 { left - diff as u32 } else { left }, 0) / 100;
    let d: u32 = 350 * u32::max(diff.abs() as u32, 0) / 100;

    let img = image::RgbaImage::from_fn(350, 15, |x, _| {
        if (0..w).contains(&x) {
            WHITE
        } else if diff > 0 && (w..w + d + 1).contains(&x) {
            GREEN
        } else if diff < 0 && (w..w + d + 1).contains(&x) {
            RED
        } else {
            GREY
        }
    });

    let mut buf = std::io::Cursor::new(Vec::new());

    img.write_to(&mut buf, image::ImageOutputFormat::Png)
        .unwrap();

    js_sys::Uint8Array::from(buf.get_ref().clone().as_ref())
}
