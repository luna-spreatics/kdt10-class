import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PropsEx3 extends Component {
  render() {
    // this.props.text, this.props.valid
    const { text, valid } = this.props;

    return (
      <div>
        <h2>{text}</h2>
        <br />
        <button onClick={valid}>콘솔 메세지</button>
      </div>
    );
  }
}

PropsEx3.defaultProps = {
  text: '이건 기본 text props입니다.',
};

PropsEx3.propTypes = {
  text: PropTypes.string.isRequired,
};

export default PropsEx3;
