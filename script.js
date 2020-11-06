
function getwinner()
{
    var b1 =document.getElementById("item1"),
    b2 =document.getElementById("item2"),
    b3 =document.getElementById("item3"),
    b4 =document.getElementById("item4"),
    b5 =document.getElementById("item5"),
    b6 =document.getElementById("item6"),
    b7 =document.getElementById("item7"),
    b8 =document.getElementById("item8"),
    b9 =document.getElementById("item9");

if(b1.innerHTML !=="" && b1.innerHTML===b2.innerHTML && b1.innerHTML===b3.innerHTML )
    select_winbx(b1,b2,b3);
else if(b4.innerHTML !=="" && b4.innerHTML===b5.innerHTML && b4.innerHTML===b6.innerHTML )
    select_winbx(b4,b5,b6);
else if(b7.innerHTML !=="" && b7.innerHTML===b8.innerHTML && b7.innerHTML===b9.innerHTML )
    select_winbx(b7,b8,b9);
else if(b1.innerHTML !=="" && b1.innerHTML===b4.innerHTML && b1.innerHTML===b7.innerHTML )
    select_winbx(b1,b4,b7);
else if(b2.innerHTML !=="" && b2.innerHTML===b5.innerHTML && b2.innerHTML===b8.innerHTML )
    select_winbx(b2,b5,b8);
else if(b3.innerHTML !=="" && b3.innerHTML===b6.innerHTML && b3.innerHTML===b9.innerHTML )
    select_winbx(b3,b6,b9);
else if(b1.innerHTML !=="" && b1.innerHTML===b5.innerHTML && b1.innerHTML===b9.innerHTML )
    select_winbx(b1,b5,b9);
else if(b3.innerHTML !=="" && b3.innerHTML===b5.innerHTML && b3.innerHTML===b7.innerHTML )
    select_winbx(b3,b5,b7); 
}


function select_winbx(a,b,c){
    a.classList.add("win3");
    b.classList.add("win3");
    c.classList.add("win3");
    document.getElementById("winner").innerHTML=a.innerHTML+" WIN CONGRATS";
    document.getElementById("winner").style.fontSize="2.2em";
    
}

//main
var boxes=document.querySelectorAll("#container1 div"), X_or_O=0;
for (var i = 0; i < boxes.length; i++) {
    boxes[i].onclick=function() {
        if(this.innerHTML!== "X" && this.innerHTML !== "O")
        {
        if (X_or_O%2==0) {
            this.innerHTML="X";
            winner.innerHTML="O Turn";
            getwinner();
            X_or_O +=1;
        } else {
            this.innerHTML="O";
            winner.innerHTML="X Turn";
            getwinner();
            X_or_O +=1;
       
        }
    }
};
}
function replay(){
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].innerHTML="";
        boxes[i].classList.remove("win3");
        winner.innerHTML="Play";
    }
}