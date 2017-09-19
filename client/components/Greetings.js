import React,{Component} from 'react';
import Floatingactionbutton from './common/FloatingActionButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Link } from 'react-router';
import history from 'History';

    const articleLinks = (
        <Link to="/createarticle">createarticle</Link>
    );

class Greetings extends React.Component {
    
  render() {
    return (
      <div className="jumbotron">
        <h1>Hi!</h1>
        <MuiThemeProvider>
        < Floatingactionbutton onClick={()=>history.push('/createarticle')}/>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Greetings;
