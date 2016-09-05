function registerOnAllIn(emailInputSelector){
  __blc['id'] = "7849";
    try {
        lc.sendData({
            nm_email : $(emailInputSelector).val(),
            lista : {
                nm_lista : "BrasilDeFato",
                atualizar : "1",
            }
        });

    } catch (e) {
    }
    document.getElementById("emailInputMultipleColumnLayout").value = "";
}
