@kind
class Dice {
  face: Bytes32;

  meta(): Json {
    let data = json.create("{}");
    json.setString(data, "/name", `Dice #${object.id()}`);
    json.setString(data, "/description", "A dice");
    json.setString(data, "/image", "facet://picture");
    return data;
  }

  picture(): Image {
    let canvas = image.create(800, 800, 2);
    // Draw white background with black border for the dice
    const COLOR_WHITE = new PixelRgb8(255, 255, 255);
    const COLOR_BLACK = new PixelRgb8(0, 0, 0);
    const COLOR_RED = new PixelRgb8(255, 0, 0);
    image.drawFilledRectMut(canvas, new Rect(0, 0, 800, 800), COLOR_WHITE);
    image.drawHollowRectMut(canvas, new Rect(50, 50, 700, 700), COLOR_BLACK);

    let dots = (this.face.extractU8(31) % 6) + 1;
    switch (dots) {
      case 1:
        // Center dot
        image.drawFilledCircleMut(canvas, new PointI32(400, 400), 50, COLOR_RED);
        break;

      case 2:
        // Top left and bottom right
        image.drawFilledCircleMut(canvas, new PointI32(200, 200), 50, COLOR_BLACK);
        image.drawFilledCircleMut(canvas, new PointI32(600, 600), 50, COLOR_BLACK);
        break;

      case 3:
        // Diagonal dots plus center
        image.drawFilledCircleMut(canvas, new PointI32(200, 200), 50, COLOR_BLACK);
        image.drawFilledCircleMut(canvas, new PointI32(400, 400), 50, COLOR_BLACK);
        image.drawFilledCircleMut(canvas, new PointI32(600, 600), 50, COLOR_BLACK);
        break;

      case 4:
        // Four corners
        image.drawFilledCircleMut(canvas, new PointI32(200, 200), 50, COLOR_BLACK);
        image.drawFilledCircleMut(canvas, new PointI32(600, 200), 50, COLOR_BLACK);
        image.drawFilledCircleMut(canvas, new PointI32(200, 600), 50, COLOR_BLACK);
        image.drawFilledCircleMut(canvas, new PointI32(600, 600), 50, COLOR_BLACK);
        break;

      case 5:
        // Four corners plus center
        image.drawFilledCircleMut(canvas, new PointI32(200, 200), 50, COLOR_BLACK);
        image.drawFilledCircleMut(canvas, new PointI32(600, 200), 50, COLOR_BLACK);
        image.drawFilledCircleMut(canvas, new PointI32(400, 400), 50, COLOR_RED);
        image.drawFilledCircleMut(canvas, new PointI32(200, 600), 50, COLOR_BLACK);
        image.drawFilledCircleMut(canvas, new PointI32(600, 600), 50, COLOR_BLACK);
        break;

      case 6:
        // Six dots in 2x3 pattern
        image.drawFilledCircleMut(canvas, new PointI32(200, 200), 50, COLOR_BLACK);
        image.drawFilledCircleMut(canvas, new PointI32(200, 400), 50, COLOR_BLACK);
        image.drawFilledCircleMut(canvas, new PointI32(200, 600), 50, COLOR_BLACK);
        image.drawFilledCircleMut(canvas, new PointI32(600, 200), 50, COLOR_BLACK);
        image.drawFilledCircleMut(canvas, new PointI32(600, 400), 50, COLOR_BLACK);
        image.drawFilledCircleMut(canvas, new PointI32(600, 600), 50, COLOR_BLACK);
        break;
    }
    return canvas;
  }
}
