export enum TimePeriod {
  Day = "Day",
  Week = "Week",
  Month = "Month",
  Year = "Year",
}

export class TimePeriodDisplay {
  public static toLabel(qty: number, timePeriod: TimePeriod) {
    return qty + " " + (qty > 1 ? timePeriod + "s" : timePeriod);
  }
}
