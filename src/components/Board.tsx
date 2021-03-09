import React from 'react'

const drop =(e:any) => {
    e.preventDefault();
    const card_id=e.dataTransfer.getData('card_id');
    const card:any =  document.getElementById(card_id);
    
    card.style.display='block';
    e.target.appendChild(card);
}
const dragOver =(e:any) =>{
    e.preventDefault();
}

function Board(props:any) {
    return (
        <div
            id={props.id}
            className={props.className}
            onDrop={drop}
            onDragOver={dragOver}
         >
             {props.children}
        </div>
    )
}

export default Board




// import React, { FunctionComponent } from 'react'


// const Board:FunctionComponent=()=>{

//     return(
//         <>
        


//         </>
//     )

// }

// export default Board;