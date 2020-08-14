import React from 'react';

const Rank = ({ name, entries }) => {
  return (
    <div>
      <div className='white f3 pb3'>
        {`Hi, ${name}...`}
      </div>
      <div className='white f3 pb1'>
        {`your current rank is... #${entries}!`}
      </div>
    </div>
  );
}

export default Rank;
