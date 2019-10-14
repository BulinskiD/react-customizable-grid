import React, { useState } from "react";
import ReactDOM from "react-dom";
import {ResizableComponent} from "./styles";
import {LayoutContainer} from "./styles";

const Resizable: React.FC = () => {
    const [position, setPosition] = useState({x: 0, y: 0});
    const [isDragged, setIsDragged] = useState(false);

    const dragElement = (event: any):void => {
        const x = Math.floor(event.clientX / 10);
        const y = Math.floor(event.clientY / 10);
        setPosition({x, y});
    };

    return <ResizableComponent y={position.y} x={position.x} isDragged={isDragged}
        onMouseDown={() => setIsDragged(true)}
        onMouseUp={() => setIsDragged(false)}>
        Test
        {isDragged && ReactDOM.createPortal(<LayoutContainer onMouseMove={dragElement} />, document.querySelector("#root") as Element)}
    </ResizableComponent>
};

export default Resizable;
