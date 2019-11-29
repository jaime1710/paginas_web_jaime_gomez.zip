   var operandoa = 0;// variables, aqui se almacena el primer valor
   var operacionrealizar = "" //se almacena la operacion que se va a realizar

   function operar(valor, operacion){
switch (operacion) {
  case "+":
    operandoa = parseFloat(valor);
    operacionrealizar = operacion;
document.getElementById("display").innerHTML = 0;
break
case "-":
   operandoa = parseFloat(valor);
   operacionrealizar = operacion;
   document.getElementById("display").innerHTML = 0;
   break
case "*":
   operandoa = parseFloat(valor);
   operacionrealizar = operacion;
   document.getElementById("display").innerHTML = 0;
   break
case "/":
   operandoa = parseFloat(valor);
   operacionrealizar = operacion;
   document.getElementById("display").innerHTML = 0;
   break
   case "=":
     var string = operandoa + " " + operacionrealizar + " " + parseFloat(valor);
     document.getElementById("display").innerHTML = eval(string)
     document.getElementById("display").innerHTML = document.getElementById("display").innerHTML.slice(0,9);
     break
  }
}
  var calculadora = {
             //variables  para uso de los metodos
    init: function () {
      var self = this
      var cero = document.getElementById("0")
      var uno = document.getElementById("1")
      var dos = document.getElementById("2")
      var tres = document.getElementById("3")
      var cuatro = document.getElementById("4")
      var cinco = document.getElementById("5")
      var seis = document.getElementById("6")
      var siete = document.getElementById("7")
      var ocho = document.getElementById("8")
      var nueve = document.getElementById("9")
      var punto = document.getElementById("punto")
      var on = document.getElementById("on")
      var sign = document.getElementById("sign")
      var raiz = document.getElementById("raiz")
      var suma = document.getElementById("suma")
      var div = document.getElementById("div")
      var por = document.getElementById("por")
      var menos = document.getElementById("menos")
      var mas = document.getElementById("mas")
      var igual = document.getElementById("igual")
      var display = document.getElementById("display")


      function tecla(valor) { //la funcion tecla
        if (display.textContent == "0") {
          display.textContent = valor;
        } else {
          display.textContent += valor;
        }
      }

      var cero = document.getElementById("0")
      cero.addEventListener("click", function () {
        if (display.innerHTML.length < 9)
        tecla("0");
      })
                      //metodos para aumentar y reducir con la tecla presionada
      cero.addEventListener("mousedown", function () {
        cero.setAttribute("style", "transform:scale(0.95,0.95)")
      })
      cero.addEventListener("mouseout", function () {
        cero.setAttribute("style", "transform:scale(1.1)")
      })

      uno.addEventListener("click", function () {
        if (display.innerHTML.length < 8) //ara la accion solo si hasta que tenga 8 caracteres
        tecla("1");

      })
      uno.addEventListener("mousedown", function () {
        uno.setAttribute("style", "transform:scale(0.95,0.95)")
      })
      uno.addEventListener("mouseout", function () {
        uno.setAttribute("style", "transform:scale(1.1)")
      })

      dos.addEventListener("click", function () {
        if (display.innerHTML.length < 8)
       tecla("2");
      })
      dos.addEventListener("mousedown", function () {
        dos.setAttribute("style", "transform:scale(0.95,0.95)")
      })
      dos.addEventListener("mouseout", function () {
        dos.setAttribute("style", "transform:scale(1.1)")
      })

      tres.addEventListener("click", function () {
        if (display.innerHTML.length < 8)
      tecla("3");
      })
      tres.addEventListener("mousedown", function () {
        tres.setAttribute("style", "transform:scale(0.95,0.95)")
      })
      tres.addEventListener("mouseout", function () {
        tres.setAttribute("style", "transform:scale(1.1)")
      })

      cuatro.addEventListener("click", function () {
         if (display.innerHTML.length < 8)
       tecla("4");
      })
      cuatro.addEventListener("mousedown", function () {
        cuatro.setAttribute("style", "transform:scale(0.95,0.95)")
      })
      cuatro.addEventListener("mouseout", function () {
        cuatro.setAttribute("style", "transform:scale(1.1)")
      })

      cinco.addEventListener("click", function () {
         if (display.innerHTML.length < 8)
       tecla("5");
      })
      cinco.addEventListener("mousedown", function () {
        cinco.setAttribute("style", "transform:scale(0.95,0.95)")
      })
      cinco.addEventListener("mouseout", function () {
        cinco.setAttribute("style", "transform:scale(1.1)")
      })

      seis.addEventListener("click", function () {
         if (display.innerHTML.length < 8)
      tecla("6");
      })
      seis.addEventListener("mousedown", function () {
        seis.setAttribute("style", "transform:scale(0.95,0.95)")
      })
      seis.addEventListener("mouseout", function () {
        seis.setAttribute("style", "transform:scale(1.1)")
      })

      siete.addEventListener("click", function () {
         if (display.innerHTML.length < 8)
       tecla("7");
      })
      siete.addEventListener("mousedown", function () {
        siete.setAttribute("style", "transform:scale(0.95,0.95)")
      })
      siete.addEventListener("mouseout", function () {
        siete.setAttribute("style", "transform:scale(1.1)")
      })

      ocho.addEventListener("click", function () {
         if (display.innerHTML.length < 8)
       tecla("8");
      })
      ocho.addEventListener("mousedown", function () {
        ocho.setAttribute("style", "transform:scale(0.95,0.95)")
      })
      ocho.addEventListener("mouseout", function () {
        ocho.setAttribute("style", "transform:scale(1.1)")
      })

      nueve.addEventListener("click", function () {
          if (display.innerHTML.length < 8)
       tecla("9");
      })
      nueve.addEventListener("mousedown", function () {
        nueve.setAttribute("style", "transform:scale(0.95,0.95)")
      })
      nueve.addEventListener("mouseout", function () {
        nueve.setAttribute("style", "transform:scale(1.1)")
      })

      punto.addEventListener("click", function () {
          if (display.innerHTML.length < 8)
       tecla(".");
      })
      punto.addEventListener("mousedown", function () {
        punto.setAttribute("style", "transform:scale(0.95,0.95)")
      })
      punto.addEventListener("mouseout", function () {
        punto.setAttribute("style", "transform:scale(1.1)")
      })

      igual.addEventListener("click", function () {
           if (display.innerHTML.length < 8)
        operar(display.innerHTML, "=");

      })
      igual.addEventListener("mousedown", function () {
        igual.setAttribute("style", "transform:scale(0.95,0.95)")
      })
      igual.addEventListener("mouseout", function () {
        igual.setAttribute("style", "transform:scale(1.1)")
      })

      mas.addEventListener("click", function () {
         if (display.innerHTML.length < 8)
        operar(display.innerHTML, "+");
      })
      mas.addEventListener("mousedown", function () {
        mas.setAttribute("style", "transform:scale(0.95,0.95)")
      })
      mas.addEventListener("mouseout", function () {
        mas.setAttribute("style", "transform:scale(1.1)")
      })
      por.addEventListener("click", function () {
           if (display.innerHTML.length < 8)
        operar(display.innerHTML, "*");
      })
      por.addEventListener("mousedown", function () {
        por.setAttribute("style", "transform:scale(0.95,0.95)")
      })
      por.addEventListener("mouseout", function () {
        por.setAttribute("style", "transform:scale(1.1)")
      })
      menos.addEventListener("click", function () {
           if (display.innerHTML.length < 8)
        operar(display.innerHTML, "-");
      })
      menos.addEventListener("mousedown", function () {
        menos.setAttribute("style", "transform:scale(0.95,0.95)")
      })
      menos.addEventListener("mouseout", function () {
        menos.setAttribute("style", "transform:scale(1.1)")
      })
      dividido.addEventListener("click", function () {
         if (display.innerHTML.length < 8)
        operar(display.innerHTML, "/");
      })
      dividido.addEventListener("mousedown", function () {
        dividido.setAttribute("style", "transform:scale(0.95,0.95)")
      })
      dividido.addEventListener("mouseout", function () {
        dividido.setAttribute("style", "transform:scale(1.1)")

      })

      on.addEventListener("click", function () {

        operar(display.innerHTML="0")
          })
      on.addEventListener("mousedown", function () {
        on.setAttribute("style", "transform:scale(0.95,0.95)")
      })
      on.addEventListener("mouseout", function () {
        on.setAttribute("style", "transform:scale(1.1)")
      })
      sign.addEventListener("click", function () {
        tecla("sign");
      })
      sign.addEventListrener("mousedown", function () {
        sign.setAttribute("style", "transform:scale(0.95,0.95)")
      })
      sign.addEventListener("mouseout", function () {
        sign.setAttribute("style", "transform:scale(1.1)")
      })
      raiz.addEventListener("click", function () {
      var operar = Math.sqrt(display.innerHTML);
      //var=Math.sqrt(display.innerHTML);
        //  operar(display.innerHTML, "")
      })
      raiz.addEventListener("mousedown", function () {
        raiz.setAttribute("style", "transform:scale(0.95,0.95)")
      })
      raiz.addEventListener("mouseout", function () {
        raiz.setAttribute("style", "transform:scale(1.1)")
      })
    }
  }
  //llamada de la function
  calculadora.init();

// usar las propiedades

// .length que tiene las cadenas de texto es decir la variable para obtiener la longitud
// y limitar a solo 8 caracteres por ejemplo:
// if(display.innerHTML.length < 8) { haces la acción }
// de este modo solo siempre y cuando sean 8 caracteres hará una acción
// y el valor es mayor que 8 no hará nada
// esta condición estaria dentro de cada evento de teclas
// los eventos clic
//
// uno.addEventListener("click", function () {
// if (display.innerHTML.length < 8)
// tecla("1");
// }
// })
// uno.addEventListener("click", function () {
// if (display.innerHTML.length < 8)
// tecla("1");
// }
// })
// var raiz = Math.sqrt(display.innerHTML);
// Math.sqrt es un metodo de javascript
// que devuelve la raiz cuadrada de un numero
