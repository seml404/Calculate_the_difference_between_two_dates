// получает значения введенные в поля формы
import {
    render,
    renderDates
} from "./common.js";

import {
    diffDates
} from "./date.js";



export function getFormInfo() {
    const form = document.getElementById("form-date");
    form.addEventListener("submit", (evt) => {
        evt.preventDefault();
        const date1 = evt.target.elements.date1.value,
            date2 = evt.target.elements.date2.value;
        if (!date1 || !date2) {
            render("Please, enter both dates");
            return;
        }
        let dif = diffDates(date1, date2);
        renderDates(dif);
    });
}