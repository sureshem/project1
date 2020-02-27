import React from 'react';
class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }  
  render() {
      const { statusCode } = this.props
    return (
        <div className="">
            {
                statusCode === 404 ?
                <section className="">
                    <p>404</p>
                </section> : ''
            }{
                statusCode === 500 ?
                <section className="">
                    <p>503</p>
                </section>
                :
                ''
            }
        </div>
    );
  }
}

export default Error;