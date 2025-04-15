
    document.querySelector(".booking-form").addEventListener("input", function() {
        const destination = document.getElementById("destination").value;
        const date = document.getElementById("date").value;
        const people = document.getElementById("people").value;

        // Updating the summary
        document.getElementById("summary-destination").textContent = destination || "Not Selected";
        document.getElementById("summary-date").textContent = date || "Not Selected";
        document.getElementById("summary-people").textContent = people || "0";

        // Estimated cost calculation
        const pricePerPerson = { "Maldives": 500, "Swiss Alps": 700, "Kashmir": 300 };
        const estimatedCost = people && destination ? pricePerPerson[destination] * people : 0;
        document.getElementById("summary-cost").textContent = `$${estimatedCost}`;
    });
