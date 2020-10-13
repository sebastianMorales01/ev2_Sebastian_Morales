export default{
    valores: {
        dolar:628.68, 
        uf:26648.67, 
        euro:740.67
    },
    data:`
        <h2>Sebastian Morales</h2>
        Valor en pesos CL </br>
        $<input id="txt1" type="number"/></br></br>
        <input id="dolar" type="radio" name="grupo"  checked>a Dolar
        <input id="uf" type="radio" name="grupo" >a UF
        <input id="euro" type="radio" name="grupo" >a Euro
        <br><br>
        <button onclick="calcular()">Calcular</button>
        <p id="resp"></p>  
    `,
    calcular: function () {
        var pesos = document.getElementById("txt1").value;
        var resp = document.getElementById("resp");
        var opciones = document.getElementsByName("grupo");
        var calculo="";
        var final="";
        opciones.forEach((item) => {
            if (item.checked) { 
               calculo = item.id;
            }
        });

        
        if (pesos > 0 && pesos!=0) {
            resp.style.color = "blue";
            if (calculo==dolar) {
                final = pesos/parseInt(this.valores.dolar);
            } else if(calculo == uf){
                final = pesos/this.valores.uf;
            }else{
                final = pesos/this.valores.euro;
            }
            resp.innerHTML = `Equivale a ${(final).toFixed(0) +" "+calculo}`;
        } else {
            resp.style.color = "red";
            resp.innerHTML = `Ingrese un valor positivo`;
        }

    }


}