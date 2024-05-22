import "./index.css";
import { MyClass } from "./example-unit";

const watch = new MyClass(0, 0);

const modeButton: HTMLElement = document.getElementById("mode")!;
const increaseButton: HTMLElement = document.getElementById("increase")!;
const lightButton: HTMLElement = document.getElementById("light")!;

modeButton.addEventListener("click", () => {
  watch.toggleEditMode();
});

increaseButton.addEventListener("click", () => {
  watch.increment();
});

lightButton.addEventListener("click", () => {
  watch.toggleLight();
});

watch.updateDisplay();
