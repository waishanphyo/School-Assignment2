// light mode 
let light_mode=localStorage.getItem("mode");
$("#dlmode").click(light)

// light check
if(light_mode==="enable"){
    light_on();
}
else{
    light_off();
}
function light(){
    light_mode=localStorage.getItem("mode");
    if(light_mode==="enable"){
        light_off();
    }
    else{
        light_on();
    }
}

 function light_off(){
    //   document.querySelector(".container").classList.add("light");
    
     $(".container").removeClass("clight");//container
     $(".heading").removeClass("lheading");//heading
     $(".second").removeClass("lsecond");//second
     $(".list").removeClass("llist");//list
     $("table").removeClass("ltable");//table
     $("td").removeClass("ltd");//table data
     $("th").removeClass("lth");//table heading
     light_mode=false;
     localStorage.setItem("mode","null");
     document.querySelector("#dlmode").className="bx bx-moon";
 }

 function light_on(){
    // document.querySelector(".container").classList.remove("light")
   
    $(".container").addClass("clight");//container
    $(".heading").addClass("lheading");//heading
    $(".second").addClass("lsecond");//second
    $(".list").addClass("llist");//list
    $("table").addClass("ltable");//table
    $("td").addClass("ltd");//table data
    $("th").addClass("lth");//table heading
    light_mode=true;
    localStorage.setItem("mode","enable");
    document.querySelector("#dlmode").className="bx bx-sun";
    
 }

// animation
$(".heading").click(()=>{
    $(".second").slideToggle();
    $(".list").slideToggle();
    $("table").slideToggle();
})

// Assignment toggle
let down=false;
$("#aup").click(()=>{
   if(down){
    $(".abox").removeClass("active");
    down=false;
    document.querySelector("#aup").className='bx bx-chevron-up'
   }
  else{
    $(".abox").addClass("active");
    down=true;
    document.querySelector("#aup").className='bx bx-chevron-down'
   }
})

// Remove_Border
let border=localStorage.getItem("remove");
if(border==="null"){
    addb();
}
else{
    removeb();
}
$("#remove").click(remove)

function remove(){
    border=localStorage.getItem("remove")
    if(border==="null"){
        removeb();
    }
    else{
        addb();
    }
}

function removeb(){
    $(".heading").addClass("removeb");
    $(".second").addClass("removeb");
    $(".list").addClass("removeb");
    border=false;
    localStorage.setItem("remove","enable");
    document.querySelector("#remove").textContent="Add-Border";
    $("li").animate({
        left:"40%"
    },1000)
}

function addb(){
    $(".heading").removeClass("removeb");
    $(".second").removeClass("removeb");
    $(".list").removeClass("removeb");
    border=true;
    localStorage.setItem("remove","null");
    document.querySelector("#remove").textContent="Remove-Border";
    $("li").animate({
        left:"0"
    },1000)
}

//time day subject
let date=new Date();
const days = ["Sun","Mon","Tues","Wed","Thurs", "Fri","Saturday"];

// Days
let day=date.getDay();
table_day=days[day];
let td=Array.from(document.querySelectorAll(".day"));
td.forEach((e)=>{
   if(table_day===e.textContent){
       e.classList.add("bgactive");
   }else{
    e.classList.remove("bgactive");
   }
  
});

// Time Hour
let hour=date.getHours();
// console.log(hour)

let times=(document.querySelectorAll(".time"));

times.forEach((time)=>{
    //  console.log(time.attributes.value.textContent)
       let val=time.attributes.value.textContent;
    //    console.log(val)
    if(hour==val){
        time.classList.add("bgactive");
    }else{
        time.classList.remove("bgactive");
    }
});
