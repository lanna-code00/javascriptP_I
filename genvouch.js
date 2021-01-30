var products;
var date_string;
function clocke() {
    var der = new Date();
    var DD = ("0" + der.getDate()).slice(-2);
    var MM = ("0" + (der.getMonth() + 1)).slice(-2);
    var YYYY = der.getFullYear();
    var hh = ("0" + der.getHours()).slice(-2);
    var mm = ("0" + der.getMinutes()).slice(-2);
    var ss = ("0" + der.getSeconds()).slice(-2);
    date_string =  DD + "-" + MM + "-" + YYYY + " "+ hh + ":" + mm + ":" + ss;
    document.getElementById("timing3").innerHTML = date_string;
    setTimeout('clocke()',1000);
}
clocke();

$(document).ready(function(){
    $('#selectproducts').change(function(){
       products = selectproducts.value;
        if(products = 'airtime'){
            $('#selectnetwork').addClass('show');
        }

       
    })
})

$(document).ready(function(){
    $("#selectnetwork").change(function(){
        var networks=selectnetwork.value;
    if (networks=="mtn" || networks=="glo" || networks=="airtel" || networks=="etisalat") {
    $("#selectAmt").addClass('show');
    
    $("#selectcardQuantity").addClass('show');
    
    
    }
    
    })
    })

    var allairtimes1, allairtimes2, allairtimes3, allairtimes5;

function generatecards() {
   
    // if (Number(JSON.parse(localStorage.mtn)) > 0 && Number(JSON.parse(localStorage.glo)) > 0 && Number(JSON.parse(localStorage.airtel)) > 0) {
    //     console.log('e don sharp')
    // } else {
    //     localStorage.setItem('mtn', JSON.stringify('N0.00'))
    //     localStorage.setItem('glo', JSON.stringify('N0.00'))
    //     localStorage.setItem('airtel', JSON.stringify('N0.00'))
    // }
    var snapdate = date_string;
   
    var netWorks = selectNetork.value;
    var amounts = selectAmount.value;
    var qty = selectQty.value;

    var airtime1 = Math.floor(Math.random()*10000);
    var airtime2 = Math.floor(Math.random()*10000);
    var airtime3 = Math.floor(Math.random()*10000);
    var airtime4 = Math.floor(Math.random()*10000);
    allairtimes1 = airtime1 + '-' + airtime2 + '-' + airtime3 + '-' + airtime4;
    
    var airtime11 = Math.ceil(Math.random()*10000);
    var airtime22 = Math.ceil(Math.random()*10000);
    var airtime33 = Math.ceil(Math.random()*10000);
    var airtime44 = Math.ceil(Math.random()*10000);
    allairtimes2 = airtime11 + '-' + airtime22 + '-' + airtime33 + '-' + airtime44;

    var airtime111 = Math.ceil(Math.random()*10000);
    var airtime222 = Math.ceil(Math.random()*10000);
    var airtime333 = Math.ceil(Math.random()*10000);
    var airtime444 = Math.ceil(Math.random()*10000);
    allairtimes3 = airtime111 + '-' + airtime222 + '-' + airtime333 + '-' + airtime444;

    var airtime1111 = Math.ceil(Math.random()*10000);
    var airtime2222 = Math.ceil(Math.random()*10000);
    var airtime3333 = Math.ceil(Math.random()*10000);
    var airtime4444 = Math.ceil(Math.random()*10000);
    allairtimes4 = airtime1111 + '-' + airtime2222 + '-' + airtime3333 + '-' + airtime4444;

    var airtime11111 = Math.ceil(Math.random()*10000);
    var airtime22222 = Math.ceil(Math.random()*10000);
    var airtime33333 = Math.ceil(Math.random()*10000);
    var airtime44444 = Math.ceil(Math.random()*10000);
    allairtimes5 = airtime11111 + '-' + airtime22222 + '-' + airtime33333 + '-' + airtime44444;

$('#timing3').addClass('show');

//mtn service starts for 100//

if (netWorks == 'mtn' && amounts == '100' && qty == '1') {
    $('#showcard1').show(1000);
    $('#activebtn2').hide();
    document.getElementById('displaycard1').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N100'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:MTN'+'<br>'+'Pin' + ' ' +':'+ ' ' +allairtimes1 + "<br/>";
} 
else if ( netWorks=="mtn"  && amounts=='100' && qty=="2") {
    $('#showcard1').show(1000);
    $('#activebtn2').show();

    document.getElementById('displaycard1').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N100'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:MTN'+'<br>'+'Pin' +' ' +':'+ ' ' + allairtimes1;
    document.getElementById('displaycard2').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N100'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:MTN'+'<br>'+'Pin'+ ' ' +':'+ ' ' + allairtimes2;
  }

else if ( netWorks=="mtn"  && amounts=='100' && qty=="3") {
    $('#showcard1').show(1000);
    $('#activebtn2').show();
    $('#activebtn3').show();

    document.getElementById('displaycard1').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N100'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:MTN'+'<br>'+'Pin' +' ' +':'+ ' ' + allairtimes1;
    document.getElementById('displaycard2').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N100'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:MTN'+'<br>'+'Pin'+ ' ' +':'+ ' ' + allairtimes2;
    document.getElementById('displaycard3').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N100'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:MTN'+'<br>'+'Pin'+ ' ' +':'+ ' ' + allairtimes3;
  }

  else if ( netWorks=="mtn"  && amounts=='100' && qty=="4") {
    $('#showcard1').show(1000);
    $('#activebtn2').show();
    $('#activebtn3').show();
    $('#activebtn4').show();
    
    document.getElementById('displaycard1').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N100'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:MTN'+'<br>'+'Pin' +' ' +':'+ ' ' + allairtimes1;
    document.getElementById('displaycard2').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N100'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:MTN'+'<br>'+'Pin'+ ' ' +':'+ ' ' + allairtimes2;
    document.getElementById('displaycard3').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N100'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:MTN'+'<br>'+'Pin'+ ' ' +':'+ ' ' + allairtimes3;
    document.getElementById('displaycard4').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N100'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:MTN'+'<br>'+'Pin'+ ' ' +':'+ ' ' + allairtimes4;
  }

  else if ( netWorks=="mtn"  && amounts=='100' && qty=="5") {
    $('#showcard1').show(1000);
    $('#activebtn2').show();
    $('#activebtn3').show();
    $('#activebtn4').show();
    $('#activebtn5').show();

    
    document.getElementById('displaycard1').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N100'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:MTN'+'<br>'+'Pin' +' ' +':'+ ' ' + allairtimes1;
    document.getElementById('displaycard2').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N100'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:MTN'+'<br>'+'Pin'+ ' ' +':'+ ' ' + allairtimes2;
    document.getElementById('displaycard3').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N100'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:MTN'+'<br>'+'Pin'+ ' ' +':'+ ' ' + allairtimes3;
    document.getElementById('displaycard4').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N100'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:MTN'+'<br>'+'Pin'+ ' ' +':'+ ' ' + allairtimes4;
    document.getElementById('displaycard5').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N100'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:MTN'+'<br>'+'Pin'+ ' ' +':'+ ' ' + allairtimes4;
  }

// mtn serice ends for 100//



// mtn service for 200 starts //

if (netWorks == 'mtn' && amounts == '200' && qty == '1') {
    $('#showcard1').show(1000);
    $('#activebtn2').hide();
    document.getElementById('displaycard1').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N200'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:MTN'+'<br>'+'Pin' + ' ' +':'+ ' ' +allairtimes1;
} 
else if ( netWorks=="mtn"  && amounts=='200' && qty=="2") {
    $('#showcard1').show(1000);
    $('#activebtn2').show();

    document.getElementById('displaycard1').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N200'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:MTN'+'<br>'+'Pin' +' ' +':'+ ' ' + allairtimes1;
    document.getElementById('displaycard2').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N200'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:MTN'+'<br>'+'Pin'+ ' ' +':'+ ' ' + allairtimes2;
  }

else if ( netWorks=="mtn"  && amounts=='200' && qty=="3") {
    $('#showcard1').show(1000);
    $('#activebtn2').show();
    $('#activebtn3').show();

    document.getElementById('displaycard1').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N200'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:MTN'+'<br>'+'Pin' +' ' +':'+ ' ' + allairtimes1;
    document.getElementById('displaycard2').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N200'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:MTN'+'<br>'+'Pin'+ ' ' +':'+ ' ' + allairtimes2;
    document.getElementById('displaycard3').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N200'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:MTN'+'<br>'+'Pin'+ ' ' +':'+ ' ' + allairtimes3;
  }

  else if ( netWorks=="mtn"  && amounts=='200' && qty=="4") {
    $('#showcard1').show(1000);
    $('#activebtn2').show();
    $('#activebtn3').show();
    $('#activebtn4').show();
    
    document.getElementById('displaycard1').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N200'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:MTN'+'<br>'+'Pin' +' ' +':'+ ' ' + allairtimes1;
    document.getElementById('displaycard2').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N200'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:MTN'+'<br>'+'Pin'+ ' ' +':'+ ' ' + allairtimes2;
    document.getElementById('displaycard3').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N200'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:MTN'+'<br>'+'Pin'+ ' ' +':'+ ' ' + allairtimes3;
    document.getElementById('displaycard4').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N200'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:MTN'+'<br>'+'Pin'+ ' ' +':'+ ' ' + allairtimes4;
  }

  else if ( netWorks=="mtn"  && amounts=='200' && qty=="5") {
    $('#showcard1').show(1000);
    $('#activebtn2').show();
    $('#activebtn3').show();
    $('#activebtn4').show();
    $('#activebtn5').show();

    
    document.getElementById('displaycard1').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N200'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:MTN'+'<br>'+'Pin' +' ' +':'+ ' ' + allairtimes1;
    document.getElementById('displaycard2').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N200'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:MTN'+'<br>'+'Pin'+ ' ' +':'+ ' ' + allairtimes2;
    document.getElementById('displaycard3').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N200'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:MTN'+'<br>'+'Pin'+ ' ' +':'+ ' ' + allairtimes3;
    document.getElementById('displaycard4').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N200'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:MTN'+'<br>'+'Pin'+ ' ' +':'+ ' ' + allairtimes4;
    document.getElementById('displaycard5').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N200'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:MTN'+'<br>'+'Pin'+ ' ' +':'+ ' ' + allairtimes4;
  }

// mtn service for 200 ends//



//mtn service for 500 starts //

if (netWorks == 'mtn' && amounts == '500' && qty == '1') {
    $('#showcard1').show(1000);
    $('#activebtn2').hide();
    document.getElementById('displaycard1').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N500'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:MTN'+'<br>'+'Pin' + ' ' +':'+ ' ' +allairtimes1;
} 
else if ( netWorks=="mtn"  && amounts=='500' && qty=="2") {
    $('#showcard1').show(1000);
    $('#activebtn2').show();

    document.getElementById('displaycard1').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N500'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:MTN'+'<br>'+'Pin' +' ' +':'+ ' ' + allairtimes1;
    document.getElementById('displaycard2').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N500'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:MTN'+'<br>'+'Pin'+ ' ' +':'+ ' ' + allairtimes2;
  }

  else if ( netWorks=="mtn"  && amounts=='500' && qty=="3") {
    $('#showcard1').show(1000);
    $('#activebtn2').show();
    $('#activebtn3').show();

    document.getElementById('displaycard1').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N500'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:MTN'+'<br>'+'Pin' +' ' +':'+ ' ' + allairtimes1;
    document.getElementById('displaycard2').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N500'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:MTN'+'<br>'+'Pin'+ ' ' +':'+ ' ' + allairtimes2;
    document.getElementById('displaycard3').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N500'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:MTN'+'<br>'+'Pin'+ ' ' +':'+ ' ' + allairtimes3;
  }

  else if ( netWorks=="mtn"  && amounts=='500' && qty=="4") {
    $('#showcard1').show(1000);
    $('#activebtn2').show();
    $('#activebtn3').show();
    $('#activebtn4').show();
    
    document.getElementById('displaycard1').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N500'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:MTN'+'<br>'+'Pin' +' ' +':'+ ' ' + allairtimes1;
    document.getElementById('displaycard2').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N500'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:MTN'+'<br>'+'Pin'+ ' ' +':'+ ' ' + allairtimes2;
    document.getElementById('displaycard3').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N500'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:MTN'+'<br>'+'Pin'+ ' ' +':'+ ' ' + allairtimes3;
    document.getElementById('displaycard4').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N500'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:MTN'+'<br>'+'Pin'+ ' ' +':'+ ' ' + allairtimes4;
  }

  else if ( netWorks=="mtn"  && amounts=='500' && qty=="5") {
    $('#showcard1').show(1000);
    $('#activebtn2').show();
    $('#activebtn3').show();
    $('#activebtn4').show();
    $('#activebtn5').show();

    
    document.getElementById('displaycard1').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N500'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:MTN'+'<br>'+'Pin' +' ' +':'+ ' ' + allairtimes1;
    document.getElementById('displaycard2').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N500'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:MTN'+'<br>'+'Pin'+ ' ' +':'+ ' ' + allairtimes2;
    document.getElementById('displaycard3').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N500'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:MTN'+'<br>'+'Pin'+ ' ' +':'+ ' ' + allairtimes3;
    document.getElementById('displaycard4').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N500'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:MTN'+'<br>'+'Pin'+ ' ' +':'+ ' ' + allairtimes4;
    document.getElementById('displaycard5').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N500'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:MTN'+'<br>'+'Pin'+ ' ' +':'+ ' ' + allairtimes4;
  }


//mtn service for 500 ends //


//glo srrvice starts//

if (netWorks == 'glo' && amounts == '100' && qty == '1') {
    $('#showcard1').show(1000);
    $('#activebtn2').hide();
    document.getElementById('displaycard1').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N100'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:GLO'+'<br>'+'Pin' + ' ' +':'+ ' ' +allairtimes1;
} 
else if ( netWorks=="glo"  && amounts=='100' && qty=="2") {
    $('#showcard1').show(1000);
    $('#activebtn2').show();

    document.getElementById('displaycard1').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N100'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:GLO'+'<br>'+'Pin' +' ' +':'+ ' ' + allairtimes1;
    document.getElementById('displaycard2').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N100'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:GLO'+'<br>'+'Pin'+ ' ' +':'+ ' ' + allairtimes2;
  }

else if ( netWorks=="glo"  && amounts=='100' && qty=="3") {
    $('#showcard1').show(1000);
    $('#activebtn2').show();
    $('#activebtn3').show();

    document.getElementById('displaycard1').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N100'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:GLO'+'<br>'+'Pin' +' ' +':'+ ' ' + allairtimes1;
    document.getElementById('displaycard2').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N100'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:GLO'+'<br>'+'Pin'+ ' ' +':'+ ' ' + allairtimes2;
    document.getElementById('displaycard3').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N100'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:GLO'+'<br>'+'Pin'+ ' ' +':'+ ' ' + allairtimes3;
  }

  else if ( netWorks=="glo"  && amounts=='100' && qty=="4") {
    $('#showcard1').show(1000);
    $('#activebtn2').show();
    $('#activebtn3').show();
    $('#activebtn4').show();
    
    document.getElementById('displaycard1').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N100'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:GLO'+'<br>'+'Pin' +' ' +':'+ ' ' + allairtimes1;
    document.getElementById('displaycard2').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N100'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:GLO'+'<br>'+'Pin'+ ' ' +':'+ ' ' + allairtimes2;
    document.getElementById('displaycard3').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N100'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:GLO'+'<br>'+'Pin'+ ' ' +':'+ ' ' + allairtimes3;
    document.getElementById('displaycard4').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N100'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:GLO'+'<br>'+'Pin'+ ' ' +':'+ ' ' + allairtimes4;
  }

  else if ( netWorks=="glo"  && amounts=='100' && qty=="5") {
    $('#showcard1').show(1000);
    $('#activebtn2').show();
    $('#activebtn3').show();
    $('#activebtn4').show();
    $('#activebtn5').show();

    
    document.getElementById('displaycard1').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N100'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:GLO'+'<br>'+'Pin' +' ' +':'+ ' ' + allairtimes1;
    document.getElementById('displaycard2').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N100'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:GLO'+'<br>'+'Pin'+ ' ' +':'+ ' ' + allairtimes2;
    document.getElementById('displaycard3').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N100'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:GLO'+'<br>'+'Pin'+ ' ' +':'+ ' ' + allairtimes3;
    document.getElementById('displaycard4').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N100'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:GLO'+'<br>'+'Pin'+ ' ' +':'+ ' ' + allairtimes4;
    document.getElementById('displaycard5').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N100'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:GLO'+'<br>'+'Pin'+ ' ' +':'+ ' ' + allairtimes4;
  }


  // glo service for 500 //

  if (netWorks == 'glo' && amounts == '500' && qty == '1') {
    $('#showcard1').show(1000);
    $('#activebtn2').hide();
    document.getElementById('displaycard1').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N500'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:GLO'+'<br>'+'Pin' + ' ' +':'+ ' ' +allairtimes1;
} 
else if ( netWorks=="glo"  && amounts=='500' && qty=="2") {
    $('#showcard1').show(1000);
    $('#activebtn2').show();

    document.getElementById('displaycard1').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N500'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:GLO'+'<br>'+'Pin' +' ' +':'+ ' ' + allairtimes1;
    document.getElementById('displaycard2').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N500'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:GLO'+'<br>'+'Pin'+ ' ' +':'+ ' ' + allairtimes2;
  }

else if ( netWorks=="glo"  && amounts=='500' && qty=="3") {
    $('#showcard1').show(1000);
    $('#activebtn2').show();
    $('#activebtn3').show();

    document.getElementById('displaycard1').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N500'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:GLO'+'<br>'+'Pin' +' ' +':'+ ' ' + allairtimes1;
    document.getElementById('displaycard2').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N500'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:GLO'+'<br>'+'Pin'+ ' ' +':'+ ' ' + allairtimes2;
    document.getElementById('displaycard3').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N500'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:GLO'+'<br>'+'Pin'+ ' ' +':'+ ' ' + allairtimes3;
  }

  else if ( netWorks=="glo"  && amounts=='500' && qty=="4") {
    $('#showcard1').show(1000);
    $('#activebtn2').show();
    $('#activebtn3').show();
    $('#activebtn4').show();
    
    document.getElementById('displaycard1').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N500'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:GLO'+'<br>'+'Pin' +' ' +':'+ ' ' + allairtimes1;
    document.getElementById('displaycard2').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N500'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:GLO'+'<br>'+'Pin'+ ' ' +':'+ ' ' + allairtimes2;
    document.getElementById('displaycard3').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N500'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:GLO'+'<br>'+'Pin'+ ' ' +':'+ ' ' + allairtimes3;
    document.getElementById('displaycard4').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N500'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:GLO'+'<br>'+'Pin'+ ' ' +':'+ ' ' + allairtimes4;
  }

  else if ( netWorks=="glo"  && amounts=='500' && qty=="5") {
    $('#showcard1').show(1000);
    $('#activebtn2').show();
    $('#activebtn3').show();
    $('#activebtn4').show();
    $('#activebtn5').show();

    
    document.getElementById('displaycard1').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N500'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:GLO'+'<br>'+'Pin' +' ' +':'+ ' ' + allairtimes1;
    document.getElementById('displaycard2').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N500'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:GLO'+'<br>'+'Pin'+ ' ' +':'+ ' ' + allairtimes2;
    document.getElementById('displaycard3').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N500'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:GLO'+'<br>'+'Pin'+ ' ' +':'+ ' ' + allairtimes3;
    document.getElementById('displaycard4').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N500'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:GLO'+'<br>'+'Pin'+ ' ' +':'+ ' ' + allairtimes4;
    document.getElementById('displaycard5').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N500'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:GLO'+'<br>'+'Pin'+ ' ' +':'+ ' ' + allairtimes4;
  }

                                // glo service for 500//

                                // glo service ends//



                                    /// service for airtel //
if (netWorks == 'airtel' && amounts == '100' && qty == '1') {
    $('#showcard1').show(1000);
    $('#activebtn2').hide();
    document.getElementById('displaycard1').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N100'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:AIRTEL'+'<br>'+'Pin' + ' ' +':'+ ' ' +allairtimes1;
} 
else if ( netWorks=="airtel"  && amounts=='100' && qty=="2") {
    $('#showcard1').show(1000);
    $('#activebtn2').show();

    document.getElementById('displaycard1').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N100'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:AIRTEL'+'<br>'+'Pin' +' ' +':'+ ' ' + allairtimes1;
    document.getElementById('displaycard2').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N100'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:AIRTEL'+'<br>'+'Pin'+ ' ' +':'+ ' ' + allairtimes2;
  }

else if ( netWorks=="airtel"  && amounts=='100' && qty=="3") {
    $('#showcard1').show(1000);
    $('#activebtn2').show();
    $('#activebtn3').show();

    document.getElementById('displaycard1').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N100'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:AIRTEL'+'<br>'+'Pin' +' ' +':'+ ' ' + allairtimes1;
    document.getElementById('displaycard2').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N100'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:AIRTEL'+'<br>'+'Pin'+ ' ' +':'+ ' ' + allairtimes2;
    document.getElementById('displaycard3').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N100'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:AIRTEL'+'<br>'+'Pin'+ ' ' +':'+ ' ' + allairtimes3;
  }

  else if ( netWorks=="airtel"  && amounts=='100' && qty=="4") {
    $('#showcard1').show(1000);
    $('#activebtn2').show();
    $('#activebtn3').show();
    $('#activebtn4').show();
    
    document.getElementById('displaycard1').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N100'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:AIRTEL'+'<br>'+'Pin' +' ' +':'+ ' ' + allairtimes1;
    document.getElementById('displaycard2').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N100'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:AIRTEL'+'<br>'+'Pin'+ ' ' +':'+ ' ' + allairtimes2;
    document.getElementById('displaycard3').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N100'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:AIRTEL'+'<br>'+'Pin'+ ' ' +':'+ ' ' + allairtimes3;
    document.getElementById('displaycard4').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N100'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:AIRTEL'+'<br>'+'Pin'+ ' ' +':'+ ' ' + allairtimes4;
  }

  else if ( netWorks=="airtel"  && amounts=='100' && qty=="5") {
    $('#showcard1').show(1000);
    $('#activebtn2').show();
    $('#activebtn3').show();
    $('#activebtn4').show();
    $('#activebtn5').show();

    
    document.getElementById('displaycard1').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N100'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:AIRTEL'+'<br>'+'Pin' +' ' +':'+ ' ' + allairtimes1;
    document.getElementById('displaycard2').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N100'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:AIRTEL'+'<br>'+'Pin'+ ' ' +':'+ ' ' + allairtimes2;
    document.getElementById('displaycard3').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N100'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:AIRTEL'+'<br>'+'Pin'+ ' ' +':'+ ' ' + allairtimes3;
    document.getElementById('displaycard4').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N100'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:AIRTEL'+'<br>'+'Pin'+ ' ' +':'+ ' ' + allairtimes4;
    document.getElementById('displaycard5').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N100'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:AIRTEL'+'<br>'+'Pin'+ ' ' +':'+ ' ' + allairtimes4;
  }


  // glo service for 500 //

  if (netWorks == 'airtel' && amounts == '500' && qty == '1') {
    $('#showcard1').show(1000);
    $('#activebtn2').hide();
    document.getElementById('displaycard1').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N500'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:AIRTEL'+'<br>'+'Pin' + ' ' +':'+ ' ' +allairtimes1;
} 
else if ( netWorks=="airtel"  && amounts=='500' && qty=="2") {
    $('#showcard1').show(1000);
    $('#activebtn2').show();

    document.getElementById('displaycard1').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N500'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:AIRTEL'+'<br>'+'Pin' +' ' +':'+ ' ' + allairtimes1;
    document.getElementById('displaycard2').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N500'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:AIRTEL'+'<br>'+'Pin'+ ' ' +':'+ ' ' + allairtimes2;
  }


  else if ( netWorks=="airtel"  && amounts=='500' && qty=="3") {
    $('#showcard1').show(1000);
    $('#activebtn2').show();
    $('#activebtn3').show();

    document.getElementById('displaycard1').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N500'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:AIRTEL'+'<br>'+'Pin' +' ' +':'+ ' ' + allairtimes1;
    document.getElementById('displaycard2').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N500'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:AIRTEL'+'<br>'+'Pin'+ ' ' +':'+ ' ' + allairtimes2;
    document.getElementById('displaycard3').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N500'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:AIRTEL'+'<br>'+'Pin'+ ' ' +':'+ ' ' + allairtimes3;
  }

  else if ( netWorks=="airtel"  && amounts=='500' && qty=="4") {
    $('#showcard1').show(1000);
    $('#activebtn2').show();
    $('#activebtn3').show();
    $('#activebtn4').show();
    
    document.getElementById('displaycard1').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N500'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:AIRTEL'+'<br>'+'Pin' +' ' +':'+ ' ' + allairtimes1;
    document.getElementById('displaycard2').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N500'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:AIRTEL'+'<br>'+'Pin'+ ' ' +':'+ ' ' + allairtimes2;
    document.getElementById('displaycard3').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N500'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:AIRTEL'+'<br>'+'Pin'+ ' ' +':'+ ' ' + allairtimes3;
    document.getElementById('displaycard4').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N500'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:AIRTEL'+'<br>'+'Pin'+ ' ' +':'+ ' ' + allairtimes4;
  }

  else if ( netWorks=="airtel"  && amounts=='500' && qty=="5") {
    $('#showcard1').show(1000);
    $('#activebtn2').show();
    $('#activebtn3').show();
    $('#activebtn4').show();
    $('#activebtn5').show();

    
    document.getElementById('displaycard1').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N500'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:AIRTEL'+'<br>'+'Pin' +' ' +':'+ ' ' + allairtimes1;
    document.getElementById('displaycard2').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N500'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:AIRTEL'+'<br>'+'Pin'+ ' ' +':'+ ' ' + allairtimes2;
    document.getElementById('displaycard3').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N500'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:AIRTEL'+'<br>'+'Pin'+ ' ' +':'+ ' ' + allairtimes3;
    document.getElementById('displaycard4').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N500'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:AIRTEL'+'<br>'+'Pin'+ ' ' +':'+ ' ' + allairtimes4;
    document.getElementById('displaycard5').innerHTML='MARYANN TELECOM ' +'<br>'+'Amt :'+' '+ 'N500'+ " "+'<br>'+'Date :'+' '+snapdate+'<br>'+
    'TYPE:AIRTEL'+'<br>'+'Pin'+ ' ' +':'+ ' ' + allairtimes4;
  }

                                    //service for airtyel ends //



} 


// for card activation
function  activatepin1() {
  var netWorks = selectNetork.value;
  var amounts = selectAmount.value;
  var qty = selectQty.value;
  let pin1 = allairtimes1.split("-");
  let newpin = pin1.join("");
  let mycards = {
    'network': netWorks,
    'amounts':amounts,
    'pin': newpin
  }
  let localpin = JSON.parse(localStorage.getItem('mypins')) || [];
  let c = [...localpin, mycards];
  localStorage.setItem('mypins', JSON.stringify(c));

		// var selecta		=	selectamount.value;
	var screendetails = displaycard1.innerHTML;
var screendetailsplit=  screendetails.split("-");
var screendetailsjoin= screendetailsplit.join('');

 var credit = screendetailsjoin;
 
 var code = "*555*"+credit+"#";


 var sto = Object.keys(localStorage);


for (var i = 0; i < sto.length; i++) {
	
    

var stores=("store"+ sto.length);
   var obj = {amount:amounts,network:netWorks,loading:credit,code:code};
	

var ob=JSON.stringify(obj);
localStorage.setItem(stores,ob);
};


var count=0;
count++;
var rate=0.2;
var d = new Date();
var time=Math.floor(d.setSeconds(0)*0.000000000001);
var realtime=time * count;
var timerate=rate * time;

var tarriff="mtn mega";
var stotarrif = Object.keys(localStorage);

var bal=localStorage.getItem('Mtnbalance');
var diff=bal-timerate;


for (var i = 0; i < stotarrif.length; i++) {



var tarrif=("tarrif");
var objtar = {timerate:timerate,tarrif:tarriff,time:time,rate:rate,realtime:realtime,diff:diff};



var obt=JSON.stringify(objtar);
localStorage.setItem(tarrif,obt);

}

}




function  activatepin2() {
  var netWorks = selectNetork.value;
  var amounts = selectAmount.value;
  var qty = selectQty.value;

  let pin1 = allairtimes2.split("-");
  let newpin = pin1.join("");
  let mycards = {
    'network': netWorks,
    'amounts':amounts,
    'pin': newpin
  }
  let localpin = JSON.parse(localStorage.getItem('mypins')) || [];
  let c = [...localpin, mycards];
  localStorage.setItem('mypins', JSON.stringify(c));

		// var selecta		=	selectamount.value;
	var screendetails = displaycard2.innerHTML;
var screendetailsplit=  screendetails.split("-");
var screendetailsjoin= screendetailsplit.join('');

 var credit = screendetailsjoin;
 
 var code = "*555*"+credit+"#";


 var sto = Object.keys(localStorage);


var success="success";
alert(success);


for (var i = 0; i < sto.length; i++) {
	
    

var stores=("store"+ sto.length);
   var obj = {amount:amounts,network:netWorks,loading:credit,code:code};
	

var ob=JSON.stringify(obj);
localStorage.setItem(stores,ob);
};

}

function  activatepin3() {
  var netWorks = selectNetork.value;
  var amounts = selectAmount.value;
  var qty = selectQty.value;

  let pin1 = allairtimes3.split("-");
  let newpin = pin1.join("");
  let mycards = {
    'network': netWorks,
    'amounts':amounts,
    'pin': newpin
  }
  let localpin = JSON.parse(localStorage.getItem('mypins')) || [];
  let c = [...localpin, mycards];
  localStorage.setItem('mypins', JSON.stringify(c));

		// var selecta		=	selectamount.value;
	var screendetails = displaycard3.innerHTML;
var screendetailsplit=  screendetails.split("-");
var screendetailsjoin= screendetailsplit.join('');

 var credit = screendetailsjoin;
 
 var code = "*555*"+credit+"#";


 var sto = Object.keys(localStorage);


var success="success";
alert(success);


for (var i = 0; i < sto.length; i++) {
	
    

var stores=("store"+ sto.length);
   var obj = {amount:amounts,network:netWorks,loading:credit,code:code};
	

var ob=JSON.stringify(obj);
localStorage.setItem(stores,ob);
};

}


function  activatepin4() {
  var netWorks = selectNetork.value;
  var amounts = selectAmount.value;
  var qty = selectQty.value;

  let pin1 = allairtimes4.split("-");
  let newpin = pin1.join("");
  let mycards = {
    'network': netWorks,
    'amounts':amounts,
    'pin': newpin
  }
  let localpin = JSON.parse(localStorage.getItem('mypins')) || [];
  let c = [...localpin, mycards];
  localStorage.setItem('mypins', JSON.stringify(c));

		// var selecta		=	selectamount.value;
	var screendetails = displaycard4.innerHTML;
var screendetailsplit=  screendetails.split("-");
var screendetailsjoin= screendetailsplit.join('');

 var credit = screendetailsjoin;
 
 var code = "*555*"+credit+"#";


 var sto = Object.keys(localStorage);


var success="success";
alert(success);


for (var i = 0; i < sto.length; i++) {
	
    

var stores=("store"+ sto.length);
   var obj = {amount:amounts,network:netWorks,loading:credit,code:code};
	

var ob=JSON.stringify(obj);
localStorage.setItem(stores,ob);
};

}

function  activatepin5() {
  var netWorks = selectNetork.value;
  var amounts = selectAmount.value;
  var qty = selectQty.value;

  let pin1 = allairtimes5.split("-");
  let newpin = pin1.join("");
  let mycards = {
    'network': netWorks,
    'amounts':amounts,
    'pin': newpin
  }
  let localpin = JSON.parse(localStorage.getItem('mypins')) || [];
  let c = [...localpin, mycards];
  localStorage.setItem('mypins', JSON.stringify(c));

		// var selecta		=	selectamount.value;
	var screendetails = displaycard5.innerHTML;
var screendetailsplit=  screendetails.split("-");
var screendetailsjoin= screendetailsplit.join('');

 var credit = screendetailsjoin;
 
 var code = "*555*"+credit+"#";


 var sto = Object.keys(localStorage);


var success="success";
alert(success);


for (var i = 0; i < sto.length; i++) {
	
    

var stores=("store"+ sto.length);
   var obj = {amount:amounts,network:netWorks,loading:credit,code:code};
	

var ob=JSON.stringify(obj);
localStorage.setItem(stores,ob);
};
      }


 function showphone(){
   $('#voucher').hide(1000);
   $('#phoneInterface').show(1000);
 }
      

function print(){
	
var printdiv = document.getElementById('showcard1');
$('.activ').hide()
var printarea = window.open();

$('#displaybox').css('border','2px solid darkblue')
printarea.document.write(printdiv.innerHTML+'<br>');

printarea.document.close();
printarea.focus();
printarea.print();
printarea.close();


}