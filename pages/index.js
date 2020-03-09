import React from 'react';
import { NextSeo } from 'next-seo';

import Home from '~/components/Home';

const Index = () => {

  return (
      <div>
        <NextSeo
          title = {`Ofertas ${process.env.site_name}`}
          description = {`Buscando no ${process.env.site_name}`}
        />
        <Home />
      </div>

    );
};

export default Index;
