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

  public increment(): void {
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
    this.updateDisplay();
  }

  public toggleEditMode(): void {
    this.editMode = (this.editMode + 1) % 3;
    const hours = document.getElementById("hours")!;
    const minutes = document.getElementById("minutes")!;
    switch (this.editMode) {
      case 1:
        hours.classList.add("underline");
        minutes.classList.remove("underline");
        break;
      case 2:
        minutes.classList.add("underline");
        hours.classList.remove("underline");
        break;
      case 0:
        hours.classList.remove("underline");
        minutes.classList.remove("underline");
        break;
    }
  }

  public toggleLight(): void {
    this.light = !this.light;
    const watchElement: HTMLElement = document.querySelector(".time")!;
    watchElement.style.backgroundColor = this.light ? "#fff" : "#003285";
    watchElement.style.color = this.light ? "#003285" : "#fff";
  }

  public updateDisplay(): void {
    const hoursElement: HTMLElement = document.getElementById("hours")!;
    const minutesElement: HTMLElement = document.getElementById("minutes")!;
    const hours =
      this.hours >= 10 ? this.hours.toString() : "0" + this.hours.toString();
    const minutes =
      this.minutes >= 10
        ? this.minutes.toString()
        : "0" + this.minutes.toString();

    hoursElement.textContent = hours;
    minutesElement.textContent = minutes;
  }
}
