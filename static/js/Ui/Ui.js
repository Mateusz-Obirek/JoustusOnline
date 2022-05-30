import { SelectablesFactory } from "./Selectables/SelectablesFactory.js";

export class Ui {
    #selectables = [];
    #selectedIndex;

    set selectedIndex(value) {
        this.#selectables[this.#selectedIndex].unselect();

        if (value < 0) value = this.#selectables.length - 1;
        else if (value >= this.#selectables.length) value = 0;
        this.#selectedIndex = value;
        this.#selectables[this.#selectedIndex].select();
    }

    get selectedIndex() {
        return this.#selectedIndex;
    }

    constructor(name) {
        this.element = document.getElementById(name);
        const selectableElements = this.element.querySelectorAll(`[selectable]`);

        for (let selectableElement of selectableElements) {
            this.#selectables.push(SelectablesFactory.getSelectable(selectableElement.getAttribute("selectable"), selectableElement));
        }

        this.#selectables.sort((a, b) => {
            return a.index - b.index;
        });
    }

    display() {
        this.element.style.display = this.element.getAttribute("default-display");
        this.selectFirst();
    }

    hide() {
        this.element.style.display = "none";
        this.#selectables[0].unselect();
        if (this.#selectedIndex >= 0) this.#selectables[this.#selectedIndex].unselect();
        this.#selectedIndex = 0;
    }

    selectFirst() {
        if (this.#selectedIndex >= 0) this.#selectables[this.#selectedIndex].unselect();
        this.#selectables[0].select();
        this.#selectedIndex = 0;
    }
}