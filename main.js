document.addEventListener("DOMContentLoaded", function () // recommend to add as ensure it loads either before or after HTML
{
    const form = document.getElementById("contact_form");
    form.addEventListener("submit", function (event) 
    {
        event.preventDefault(); // Prevent the form from submitting

        const name = document.getElementById("name").value.trim(); // .trim() to remove unnecessary spaces
        const gender = document.getElementById("gender").value.trim();
        const email = document.getElementById("email").value.trim();
        const phoneNumber = document.getElementById("phone number").value.trim();
        const contactType = document.getElementById("contact-type").value;

        let valid = true;
        let error = "";

        if (!/^[A-Za-z\s]+$/.test(name) || name === "")
        {
            valid = false;
            error += "Name must contain only letters and cannot be empty.\n";
        }

        if (gender !== "" && !/^[A-Za-z]+$/.test(gender)) // enable space and text
        {
            valid = false;
            error += "Gender must contain only letters.\n";
        }

        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) 
        {
            valid = false;
            error += "Please enter a valid email address.\n";
        }

        if (!/^\d{10,}$/.test(phoneNumber)) 
        {
            valid = false;
            error += "Phone number must be at least 10 digits and contain only numbers.\n";
        }

        if (contactType === "") 
        {
            valid = false;
            error += "Please select a preferred contact method.\n";
        }

        if (!valid) 
        {
            alert("Form submission failed due to the following errors:\n" + error);
        } 
        
        else 
        {
            alert("Form submitted successfully!");
            form.reset(); // Reset the form fields after successful validation
        }
    });
});
