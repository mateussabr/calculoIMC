document.addEventListener("DOMContentLoaded", function()
{
    const form = document.getElementById("calc-form");
    const input_name = document.getElementById("name");
    const span_message_error = document.getElementById("message-error");
    const div_result = document.getElementById("result");


    form.addEventListener("submit", function(event)
    {
        event.preventDefault();

        if(input_name.value === "" || input_name.value === null)
        {
            span_message_error.style.display = "inline-block";
        }
        else
        {
            span_message_error.style.display = "none";
        
       
            let height = parseFloat(document.getElementById("height").value);
            let weight = parseFloat(document.getElementById("weight").value);
            let imc = weight / (height ** 2);

            div_result.style.color = "white";

            if (imc < 18.5) 
            {
                div_result.style.backgroundColor = "#E52207";
                div_result.innerHTML = `<p>Nome : ${input_name.value}</br>IMC: ${imc.toFixed(2)}</br>Categoria: Abaixo do peso</p>`;
            } 
            else if (imc >= 18.5 && imc < 25) 
            {
                div_result.style.backgroundColor = "#168821";
                div_result.innerHTML = `<p>Nome : ${input_name.value}</br>IMC: ${imc.toFixed(2)}</br>Categoria: Peso adequado</p>`;
            } 
            else if (imc >= 25 && imc < 30) 
            {
                div_result.style.backgroundColor = "#FFCD07";
                div_result.innerHTML = `<p>Nome : ${input_name.value}</br>IMC: ${imc.toFixed(2)}</br>Categoria: Sobrepeso</p>`;
            } 
            else 
            {
                div_result.style.backgroundColor = "#E52207";
                div_result.innerHTML = `<p>Nome : ${input_name.value}</br>IMC: ${imc.toFixed(2)}</br>Categoria: Obesidade</p>`;
            }

            let date = new FormData(form);

            for(let [key, value] of date.entries())
            {
                console.log(key + " : " + value);
            }
        }
    })
})