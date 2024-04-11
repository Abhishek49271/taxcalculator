$(document).ready(function() {
    // Submit form
    $('#taxCalculatorForm').submit(function(e) {
        e.preventDefault();
        calculateTax();
    });

    // Function to calculate tax
    function calculateTax() {
        // Get input values
        var income = parseFloat($('#income').val());
        var age = $('#age').val();
        var tax = 0;

        // Validate inputs
        var errors = false;
        $('.form-group').each(function() {
            var input = $(this).find('input, select');
            var value = input.val();
            if (!value) {
                $(this).find('.error-icon').show();
                errors = true;
            } else {
                $(this).find('.error-icon').hide();
            }
        });

        if (errors) return;

        // Perform tax calculation
        if (income <= 8) {
            tax = 0;
        } else {
            switch (age) {
                case '<40':
                    tax = 0.3 * (income - 8);
                    break;
                case '≥40 & <60':
                    tax = 0.4 * (income - 8);
                    break;
                case '≥60':
                    tax = 0.1 * (income - 8);
                    break;
            }
        }

        // Show result modal
        $('#resultModal').modal('show');
        $('#resultModal #taxAmount').text(tax.toFixed(2));
    }
});
