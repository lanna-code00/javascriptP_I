//GLOBAL VARIABLES
var mtn1 = 'mtn';
var glo1 = "glo";
var airtel1 = "airtel";

var networkselcted1, allhour1, mymtnr, numtostartwith1, filteredcard1, newpin1, messagevar1 = messagescard1.innerHTML;

daydate1.innerHTML += (new Date()).toString().split(' ').splice(1,3).join(' ');

function formatAMPMS(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; 
  minutes = minutes < 10 ? '0' + minutes : minutes;
  allhour1 = hours + ':' + minutes + ' ' + ampm;
  return mytimes.innerHTML = hours + ':' + minutes + ' ' + ampm;
}

console.log(formatAMPMS(new Date));

function displaycall() {
    $('#dialpad').css('display', 'block');
}

const displaycall11 = () => {
    $('#dialpad21').css('display', 'block');
    $('#homepage1').css('display', 'none');
    $('#randombtn1').css('margin-top', '300px');
    let getcards = JSON.parse(localStorage.getItem('mypins')) || [];
     getcards.map(element => {
         mytext.innerHTML += "<b>Network: </b>" + element.network.toUpperCase() + "<br/>" + "Amount: "
         + element.amounts + "<br/>" + "Pin: " + "<b>" +element.pin + "</b>" + "</br></br>" ;
     })
    let b = JSON.parse(localStorage.getItem('contacts1')) || [];
    if (b.length < 1) {
        let mycontact1 = [{
        phone: '*181#',
        firstname1: 'customer ',
        surname1: 'care',
        trash: 'fa fa-trash',
        edit: 'fa fa-pencil',
    }]
    localStorage.setItem('contacts1', JSON.stringify(mycontact1));
    }
    if (!JSON.parse(localStorage.getItem('mtn1'))) {
        localStorage.setItem('mtn1', JSON.stringify(0))
        localStorage.setItem('glo1', JSON.stringify(0))
        localStorage.setItem('airtel1', JSON.stringify(0))
    } else {
        console.log('still here')
    }
    
    }
    
const displaymenu1 = () => {
    $('#menulists1').css('display','block')
    $('#homepage1').css('display', 'none');
    $('#randombtn1').css('margin-top', '345px');

}

$("#del1").on('click', function () {
    mynumbers1.value = mynumbers1.value.substr(0, mynumbers1.value.length-1)
})


const displayhomepage1 = () => {
    $('#menulists1').css('display', 'none');
    $('#textmessages1').css('display', 'none');
    $('#dialpad21').css('display', 'none');
    $('#randombtn1').css('margin-top', '-0px');
    $('#homepage1').css('display', 'block');
    $('#contactlist1').css('display', 'none');
}

function clickMe1(val) {
    mynumbers1.value += val;
}

const checkmtnservices1 = () => {
    let r = JSON.parse(localStorage.getItem('mtn1'));
        messagescard1.innerHTML = "Your MTN Main balance is: " + r;
        $('#messages1').css('display', 'block')
        $('#mynetworks1').css('display', 'none')
}

const checkgloservices1 = () => {
        let r = JSON.parse(localStorage.getItem('glo1'));
        messagescard1.innerHTML = "Your GLO Main balance is: " + r;
        $('#messages1').css('display', 'block')
        $('#mynetworks1').css('display', 'none')
}

const checkairtelservices1 = () => {
        let r = JSON.parse(localStorage.getItem('airtel1'));
        messagescard1.innerHTML = "Your AIRTEL Main balance is: " + r;
        $('#messages1').css('display', 'block')
        $('#mynetworks1').css('display', 'none')
}

const checknetwork1 = (val) => {
    networkselcted1 = val;
    var mylocal = JSON.parse(localStorage.getItem('mypins'));
    filteredcard1 = mylocal.filter(u => u.network == networkselcted1);
    for (var i = 0; i < filteredcard1.length; i++) {
        newpin1 = filteredcard1[i].pin;
    }
    if (networkselcted1 === 'mtn') {
        filteredcard1.map(element => {
            if (numtostartwith1 == '*555*' + element.pin + "#") {
                let y = JSON.parse(localStorage.getItem('mtn1'));
                y =  element.amounts;
                localStorage.setItem('mtn1', JSON.stringify(y))
                let check = mylocal.filter(t => t.pin != newpin1);
                // localStorage.setItem('mypins', JSON.stringify(check))
                let newchecks = mylocal.filter(p => p.pin == newpin1);
                newchecks.map(newelement => {
                    let u = JSON.parse(localStorage.mtn1);
                    console.log(u)
                    let mynumbers1 = Number(u) + Number(newelement.amounts);
                    console.log(mynumbers1)
                    localStorage.setItem('mtn1', JSON.stringify(mynumbers1));
                })
            } else {
               console.log('Invalid code and your number ' + "<br/>" + 'will be barred if you tried more than thrice!')
              
            }
        })

        let m = JSON.parse(localStorage.contacts1)
        if (numtostartwith1.match(/090|091|080|081|070/) && numtostartwith1.length === 11 && JSON.parse(localStorage.mtn1) > 0) {
           setInterval(() => {
             let e =  m -= .4;
              let r = e.toFixed(2)
               if (r < 2) {
                   r = 0
                }
                console.log(r)
           }, 1000);  
        } 
        else if (numtostartwith1 == '*556#') {
            checkmtnservices1();
        } else {
            messagescard1.innerHTML = 'connection error!';
            $('#mynetworks1').css('display', 'none'); $('#messagescard1').css('display', 'block');
        }
    } 

      if (networkselcted1 === 'glo') {
        filteredcard1.map(element => {
            if (numtostartwith1 == '*123*' + element.pin + "#") {
                let y = JSON.parse(localStorage.getItem('glo1'));
                y = element.amounts;
                localStorage.setItem('glo1', JSON.stringify(y))
                let check = mylocal.filter(t => t.pin != newpin1);
                localStorage.setItem('mypins', JSON.stringify(check))
                let newchecks = mylocal.filter(p => p.pin == newpin1);
                newchecks.map(newelement => {
                    let u = JSON.parse(localStorage.glo1);
                    let mynumbers1 = Number(u) + Number(newelement.amounts);
                    console.log(mynumbers1);
                    localStorage.setItem('glo1', JSON.stringify(mynumbers1));
                })
            } else {
                console.log('Invalid code and your number ' + "<br/>" + 'will be barred if you tried more than thrice!')
            }
        })
        let n = JSON.parse(localStorage.glo1)
        if (numtostartwith1.match(/090|091|080|081|070/) && numtostartwith1.length === 11 && JSON.parse(localStorage.glo1) > 0) {
           setInterval(() => {
               let e =  n -= .4;
               let r = e.toFixed(2)
               if (r < 2) {
                   r = 0
                }
                console.log(n)
           }, 1000);  
        } 
        else if (numtostartwith1 == '*124#') {
            checkgloservices1();
        } else {
            messagescard1.innerHTML += 'connection error!';
            $('#mynetworks1').css('display', 'none'); $('#messages1').css('display', 'block');

        }
    }

         if (networkselcted1 === 'airtel') {
        filteredcard1.map(element => {
            if (numtostartwith1 == '*124*' + element.pin + "#") {
                let y = JSON.parse(localStorage.getItem('airtel1'));
                y = element.amounts;
                localStorage.setItem('airtel1', JSON.stringify(y))
                let check = mylocal.filter(t => t.pin != newpin1);
                localStorage.setItem('mypins', JSON.stringify(check))
                let newchecks = mylocal.filter(p => p.pin == newpin1);
                newchecks.map(newelement => {
                    let u = JSON.parse(localStorage.airtel1);
                    let mynumbers1 = Number(u) + Number(newelement.amounts);
                    localStorage.setItem('airtel1', JSON.stringify(mynumbers1));
                })
            } else {
                console.log('Invalid code and your number ' + "<br/>" + 'will be barred if you tried more than thrice!')
            }
        })
             
        let y = JSON.parse(localStorage.airtel1)
        if (numtostartwith1.match(/090|091|080|081|070/) && numtostartwith1.length === 11 && JSON.parse(localStorage.airtel1) > 0) {
           setInterval(() => {
                let e =  m -= .4;
                let r = e.toFixed(2)
               if (r < 2) {
                   r = 0
                }
                console.log(r)
           }, 1000);  
        } 
        else if (numtostartwith1 == '*126#') {
            checkairtelservices1();
        } else {
            messagescard1.innerHTML += 'connection error!';
            $('#mynetworks1').css('display', 'none'); $('#messagescard1').css('display', 'block');
        }
    }
    
}


const displaycallphone11 = () => {
    var mylocal = JSON.parse(localStorage.getItem('mypins')) || [];
    numtostartwith1 = mynumbers1.value;
    if (!mynumbers1.value) {
        return
    } else {
        if (numtostartwith1.match(/090|091|080|081|070/) && numtostartwith1.length === 11) {
            $('#mynetworks1').css('display', 'block');
        } else {
            if(numtostartwith1.match(/^[*]/) && numtostartwith1.match(/[#]$/)){
                $('#mynetworks1').css('display', 'block');
            } else{
                console.log('failed expression')
            }
        }
    }
}

$('#cancelmessage1').on('click', function () {
    $('#messages1').css('display', 'none')
})

const createnewcontact1 = () => {
    if (mynumbers1.value.length == 0) {
        console.log('the input can\'t be empty')
    } else {
    $('#contactdetails1').css('display', 'block');
    phoneno1.value = mynumbers1.value
    }
}

const savecontact1 = () => {
    // phoneno1.value = mynumbers1.value; 
    let r = document.getElementById('phoneno1').value;
    let mycontact1 = {
        phone: phoneno1.value,
        firstname1: firstname1.value,
        surname1: surname1.value,
        trash: 'fa fa-trash',
        edit: 'fa fa-pencil',
    }
    let c = JSON.parse(localStorage.getItem('contacts1')) || [];
    let b = [...c, mycontact1];
    if (r =="" || mycontact1.firstname1 == "" || mycontact1.surname1 == "") {
        return;
    }  else {
        c.map(element => {
            if (element.phone === r || element.firstname1 === mycontact1.firstname1) {
                console.log(b)
                console.log('hello')
            } else {
              localStorage.setItem('contacts1', JSON.stringify(b))
              $('#contactdetails1').css('display', 'none');
              
            }
        })
       
    }
    
}

function allcontacts1() {
    let c = JSON.parse(localStorage.getItem('contacts1')) || [];
     c.map(element => {
         mycontact1.innerHTML += `<div class='m-2 mb-3' style="cursor: pointer">
                                   <span class='fa fa-user mr-2'></span>
                                   <span class="${element.trash} mb-2 ml-2 mr-2" onclick=deletecontact1(${element.phone})></span>
                                   <span class="${element.edit} mr-2" onclick=editcontact1(${element})></span>
                                   <span class='mr-2' onclick=checkcall1(${element.phone})>${element.firstname1} ${element.surname1}</span> 
                                   <input type="checkbox" class="ml-5 mychecks" style="display: none" onclick=handlecheck1(${element.phone})><br/>
                                   <small class="ml-5" onclick=checkcall1(${element.phone})>${element.phone}</small>
                                   <hr/>
                                </div>`;
     })
}
allcontacts1()

const checkcall1 = (mynums) => {
    var names = '0' + mynums;
    console.log(JSON.stringify(names));
    $('#contactlist1').css('display', 'none');
    $('#dialpad21').css('display', 'block');
    mynumbers1.value = names;
    $('#randombtn1').css('margin-top', '300px');
}

const editcontact1 = (element) => {
    console.log(element);
}

var savename1 = "";

// if (!cont.onclick) {
//     setTimeout(() => {
//           console.log('hello')
//         // $('#lockscreen1').css('display','block')
//     }, 4000);
// }


const handlecheck1 = (ty) => {
    let local = JSON.parse(localStorage.getItem('contacts1'));
    local.map(element => {
        if (element.phone == '0' + ty) {
            savename1 = element.firstname1;
            localStorage.setItem('name1', JSON.stringify(element.firstname1))
            $('#contactlist1').css('display', 'none');
           $('#textmessages1').css('display', 'block');
           $('#addmessagediv1').css('display', 'block');
       } 
    })
    nameofcontact1.innerHTML = JSON.parse(localStorage.getItem('name1'));
}

const addacontact1 = () => {
    $('#textmessages1').css('display', 'none');
    $('#addmessagediv1').css('display', 'none')
    $('#contactlist1').css('display', 'block');
    $('.mychecks').css('display', 'block');
}

const cancelmessages1 = () => {
    $('#addmessagediv1').css('display', 'none')
}

let allsum1 = 1;

const submitmessages1 = (tt, ty) => {
    let local = JSON.parse(localStorage.getItem('messages1'));
    const localauthor = JSON.parse(localStorage.getItem('authors1'));
    let messages = JSON.parse(localStorage.getItem('name1'));
    let messageobj = {
        'name': messages,
        'message': typemessages1.value,
        'time': allhour1,
        'id': allsum1++,
    }
 
    let r = [...local, messageobj];

    const author = {
        'author': nameofcontact1.innerHTML,
        'time': allhour1,
    }
    const t = [...localauthor, author]

    if ((!typemessages1.value) || (!nameofcontact1.innerHTML)) {
        console.log('you can\'t send an empty message!')
    } else {
        let y = localauthor.some(u => u.author === tt);
        if (!y) {
           localStorage.setItem('authors1', JSON.stringify(t)) 
           localStorage.setItem('messages1', JSON.stringify(r)) 
        } else {
            for (let i = 0; i < localauthor.length; i++) {
                if (localauthor[i].author === tt) {
                    localauthor[i].author == tt; 
                    localauthor[i].time == ty; 
                }
            }
           localStorage.setItem('messages1', JSON.stringify(r)) 
            localStorage.setItem('authors1', JSON.stringify(localauthor))
        }
    }
}

let showallmessages1 = () => {
    let localauthor = JSON.parse(localStorage.getItem('authors1')) || [];
    var newArray = localauthor.filter(value => Object.keys(value).length !== 0);
    console.log(newArray)
    if (newArray.length < 1) {
        document.getElementById('nomessage1').style.display = "block";
        document.getElementById('nomessage1').style.display = "NO MESSAGES YET!";
    } else {
        document.getElementById('nomessage1').innerHTML = "MESSAGES";
        document.getElementById('nomessage1').style.display = "block";
        newArray.map(element => {
            shownames.innerHTML += `<div onclick="aparticularmessage('${element.author}')" style="cursor: pointer" class="mt-2 mb-2"><span class="fa fa-envelope ml-3 mr-3"></span> ${element.author}
                                   <span class="float-right mr-2">${element.time}</span></div><hr/>`
        })
        
        
    }
}

showallmessages1()

function aparticularmessage(anything) {
    const getallmessages = JSON.parse(localStorage.messages1) || [];
    let newmessages = getallmessages.filter(value => Object.keys(value).length !== 0)
    const filteredmessages = newmessages.filter(t => t.name === anything);
     
    $('#displayperpersonmessage1').css('display', 'block')
    $('.mesage1').css('display', 'none');
    $('#randombtn1').css('margin-top', '-10px');
    $('#authorname1').css('display', 'block');
    $('.input-group').show();
    authorname1.value += anything;

    filteredmessages.map(element => {
        displayperpersonmessage1.innerHTML += `<div onclick="deleteamessage('${element.id}')" 
         style="cursor: pointer; width: 200px; height: 100px; background: #353434; margin-left: 20px; border-radius: 15px 15px 0px 15px; color: white"
         class="mt-2 mb-2"><span class="ml-2 mr-2 text-center">${element.message}</span> 
                                   <small class="float-right mr-2 mt-5">${element.time}</small><small class="float-left text-danger mr-2 ml-2 mt-5 fa fa-trash"></small></div><hr/>`
    })

}

var msec = 00;
var sec = 00;
var min = 00;
function checkminsoncall() {
	msec += 1;
	if (msec == 60) {
		sec += 1;
		msec = 00;
		if (sec == 60) {
			sec = 00;
			min += 1;
		}
	}
	document.getElementById("timers").innerHTML = min + ":" + sec + ":" + msec;
	document.getElementById("timers1").innerHTML = min + ":" + sec + ":" + msec;
}


const answercall = () => {
    setInterval(checkminsoncall, 1000);
    ringingtone.pause();
    $('#answeredcall1').css('display', 'block')
    $('#answeredcall').css('display', 'block')
    $('#receivingcall1').css('display', 'none')
    $('#callinterface').css('display', 'none')
    if (!JSON.parse(localStorage.calling)) {
        answeredname11.innerHTML = JSON.parse(localStorage.dialedNum);
        answeredname11.innerHTML = "";
        
        answeredname.innerHTML = JSON.parse(localStorage.dialedNum);
        answerednames.innerHTML = "";
    } else {
        answeredname1.innerHTML = JSON.parse(localStorage.calling);
        answeredname11.innerHTML = JSON.parse(localStorage.dialedNum);
        
        answeredname.innerHTML = JSON.parse(localStorage.calling);
        answerednames.innerHTML = JSON.parse(localStorage.dialedNum);
    }
    if (JSON.parse(localStorage.callnetworks) == 'mtn') {
        let m = JSON.parse(localStorage.mtn);
        mymtnr = setInterval(() => {
            let e = m -= .4;
            let r = e.toFixed(2)
            if (r < 2) {
                r = 0
            }
            localStorage.setItem('mtn', JSON.stringify(r))
        }, 1000);
    } else if (JSON.parse(localStorage.callnetworks) == 'glo') {
        let mglo = JSON.parse(localStorage.glo);
        mymtnr = setInterval(() => {
            let eglo = mglo -= .4;
            let rglo = eglo.toFixed(2)
            if (rglo < 2) {
                rglo = 0
            }
            localStorage.setItem('glo', JSON.stringify(rglo))
        }, 1000);
    } else if (JSON.parse(localStorage.callnetworks) == 'airtel') {
        let mairtel = JSON.parse(localStorage.airtel);
       mymtnr = setInterval(() => {
            let eairtel = mairtel -= .4;
                    let rairtel = eairtel.toFixed(2)
                    if (rairtel < 2) {
                        rairtel = 0
                    }
                    localStorage.setItem('airtel', JSON.stringify(rairtel))
                }, 1000);
            } 
        }
        
        const cutthecall2 = () => {
            clearInterval(mymtnr)
            $('#answeredcall1').css('display', 'none');
            setTimeout(() => {
                $('#answeredcall').css('display', 'none')
            }, 1000);
}
        
        const deletecontact1 = (phones) => {
            let nums = '0' + phones;
            let local = JSON.parse(localStorage.getItem('contacts1'));
            let e = local.filter(t => JSON.stringify(t.phone) !== JSON.stringify(nums));
    console.log(e);
}

const displaycontact1 = () => {
    $('#contactlist1').css('display', 'block');
    $('#homepage1').css('display', 'none');
    $('.mychecks').css('display', 'none');
    $('#menulists1').css('display', 'none');
    $('#randombtn1').css('margin-top', '-10px');
}

const showmessagemodal1 = () => {
    $('#addmessagediv1').css('display', 'block') 
}

const showmesssagebox1 = () => {
    localStorage.setItem('name1', JSON.stringify(""));
    let r = JSON.parse(localStorage.getItem('authors1')) || [];
    let t = JSON.parse(localStorage.getItem('messages1')) || [];
    let myauthors = [{}]
    if (r.length < 1) {
        localStorage.setItem('authors1', JSON.stringify(myauthors))
    }
    let mymessages1 = [{}]
     if (t.length < 1) {
        localStorage.setItem('messages1', JSON.stringify(mymessages1))
    }
    $('#textmessages1').css('display', 'block');
    $('#authorname1').css('display', 'none');
    $('.input-group').hide();
    $('#menulists1').css('display', 'none');
    $('#randombtn1').css('margin-top', '-10px');
}
const myfunc1 = () => {
    let inputs = document.getElementById('searchcontact1').value;
    let local = JSON.parse(localStorage.getItem('contacts1')) || [];
    let e = new RegExp(inputs, 'i');
    local.filter(t => t.firstname1.match(e))
}

const displayphone1 = () => {
    document.getElementById('menulists1').style.display = 'none';
    document.getElementById('dialpad21').style.display = 'block';
    //  $('#menulists1').css('display', 'none');
    $('#randombtn1').css('margin-top', '305px');
      let b = JSON.parse(localStorage.getItem('contacts1')) || [];
    if (b.length < 1) {
        let mycontact1 = [{
        phone: '*181#',
        firstname1: 'customer ',
        surname1: 'care',
        trash: 'fa fa-trash',
        edit: 'fa fa-pencil',
    }]
    localStorage.setItem('contacts11', JSON.stringify(mycontact1));
    }
    if (!JSON.parse(localStorage.getItem('mtn'))) {
        localStorage.setItem('mtn', JSON.stringify('N0.00'))
        localStorage.setItem('glo', JSON.stringify('N0.00'))
        localStorage.setItem('airtel', JSON.stringify('N0.00'))
    } else {
        console.log('still here')
    }
}

const cancelcontact1 = () => {
    $('#contactdetails1').css('display', 'none');
}