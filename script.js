var boxes=document.getElementsByClassName("box")
var heading=document.querySelector("h2")
var bigBox=document.querySelector(".bigbox")
var flag=0
var listItemObjects=[]
var listItemArray=Array.from(boxes)

let f=[0,0,0,0,0,0,0,0,0]

var one=document.getElementById("1")
var two=document.getElementById("2")
var three=document.getElementById("3")
var four=document.getElementById("4")
var five=document.getElementById("5")
var six=document.getElementById("6")
var seven=document.getElementById("7")
var eight=document.getElementById("8")
var nine=document.getElementById("9")

var gameOver=function (temp,f){
    if(temp===1){
        if((f[0]==1&&f[1]==1&&f[2]==1)||(f[0]==2&&f[1]==2&&f[2]==2))return 1
        if((f[0]==1&&f[3]==1&&f[6]==1)||(f[0]==2&&f[3]==2&&f[6]==2)) return 1
        if((f[0]==1&&f[4]==1&&f[8]==1)||(f[0]==2&&f[4]==2&&f[8]==2)) return 1
    }
    if(temp===2){
        if((f[0]==1&&f[1]==1&&f[2]==1)||(f[0]==2&&f[1]==2&&f[2]==2)) return 1
        if((f[1]==1&&f[4]==1&&f[7]==1)||(f[1]==2&&f[4]==2&&f[7]==2)) return 1
    }
    if(temp===3){
        if((f[0]==1&&f[1]==1&&f[2]==1)||(f[0]==2&&f[1]==2&&f[2]==2))return 1
        if((f[2]==1&&f[5]==1&&f[8]==1)||(f[2]==2&&f[5]==2&&f[8]==2)) return 1
        if((f[2]==1&&f[4]==1&&f[6]==1)||(f[2]==2&&f[4]==2&&f[6]==2)) return 1
    }
    if(temp===4){
        if((f[0]==1&&f[3]==1&&f[6]==1)||(f[0]==2&&f[3]==2&&f[6]==2))return 1
        if((f[3]==1&&f[4]==1&&f[5]==1)||(f[3]==2&&f[4]==2&&f[5]==2)) return 1
    }
    if(temp===5){
        if((f[1]==1&&f[4]==1&&f[7]==1)||(f[1]==2&&f[4]==2&&f[7]==2))return 1
        if((f[3]==1&&f[4]==1&&f[5]==1)||(f[3]==2&&f[4]==2&&f[5]==2)) return 1
        if((f[0]==1&&f[4]==1&&f[8]==1)||(f[0]==2&&f[4]==2&&f[8]==2)) return 1
        if((f[2]==1&&f[4]==1&&f[6]==1)||(f[2]==2&&f[4]==2&&f[6]==2)) return 1
    }
    if(temp===6){
        if((f[2]==1&&f[5]==1&&f[8]==1)||(f[2]==2&&f[5]==2&&f[8]==2))return 1
        if((f[3]==1&&f[4]==1&&f[5]==1)||(f[3]==2&&f[4]==2&&f[5]==2)) return 1
    }
    if(temp===7){
        if((f[0]==1&&f[3]==1&&f[6]==1)||(f[0]==2&&f[3]==2&&f[6]==2))return 1
        if((f[6]==1&&f[7]==1&&f[8]==1)||(f[6]==2&&f[7]==2&&f[8]==2)) return 1
        if((f[2]==1&&f[4]==1&&f[6]==1)||(f[2]==2&&f[4]==2&&f[6]==2)) return 1
    }
    if(temp===8){
        if((f[1]==1&&f[4]==1&&f[7]==1)||(f[1]==2&&f[4]==2&&f[7]==2))return 1
        if((f[6]==1&&f[7]==1&&f[8]==1)||(f[6]==2&&f[7]==2&&f[8]==2)) return 1
    }
    if(temp===9){
        if((f[0]==1&&f[4]==1&&f[8]==1)||(f[0]==2&&f[4]==2&&f[8]==2))return 1
        if((f[2]==1&&f[5]==1&&f[8]==1)||(f[2]==2&&f[5]==2&&f[8]==2)) return 1
        if((f[6]==1&&f[7]==1&&f[8]==1)||(f[6]==2&&f[7]==2&&f[8]==2)) return 1
    }
}

var clickHandler=function(event){
    var temp=11
    if(event.target===one) temp=1
    else if(event.target===two) temp=2
    else if(event.target===three) temp=3
    else if(event.target===four) temp=4
    else if(event.target===five) temp=5
    else if(event.target===six) temp=6
    else if(event.target===seven) temp=7
    else if(event.target===eight) temp=8
    else if(event.target===nine) temp=9

    if(temp===11) return;
    console.log(temp)
    if(f[temp-1]===0){
        if(flag===0){
            event.target.innerHTML="O"
            heading.innerHTML="Player 2 turn.."
            flag=1
            f[temp-1]=1
        }
        else{
            event.target.innerHTML="X"
            heading.innerHTML="Player 1 turn..."
            flag=0
            f[temp-1]=2
        }
        // checking if the game is over
        var boolean=gameOver(temp,f)
        if(boolean==1) {
            heading.innerHTML=`Player ${f[temp-1]} won !!!`
            for(var i=0;i<9;i++){
                f[i]=1
            }
            var reload=document.createElement("button")
            reload.textContent="Restart"
            reload.addEventListener("click",()=>{location.reload()})
            bigBox.appendChild(reload)
        }
    }
    console.log(f[temp-1])
}

listItemArray.forEach(function(item){
    var listItemObject={
        element:item,
        variable:0
    }
    listItemObjects.push(listItemObject)
})
listItemObjects.forEach((obj)=>{
    obj.element.addEventListener("click",clickHandler)
})