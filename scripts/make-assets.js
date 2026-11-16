/* ==========================================================
   Tạo bộ logo, icon PNG + ảnh chia sẻ mạng xã hội (og-image.jpg)
   Chạy:  osascript -l JavaScript scripts/make-assets.js
   ========================================================== */
ObjC.import("AppKit");

function run() {
  const fm = $.NSFileManager.defaultManager;
  const ROOT = fm.currentDirectoryPath.js;
  const rgb = (r, g, b, a = 1) => $.NSColor.colorWithSRGBRedGreenBlueAlpha(r / 255, g / 255, b / 255, a);

  const loadImg = (rel) => {
    const d = $.NSData.dataWithContentsOfFile(`${ROOT}/${rel}`);
    const rep = $.NSBitmapImageRep.imageRepWithData(d);
    const img = $.NSImage.alloc.initWithSize($.NSMakeSize(rep.pixelsWide, rep.pixelsHigh));
    img.addRepresentation(rep);
    return img;
  };

  const canvas = (w, h, draw) => {
    const rep = $.NSBitmapImageRep.alloc.initWithBitmapDataPlanesPixelsWidePixelsHighBitsPerSampleSamplesPerPixelHasAlphaIsPlanarColorSpaceNameBytesPerRowBitsPerPixel(
      null, w, h, 8, 4, true, false, $.NSCalibratedRGBColorSpace, 0, 0);
    const ctx = $.NSGraphicsContext.graphicsContextWithBitmapImageRep(rep);
    $.NSGraphicsContext.saveGraphicsState;
    $.NSGraphicsContext.setCurrentContext(ctx);
    ctx.setImageInterpolation($.NSImageInterpolationHigh);
    draw(w, h);
    ctx.flushGraphics;
    $.NSGraphicsContext.restoreGraphicsState;
    return rep;
  };
  const savePNG = (rep, path) => {
    const data = rep.representationUsingTypeProperties($.NSBitmapImageFileTypePNG, $());
    data.writeToFileAtomically(`${ROOT}/${path}`, true);
  };
  const saveJPG = (rep, path, q = 0.84) => {
    const props = $.NSDictionary.dictionaryWithObjectForKey($(q), $.NSImageCompressionFactor);
    const data = rep.representationUsingTypeProperties($.NSBitmapImageFileTypeJPEG, props);
    data.writeToFileAtomically(`${ROOT}/${path}`, true);
  };

  const hasRawLogo = fm.fileExistsAtPath(`${ROOT}/giahaoone_com/thiet_ke/logo_giahaoone.jpg`);
  if (hasRawLogo) {
    const logoSrc = loadImg("giahaoone_com/thiet_ke/logo_giahaoone.jpg");
    const markRect = $.NSMakeRect(312, 422, 400, 400);
    const fullRect = $.NSMakeRect(142, 192, 740, 640);

    // 1. assets/logo-mark.png (128x128 cho navbar & footer 2x retina)
    savePNG(canvas(128, 128, (w, h) => {
      rgb(255, 255, 255).setFill;
      $.NSBezierPath.fillRect($.NSMakeRect(0, 0, w, h));
      logoSrc.drawInRectFromRectOperationFraction($.NSMakeRect(4, 4, w - 8, h - 8), markRect, $.NSCompositingOperationSourceOver, 1);
    }), "assets/logo-mark.png");

    // 2. assets/logo.png (360x312 cho mục Giới thiệu 2x retina)
    savePNG(canvas(360, 312, (w, h) => {
      rgb(255, 255, 255).setFill;
      $.NSBezierPath.fillRect($.NSMakeRect(0, 0, w, h));
      logoSrc.drawInRectFromRectOperationFraction($.NSMakeRect(10, 10, w - 20, h - 20), fullRect, $.NSCompositingOperationSourceOver, 1);
    }), "assets/logo.png");

    // 3. App icons & favicons
    const drawAppIcon = (s, rounded) => {
      const bg = rounded
        ? $.NSBezierPath.bezierPathWithRoundedRectXRadiusYRadius($.NSMakeRect(0, 0, s, s), s * 0.22, s * 0.22)
        : $.NSBezierPath.bezierPathWithRect($.NSMakeRect(0, 0, s, s));
      bg.addClip;
      rgb(255, 255, 255).setFill;
      bg.fill;
      const pad = Math.round(s * 0.1);
      logoSrc.drawInRectFromRectOperationFraction($.NSMakeRect(pad, pad, s - pad * 2, s - pad * 2), markRect, $.NSCompositingOperationSourceOver, 1);
    };
    [[192, "assets/icon-192.png", true], [512, "assets/icon-512.png", true], [180, "assets/apple-touch-icon.png", false], [32, "assets/favicon-32.png", true]]
      .forEach(([s, p, rounded]) => savePNG(canvas(s, s, (w) => drawAppIcon(w, rounded)), p));
  }

  // 4. OG image 1200×630 (dùng ảnh trong assets/ để độc lập hoàn toàn)
  const heroPath = fm.fileExistsAtPath(`${ROOT}/giahaoone_com/thiet_ke/vi_co_khi_edc.jpg`)
    ? "giahaoone_com/thiet_ke/vi_co_khi_edc.jpg"
    : "assets/products/vi_co_khi_edc.jpg";
  const hero = loadImg(heroPath);
  const markImg = loadImg("assets/logo-mark.png");
  const og = canvas(1200, 630, (w, h) => {
    rgb(18, 18, 20).setFill;
    $.NSBezierPath.fillRect($.NSMakeRect(0, 0, w, h));
    hero.drawInRectFromRectOperationFraction($.NSMakeRect(250, -11, 1170, 652), $.NSZeroRect, $.NSCompositingOperationSourceOver, 1);
    const grad1 = $.NSGradient.alloc.initWithStartingColorEndingColor(rgb(18, 18, 20, 1), rgb(18, 18, 20, 0.88));
    grad1.drawInRectAngle($.NSMakeRect(0, 0, 520, h), 0);
    const grad2 = $.NSGradient.alloc.initWithStartingColorEndingColor(rgb(18, 18, 20, 0.88), rgb(18, 18, 20, 0));
    grad2.drawInRectAngle($.NSMakeRect(520, 0, 260, h), 0);

    $.NSGraphicsContext.saveGraphicsState;
    const badge = $.NSBezierPath.bezierPathWithRoundedRectXRadiusYRadius($.NSMakeRect(76, 460, 84, 84), 20, 20);
    badge.addClip;
    rgb(255, 255, 255).setFill;
    badge.fill;
    markImg.drawInRectFromRectOperationFraction($.NSMakeRect(80, 464, 76, 76), $.NSZeroRect, $.NSCompositingOperationSourceOver, 1);
    $.NSGraphicsContext.restoreGraphicsState;

    const font = (size, weight) => $.NSFont.systemFontOfSizeWeight(size, weight);
    const text = (str, x, y, size, weight, color) => {
      const attrs = $.NSDictionary.dictionaryWithObjectsForKeys(
        $([font(size, weight), color]), $([$.NSFontAttributeName, $.NSForegroundColorAttributeName]));
      $(str).drawAtPointWithAttributes($.NSMakePoint(x, y), attrs);
    };
    text("GiaHao One", 72, 326, 86, 0.4, rgb(245, 245, 247));
    text("In 3D · Phay CNC · Đa vật liệu", 76, 266, 30, 0.25, rgb(210, 210, 215));
    text("Thiết kế & chế tác tại Việt Nam", 76, 222, 28, 0.2, rgb(160, 160, 168));
    text("giahao.vn", 76, 86, 28, 0.35, rgb(255, 106, 19));
  });
  saveJPG(og, "assets/og-image.jpg", 0.84);

  return "✓ Đã tối ưu bộ logo, icon & og-image.jpg";
}
