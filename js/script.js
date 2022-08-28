function addnew(){
    debugger;
let name=document.getElementById("name").value;
let id=document.getElementById("id").value;

     
    if (id===""){
    
        $('#msgerr').show();
        $('#id').addClass("error");
        
        }
        else {
            $('#msgerr').hide(); 
            $('#id').removeClass("error"); 
            // if (name!="")
           
    
        //    let user_records=new Array();

        //    user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
          
        //      user_records.push({
        //      "name":name,
        //      "id":id
        //    });
        //    localStorage.setItem("users",JSON.stringify(user_records));
        //    var s=user_records[user_records.length-1];
        //    JSON.parse(s,function (key,value)
        //   {
        //     debugger
        //     if (key==name)
        //     {
        //         document.getElementById("fixedname").innerHTML=value;  
        //     }
        //     else {
        //         document.getElementById("fixedid").innerHTML=value;   
        //     }
        //   });
        //   console.log(s);

          window.location.href="addnew.html";
}
}
$('#name').click(function ()
{
    $('#name').addClass("clikedinput");

});
$('#name').mouseleave(function ()
{
    $('#name').removeClass("clikedinput");

});
$('#id').click(function ()
{
    $('#id').addClass("clikedinput");

});
$('#id').mouseleave(function ()
{
    $('#id').removeClass("clikedinput");

});

$('#closebtn').click(function(){
$('.menuitem').hide();
document.getElementById("mySidepanel").style.width = "50px";
$('#closebtn').hide();
$('#openbtn').show();
document.getElementById("maincon").style.marginLeft = "50px";
document.getElementById("maincon").style.width = "96%";
});


$('#openbtn').click(function(){
    debugger
    $('.menuitem').show(0);
    document.getElementById("mySidepanel").style.width = "20%";
    $('#closebtn').show();
    $('#openbtn').hide();
    document.getElementById("maincon").style.width = "80%";
    document.getElementById("maincon").style.marginLeft = "20%";

    // document.getElementById("fixedname").innerHTML=name2;
    // document.getElementById("fixedid").innerHTML=id2;
    });
    function showoption(){
        $('.surgiries').toggle();
    }
    let flag ;
function other(id){
    // debugger
   if (flag!=1){
    let input=document.createElement("input");
    input.type="text";
    input.className="surgiries";
    input.placeholder="Other  (اخرى)";
    document.getElementById(id).appendChild(input);
    flag=1;
   }


 
}
function historyadded(){

    // get the values
    let valueschecked=  document.querySelectorAll('.choice:checked');
    let valueschecked2=document.querySelectorAll('.choice2:checked');
    let valueschecked3=document.querySelectorAll('.choice3:checked');

    let other=$('#other').val();
    let other2=$('#other2').val();
    let other3=$('#other3').val();



    // let surgerylist=$('#surgerylist');

    // valueschecked.forEach((userItem)=>{
    // let lisurgery=document.createElement("li");
    // lisurgery.innerText=userItem.value ;
   
    // if (other!=""){
    //     lisurgery.innerText=other;
    // }
    // surgerylist.appendChild(lisurgery);
    // });
    // console.log(other);
    // console.log(valueschecked.values);
    // valueschecked.forEach
   

    // blur background and creating the displaying div
    let report=document.createElement("div");
    body.style.backgroundColor="grey";
    maincon.style.opacity="0.4";
    mySidepanel.style.opacity="0.4";
    body.style.pointerEvents = "none";
    body.appendChild(report);
    report.className="datahistory";
   

// surgery part
    let surgery=document.createElement("div");
    report.appendChild(surgery);
    surgery.className="insidedata";
    
    surgery.innerHTML="<h5>surgieries are :</h5>" ;
    if (valueschecked.length||other!=""){
        valueschecked.forEach((userItem)=>{
        surgery.innerHTML+=userItem.value +"<br>";
        });
        if (other!=""){
            surgery.innerHTML+=other +"<br>";
        }
    }
        else 
        {
    
            surgery.innerHTML+="No Surgeries";
    }

        // chronic part


    let chronic=document.createElement("div");
    report.appendChild(chronic);
    chronic.className="insidedata";
     chronic.innerHTML="<h5>Chronic Diseases :</h5>" ;
     
    if (valueschecked2.length||other2!=""){

   
    valueschecked2.forEach((userItem)=>{
        chronic.innerHTML+=userItem.value+"<br>";
    });
    if (other2!=""){
        chronic.innerHTML+=other2 +"<br>";
    }
    }
    else 
    {

        chronic.innerHTML+="No Chronic Diseases";
    }


    // allergtic part
    let allergtic=document.createElement("div");
    report.appendChild(allergtic);
    allergtic.className="insidedata";
 allergtic.innerHTML="<h5>Allergtic : </h5>";

    if (valueschecked3.length||other3!=""){

   
valueschecked3.forEach((userItem)=>{
allergtic.innerHTML+=userItem.value+"<br>";
    });  
     if (other3!=""){
        allergtic.innerHTML+=other3 +"<br>";
     }
     }  
     else 
        {

            allergtic.innerHTML+="No Allergtic";
        }

//  Blood type part

let bloodtype=document.createElement("div");

let bloodval=$('#Blood option:selected').val();

report.appendChild(bloodtype);
bloodtype.className="insidedata";
bloodtype.innerHTML="<h5>Blood type is :</h5>";
bloodtype.innerHTML+=bloodval;







//button send
let send=document.createElement("button");


send.className="send";
send.innerHTML="send";


send.style.pointerEvents="auto";

report.appendChild(send);
console.log("to listening");
report.id="report";
send.setAttribute("onclick","sending()");





// button x
let x=document.createElement("button");
x.className="xbtn";
x.innerHTML="x";
x.style.pointerEvents="auto";
report.appendChild(x);
x.setAttribute("onclick", "exit()");
   
}
function sending()
{
    console.log("listening");
    body.style.pointerEvents = "auto";
    window.location.href = "medical.html";

};
function exit(){
 document.getElementById("report").style.display="none";
    // body.className="bo";
    // body.style.hieght="100%";
    body.style.backgroundColor="transparent";
     
    maincon.style.opacity="1";
    mySidepanel.style.opacity="1";
    body.style.pointerEvents = "auto";
    console.log("here")

};

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            loop:false
        }
    }
})