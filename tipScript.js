function calculate ()
{
    var amount      =   $('#amount').val(); //Assigning amount input to this variable
    var percentage  =   $('#percentage').val();
    var tip         =   amount * (percentage/100);
    var total       =   Number(amount) + tip; //We used Number to make it a string value

    $('#tip').val(tip.toFixed(2)); // Two digits after the Decemal values
    $('#total').val(total.toFixed(2)); // Two digits after the Decemal values

    return false; //Prevents submittion in case of false entry
}

$('#calculator').submit( calculate)