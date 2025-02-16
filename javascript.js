
const flexContainer=document.querySelector(".flex-container");


const grid= document.querySelector("button");
grid.addEventListener("click", ()=>pixelGenerate(getPixelNumber()));


function pixelGenerate(pixelNumber){

    if(pixelNumber>100){
     return   alert("please enter a value below hundred");
    }

    removeColumn();

    let row

    // this loop make  row and columns

       for(let i=1;i<=pixelNumber;i++){
        row=document.createElement("div");
        row.setAttribute("class","row")
        let  width=600/pixelNumber;
        let height=600/pixelNumber;
        row.style.minWidth=`${width}px`;
    
        flexContainer.appendChild(row);

//this loop make columns
        let column;
        for(let j=1;j<=pixelNumber;j++){
            column=document.createElement("div");
            column.setAttribute("class","column");
            column.style.minHeight=`${height}px`;
            row.appendChild(column);
        }
    }

    draw();

}

function getPixelNumber(){

    return Number(document.getElementById("pixelNumber").value);
}

function removeColumn(){
    
    let e=flexContainer;
    let child=e.lastElementChild;
    while(child){
        e.removeChild(child);
        child=e.lastElementChild;
    }
}
///////////////////////////////////////////////////////


function draw(){

    let columns=flexContainer.getElementsByClassName("column");
    let rightButtonDown=false;
    flexContainer.addEventListener("mousedown",()=>rightButtonDown=true)
    flexContainer.addEventListener("mouseup",()=>rightButtonDown=false)
    for(let i=0;i<columns.length;i++){
        columns[i].addEventListener("click",addColor)
        columns[i].addEventListener("mouseover",(e)=>{
            if(rightButtonDown){
                return addColor(e);
            }
               })
    }
    // flexContainer.addEventListener("mouseDown",()=>{
        
    // })
   
}

function eraser(){
    return "";
}



function getUserChoice(){
    const userChoice=document.querySelector("input[name='mod']:checked").value;
    
    if(userChoice==="randomColor"){
        return "#"+Math.floor(Math.random()*16777215).toString(16);
    }else if(userChoice==="eraser"){
        return eraser();
    }
 return document.querySelector("#colorPicker").value;

}

function addColor(event){
    event.target.style.backgroundColor=getUserChoice();
}

const clearAll=document.querySelector("#clearAll");
clearAll.addEventListener("click",()=>{
 const columns=document.querySelectorAll(".column")

 for(let i=0;i<columns.length;i++){
    columns[i].style.backgroundColor="";
 }

})
