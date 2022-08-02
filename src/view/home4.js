import React, { useState } from 'react';
  
const HomeRight = (props) => {
    const [value, setValue] = useState('');
    return (
        <div className='home'
            style={{
                height: '100%',
            }}
        >
            <input value={value} onChange={(e) => {
                setValue(e.target.value);
            }}/>
            <button onClick={() => {
                props.awdli(value);
            }}>保存</button>
        </div>
    
    );
}

export default HomeRight;
  