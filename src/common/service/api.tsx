import axios from 'axios';
import { data } from '../interfaces/data';
import { IResponseSuccessAndError } from '../interfaces/response';

const headers = {
    'X-RapidAPI-Proxy-Secret': 'a755b180-f5a9-11e9-9f69-7bf51e845926',
    'X-RapidAPI-Key': 'dc13857813msh3b39f8292e734a2p103b3bjsn41ed612295a0',
    'X-RapidAPI-Host': 'stock-and-options-trading-data-provider.p.rapidapi.com'
};

export const GetListData = async (handler: IResponseSuccessAndError) => {
  try {
    const response = await axios.get('https://stock-and-options-trading-data-provider.p.rapidapi.com/options/aapl', {
        headers : {
            'X-RapidAPI-Proxy-Secret': 'a755b180-f5a9-11e9-9f69-7bf51e845926',
            'X-RapidAPI-Key': 'dc13857813msh3b39f8292e734a2p103b3bjsn41ed612295a0',
            'X-RapidAPI-Host': 'stock-and-options-trading-data-provider.p.rapidapi.com'
        },
    });
    if (response.data) {
      if (handler.Success) {
        console.log(response.data.data);
        return handler.Success<data[]>(response.data?.data);
      }
    }
    return handler.Success && handler.Success(undefined);
  } catch (e: any) {
    return handler.Error && handler.Error(e.response?.data);
  }
};