import React from 'react';
import TextField from 'material-ui/TextField';

class Textfield extends React.Component{
    render(){
        return(
            <div>
            <TextField hintText="Full width" fullWidth={true}
            />
            </div>
        );
    }

}


export default Textfield;