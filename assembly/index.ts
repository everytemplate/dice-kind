@kind
class Dice {
  face: Info;

  meta(): Json {
    let data = json.create();
    json.setString(data, "/name", `Dice #${object.id()}`);
    json.setString(data, "/description", "A dice");
    json.setString(data, "/image", "facet://picture");
    return data;
  }

  picture(): Image {
    let canvas = image.create(800, 800, ColorType.Rgb8);
    // Draw white background with black border for the dice
    const WHITE = Pixel.Rgb8(255, 255, 255);
    const BLACK = Pixel.Rgb8(0, 0, 0);
    const RED = Pixel.Rgb8(255, 0, 0);
    image.drawFilledRectMut(canvas, new Rect(0, 0, 800, 800), WHITE);
    image.drawHollowRectMut(canvas, new Rect(50, 50, 700, 700), BLACK);

    let dots = (this.face.u8(31) % 6) + 1;
    switch (dots) {
      case 1:
        // Center dot
        image.drawFilledCircleMut(canvas, Point.I32(400, 400), 50, RED);
        break;

      case 2:
        // Top left and bottom right
        image.drawFilledCircleMut(canvas, Point.I32(200, 200), 50, BLACK);
        image.drawFilledCircleMut(canvas, Point.I32(600, 600), 50, BLACK);
        break;

      case 3:
        // Diagonal dots plus center
        image.drawFilledCircleMut(canvas, Point.I32(200, 200), 50, BLACK);
        image.drawFilledCircleMut(canvas, Point.I32(400, 400), 50, BLACK);
        image.drawFilledCircleMut(canvas, Point.I32(600, 600), 50, BLACK);
        break;

      case 4:
        // Four corners
        image.drawFilledCircleMut(canvas, Point.I32(200, 200), 50, BLACK);
        image.drawFilledCircleMut(canvas, Point.I32(600, 200), 50, BLACK);
        image.drawFilledCircleMut(canvas, Point.I32(200, 600), 50, BLACK);
        image.drawFilledCircleMut(canvas, Point.I32(600, 600), 50, BLACK);
        break;

      case 5:
        // Four corners plus center
        image.drawFilledCircleMut(canvas, Point.I32(200, 200), 50, BLACK);
        image.drawFilledCircleMut(canvas, Point.I32(600, 200), 50, BLACK);
        image.drawFilledCircleMut(canvas, Point.I32(400, 400), 50, RED);
        image.drawFilledCircleMut(canvas, Point.I32(200, 600), 50, BLACK);
        image.drawFilledCircleMut(canvas, Point.I32(600, 600), 50, BLACK);
        break;

      case 6:
        // Six dots in 2x3 pattern
        image.drawFilledCircleMut(canvas, Point.I32(200, 200), 50, BLACK);
        image.drawFilledCircleMut(canvas, Point.I32(200, 400), 50, BLACK);
        image.drawFilledCircleMut(canvas, Point.I32(200, 600), 50, BLACK);
        image.drawFilledCircleMut(canvas, Point.I32(600, 200), 50, BLACK);
        image.drawFilledCircleMut(canvas, Point.I32(600, 400), 50, BLACK);
        image.drawFilledCircleMut(canvas, Point.I32(600, 600), 50, BLACK);
        break;
    }
    return canvas;
  }
}
