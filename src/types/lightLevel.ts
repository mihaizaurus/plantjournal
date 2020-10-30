export enum LightLevel {
  Level1 = "Dark",
  Level2 = "Indirect Low-Light",
  Level3 = "Indirect High-Light",
  Level4 = "Direct Sunlight",
}

export class LightLevelDisplay {
  public static toDisplay(level: LightLevel) {
    switch (level) {
      case LightLevel.Level1:
        return "Batcave Dark";
      case LightLevel.Level2:
        return "Indirect Low-Light";
      case LightLevel.Level3:
        return "Indirect High-Light";
      case LightLevel.Level4:
        return "Direct Sunlight";
    }
  }
}
