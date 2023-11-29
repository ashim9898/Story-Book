import React, {useState} from 'react';
import {DndProvider, useDrag, useDrop} from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

interface InputBoxProps{
    id: string;
    text: string;
    type: string;
    required: boolean;
    onDrop: (item: { id: string; text: string; type: string; required: boolean }) => void
}

const InputBox: React.FC<InputBoxProps>=({id, text, type, required, onDrop})=>{
    const[{isDragging}, drag] = useDrag({
        type:'INPUT_BOX',
        item:{id,text,type,required},
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
    const[inputBoxes, setInputBoxes]  = useState<{
        id: string; text: string; type: string; required: boolean }[]>([
            { id: '1', text: 'name', type: 'text', required: true },
            { id: '2', text: 'address', type: 'text', required: true },
            { id: '3', text: 'Passport Number', type: 'number', required: true },
            { id: '4', text: 'email', type: 'email', required: true },
          ]);
          const handleDrop = (droppedItem:{id:string; text:string, type:string, required:boolean})=>{
            setInputBoxes((prevInputBoxes)=>
                prevInputBoxes.map((box)=>
                box.id === droppedItem.id ? box : { ...box, text: droppedItem.text, type: droppedItem.type, required: droppedItem.required }
                )
            )
          }
          const generateJSON=()=>{
            const json:{formLabel: string; fields:Record<string,{type:string, required:boolean}>}={
                formLabel:"Buy Cars",
                fields:{},
            };
            inputBoxes.forEach((box)=>{
                json.fields[box.text]={
                    type:box.type,
                    required:box.required,
                }
            })
            console.log(json);
          }
          return(
            <div>
                <DndProvider backend={HTML5Backend}>
                    {inputBoxes.map((box) => (
                    <InputBox key={box.id} id={box.id} text={box.text} type={box.type} required={box.required} onDrop={handleDrop} />
                    ))}
                            <button onClick={generateJSON}>Generate JSON</button>
                </DndProvider>
            </div>
          )
    }

export default DND;
