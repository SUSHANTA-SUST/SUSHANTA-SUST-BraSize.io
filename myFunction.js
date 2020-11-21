function myFunction() {
    var underbust = document.getElementById("ub1").value;
    var overbust = document.getElementById("ob2").value;
    var roundunderbust = Math.round(underbust);
    var roundoverbust = Math.round(overbust);
    var sizeBra = roundunderbust/ roundoverbust;
    if (Number.isInteger(sizeBra)===true){
        document.getElementById("calculatedSize").innerHTML = sizeBra;
    }
     
    if (Number.isInteger(sizeBra)===false){
        var roundSize = Math.round(sizeBra);
        document.getElementById("calculatedSize").innerHTML = roundSize;
    }
}


