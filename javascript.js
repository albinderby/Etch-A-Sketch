
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