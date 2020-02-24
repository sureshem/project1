import React from 'react';

const inputtype = (props) => {
    return (
        <>
        <section className="form__group">
        <label className="form__group__lbl">{props.label}</label>
            <input type="text" placeholder={props.placeholder} className="form__control" />
        </section>
        <style jsx>
            {
                `
                .form__group{margin:0 0 15px;}
                .form__group__lbl{font-size: 13px; text-transform: capitalize; font-weight: 400; padding: 0 0 6px; display: block;}
                .form__control{ align-items: center; background-color: hsl(0,0%,98%); border-color: hsl(0,0%,80%); border-radius: 4px; border-style: solid; border-width: 1px;display: flex; flex-wrap: wrap; justify-content: space-between; min-height: 38px; outline: 0; position: relative; transition: all 100ms; box-sizing: border-box;width: 100%;padding:0 10px;color: hsl(0,0%,50%);cursor:pointer}
                `
            }
        </style>
        </>
    );
}

export default inputtype;
