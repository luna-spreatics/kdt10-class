// src/component/Props_ex1.js 코드입니다.
import React from 'react';

const PropsEx1 = (props) => {
  const { food } = props;
  return (
    <h1>
      제가 좋아하는 음식은
      <span style={{ color: 'red' }}> {food}</span>
      입니다.
    </h1>
  );
};

PropsEx1.defaultProps = {
  food: '김치찌개',
};

export default PropsEx1;
