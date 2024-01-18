import React from 'react'
import { pathImage } from 'src/configs/path.image'
import { IoBagRemoveOutline } from 'react-icons/io5'
import { MdOutlineStar } from 'react-icons/md'
import ProductItem from 'src/components/ProductItem'
export default function Products() {
  const listProductData = [
    {
      name: 'Tía tô Hữu cơ',
      image: 'https://cdn.pixabay.com/photo/2015/05/04/10/16/vegetables-752153_640.jpg',
      price: 200000,
      price_before_discount: 200000,
      mass: 120,
      sold: 2600
    },
    {
      name: 'Tía tô Hữu cơ',
      image: 'https://cdn.pixabay.com/photo/2020/06/05/16/53/zucchini-5263781_640.jpg',
      price: 200000,
      price_before_discount: 200000,
      mass: 120,
      sold: 2600
    },
    {
      name: 'Tía tô Hữu cơ',
      image: 'https://cdn.pixabay.com/photo/2020/09/12/21/12/tomatoes-5566741_640.jpg',
      price: 200000,
      price_before_discount: 200000,
      mass: 120,
      sold: 2600
    },
    {
      name: 'Tía tô Hữu cơ',
      image: 'https://cdn.pixabay.com/photo/2016/11/02/16/51/broccoli-1792236_640.jpg',
      price: 200000,
      price_before_discount: 200000,
      mass: 120,
      sold: 2600
    },
    {
      name: 'Tía tô Hữu cơ',
      image: 'https://cdn.pixabay.com/photo/2018/09/25/20/09/bush-beans-3702999_640.jpg',
      price: 200000,
      price_before_discount: 200000,
      mass: 120,
      sold: 2600
    },
    {
      name: 'Tía tô Hữu cơ',
      image: 'https://cdn.pixabay.com/photo/2017/02/18/15/03/carrots-2077377_640.jpg',
      price: 200000,
      price_before_discount: 200000,
      mass: 120,
      sold: 2600
    },
    {
      name: 'Tía tô Hữu cơ',
      image: 'https://cdn.pixabay.com/photo/2017/09/07/21/31/vegetables-2726800_640.jpg',
      price: 200000,
      price_before_discount: 200000,
      mass: 120,
      sold: 2600
    },
    {
      name: 'Tía tô Hữu cơ',
      image: 'https://cdn.pixabay.com/photo/2016/11/19/10/40/woman-1838545_640.jpg',
      price: 200000,
      price_before_discount: 200000,
      mass: 120,
      sold: 2600
    },
    ,
    {
      name: 'Tía tô Hữu cơ',
      image: 'https://cdn.pixabay.com/photo/2016/05/06/11/46/tomatoes-1375740_640.jpg',
      price: 200000,
      price_before_discount: 200000,
      mass: 120,
      sold: 2600
    },
    {
      name: 'Tía tô Hữu cơ',
      image: 'https://cdn.pixabay.com/photo/2017/07/19/15/23/pumpkin-2519423_640.jpg',
      price: 200000,
      price_before_discount: 200000,
      mass: 120,
      sold: 2600
    }
  ]

  return (
    <div className='spacerSection gap-8 grid grid-cols-4 '>
      {listProductData.map(
        (item, index) =>
          item !== undefined && (
            <ProductItem
              image={item.image}
              name={item.name}
              price_before_discount={item.price_before_discount}
              mass={item.mass}
              price={item.price}
              sold={item.sold}
              key={index}
            />
          )
      )}
    </div>
  )
}
