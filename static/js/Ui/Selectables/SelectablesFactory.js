import { MenuButton } from "./MenuButton.js";
import { Input } from "./Input.js";
import { Button } from "./Button.js";
import { BorderHiglight } from "./BorderHiglight.js";

export class SelectablesFactory {
    static getSelectable(name, element) {
        switch (name) {
            case "menuButton":
                return new MenuButton(element);
            case "input":
                return new Input(element);
            case "button":
                return new Button(element);
            case "borderHiglight":
                return new BorderHiglight(element);
            default:
                return null;
        }
    }
}
