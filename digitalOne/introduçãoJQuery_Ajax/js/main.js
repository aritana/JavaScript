function consultaCep() {

    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/";
    var cepSaida;
    console.log(url);
    $(".barra-progresso").show();
    $.ajax({
        url: url,
        type: "GET",
        success: function (response) {
            console.log(response);
            // document.getElementById("logradouro").innerHTML=response.logradouro;
            // document.getElementById("complemento").innerHTML=response.complemento;
            // document.getElementById("bairro").innerHTML=response.bairro;
            // document.getElementById("localidade").innerHTML=response.localidade;
            // document.getElementById("uf").innerHTML=response.uf;
            $("#logradouro").html(response.logradouro);
            $("#complemento").html(response.complemento);
            $("#bairro").html(response.bairro);
            $("#localidade").html(response.localidade);
            $("#uf").html(response.uf);
            $("#titulo_cep").html("CEP " + response.cep)
            $(".cep").show();
            $(".barra-progresso").hide();
        }

    })

}
$(function () {
    $(".cep").hide();
});

$(function () {
    $(".barra-progresso").hide();
});