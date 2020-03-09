import React from 'react';
import { NextSeo } from 'next-seo';

import api from '~/services/api';

import Item from '~/components/item';
import Error from '~/components/Error';

const Items = ({error, items, query}) => {

  if (error) {
    return <Error statusCode={error} />
  }

  return (
    <div>
      <NextSeo
        title = {`${query} - Ofertas ${process.env.site_name}`}
        description = {`Buscando por ${query} no ${process.env.site_name}`}
      />
      {items.slice(0, 4).map(item => (
        <Item key={item.id} item={item} />
      ))}
    </div>

  );
};

Items.getInitialProps = async ({query}) => {

  try {
    const response = await api.get(
      encodeURI(`search?q=${query.search}`)
    );

    return {
      items: response.data.results,
      query: query.search,
    }

  } catch (error) {
    return {
      error: error.response.status,
      items: null,
      query: query.search,
    }
  }
}

export default Items;
