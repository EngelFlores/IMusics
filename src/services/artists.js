import { spotifyInstance, createHeader } from './axiosInstances';

const getArtist = (artistId) => {
  return spotifyInstance
    .get(`artists/${artistId}`, createHeader())
    .then((artist) => {
      return artist.data
    });
}

const getArtistTopTracks = (artistId) => {
  return spotifyInstance
    .get(`/artists/${artistId}/top-tracks?country=br`, createHeader())
    .then(({ data: { tracks } }) => ({ tracks }));
}

export { getArtist, getArtistTopTracks }
