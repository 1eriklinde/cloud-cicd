const counter = document.querySelector(".counter-number");

async function updateCounter() {
    try {
        let response = await fetch("https://ezbrajvs4egbl3bdpnx2ttc44y0jjxio.lambda-url.us-east-1.on.aws/");
        let data = await response.text(); // Use response.text() to get plain text
        counter.textContent = `Views: ${data.trim()}`; // Trim any leading/trailing spaces
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Call updateCounter initially.
updateCounter();
