// производит рассчет разницы между датами

import {
    DateTime
} from "../node_modules/luxon/build/es6/luxon.js";

export function diffDates(date1, date2) {
    const iso1 = DateTime.fromISO(date1);
    const iso2 = DateTime.fromISO(date2);
    return iso2.diff(iso1, ["years", "months", "days"]).toObject();
}