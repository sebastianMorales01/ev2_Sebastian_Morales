export default {
    factura:{
        cliente:"INFORMATICA INACAP",
        domicilio:"AV. SAN MIGUEL 445",
        ciudad:"Talca",
        telefono:"223344",
        detalle:[
            {codigo:1,cantidad:3,descripcion:'PASTEL MIL HOJAS', precioUnitario:10000},
            {codigo:2,cantidad:4,descripcion:'GALLETAS FINAS', precioUnitario:8000},
            {codigo:3,cantidad:2,descripcion:'BERLIN', precioUnitario:500},
            {codigo:4,cantidad:1,descripcion:'PIE DE LIMON', precioUnitario:10000},
            {codigo:5,cantidad:5,descripcion:'PASTEL MANJAR', precioUnitario:12000},
            {codigo:6,cantidad:3,descripcion:'PASTEL CREMA', precioUnitario:13000}
        ]
    },
    data:`
        <h3 id="autor"> Autor: Sebastian Morales </h3>
        <div id="result"></div>
        <div id="table"></div>
    `,
    cargar : function() {
        var result = document.getElementById("result");
        var table = document.getElementById("table");
        var autor = document.getElementById("autor")
        var tabla="";
        result.innerHTML = `
            CLIENTE: ${this.factura.cliente}<br>
            DOMICILIO: ${this.factura.domicilio}<br>
            CIUDAD: ${this.factura.ciudad} <br>
            TELEFONO: ${this.factura.telefono}
        `;
        result.style.border="thin solid black";
        result.style.padding="10px";
        result.style.width="578px";
        result.style.marginBottom="10px";
        autor.style.marginLeft="200px";
        
        var subtotal = 0;
        var tabla =`
            <table border="1" width="600" heigth="400">
                <tr>
                    <th>Codigo</th>
                    <th>Cantidad</th>
                    <th>Descripcion</th>
                    <th>Precio Unitario</th>
                    <th>Total</th>
                </tr>
        `;
        this.factura.detalle.forEach((item) =>{
            var total = item.cantidad * item.precioUnitario;
            tabla+=`
                <tr>
                    <td>${item.codigo}</td>
                    <td>${item.cantidad}</td>
                    <td>${item.descripcion}</td>
                    <td>${item.precioUnitario}</td>
                    <td>${total}</td>
                </tr>
            `;
            subtotal+=total;
        });
        tabla +=`<tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>SubTotal:</td>
                    <td>${subtotal}</td>
                <tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>IVA(19%):</td>
                    <td>${subtotal*0.19}</td>
                <tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>TOTAL:</td>
                    <td>${subtotal+(subtotal*0.19)}</td>
                <tr>
        `;

        tabla += '</table>';

        table.innerHTML = tabla;
    }

}