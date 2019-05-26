import { spotifyInstance, createHeader } from './axiosInstances';

const getUserInfo = () => {
  return spotifyInstance
    .get('me', createHeader())
    .then((response) => response.data);
}

export {getUserInfo}
