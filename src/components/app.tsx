import React, {CSSProperties} from 'react';

export interface HelloProps { compiler: string; framework: string; }

export const Hello = (props: HelloProps) =>
    <div> 
        <h1 style = {centeredContent}>Hello from{props.compiler} and {props.framework}!</h1>
    </div>;

const centeredContent: CSSProperties = {
    width:'100%',
    height:'100%',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    textAlign:'center',
    backgroundColor:'blue'
};
