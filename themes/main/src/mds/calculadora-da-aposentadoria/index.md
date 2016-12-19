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


      #new_value, #old_value, #new_value_partial, #old_value_partial {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 30px 1px;
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
      <p class='descriptive'>Para exemplificar as mudanças que a proposta quer implementar na atual legislação, o Brasil de Fato lança nesta quinta-feira (8) a Calculadora da Aposentadoria. Ao analisar seu resultado, é importante considerar que, atualmente, a expectativa de vida do brasileiro está em 73,62 anos. Confira!</p>
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

    <div class='results' id='id_results_maximum'></div>
    <div class='results' id='id_results_minimum'></div>

    <p class='descriptive'>Batizada de Proposta de Emenda Constitucional (PEC) 287/2016, entre as alterações, ela pretende implementar: a contribuição mínima de 25 anos e idade mínima de 65 anos para aposentadoria, igualmente para homens e mulheres; a contribuição de 49 anos para ter direito à aposentadoria integral; e a proibição do acúmulo de benefícios, como pensão e aposentadoria.</p><p class='descriptive'>Se aprovada, a nova forma valerá para mulheres de até 45 anos e homens com idade até 50. Os contribuintes que se encontram acima dessa faixa etária ficarão sujeitos a regras especiais de transição.</p>
    <p class='foot-note'>*O cálculo da legislação atual não é válido para quem tem aposentadoria especial, como professores, policiais, trabalhadores rurais e profissionais que recebem adicional de insalubridade ou de periculosidade.</p>
    <p class='foot-note'>**O cálculo das duas regras não é válido para militares, que, até o momento, não serão afetados pela reforma da Previdência.</p>
    <p class='foot-note'>***Para valer essa regra, o servidor tem que cumprir 20 anos de efetivo exercício no serviço público, dentre eles cinco no cargo em que vai se aposentar</p>
    <p class='foot-note'>Atualizado em: 13 de Dezembro de 2016.</p>


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
        var retired = 'Você já pode se aposentar! As novas regras não se aplicam';
        message('retired', retired);
      }
      else {
        message('id_results_maximum', 'old_value', result_old[1], gender_input);
        message('id_results_maximum', 'new_value', result_new[1], gender_input);
        message('id_results_minimum', 'old_value_partial', result_old[0], gender_input);
        message('id_results_minimum', 'new_value_partial', result_new[0], gender_input);
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
        return 'private';
      }
    }

    function calculateNewRules(age, contribution) {
      var age_time = 65 - age;
      var contribution_time = 25 - contribution;
      var time_left_minimum = Math.max(age_time, contribution_time);

      var time_left_maximum  = Number(49) - Number(contribution);

      if(time_left_minimum > time_left_maximum){
        time_left_minimum = time_left_maximum;
      }
      var result = [time_left_minimum, time_left_maximum];
      return result;
    };

    function calcularEstatutario(age, contribution, gender) {
      var gender_age_minimum = (gender == 'F' ? 60 : 65 );
      var age_time_minimum = Number(gender_age_minimum) - Number(age);
      var contribution_minimum = Number(10) - Number(contribution);
      var time_left_minimum = Math.max(Number(age_time_minimum), Number(contribution_minimum));

      var gender_age = (gender == 'F' ? 55 : 60 );
      var gender_contribution = (gender == 'F' ? 30 : 35 );
      var gender_limit = (gender == 'F' ? 70 : 75 );

      var age_time = Number(gender_age) - Number(age);
      var contribution_time = Number(gender_contribution) - Number(contribution);
      var time_left_maximum = Math.max(Number(age_time), Number(contribution_time));
      var age_maximum = Number(time_left_maximum) + Number(age);
      if((age_maximum) >= gender_limit) {
        time_left_maximum = gender_limit;
      }

      if(time_left_minimum > time_left_maximum){
        time_left_minimum = time_left_maximum;
      }

      var time_left = [time_left_minimum, time_left_maximum];

      return time_left;
    }

    function calcularCLTPorContribuicao(age, contribution, gender) {
      var gender_age = (gender == 'F' ? 30 : 35 );
      var gender_contribution = (gender == 'F' ? 85 : 95 );

      var time_left_minimum = Number(gender_age) - Number(contribution);
      time_left_minimum = Math.max(0, time_left_minimum);

      var time_left_maximum = Number(gender_contribution) - Number(age) - Number(contribution);
      time_left_maximum = Math.round(Number(time_left_maximum)/Number(2));
      time_left_maximum = Math.max(0, time_left_maximum);

      if(time_left_maximum < time_left_minimum){
        time_left_maximum = time_left_minimum;
      }

      var time_left = [time_left_minimum, time_left_maximum];

      return time_left;
    };

    function calcularCLTPorIdade(age, contribution, gender) {
      var gender_age = (gender == 'F' ? 60 : 65 );

      var age_time = gender_age - age;
      var age_contribution_time = 15 - contribution;
      var time_left_minimum = Math.max(age_time, age_contribution_time);

      var time_left_maximum = Number(time_left_minimum) + Number(30);

      if(time_left_minimum > time_left_maximum){
        time_left_minimum = time_left_maximum;
      }

      var time_left = [time_left_minimum, time_left_maximum];
      return time_left;
    }

    function calculadoraNew(gender, age, contribution, service) {
     var rules = newRules(gender, age);

     if (rules == 'new') {
       var result_new = calculateNewRules(age, contribution);
     }
     else {
       var partial = calculadoraOld(gender, age, contribution, service);
       var minimum = (Number(1.5) * Math.abs(Number(age) - Number(partial[0])));
       var integral = calculateNewRules(age, contribution);
       var maximum = integral[1];
       var result_new = [minimum, maximum];
     }

     result_new = retorna_idade(result_new, age);
     return result_new;

    };

    function calculadoraOld(gender, age, contribution, service) {
       var rules = oldRules(service, gender);

       if (rules == 'private') {
         var por_idade = calcularCLTPorIdade(age, contribution, gender);
         var por_contribuicao = calcularCLTPorContribuicao(age, contribution, gender);

         var result_old = minimo_de_duas_listas(por_idade, por_contribuicao);
       }

       else {
         var result_old = calcularEstatutario(age, contribution, gender);
       }

      result_old = retorna_idade(result_old, age);

      return result_old;
    };

    function message(id_results, id_value, text, gender){
      var element = id_results;
      var pai = document.getElementById(element);
      var newParagraph = document.createElement('p');
      newParagraph.id= id_value;
      pai.appendChild(newParagraph);

      if(id_value == 'new_value') {
        document.getElementById(id_value).innerHTML = '<p class=\"result_text\">Se a reforma for aprovada com</p>' + '<p id=\"newrulevalue\">' + text + '</p>' + '<p class=\"result_text\">anos você receberá sua <br><b>aposentadoria integral</b></p>';
      }
      else if (id_value == 'old_value'){
        document.getElementById(id_value).innerHTML = '<p class=\"result_text\">Pela legislação atual com</p>' + '<p id=\"oldrulevalue\">' + text  + '</p>' + '<p class=\"result_text\">anos você receberá sua <br><b>aposentadoria integral</b></p>';
      }
      else if(id_value == 'new_value_partial') {
        document.getElementById(id_value).innerHTML = '<p class=\"result_text\">Se a reforma for aprovada com</p>' + '<p id=\"newrulevalue\">' + text + '</p>' + '<p class=\"result_text\">anos você receberá <br><b>aposentadoria proporcional</b></p>';
      }
      else if (id_value == 'old_value_partial'){
        document.getElementById(id_value).innerHTML = '<p class=\"result_text\">Pela legislação atual com</p>' + '<p id=\"oldrulevalue\">' + text  + '</p>' + '<p class=\"result_text\">anos você receberá <br><b>aposentadoria proporcional</b></p>';
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

    function minimo_de_duas_listas(lista_1, lista_2) {
      var result = [];

      for (var i=0; i <2; i++) {
        result[i] = Math.min(Number(lista_1[i]), Number(lista_2[i]));
      }

      return result;
    }

    function retorna_idade (lista, idade_atual) {
      var result = [];
      for (var i=0; i <2; i++) {
        result[i] = Math.round(Number(lista[i]) + Number(idade_atual));
      }
      return result;
    }

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
