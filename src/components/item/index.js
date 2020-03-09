import React from 'react';
import Link from 'next/link';

import { Container, BorderBottom } from './styles';

import { formatPrice } from '~/util/format';

export default function item({item}) {

  return (
    <Link
      href="/items/[id]"
      as={`/items/${item.id}`}>
      <a>
        <Container>
          <div className="thumbnail">
            <img src={item.thumbnail.replace('I', 'N')} alt={item.title}/>
          </div>
          <div className="data">
            <p className="price">{formatPrice(item.price)}</p>
            <h1>{item.title}</h1>
          </div>
          <div className="city_name">
            <p>{item.address.city_name}</p>
          </div>
        </Container>
        <BorderBottom />
      </a>
    </Link>
  );

}
