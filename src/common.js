// общий склад

const p = document.querySelector(".message");
export function render(text) {
    p.textContent = text;
}

export function renderDates(obj) {
    p.innerHTML = `
    <div>
    <span>Amount of years = ${obj.years}</span>
    <span>Amount of months = ${obj.months}</span>
    <span>Amount of days = ${obj.days}</span>
    </div>
    `;
    p.style.color = "#004a43";
}