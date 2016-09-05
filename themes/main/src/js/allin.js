function registerOnAllIn(emailInputSelector) {
    __blc['id'] = "7849";

    if (validateEmail($(emailInputSelector).val()) == true) {
        try {
            lc.sendData({
                nm_email: $(emailInputSelector).val(),
                lista: {
                    nm_lista: "BrasilDeFato",
                    atualizar: "1",
                }
            });

        } catch (e) {}

        $(".fail-message").hide();
        $(".thanks-message").show();
        if ($(".thanks-message").is(':visible'))
            $(".thanks-message").css('display', 'flex');

    } else {
        $(".fail-message").show();
        if ($(".fail-message").is(':visible'))
            $(".fail-message").css('display', 'flex');
    }

    document.getElementById("emailInputMultipleColumnLayout").value = "";
}

function validateEmail(email) {
    var val = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return val.test(email);
}
