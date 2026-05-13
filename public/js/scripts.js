
//pice combo box
document.addEventListener("DOMContentLoaded", function() {
    const distanceInput = document.getElementById("distance");
    const shippingCostEl = document.getElementById("shipping-cost");
    const shippingCostSummaryEl = document.getElementById("shipping-cost-summary");
    const serviceSelect = document.getElementById("service-select");
    const priceSummaryEl = document.getElementById("price-summary");
    const totalPriceEl = document.getElementById("total-price");

    const ratePerKm = 10; // Rate per kilometer in Rands

    // Update the shipping cost and total price dynamically
    const updateCosts = () => {
        const distance = parseFloat(distanceInput.value) || 0;
        const selectedService = serviceSelect.options[serviceSelect.selectedIndex];
        const servicePrice = parseFloat(selectedService.getAttribute("data-price"));

        const shippingCost = distance * ratePerKm;
        const totalPrice = servicePrice + shippingCost;

        // Update DOM elements
        shippingCostEl.textContent = `R ${shippingCost.toFixed(2)}`;
        shippingCostSummaryEl.textContent = `R ${shippingCost.toFixed(2)}`;
        priceSummaryEl.textContent = `R ${servicePrice.toFixed(2)}`;
        totalPriceEl.textContent = `R ${totalPrice.toFixed(2)}`;
    };

    // Event listeners
    distanceInput.addEventListener("input", updateCosts);
    serviceSelect.addEventListener("change", updateCosts);

    // Initial calculation
    updateCosts();
});


    // Dropdown Menu Toggle
        document.addEventListener("DOMContentLoaded", () => {
            const menuIcon = document.getElementById("menu-icon");
            const dropdownMenu = document.getElementById("dropdown-menu");

            menuIcon.addEventListener("click", function() {
                dropdownMenu.classList.toggle("hidden");
            });
        });


        //


    //!-- JavaScript for form submission //
  
        const form = document.getElementById('contact-form');
        const messageSentDiv = document.getElementById('message-sent');

        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form from submitting in the traditional way
            
            // Show the "Message Sent" notification
            messageSentDiv.style.display = 'block';
            
            // Optionally, reset the form fields
            form.reset();
        });

        //message sent notification
        const messageSent = document.getElementById('message-sent');

        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form from submitting in the traditional way
            
            // Show the "Message Sent" notification
            messageSentDiv.classList.add('visible');
            
            // Optionally, reset the form fields
            form.reset();
        });