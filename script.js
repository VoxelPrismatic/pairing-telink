function $(q, e = document) { return e.querySelector(q); }

const body = $("html");
const btn_h1 = $("h1 button");
const btn = $("body > button"); 
const media = window.matchMedia("(prefers-color-scheme: dark)");
btn.onmousedown = () => {
    if(body.style.colorScheme === "dark") {
        body.style.colorScheme = "light";
        btn.textContent = "⏾";
        btn_h1.textContent = "⏾";
    } else {
        body.style.colorScheme = "dark";
        btn.textContent = "⦿";
        btn_h1.textContent = "⦿";
    }
}

btn_h1.onmousedown = btn.onmousedown;

media.onchange = (evt) => {
    body.style.colorScheme = evt.matches ? "light" : "dark";
    btn.onmousedown();
};

btn.onmousedown();
btn.onmousedown();


