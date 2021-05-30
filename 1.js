 
    function compute()
    {
        var cYear = new Date().getFullYear();
        var p = +(document.getElementById("principal").value);
        var r = +(document.getElementById("rate").value);
        var t =+(document.getElementById("years").value);
        
        if (p > 0){
        var amt=(p+((p*r*t)/100));
        var nYear = cYear+t;






        var msg = "If you deposit "+p+" ,<br>at an interest rate of "+r+"%.<br>You will receive an amount of "+amt+".<br>in the year "+nYear
        document.getElementById("r").innerHTML= msg;
        }
        else{
            alert("please enter a positive number")
        }
    }

