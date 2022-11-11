function calcular(n1,n2){
    n1 = parseFloat(document.getElementById("n1").value)
    n2 = parseFloat(document.getElementById("n2").value)

    seletor = document.getElementById("selector").value

    switch(seletor){
        case '+':
            calculo = (n1 + n2)
            document.getElementById("resultado").innerHTML = `O resultado da soma de ${n1} + ${n2} é = ${calculo}`
            break

        case '-':
            calculo = (n1 - n2)
            document.getElementById("resultado").innerHTML = `O resultado da subtração de ${n1} - ${n2} é = ${calculo}`
            break
            
        case '/':
            calculo = Math.round(n1 / n2)
            if(Number.isNaN(calculo)){
                document.getElementById("resultado").innerHTML = `Insira um divisivel Válido`
            } else {
                document.getElementById("resultado").innerHTML = `O resultado da Divisão de ${n1} / ${n2} é = ${calculo}`
            break

            }
            
        case '*':
            calculo = (n1 * n2)
            document.getElementById("resultado").innerHTML = `O resultado da Multiplicação de ${n1} * ${n2} é = ${calculo}`
            break      
    }
}