// include.js — loads HTML fragments from /components/includes/*

document.addEventListener("DOMContentLoaded", () => {
    const includeElements = document.querySelectorAll("[data-include]");

    includeElements.forEach(async el => {
        const file = el.getAttribute("data-include");
        if (!file) return;

        try {
            const response = await fetch(file);
            if (!response.ok) {
                el.innerHTML = `<p style="color:red;">Include not found: ${file}</p>`;
                return;
            }

            const html = await response.text();
            el.innerHTML = html;
        } catch (err) {
            el.innerHTML = `<p style="color:red;">Error loading: ${file}</p>`;
        }
    });
});
