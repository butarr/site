function registerOnAllIn(emailInputSelector) {
  var reqParams = {};
  reqParams['acao'] = 'dados';
  reqParams['tipo'] = 'inserir_lista';
  reqParams['dados'] = {};
  reqParams['dados']['dfALLIN'] = '974213|7849';
  reqParams['dados']['inputs'] = [];
  reqParams['dados']['inputs'][0] = { dfALLIN: '974213|7849' };
  reqParams['dados']['inputs'][1] = { redurl: '' };
  reqParams['dados']['inputs'][2] = { valid: 1 };
  reqParams['dados']['inputs'][3] = { nm_email: $(emailInputSelector).val() };
  reqParams['dados']['inputs'][4] = { recebe: true };

  $.ajax({
    url: 'http://e.allin.brasildefato.com.br/embed/76af83270c68531f81f348072afb0576/post.php',
    type: 'POST',
    data: reqParams,
    dataType: 'JSON',
    success: function() {
      console.log('sucesso');
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.error("\njqXHR:" + jqXHR + "\ntextStatus:" + textStatus + "\nerrorThrown:" + errorThrown + "\n");
    }
  });
}
