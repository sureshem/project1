import React from 'react';

const viewallbtn = () => {
    return (
        <>
         <button className="viewallbtn">View All</button>   
         <style jsx>
            {
                `
                .viewallbtn{background-color: #fff; border: 1px solid #e96150; color: #e96150;min-width: 120px; padding: 8px 32px;border-radius: 2px; display: inline-block; text-align: center;font-size:14px; line-height:15px;letter-spacing: 0; text-transform: capitalize; font-weight: 500;outline:none;} 
                `
            }
         </style>
        </>
    );
}

export default viewallbtn;
