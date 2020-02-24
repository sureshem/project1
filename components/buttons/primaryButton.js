import React from 'react';

const buttonTypes = () => {
    return (
        <>
            <button className="wdButton__info">Button</button>
            <style jsx>
                {
                    `
                    .wdButton__info{background-color: #e96150; border: 1px solid #e96150; color: #fff;min-width: 120px; padding:8px 16px;border-radius: 2px; cursor: pointer; display: inline-block; text-align: center;   transition: all .1s ease-out; transition-property: background-color,color,border-color;outline:none;} 
                    `
                }
            </style>
        </>
    );
}

export default buttonTypes;
