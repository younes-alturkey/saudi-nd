import React from 'react';

const capitalizeFirstLetter = (str) => {
  str = str.toLowerCase();
   return str.charAt(0).toUpperCase() + str.slice(1);
}
const Rank = ({ name, entries }) => {
  return (
    <div>
      <div className='white f3 pb3'>
        {`Hi, ${capitalizeFirstLetter(name)}...`}
      </div>
      <div className='white f3 pb4'>
        {`your current entries count is ${entries}!`}
      </div>
    </div>
  );
}

export default Rank;
