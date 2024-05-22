import { EditModeEnum } from "./edit-mode.enum";

export class MyClass {
  private hours: number;
  private minutes: number;
  private editMode: number;
  private light: boolean;

  constructor(hours: number, minutes: number) {
    this.hours = hours;
    this.minutes = minutes;
    this.editMode = 0; //Number value to indicate the edit mode (1 -> hours, 2 -> minutes, 0 -> disabled)
    this.light = false;
  }

  public get = (): { hours: number; minutes: number } => {
    return { hours: this.hours, minutes: this.minutes };
  };

  public increment = (): void => {
    switch (this.editMode) {
      case 1:
        this.hours = (this.hours + 1) % 24;
        break;
      case 2:
        this.minutes = (this.minutes + 1) % 60;
        break;
      case 0:
        break;
    }
  };

  public toggleEditMode = (): void => {
    this.editMode = (this.editMode + 1) % 3;
  };

  public updateDisplay = (): void => {
    const timeElement = document.getElementById("time")!;
    const hours =
      this.hours >= 10 ? this.hours.toString() : "0" + this.hours.toString();
    const minutes =
      this.minutes >= 10
        ? this.minutes.toString()
        : "0" + this.minutes.toString();

    timeElement.textContent = `${hours}:${minutes}`;
  };
}
