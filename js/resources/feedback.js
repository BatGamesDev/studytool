document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("feedbackForm");
    const successBox = document.getElementById("feedbackSuccess");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!message) {
            alert("Please enter a message before submitting.");
            return;
        }

        try {
            const response = await fetch(
                "https://zfgchsjfptqwtaevxzqk.supabase.co/functions/v1/submit-feedback",
                {
                    method: "POST",
                    mode: "cors",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    body: JSON.stringify({ name, email, message })
                }
            );

            const result = await response.json();

            if (!response.ok) {
                console.error("Error from function:", result);
                alert("Something went wrong submitting your feedback.");
                return;
            }

            // Success
            form.classList.add("hidden");
            successBox.classList.remove("hidden");

        } catch (err) {
            console.error("Network error:", err);
            alert("Unable to submit feedback right now.");
        }
    });
});
