var Tile = function(x,y) {
  this.x = x;
  this.y = y;
  this.width = 70;
};

var tiles = [];

var NUM_COLS = 5;
var NUM_ROWS = 4;
for (var i = 0; i < NUM_COLS; i++) {
  for (var j = 0; j < NUM_ROWS; j++) {
    tiles.push(new Tile(i * 78 + 10, j * 78 + 40));
  }
}

Tile.prototype.drawFaceDown = function() {
  fill(214, 247, 202);
  strokeWeight(2);
  rect(this.x, this.y, this.width, this.width, 10);
  image(getImage("avatars/leaf-green"), this.x, this.y, this.width, this.width);
};
