import React from 'react';
import './Square.css';

// const Square = (props) => {
//   return (
//     <button className='square'
//     onClick={props.onClick}>
//       {props.value}
//     </button>
//   );
// };

const Square = ({value, onClick}) => {
  return (
    <button className='square'
      onClick={onClick}>
      {value}
    </button>
  );
};

export default Square