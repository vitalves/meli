import axios from 'axios';

import Detail from '~/components/Detail';
import Error from '~/components/Error';

const Details = ({error, item, description}) => {

  if (error) {
    return <Error statusCode={error} />
  }

  return <Detail item={item} description={description} />;
}


Details.getInitialProps = async ({query}) => {

  try{
    const [item, description] = await Promise.all([
      axios.get(`https://api.mercadolibre.com/items/${query.id}`),
      axios.get(`https://api.mercadolibre.com/items/${query.id}/description`)
    ]);

    return {
      error: null,
      item: item.data,
      description: description.data
    }

  } catch (error) {
    return {
      error: error.response.status,
      item: null,
      description: null
    }
  }

}

export default Details;
