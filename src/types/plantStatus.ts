export enum PlantStatus {
  L0 = "Dead",
  L1 = "Struggling",
  L2 = "Steady",
  L3 = "Growing",
  L4 = "Thriving",
}

export class PlantStatusDisplay {
  public static toDisplay(status: PlantStatus) {
    switch (status) {
      case PlantStatus.L0:
        return "Sadly it has passed away :(";
      case PlantStatus.L1:
        return "You should care for it a bit more";
      case PlantStatus.L2:
        return "Not dying, not thriving. ¯\\_(ツ)_/¯";
      case PlantStatus.L3:
        return "It's growing steady and seems happy";
      case PlantStatus.L4:
        return "Fantastic! Ding Dong!";
    }
  }
}
