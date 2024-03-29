$(document).ready(function() {
    $('#loader').addClass('show');
    $('body').addClass('overflow-hidden');
    setTimeout(function() {
        $('#loader').removeClass('show');
        $('body').removeClass('overflow-hidden');
    }, 3500);
});


$(document).ready(function(){
    $('.cardPay').click(function(){
        $('.payment-button-group').hide();
        $('.addCard').show();
    });
});


let currentStep = 0;
const stepContents = $('.step-content');

function showStep(step) {
    stepContents.each(function(index, content) {
        if (index === step) {
            $(content).show();
            $('.step').eq(index).addClass('active');
        } else if (index < step) {
            $(content).hide();
            $('.step').eq(index).addClass('completed');
        } else {
            $(content).hide();
            $('.step').eq(index).removeClass('active').removeClass('completed');
        }
    });
}

function nextStep() {
    if (currentStep < stepContents.length - 1) {
        currentStep++;
        showStep(currentStep);
    } else if (currentStep === stepContents.length - 1) {
        showStep(currentStep + 1);
    }
}

$(document).ready(function() {
    $('#second-step').hide();
    
    $('#first-step').show();
});

function innernextStep() {
    $('#first-step').hide();
    $('#second-step').show();
}

$(document).ready(function() {
    showStep(currentStep);
});




$(document).ready(function() {
    function detectCardType(cardNumber) {
        if (/^4/.test(cardNumber)) {
            return 'visa';
        } else if (/^5[1-5]/.test(cardNumber)) {
            return 'mastercard';
        } else if (/^3[47]/.test(cardNumber)) {
            return 'amex';
        } else {
            return null;
        }
    }

    function handleCardNumberInput() {
        var cardNumber = $(this).val().replace(/\D/g, '');
        var cardType = detectCardType(cardNumber);
        $('#card-type').removeClass().addClass(cardType);
        cardNumber = cardNumber.substring(0, 16);
        var formattedCardNumber = cardNumber.match(/.{1,4}/g);
        if (formattedCardNumber) {
            formattedCardNumber = formattedCardNumber.join(' ');
            $(this).val(formattedCardNumber);
        }
    }

    $('#card-number').on('input', handleCardNumberInput);

    $('#card-number').on('keypress', function(event) {
        var keyCode = event.which ? event.which : event.keyCode;
        if (keyCode < 48 || keyCode > 57) {
            event.preventDefault();
        } else {
            handleCardNumberInput.call(this); 
        }
    });

    $('#payment-form').submit(function(event) {
        event.preventDefault();

        console.log('Form submitted');
    });
});