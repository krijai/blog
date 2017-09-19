import React from 'react';
import timezones from '../../data/timezones';
import map from 'lodash/map';
import classnames from 'classnames';
import validateInput from '../../../server/shared/validations/signup';
import TextFieldGroup from '../common/TextFieldGroup';
import Textfield from '../common/TextField';

class ArticleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      content: '',
      date: '',
      errors: {},
    }
  }

 

  render() {
    
    return (
      <form>
            <Textfield 
            label="Title"
            value={this.state.title}
            field="title"/>

        <div className="form-group">
          <button disabled={this.state.isLoading || this.state.invalid} className="btn btn-primary btn-lg">
            Sign up
          </button>
        </div>
      </form>
    );
  }
}

export default ArticleForm;
