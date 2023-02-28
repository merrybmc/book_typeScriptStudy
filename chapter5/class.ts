{
  // 체스 게임
  class Game {}

  // 체스 말
  abstract class Piece {
    protected position: Position;
    moveTo(position: Position) {
      this.position = position;
    }
    // abstract canMoveTo(position: Position): boolean;
    constructor(private readonly color: Color, file: File, rank: Rank) {}
  }

  // 체스 말의 좌표 집합
  class Position {
    distanceFrom(position: Position) {
      return {
        rank: Math.abs((position.rank = this.rank)),
        file: Math.abs(position.File.charCodeAt(0) - this.File.charCodeAt(0)),
      };
    }
    constructor(private File: File, private rank: Rank) {}
  }

  class King extends Piece {
    canMoveTo(position: Position) {
      let distance = this.position.distanceFrom(position);
      return distance.rank < 2 && distance.file < 2;
    }
  } // 킹
  class Queen extends Piece {} // 퀸
  class Bishop extends Piece {} // 비숍
  class Knight extends Piece {} // 나이트
  class Rook extends Piece {} // 룩
  class Pawn extends Piece {} // 폰

  type Color = 'Black' | 'White';
  type File = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';
  type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

  new Piece('white', 'E', '1');
}
