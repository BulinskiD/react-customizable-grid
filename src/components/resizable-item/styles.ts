import styled from "styled-components";

interface Props {
    y: number;
    x: number;
    isDragged: boolean;
}

export const ResizableComponent = styled.div`
  grid-column-start: ${(props: Props) => props.x ? props.x : 1};
  grid-column-end: ${(props: Props) => props.x ? props.x + 10 : 11};
  grid-row-start: ${(props: Props) => props.y ? props.y : 1};
  grid-row-end:  ${(props: Props) => props.y ? props.y + 10 : 11};
  border: 1px solid black;
  margin: 0 2%;
  background-color: ${(props: Props) => props.isDragged ? 'gray': 'white'};
  &:hover {
  background-color: gray;
  }
`;

export const LayoutContainer = styled.div`
  position: absolute;
  top: 0;
  display: grid;
  grid-auto-columns: 10px;
  grid-auto-rows: 10px;
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  
`;
