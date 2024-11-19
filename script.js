document.addEventListener('DOMContentLoaded', () => {
    const bookNow = document.getElementById('bookNow');
    const bookingSection = document.getElementById('booking');
    const nextStep = document.getElementById('nextStep');
    const steps = document.querySelectorAll('.step');
    let currentStep = 0;

    bookNow.addEventListener('click', () => {
        bookingSection.classList.remove('hidden');
        window.scrollTo(0, bookingSection.offsetTop);
    });

    nextStep.addEventListener('click', () => {
        steps[currentStep].classList.add('hidden');
        currentStep++;
        if (currentStep < steps.length) {
            steps[currentStep].classList.remove('hidden');
        } else {
            alert('Booking complete!');
            // Additional code to send confirmation email
        }
    });
});