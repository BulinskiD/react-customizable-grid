import React from "react";
import ResizableItem from "./resizable-item";
import {LayoutContainer} from "./resizable-item/styles";


const Layout: React.FC = () => {
    return <LayoutContainer><ResizableItem /><ResizableItem /></LayoutContainer>
};

export default Layout;
