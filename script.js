 //el nostre codi javascript
        
        //constants del joc
        const NUM_JUGADES = 20; //variable global
        
        //variables del joc
        let numJugades;

        function reiniciaPartida(){
           //let num = document.getElementById("num");
            //num.value="";
            //console.log(num.value);
            //console.log("reinicia partida");
            //alert('hello world!'); comprovant
        }

        

        function jugada(){

            let num = document.getElementById("num").value;

            if(num){
                numJugades=numJugades-1;
                document.getElementById("numComptador").textContent=numJugades;
                //console.log("te valor")
            }
            else{
                alert("No has escrit cap valor");
                //console.log("NO TE VALOR!")
            }
            console.log(numJugades, typeof numJugades);            
            //let numNumber = Number(num);
            //numNumber=numNumber -1;
            //console.log(numNumber, typeof numNumber);
            //console.log("jugada");
            //desincrementar un jugada
            //numJugades = numJugades -1;
            //console.log(numJugades);

            //comparar el numero amb el numero secret
        }