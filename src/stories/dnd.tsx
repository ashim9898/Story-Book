import React, {useState} from 'react';
import {DndProvider, useDrag, useDrop} from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

interface InputBoxProps{
    id: string;
    text: string;
    type: string;
    onDrop: (item: { id: string; text: string; type: string }) => void
}

const InputBox: React.FC<InputBoxProps>=({id, text, type, onDrop})=>{
    const[{isDragging}, drag] = useDrag({
        type:'INPUT_BOX',
        item:{id,text,type},
        collect:(monitor)=>({
            isDragging: monitor.isDragging(),
        })
    })
    const [,drop] = useDrop({
        accept:'INPUT_BOX',
        drop: onDrop,
    })
    return(
        <div
            ref={(node)=>drag(drop(node))}
            style={{  
                opacity: isDragging?0.5:1,
                cursor:'move',
                border: '1px solid #ccc',
                padding: '10px',
                margin: '10px',
                display: 'inline-block',
            }}
        >
            {text}
        </div>
    )
}

const DND:React.FC=()=>{
    const[inputBoxes, steInputBoxes]  = useState<{
        id: string; text: string; type: string }[]>([
            { id: '1', text: 'InputBox1', type: 'text' },
            { id: '2', text: '', type: 'text' },
          ]);
          const handleDrop = (droppedItem:{id:string; text:string, type:string})=>{
            steInputBoxes((prevInputBoxes)=>
                prevInputBoxes.map((box)=>
                box.id === droppedItem.id ? box : { ...box, text: droppedItem.text, type: droppedItem.type }
                )
            )
          }
          const generateJSON=()=>{
            const json:{formLabel: string; fields:Record<string,{type:string}>}={
                formLabel:"Buy Cars",
                fields:{},
            };
            inputBoxes.forEach((box)=>{
                json.fields[box.text]={
                    type:box.type,
                }
            })
            console.log(json);
          }
          return(
            <div>
                <DndProvider backend={HTML5Backend}>
                    {inputBoxes.map((box) => (
                    <InputBox key={box.id} id={box.id} text={box.text} type={box.type} onDrop={handleDrop} />
                    ))}
                            <button onClick={generateJSON}>Generate JSON</button>
                </DndProvider>
            </div>
          )
    }

export default DND;