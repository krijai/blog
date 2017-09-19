import React,{Component} from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';


const style = {
    margin: 0,
    top: 'auto',
    right: 100,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
};

class Floatingactionbutton extends React.Component{
    render(){
        return(
            <div>
            <FloatingActionButton style={style}>
            <ContentAdd />
            </FloatingActionButton>
            </div>
        );
    }

} 


export default Floatingactionbutton;