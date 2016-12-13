---
layout: special
area: especial
url: /calculadora-da-aposentadoria/
title: "Calculadora da Aposentadoria"
description: Saiba o que muda em relação a atual legislação e a Reforma da Previdência pelo governo de Michel Temer (PMDB)
author: Laboratório de Tecnologia do Brasil de Fato
labels:
  - previdência
  - aposentadoria
  - reforma
  - calculadora
  - simulador
  - temer
  - PMDB
cover:
  link: //farm1.staticflickr.com/133/31474160716_d719eb3a8d_b.jpg
  thumbnail: //farm1.staticflickr.com/133/31474160716_d719eb3a8d_t.jpg
  medium: //farm1.staticflickr.com/133/31474160716_d719eb3a8d_z.jpg
  small: //farm1.staticflickr.com/133/31474160716_d719eb3a8d_n.jpg
  title: Pórtico da entrada da cidade de Barra Longa em meio a lama
  credits: Lucas Bois
  subtitle: Trilhos de trem
date: 2016-10-28T22:58:23.677Z
published_at: 2016-10-28T22:58:23.677Z

sections:
  - type: code
    embed: "
    <style>
      .label {
          font-weight: bold;
      }

      p {
        font: 1.1rem/1.6 'Merriweather Sans', Arial;
      }

      input {
        margin-right: 10px;
      }

      .multimedia {
        padding: 20px;
      }

      .number {
        height: 40px;
        font-size: 1.1rem;
        margin: 10px 0 20px;  
      }

      .radio {
        margin: 10px 5px 20px;
      }

      .button {
        height: 40px;
        width: 120px;
        background-color: rgba(140,25,31,1);
        color: #fff;
        font: bold 1.2rem/1.6 'Merriweather Sans', Arial;
        border-radius: 5px;

      }

      .results {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        font-weight: bold;
        margin: 30px 10px;
      }

      @media screen and (min-width: 690px) {
        .results {
          flex-wrap: nowrap;
        }
      }


      #new_value, #old_value {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 30px 10px;
        flex-grow: 1;
      }



      #newrulevalue {
        color: rgba(195, 59, 83, 1);
        font-size: 10rem;
        line-height: 1.1;
      }

      #oldrulevalue {
        color: #8dc2c9;
        font-size: 10rem;
        line-height: 1.1;
      }

      .foot-note {
        font-style: italic;
        font-size: 1rem;
        margin-bottom: 10px;
      }

      .result_text {
        font-weight: bold;
        text-transform: uppercase;
        color: #99999;
        text-align: center;
        padding-top: 10px;
      }

      .descriptive {
        padding-bottom: 20px;
      }

    </style>
    <div class='form'>
      <p class='descriptive'>A proposta de reforma da Previdência editada pelo governo não eleito de Michel Temer começou a tramitar oficialmente na Câmara nesta terça-feira (6).</p>
      <p class='descriptive'>Para exemplificar as mudanças que a proposta quer implementar na atual legislação, o Brasil de Fato lança nesta quinta-feira (8) a Calculadora da Aposentadoria. Nela, o leitor poderá comparar as idades mínimas de contribuição para ter direito ao benefício parcial. Confira!</p>
      <p class='label'>Você é:<p/>
      <input class='radio' type='radio' name='gender' value='F' checked> Mulher
      <input class='radio' type='radio' name='gender' value='M'> Homem<br>
      <p class='label'>Sua idade:</p>
      <input class='number' type='number' id='age' min='16' max='120' value='16'><br>
      <p class='label'>Quantos anos trabalhou com carteira assinada ou contribuiu para o INSS:</p>
      <input class='number' type='number' id='contribution' min='0' max='104' value='0'><br>
      <p class='label'>Qual seu regime de trabalho:<p/>
      <input class='radio' type='radio' name='sector' value='PRIVATE' checked> CLT
      <input class='radio' type='radio' name='sector' value='PUBLIC'> Estatutário<br>
      <input class= 'button' type='button' value='Calcule' onclick='initialize_calculation()'>
    </div>

    <div class='results' id='id_results'>
      <p id='old_value'></p>
      <p id='new_value'></p>
      <p id='retired'></p>
    </div>
  <p class='descriptive'>Batizada de Proposta de Emenda Constitucional (PEC) 287/2016, entre as alterações, ela pretende implementar: a contribuição mínima de 25 anos e idade mínima de 65 anos para aposentadoria, igualmente para homens e mulheres; a contribuição de 49 anos para ter direito à aposentadoria integral; e a proibição do acúmulo de benefícios, como pensão e aposentadoria.</p><p class='descriptive'>Se aprovada, a nova forma valerá para mulheres de até 45 anos e homens com idade até 50. Os contribuintes que se encontram acima dessa faixa etária ficarão sujeitos a regras especiais de transição.</p>
  <p class='foot-note'>*Está é uma simulação que faz o cálculo aproximado tendo como base idade e tempo de contribuição. </p>
  <p class='foot-note'>Atualizado em: 8 de Dezembro de 2016.</p>


    <script>
    function initialize_calculation(){
      clear_results('new_value');
      clear_results('retired');
      clear_results('old_value');

      var gender_input = document.querySelector('input[name=\"gender\"]:checked').value;
      var age_input = document.getElementById('age').value;
      var contribution_input = document.getElementById('contribution').value;
      var sector_input = document.querySelector('input[name=\"sector\"]:checked').value;
      var result_old = calculadoraOld(gender_input, age_input, contribution_input, sector_input);
      var result_new = calculadoraNew(gender_input, age_input, contribution_input, sector_input);
      if(result_old <= age_input){
        var retired = 'Você já pode se aposentar!<br> As novas Regras não se aplicam.';
        message('retired', retired);
      }
      else {
        message('new_value', result_new, gender_input);
        message('old_value', result_old, gender_input);
      }

    }

    function newRules(gender, age) {

     if((gender == 'F') && (age <=45) || (gender == 'M') && (age <=50)){
       return 'new';
     }
     else {
       return 'old';
     }
    }

    function oldRules(service, gender) {
      if(service == 'PUBLIC'){
        if (gender == 'F') {
          return 'public_woman';
        }
        else if (gender == 'M') {
          return 'public_man';
        }
      }
      else{
        if (gender == 'F') {
          return 'private_woman';
        }
        else if (gender == 'M') {
          return 'private_man';
        }
      }
    }

    function calculateNewRules(age, contribution) {
      var age_time = 65 - age;
      var contribution_time = 25 - contribution;
      var time_left = Math.max(age_time, contribution_time);
      return time_left;
    };

    function calculatePublicOldRulesWoman(age, contribution) {
      var age_time = 55 - age;
      var contribution_time = 30 - contribution;
      var time_left = Math.max(age_time, contribution_time);
      return time_left;
    };

    function calculatePublicOldRulesMan(age, contribution) {
      var age_time = 60 - age;
      var contribution_time = 35 - contribution;
      var time_left = Math.max(age_time, contribution_time);
      return time_left;
    };

    function calculatePrivateOldRulesWoman(age, contribution) {
      var age_time = 60 - age;
      var age_contribution_time = 15 - contribution;
      var contribution_time = 30 - contribution;
      var age_time_left = Math.max(age_time, age_contribution_time);
      var time_left = Math.min(age_time_left, contribution_time);
      return time_left;
    };

    function calculatePrivateOldRulesMan(age, contribution) {
      var age_time = 65 - age;
      var age_contribution_time = 15 - contribution;
      var contribution_time = 35 - contribution;
      var age_time_left = Math.max(age_time, age_contribution_time);
      var time_left = Math.min(age_time_left, contribution_time);
      return time_left;
    };

    function calculadoraNew(gender, age, contribution, service) {
     var rules = newRules(gender, age);

     if (rules == 'new') {
       var result_new = calculateNewRules(age, contribution);
     }
     else {
       var partial = calculadoraOld(gender, age, contribution, service);
       var result_new = (1.5 * Math.abs(age - partial));
     }

     result_new = Number(result_new) + Number(age);
     return Math.round(result_new);

    };

    function calculadoraOld(gender, age, contribution, service) {
     var rules = oldRules(service, gender);

     if (rules == 'public_woman') {
       var result_old = calculatePublicOldRulesWoman(age, contribution);
     }
     else if (rules == 'public_man') {
       var result_old = calculatePublicOldRulesMan(age, contribution);
     }
     else if (rules == 'private_woman') {
       var result_old = calculatePrivateOldRulesWoman(age, contribution);
     }
     else if (rules == 'private_man') {
       var result_old = calculatePrivateOldRulesMan(age, contribution);
     }
     result_old = Number(result_old) + Number(age);
     return Math.round(result_old);
    };

    function message(element, text, gender){
      if ((element == 'new_value') && (gender == 'F')) {
        document.getElementById(element).innerHTML = '<p class=\"result_text\">Se a reforma for aprovada,  você se aposentará com</p>' + '<p id=\"newrulevalue\">' + text + '</p>' + '<p class=\"result_text\">anos</p>' + '<img src=\"//farm1.staticflickr.com/372/31398257901_d881d27df4_b.jpg\" height=\"200px\">';
      }
      else if ((element == 'old_value') && (gender== 'F')){
        document.getElementById(element).innerHTML = '<p class=\"result_text\">Pela legislação atual, você se aposentará com</p>' + '<p id=\"oldrulevalue\">' + text  + '</p>' + '<p class=\"result_text\">anos</p>' + '<img src=\"//farm1.staticflickr.com/548/31142760470_f12634f473_b.jpg\" height=\"200px\">';
      }
      else if((element == 'new_value') && (gender == 'M')) {
        document.getElementById(element).innerHTML = '<p class=\"result_text\">Se a reforma for aprovada,  você se aposentará com</p>' + '<p id=\"newrulevalue\">' + text + '</p>' + '<p class=\"result_text\">anos</p>' + '<img src=\"//farm6.staticflickr.com/5779/31398530051_535089e55c_b.jpg\" height=\"200px\">';
      }
      else if ((element == 'old_value') && (gender== 'M')){
        document.getElementById(element).innerHTML = '<p class=\"result_text\">Pela legislação atual, você se aposentará com</p>' + '<p id=\"oldrulevalue\">' + text  + '</p>' + '<p class=\"result_text\">anos</p>' + '<img src=\"//farm1.staticflickr.com/143/31514149425_55beb2c8c4_b.jpg\" height=\"200px\">';
      }
      else {
        document.getElementById(element).innerHTML = '<p class=\"result_text\">' + text + '</p>';
      }
    };

    function clear_results(div){
      var myNode = document.getElementById(div);
      if (myNode) {
        while (myNode.firstChild) {
          myNode.removeChild(myNode.firstChild);
        };
      };
    };

    </script>
"

  - type: links
    title: "Matérias sobre a Reforma da Previdência"
    links:
      - title: "Reforma da Previdência: deputados analisam pontos prejudiciais à classe trabalhadora"
        url: /2016/12/07/deputados-da-oposicao-criticam-reforma-da-previdencia/
        cover: //farm6.staticflickr.com/5478/31446092906_39165dc1a8_z.jpg
      - title: "Está sobrando (muito) dinheiro na Previdência; entenda os números"
        url: /2016/07/22/esta-sobrando-muito-dinheiro-na-previdencia-entenda-os-numeros/
        cover: //farm9.staticflickr.com/8611/27855260333_de7e65813b_z.jpg
---