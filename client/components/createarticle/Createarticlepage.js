import React from 'react';
import ArticleForm from './ArticleForm';

class Createarticlepage extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <ArticleForm />
        </div>
      </div>
    );
  }
}

export default Createarticlepage;
