import React from 'React'
const vendortile = (props) => {
	console.log(props,"props")
	return (
		<>

		{props.showsdata.map((items,index)=>
			<section className="vendortile__info">
				<img src={items.original_pic_url} className="vendortile__info__img" />
				<p className="vendortile__info__title">
					<span className="vendortile__info__title__info">{items.information} </span> 
					<span className="vendortile__info__rating">{items.status} </span>
				</p>
				<p className="vendortile__info__location">
					<span className="vendortile__info__locationName">{items.city}</span>
					<span className="vendortile__info__reviewcount">{items.reviews_count} reviews</span>
				</p>
				<p className="vendortile__info__price"><span className="vendortile__priceinfo">{items.vendor_price}</span></p>
			</section>
		)}
			
			<style>
				{
					`
						.vendortile__info{border-radius: 2px;width: 100%; position: relative;transition:0.5s all;box-shadow: rgba(0,0,0,.05) 0 1px 5px 0, 0 1px 2px rgba(0,0,0,.05);box-sizing: border-box;margin-bottom:30px;}
						.vendortile__info:hover{box-shadow: 0 5px 20px rgba(0,0,0,.2);cursor:pointer;}
						.vendortile__info__img{height: 210px; border-radius: 2px 2px 0px 0px;background: #d7d7d7; }
						.vendortile__info__price{padding:10px;}
						.vendortile__info__title{display: flex;justify-content: space-between;padding:10px}
						.vendortile__info__title__info{font-weight: 600;white-space: nowrap; overflow: hidden; text-overflow: ellipsis;padding-right:5px;line-height: 20px;}
						.vendortile__info__rating{border-radius: 2px; color: #fff;background-color: #5ba829;min-width: 50px; max-width: 50px; height: 25px;    text-align: center; align-items: center; line-height: 23px}
						.vendortile__info__location{padding:0 10px 10px;white-space: nowrap; overflow: hidden; text-overflow: ellipsis;display: flex; justify-content: space-between;border: none; border-bottom: 1px dashed #bfbebe;} 
						.vendortile__info__reviewcount{font-size: 14px; font-weight: 400;}
						.vendortile__priceinfo{color: #e72e77;font-weight:700;}
					`
				}
			</style>
		</>
	)
}

export default vendortile;