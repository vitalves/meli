import React, {useMemo, useState} from 'react';
import { NextSeo } from 'next-seo';

import { formatPrice } from '~/util/format';

import Loading from '../Loading';

import { Container } from './styles';

function Detail({item, description}) {
  const [loading, setLoading] = useState(false);

  const itemSold = useMemo(() =>
    (item.initial_quantity - item.available_quantity),
  []);

  const price = useMemo(() => (
    formatPrice(item.price)
  ), [item]);

  const condition = useMemo(() => (
    item.condition  === 'new' ? 'Novo - ' : 'Usado - '
  ),[]);

  return (
    <>
      <NextSeo
        title = {`${item.title} - ${price} em ${process.env.site_name}`}
        description = {`Buscando no ${process.env.site_name}`}
      />
      <Container>
        <div className="details-item">

          {item.pictures.slice(0,1).map(img => (
            <img key={img.url} src={img.url} alt={item.title}/>
          ))}

          <strong>Descrição do produto</strong>
          <p>{description.plain_text}</p>

        </div>
        <div className="details-price">
          <p>
          {condition}
          {itemSold} vendido{itemSold > 1 && 's'}
          </p>
          <h1>{item.title}</h1>
          <span>{price}</span>
          <button type="button" onClick={()=>setLoading(!loading)}>Comprar</button>
          {loading && (
            <Loading />
          )}

        </div>
      </Container>
    </>
  );
};

export default Detail;
