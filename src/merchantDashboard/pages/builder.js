import { Layout,Card  } from 'antd'
import React from 'react'
import { useDrag, useDrop } from 'react-dnd'
import ReactDOM from 'react-dom';

const {Content}=Layout


const PageBuilder = () => {
    return (
        <Content>
            <Bucket />

        </Content>
    )
}





export default Bucket



function Box() {
    const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
        type: 'BOX',

        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    }))

    return (

        <div ref={dragPreview} style={{ opacity: isDragging ? 0.5 : 1 }}>
            <div role="Handle" ref={drag} />
        </div>
    )
}
function Knight() {
    return <span>♘</span>
}

const ItemTypes = {
    KNIGHT: 'knight'
}

function Bucket() {

    const [collected, drag, dragPreview] = useDrag(() => ({
        type:<Card/>,
        item:  Math.random() 
    }))
    return collected.isDragging ? (
        <div ref={dragPreview} />
    ) : (
        <div ref={drag} {...collected}>
            ...
        </div>
    )

}