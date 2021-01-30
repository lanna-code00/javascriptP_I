//GLOBAL VARIABLES
var mtn = 'mtn';
var glo = "glo";
var airtel = "airtel";

var networkselcted, username, dialedNumber, mymtnr,
    allhour, numtostartwith, filteredcard,
    newpin, messagevar = messagescard.innerHTML;


// FUNCTION FOR TIME     
function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; 
  minutes = minutes < 10 ? '0' + minutes : minutes;
  allhour = hours + ':' + minutes + ' ' + ampm;
  return mytime.innerHTML = hours + ':' + minutes + ' ' + ampm;
}

console.log(formatAMPM(new Date));

// DISPLAYING DIALPAD
function displaycall() {
    $('#dialpad').css('display', 'block');
}


const displaycall1 = () => {
    $('#dialpad2').css('display', 'block');
    $('#dialedNumbers').css('display', 'block');
    $('#homepage').css('display', 'none');
    $('#randombtn').css('margin-top', '255px');
    let getcards = JSON.parse(localStorage.getItem('mypins')) || [];
     getcards.map(element => {
         mytext.innerHTML += "<b>Network: </b>" + element.network.toUpperCase() + "<br/>" + "Amount: "
         + element.amounts + "<br/>" + "Pin: " + "<b>" +element.pin + "</b>" + "</br></br>" ;
     })
    let b = JSON.parse(localStorage.getItem('contacts')) || [];
    let d = JSON.parse(localStorage.getItem('dialedcontacts')) || [];
    if (b.length < 1) {
        let mycontact = [{
        phone: '*181#',
        firstname: 'customer ',
        surname: 'care',
        trash: 'fa fa-trash',
        edit: 'fa fa-pencil',
    }]
    localStorage.setItem('contacts', JSON.stringify(mycontact));
    }
    if (!JSON.parse(localStorage.getItem('mtn'))) {
        localStorage.setItem('mtn', JSON.stringify(0))
        localStorage.setItem('glo', JSON.stringify(0))
        localStorage.setItem('airtel', JSON.stringify(0))
    } else {
        console.log('still here')
    }

    dialedContacts.innerHTML += `<div>
                                    <span class="text-black"></span>
                                </div>`
    
    }
    
const displaymenu = () => {
    $('#menulists').css('display','block')
    $('#homepage').css('display', 'none');
    $('#randombtn').css('margin-top', '345px');

}

$("#del").on('click', function () {
    mynumbers.value = mynumbers.value.substr(0, mynumbers.value.length-1)
})

const displayhomepage = () => {
    $('#menulists').css('display', 'none');
    $('#textmessages').css('display', 'none');
    $('#dialpad2').css('display', 'none');
    $('#randombtn').css('margin-top', '-0px');
    $('#homepage').css('display', 'block');
    $('#contactlist').css('display', 'none');
}

function clickMe(val) {
    mynumbers.value += val;
}

let checkmtnservices = () => {
        let r = JSON.parse(localStorage.mtn);
        messagescard.innerHTML = "Your MTN Main balance is: " + r;
        $('#messages').css('display', 'block')
        $('#mynetworks').css('display', 'none')
}

const checkgloservices = () => {
        let r = JSON.parse(localStorage.getItem('glo'));
        messagescard.innerHTML = "Your GLO Main balance is: " + r;
        $('#messages').css('display', 'block')
        $('#mynetworks').css('display', 'none')
}

const checkairtelservices = () => {
        let r = JSON.parse(localStorage.getItem('airtel'));
        messagescard.innerHTML = "Your AIRTEL Main balance is: " + r;
        $('#messages').css('display', 'block')
        $('#mynetworks').css('display', 'none')
}

const checknetwork = (val) => {
    networkselcted = val;
    let dialedObj;
    let localdialed = JSON.parse(localStorage.getItem('dialedcontacts')) || [];
    if (!username) {
        dialedObj = {
                nameofcontact: "",
                numberofcontact: mynumbers.value
        } 
        let e = [...localdialed, dialedObj]
        localStorage.setItem('dialedcontacts', JSON.stringify(e))
    } else {
        dialedObj = {
            nameofcontact: username,
            numberofcontact: mynumbers.value
        } 
        let v = [...localdialed, dialedObj]
        localStorage.setItem('dialedcontacts', JSON.stringify(v))
    }
    // let setdialedcontact = [...localdialed,]
    let m = JSON.parse(localStorage.mtn)
    let mglo = JSON.parse(localStorage.glo)
    let mairtel = JSON.parse(localStorage.airtel)
    var mylocal = JSON.parse(localStorage.getItem('mypins'));
    filteredcard = mylocal.filter(u => u.network == networkselcted);
    for (var i = 0; i < filteredcard.length; i++) {
        newpin = filteredcard[i].pin;
    }
    if (networkselcted === 'mtn') {
        filteredcard.map(element => {
            if (numtostartwith == '*555*' + element.pin + "#") {
                let check = mylocal.filter(t => t.pin != element.pin);
                localStorage.setItem('mypins', JSON.stringify(check))
                let newchecks = mylocal.filter(p => p.pin == newpin);
                newchecks.map(newelement => {
                    let u = JSON.parse(localStorage.mtn);
                    let mynumberss = Number(u) + Number(newelement.amounts);
                    messagescard.innerHTML += `Your line has been credited with N${newelement.amounts}.</br> Your main bal is now N${mynumberss}` 
                    localStorage.setItem('mtn', JSON.stringify(mynumberss));
                    mynumbers.value = ""
                })
            } 
            
               else if ((numtostartwith == '*555*' + element.pin + "#") && (numtostartwith == '*556#') && (m > 0)) {
                callername1.innerHTML = JSON.parse(localStorage.calling)    
                // callername1.innerHTML =
                //  JSON.parse(localStorage.calling)    
                // ringingtone.play();
                setTimeout(() => {
                    calling.innerHTML = "Call ended"
                }, 9000);
                setTimeout(() => {
                    ringingtone.pause();
                    $('#receivingcall1').css('display', 'none')
                    $('#callinterface').css('display', 'none')
                    $('#dialpad2').css('display', 'block')
                    $('#dialpad21').css('display', 'block')
                    $('#homepage1').css('display', 'none')
                    $('#randombtn1').css('margin-top', '300px');
                    
                }, 10000);
                
                $('#receivingcall1').css('display', 'block')
                $('#callinterface').css('display', 'block')
                $('#mynetworks').css('display', 'none')
                
            }
            
            else if (numtostartwith.match(/090|091|080|081|070/) && m > 0) {
                localStorage.setItem('callnetworks', JSON.stringify(networkselcted));
                console.log(JSON.parse(localStorage.callnetworks))
                  if (!username) {
                      callername.innerHTML = mynumbers.value;
                      localStorage.setItem('calling', JSON.stringify(callername.innerHTML))
                    } else {
                        callername.innerHTML = username
                        callerNumber.innerHTML = dialedNumber
                        localStorage.setItem('dialedNum', JSON.stringify(callerNumber.innerHTML))
                        localStorage.setItem('calling', JSON.stringify(callername.innerHTML))
                }
                ringingtone.play(); 
                setTimeout(() => {
                    calling.innerHTML = "Call ended"
                }, 9000);
                setTimeout(() => {
                    ringingtone.pause();
                    $('#receivingcall1').css('display', 'none')
                    $('#callinterface').css('display', 'none')
                    $('#dialpad2').css('display', 'block')
                    $('#dialpad21').css('display', 'block')
                    $('#homepage1').css('display', 'none')
                    $('#messagescard').css('display', 'none')
                    $('#messages').css('display', 'none')
                    $('#randombtn1').css('margin-top', '300px');
                }, 10000);
                $('#messages').css('display', 'none')
                $('#messagescard').css('display', 'none')
                $('#receivingcall1').css('display', 'block')
                $('#callinterface').css('display', 'block');
                if (!JSON.parse(localStorage.calling)) {
                    callername1.innerHTML = JSON.parse(localStorage.dialedNum);
                    callerNumber1.innerHTML = "";
                } else {
                    callername1.innerHTML = JSON.parse(localStorage.calling);
                    callerNumber1.innerHTML = JSON.parse(localStorage.dialedNum);
                }
                $('#mynetworks').css('display', 'none')
                setInterval(() => {
                    let e = m -= .4;
                    let r = e.toFixed(2)
                    if (r < 2) {
                        r = 0
                    }
                }, 1000);
             }   
                
            else if (numtostartwith === '*556#') {
                checkmtnservices()
            }
                
            else if (numtostartwith.match(/090|091|080|081|070/) && (JSON.parse(localStorage.mtn) === 0 || JSON.parse(localStorage.mtn) === 'N0.00')) {
                 if (!username) {
                      callername.innerHTML = mynumbers.value;
                      callerNumber.innerHTML = ''
                } else {
                    callername.innerHTML = username
                    callerNumber.innerHTML = dialedNumber
                }
                outofairtime.play();
            $('#dialpad2').css('display', 'block')
            $('#callinterface').css('display', 'block')
            }
            
            else if (numtostartwith !== '*124#' || numtostartwith !== '*126#') {
             messagescard.innerHTML = 'connection error!';
             $('#mynetworks').css('display', 'none');
             $('#messagescard').css('display', 'block');
            }
            
        })          
    } 


     // GLO SERVICES STARTS

    if (networkselcted === 'glo') {
        $('#mynetworks').css('display', 'none')
        filteredcard.map(element => {
            console.log(element)
            if (numtostartwith == '*123*' + element.pin + "#") {
                let check = mylocal.filter(t => t.pin != element.pin);
                localStorage.setItem('mypins', JSON.stringify(check))
                let newchecks = mylocal.filter(p => p.pin == newpin);
                newchecks.map(newelement => {
                    let u = JSON.parse(localStorage.glo);
                    let mynumbers = Number(u) + Number(newelement.amounts);
                    messagescard.innerHTML = `Your line has been credited with N${newelement.amounts}.</br> Your main bal is now N${mynumbers}` 
                    localStorage.setItem('glo', JSON.stringify(mynumbers));
                    mynumbers.value = ""
                })
            } 
            
               else if ((numtostartwith == '*123*' + element.pin + "#") && (numtostartwith == '*124#') && (mglo > 0)) {
                    // ringingtone.play();
                setTimeout(() => {
                    calling.innerHTML = "Call ended"
                }, 9000);
                setTimeout(() => {
                    ringingtone.pause();
                    $('#receivingcall1').css('display', 'none')
                    $('#callinterface').css('display', 'none')
                    $('#dialpad2').css('display', 'block')
                    $('#dialpad21').css('display', 'block')
                    $('#homepage1').css('display', 'none')
                    $('#randombtn1').css('margin-top', '300px');
                  
                }, 10000);
       
                $('#receivingcall1').css('display', 'block')
                $('#callinterface').css('display', 'block')
                $('#mynetworks').css('display', 'none')
                setInterval(() => {
                    let e = mglo -= .4;
                    let r = e.toFixed(2)
                    if (r < 2) {
                        r = 0
                    }
                    console.log(r)
                }, 1000);
              
             
            }
                
            else if (numtostartwith.match(/090|091|080|081|070/) && mglo > 0) {
                 localStorage.setItem('callnetworks', JSON.stringify(networkselcted));
                 console.log(JSON.parse(localStorage.callnetworks))
                 if (!username) {
                      callername.innerHTML = mynumbers.value;
                      callerNumber.innerHTML = ''
                      localStorage.setItem('dialedNum', JSON.parse(mynumbers.value))
                      localStorage.removeItem('dialedNum')
                    } else {
                    callername.innerHTML = username
                    callerNumber.innerHTML = dialedNumber
                }
                ringingtone.play(); 
                setTimeout(() => {
                    calling.innerHTML = "Call ended"
                }, 9000);
                setTimeout(() => {
                    ringingtone.pause();
                    $('#receivingcall1').css('display', 'none')
                    $('#callinterface').css('display', 'none')
                    $('#dialpad2').css('display', 'block')
                    $('#dialpad21').css('display', 'block')
                    $('#homepage1').css('display', 'none')
                    $('#messagescard').css('display', 'none')
                    $('#messages').css('display', 'none')
                    $('#randombtn1').css('margin-top', '300px');
                }, 10000);
                $('#messages').css('display', 'none')
                $('#messagescard').css('display', 'none')
                $('#receivingcall1').css('display', 'block')
                $('#callinterface').css('display', 'block')
                $('#mynetworks').css('display', 'none')
             }   
                
            else if (numtostartwith === '*124#') {
                checkgloservices()
            }
                
            else if (numtostartwith.match(/090|091|080|081|070/) && (JSON.parse(localStorage.glo) === 0 || JSON.parse(localStorage.glo) === 'N0.00')) {
                  if (!username) {
                      callername.innerHTML = mynumbers.value;
                      callerNumber.innerHTML = ''
                } else {
                    callername.innerHTML = username
                    callerNumber.innerHTML = dialedNumber
                }
                outofairtime.play();
            setTimeout(() => {
                $('#callinterface').css('display', 'none')
            }, 16000);
            $('#dialpad2').css('display', 'block')
            $('#callinterface').css('display', 'block')
            }
            
            else if (numtostartwith != '*124#') {
             messagescard.innerHTML = 'connection error!';
             $('#mynetworks').css('display', 'none');
             $('#messagescard').css('display', 'block');
            }
            
        })          
    }  

    // GLO SERVICES ENDS


    // AIRTEL SERVICES
    
    if (networkselcted === 'airtel') {
        $('#mynetworks').css('display', 'none')
        filteredcard.map(element => {
            console.log(element)
            if (numtostartwith == '*124*' + element.pin + "#") {
                let check = mylocal.filter(t => t.pin != element.pin);
                localStorage.setItem('mypins', JSON.stringify(check))
                let newchecks = mylocal.filter(p => p.pin == newpin);
                newchecks.map(newelement => {
                    let u = JSON.parse(localStorage.airtel);
                    let mynumbers = Number(u) + Number(newelement.amounts);
                    messagescard.innerHTML = `Your line has been credited with N${newelement.amounts}.</br> Your main bal is now N${mynumbers}` 
                    localStorage.setItem('airtel', JSON.stringify(mynumbers));
                    mynumbers.value = ""
                })
            } 
            
               else if ((numtostartwith == '*123*' + element.pin + "#") && (numtostartwith == '*124#') && (mairtel > 0)) {
                    // ringingtone.play();
                setTimeout(() => {
                    calling.innerHTML = "Call ended"
                }, 9000);
                setTimeout(() => {
                    ringingtone.pause();
                    $('#receivingcall1').css('display', 'none')
                    $('#callinterface').css('display', 'none')
                    $('#dialpad2').css('display', 'block')
                    $('#dialpad21').css('display', 'block')
                    $('#homepage1').css('display', 'none')
                    $('#randombtn1').css('margin-top', '300px');
                  
                }, 10000);
       
                $('#receivingcall1').css('display', 'block')
                $('#callinterface').css('display', 'block')
                $('#mynetworks').css('display', 'none')
                setInterval(() => {
                    let e = mairtel -= .4;
                    let r = e.toFixed(2)
                    if (r < 2) {
                        r = 0
                    }
                    console.log(r)
                }, 1000);
              
             
            }
                
            else if (numtostartwith.match(/090|091|080|081|070/) && mairtel > 0) {
                localStorage.setItem('callnetworks', JSON.stringify(networkselcted));
                if (!username) {
                      callername.innerHTML = mynumbers.value;
                      callerNumber.innerHTML = ''
                      localStorage.setItem('dialedNum', JSON.parse(mynumbers.value))
                      localStorage.removeItem('dialedNum')
                } else {
                    callername.innerHTML = username
                    callerNumber.innerHTML = dialedNumber
                }
                ringingtone.play(); 
                setTimeout(() => {
                    calling.innerHTML = "Call ended"
                }, 9000);
                setTimeout(() => {
                    ringingtone.pause();
                    $('#receivingcall1').css('display', 'none')
                    $('#callinterface').css('display', 'none')
                    $('#dialpad2').css('display', 'block')
                    $('#dialpad21').css('display', 'block')
                    $('#homepage1').css('display', 'none')
                    $('#messagescard').css('display', 'none')
                    $('#messages').css('display', 'none')
                    $('#randombtn1').css('margin-top', '300px');
                }, 10000);
                $('#messages').css('display', 'none')
                $('#messagescard').css('display', 'none')
                $('#receivingcall1').css('display', 'block')
                $('#callinterface').css('display', 'block')
                $('#mynetworks').css('display', 'none')
                setInterval(() => {
                    let e = mairtel -= .4;
                    let r = e.toFixed(2)
                    if (r < 2) {
                        r = 0
                    }
                    console.log(r)
                }, 1000);
             }   
                
            else if (numtostartwith === '*126#') {
                checkairtelservices()
            }
                
            else if (numtostartwith.match(/090|091|080|081|070/) && (JSON.parse(localStorage.airtel) === 0 || JSON.parse(localStorage.airtel) === 'N0.00')) {
                  if (!username) {
                      callername.innerHTML = mynumbers.value;
                      callerNumber.innerHTML = ''
                } else {
                    callername.innerHTML = username
                    callerNumber.innerHTML = dialedNumber
                }
                outofairtime.play();
            setTimeout(() => {
                $('#callinterface').css('display', 'none')
            }, 16000);
            $('#dialpad2').css('display', 'block')
            $('#callinterface').css('display', 'block')
            }
            
            else if (numtostartwith != '*126#') {
             messagescard.innerHTML = 'connection error!';
             $('#mynetworks').css('display', 'none');
             $('#messagescard').css('display', 'block');
            }
            
        })          
    }  
  
    //AIRTEL SERVICES ENDS




}

const displaycallphone1 = () => {
    var mylocal = JSON.parse(localStorage.getItem('mypins')) || [];
    numtostartwith = mynumbers.value;
    if (!mynumbers.value) {
        return
    } else {
        if (numtostartwith.match(/090|091|080|081|070/) && numtostartwith.length === 11) {
            $('#mynetworks').css('display', 'block');
        } else {
            if(numtostartwith.match(/^[*]/) && numtostartwith.match(/[#]$/)){
                $('#mynetworks').css('display', 'block');
            } else{
                console.log('failed expression')
            }
        }
    }
}

$('#cancelmessage').on('click', function () {
    $('#messages').css('display', 'none')
})

const createnewcontact = () => {
    if (mynumbers.value.length == 0) {
        console.log('the input can\'t be empty')
    } else {
    $('#contactdetails').css('display', 'block');
    phoneno.value = mynumbers.value
    }
}

const savecontact = () => {
    // phoneno.value = mynumbers.value; 
    let r = document.getElementById('phoneno').value;
    let mycontact = {
        phone: phoneno.value,
        firstname: firstname.value,
        surname: surname.value,
        trash: 'fa fa-trash',
        edit: 'fa fa-pencil',
    }
    let c = JSON.parse(localStorage.getItem('contacts')) || [];
    let b = [...c, mycontact];
    if (r =="" || mycontact.firstname == "" || mycontact.surname == "") {
        return;
    }  else {
        c.map(element => {
            if (element.phone === r || element.firstname === mycontact.firstname) {
                console.log(b)
                console.log('hello')
            } else {
              localStorage.setItem('contacts', JSON.stringify(b))
              $('#contactdetails').css('display', 'none');
              
            }
        })
       
    }
    
}

function allcontacts() {
    let c = JSON.parse(localStorage.getItem('contacts')) || [];
     c.map(element => {
         mycontact.innerHTML += `<div class='m-2 mb-3' style="cursor: pointer">
                                   <span class='fa fa-user mr-2'></span>
                                   <span class="${element.trash} mb-2 ml-2 mr-2" onclick=deletecontact(${element.phone})></span>
                                   <span class="${element.edit} mr-2" onclick=editcontact(${element})></span>
                                   <span class='mr-2' onclick="checkcall(${element.phone}, '${element.firstname}')">${element.firstname} ${element.surname}</span> 
                                   <input type="checkbox" class="ml-5 mychecks" style="display: none" onclick=handlecheck(${element.phone})><br/>
                                   <small class="ml-5" onclick="checkcall(${element.phone}, '${element.firstname}')">${element.phone}</small>
                                   <hr/>
                                </div>`;
     })
    }
    
allcontacts()

const checkcall = (mynums, caller) => {
    username = caller
    localStorage.setItem('calling', JSON.stringify(username))
    var names = '0' + mynums;
    dialedNumber = names
    localStorage.setItem('dialedNum', JSON.stringify(dialedNumber))
    console.log(JSON.stringify(names));
    $('#contactlist').css('display', 'none');
    $('#dialpad2').css('display', 'block');
    mynumbers.value = names;
    $('#randombtn').css('margin-top', '300px');
}

const editcontact = (element) => {
    console.log(element);
}

var savename = "";

// if (!cont.onclick) {
//     setTimeout(() => {
//           console.log('hello')
//         // $('#lockscreen').css('display','block')
//     }, 4000);
// }


const handlecheck = (ty) => {
    let local = JSON.parse(localStorage.getItem('contacts'));
    local.map(element => {
        if (element.phone == '0' + ty) {
            savename = element.firstname;
            localStorage.setItem('name', JSON.stringify(element.firstname))
            $('#contactlist').css('display', 'none');
           $('#textmessages').css('display', 'block');
           $('#addmessagediv').css('display', 'block');
       } 
    })
    nameofcontact.innerHTML = JSON.parse(localStorage.getItem('name'));
}

const addacontact = () => {
    $('#textmessages').css('display', 'none');
    $('#addmessagediv').css('display', 'none')
    $('#contactlist').css('display', 'block');
    $('.mychecks').css('display', 'block');
}

const cancelmessages = () => {
    $('#addmessagediv').css('display', 'none')
}

let allsum = 1;

const submitmessages = (tt, ty) => {
    let local = JSON.parse(localStorage.getItem('messages'));
    const localauthor = JSON.parse(localStorage.getItem('authors'));
    let messages = JSON.parse(localStorage.getItem('name'));
    let messageobj = {
        'name': messages,
        'message': typemessages.value,
        'time': allhour,
        'id': allsum++,
    }
 
    let r = [...local, messageobj];

    const author = {
        'author': nameofcontact.innerHTML,
        'time': allhour,
    }
    const t = [...localauthor, author]

    if ((!typemessages.value) || (!nameofcontact.innerHTML)) {
        console.log('you can\'t send an empty message!')
    } else {
        let y = localauthor.some(u => u.author === tt);
        if (!y) {
           localStorage.setItem('authors', JSON.stringify(t)) 
           localStorage.setItem('messages', JSON.stringify(r)) 
        } else {
            for (let i = 0; i < localauthor.length; i++) {
                if (localauthor[i].author === tt) {
                    localauthor[i].author == tt; 
                    localauthor[i].time == ty; 
                }
            }
           localStorage.setItem('messages', JSON.stringify(r)) 
            localStorage.setItem('authors', JSON.stringify(localauthor))
        }
    }
}

// const hangup = () => {

// }

let showallmessages = () => {
    let localauthor = JSON.parse(localStorage.getItem('authors')) || [];
    var newArray = localauthor.filter(value => Object.keys(value).length !== 0);
    console.log(newArray)
    if (newArray.length < 1) {
        document.getElementById('nomessage').style.display = "block";
        document.getElementById('nomessage').style.display = "NO MESSAGES YET!";
    } else {
        document.getElementById('nomessage').innerHTML = "MESSAGES";
        document.getElementById('nomessage').style.display = "block";
        newArray.map(element => {
            shownames.innerHTML += `<div onclick="aparticularmessage('${element.author}')" style="cursor: pointer" class="mt-2 mb-2"><span class="fa fa-envelope ml-3 mr-3"></span> ${element.author}
                                   <span class="float-right mr-2">${element.time}</span></div><hr/>`
        })
        
        
    }
}

showallmessages()

function aparticularmessage(anything) {
    const getallmessages = JSON.parse(localStorage.messages) || [];
    let newmessages = getallmessages.filter(value => Object.keys(value).length !== 0)
    const filteredmessages = newmessages.filter(t => t.name === anything);
     
    $('#displayperpersonmessage').css('display', 'block')
    $('.mesage').css('display', 'none');
    $('#randombtn').css('margin-top', '-10px');
    $('#authorname').css('display', 'block');
    $('.input-group').show();
    authorname.value += anything;

    filteredmessages.map(element => {
        displayperpersonmessage.innerHTML += `<div onclick="deleteamessage('${element.id}')" 
         style="cursor: pointer; width: 200px; height: 100px; background: #353434; margin-left: 20px; border-radius: 15px 15px 0px 15px; color: white"
         class="mt-2 mb-2"><span class="ml-2 mr-2 text-center">${element.message}</span> 
                                   <small class="float-right mr-2 mt-5">${element.time}</small><small class="float-left text-danger mr-2 ml-2 mt-5 fa fa-trash"></small></div><hr/>`
    })

}

 daydate.innerHTML += (new Date()).toString().split(' ').splice(1,3).join(' ');

const deletecontact = (phones) => {
    let nums = '0' + phones;
    let local = JSON.parse(localStorage.getItem('contacts'));
    let e = local.filter(t => JSON.stringify(t.phone) !== JSON.stringify(nums));
    console.log(e);
}

const displaycontact = () => {
    $('#contactlist').css('display', 'block');
    $('#homepage').css('display', 'none');
    $('.mychecks').css('display', 'none');
    $('#menulists').css('display', 'none');
    $('#randombtn').css('margin-top', '-10px');
}

const showmessagemodal = () => {
    $('#addmessagediv').css('display', 'block') 
}

answercall.onmousedown = () => {
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
        setInterval(() => {
                    let eglo = mglo -= .4;
                    let rglo = eglo.toFixed(2)
                    if (rglo < 2) {
                        rglo = 0
             }
             localStorage.setItem('glo', JSON.stringify(rglo))
         }, 1000);
  } else if (JSON.parse(localStorage.callnetworks) == 'airtel') {
         let mairtel = JSON.parse(localStorage.airtel);
        setInterval(() => {
                    let eairtel = mairtel -= .4;
                    let rairtel = eairtel.toFixed(2)
                    if (rairtel < 2) {
                        rairtel = 0
             }
             localStorage.setItem('airtel', JSON.stringify(rairtel))
         }, 1000);
  } 
}

const cutthecall = () => {
    clearInterval(mymtnr)
    $('#answeredcall').css('display', 'none');
    setTimeout(() => {
        $('#answeredcall1').css('display', 'none')
    }, 1000);
}
const showmesssagebox = () => {
    localStorage.setItem('name', JSON.stringify(""));
    let r = JSON.parse(localStorage.getItem('authors')) || [];
    let t = JSON.parse(localStorage.getItem('messages')) || [];
    let myauthors = [{}]
    if (r.length < 1) {
        localStorage.setItem('authors', JSON.stringify(myauthors))
    }
    let mymessages = [{}]
     if (t.length < 1) {
        localStorage.setItem('messages', JSON.stringify(mymessages))
    }
    $('#textmessages').css('display', 'block');
    $('#authorname').css('display', 'none');
    $('.input-group').hide();
    $('#menulists').css('display', 'none');
    $('#randombtn').css('margin-top', '-10px');
}
const myfunc = () => {
    let inputs = document.getElementById('searchcontact').value;
    let local = JSON.parse(localStorage.getItem('contacts')) || [];
    let e = new RegExp(inputs, 'i');
    local.filter(t => t.firstname.match(e))
}

const displayphone = () => {
    document.getElementById('menulists').style.display = 'none';
    document.getElementById('dialpad2').style.display = 'block';
    //  $('#menulists').css('display', 'none');
    $('#randombtn').css('margin-top', '305px');
      let b = JSON.parse(localStorage.getItem('contacts')) || [];
    if (b.length < 1) {
        let mycontact = [{
        phone: '*181#',
        firstname: 'customer ',
        surname: 'care',
        trash: 'fa fa-trash',
        edit: 'fa fa-pencil',
    }]
    localStorage.setItem('contacts', JSON.stringify(mycontact));
    }
    if (!JSON.parse(localStorage.getItem('mtn'))) {
        localStorage.setItem('mtn', JSON.stringify('N0.00'))
        localStorage.setItem('glo', JSON.stringify('N0.00'))
        localStorage.setItem('airtel', JSON.stringify('N0.00'))
    } else {
        console.log('still here')
    }
}

const cancelcontact = () => {
    $('#contactdetails').css('display', 'none');
}