document.addEventListener("DOMContentLoaded", () => {
    // Find the element that declares which Markdown file to load
    const container = document.querySelector("[data-md]");
    if (!container) {
        console.error("No element with data-md found on this page.");
        return;
    }

    const mdFile = container.getAttribute("data-md");
    if (!mdFile) {
        console.error("data-md attribute is empty.");
        return;
    }

    fetch(mdFile)
        .then(response => response.text())
        .then(md => {
            let html = md;

            // LINKS: [text](url)
            html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

            // BOLD: **text**
            html = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

            // ITALICS: *text*
            html = html.replace(/\*(.*?)\*/g, "<em>$1</em>");

            // H3: ### text
            html = html.replace(/^### (.*)$/gm, "<h3>$1</h3>");

            // H2: ## text
            html = html.replace(/^## (.*)$/gm, "<h2>$1</h2>");

            // H1: # text
            html = html.replace(/^# (.*)$/gm, "<h1>$1</h1>");

            // HORIZONTAL RULE: ---
            html = html.replace(/^---$/gm, "<hr>");

            // LIST ITEMS: - item
            html = html.replace(/(?:^|\n)- (.*?)(?=\n|$)/g, "<li>$1</li>");

            // GROUP consecutive <li> items into a single <ul>
            html = html.replace(/(<li>[\s\S]*?<\/li>)+/g, match => {
                return `<ul>${match}</ul>`;
            });

            // EMAIL AUTO-LINKING
            html = html.replace(
                /support@studytool\.abrdns\.com/g,
                '<a href="mailto:support@studytool.abrdns.com">support@studytool.abrdns.com</a>'
            );

            // NEWLINES → <br>
            html = html.replace(/\n/g, "<br>");

            container.innerHTML = html;
        })
        .catch(err => {
            container.textContent = "Failed to load document.";
            console.error(err);
        });
});
