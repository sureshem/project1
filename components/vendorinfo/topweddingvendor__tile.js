import React from 'react';
const topweddingvendor__tile = (props) => {
<<<<<<< HEAD
    console.log(props.showvendorDetails,"props")
=======
>>>>>>> 65b85e2c0f1a330fe1ac3806a887b9036a9e29c0
    return (        
        <> 
            <section className="topvendor__tile">
                {
                    props.showvendorDetails.map((items,index) =>
                    <section className="topvendor__tile__info">
                        <img src={items.original_pic_url}  className="topvendor__tile__info__img" />
                        <span  className="topvendor__tile__info__list"><img src={items.category_url}  className="topvendor__tile__info__icon" /> <span className="topvendor__tile__info__detail">{items.name}</span></span>
                    </section>
                    )
                }
            </section>
            <style jsx>
                {
                    `
<<<<<<< HEAD
                    .topvendor__tile{grid-template-columns: repeat(3,400px);grid-gap: 1.25rem;justify-content: flex-start;padding-left: 10px; padding-right: 10px; margin-bottom: 0; margin-top: 0;display: grid;}
=======
                    .topvendor__tile{grid-template-columns: repeat(4,300px);grid-gap: 1.25rem;justify-content: flex-start;padding-left: 10px; padding-right: 10px; margin-bottom: 0; margin-top: 0;display: grid;}
>>>>>>> 65b85e2c0f1a330fe1ac3806a887b9036a9e29c0
                    .topvendor__tile__info{position: relative;width: 300px; height: 250px;overflow: hidden; border-radius: 5px;}
                    .topvendor__tile__info__icon{height:28px;width:34px;margin-right:5px;}
                    .topvendor__tile__info__detail{font-size:17px; line-height:18px;color:#fff;}
                    .topvendor__tile__info__img{border-radius:5px;width: 100%; min-height: 100%; display: block; margin: 0 auto;}
                    .topvendor__tile__info:after{height: 100%; width: 100%; position: absolute; border-radius:5px; background-image: linear-gradient(180deg,transparent,rgba(0,0,0,.5));content:'';left: 0; right: 0; top: 0; bottom: 0;}
                    .topvendor__tile__info__list{position: absolute; left: 15px; bottom: 15px; display: flex; align-items: center;z-index:2; color: #fff;}
                    `
                }
            </style>
        </>
    );
}

export default topweddingvendor__tile;
