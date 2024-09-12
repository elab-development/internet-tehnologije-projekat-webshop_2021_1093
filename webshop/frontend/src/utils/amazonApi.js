import axios from 'axios';

export const getAmazonProduct = async (query) => {
  const options = {
    method: 'GET',
    url: 'https://real-time-amazon-data.p.rapidapi.com/search',
    params: {
      query,
      page: '1',
      country: 'US',
      sort_by: 'RELEVANCE',
      product_condition: 'ALL',
      is_prime: 'false',
    },
    headers: {
      'x-rapidapi-key': '77043f5606msh5dff9d74d1fecf6p1a18fbjsn684cc6eb2fa7',
      'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    return response.data.data.products;
  } catch (error) {
    console.error(error);
  }
};
