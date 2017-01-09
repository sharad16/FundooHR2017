$('#toggle').click(function () {
  console.log("is enable..");
    //check if checkbox is checked
    if ($(this).is(':checked')) {

        $('#sendNewSms').removeAttr('disabled'); //enable input

    } else {
        $('#sendNewSms').attr('disabled', true); //disable input
    }
});
