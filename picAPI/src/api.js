import axios from 'axios';

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID kHMv-6XV41I8_Q-lNLxh_T71lEXt8vlg3AdxzQ-i4wY'
    },
    params: {
      query: term,
    }
  });
  return response.data.results;
};

export default searchImages;
