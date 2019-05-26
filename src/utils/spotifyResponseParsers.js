const parseArtist = ({ images, name, id, genres }) => ({
  imgSrc: images.length > 0 ? images[0].url : '',
  name: name,
  id: id,
  genres: genres
});

const parseTrack = ({ name, duration_ms, track_number, id, artists }) => ({
  songName: name,
  songDuration: duration_ms,
  songNumber: track_number,
  artist: {
    name: artists[0].name,
    id: artists[0].id
  },
  id: id
});

const userInfo = (rawUserInfo) => ({
  name: rawUserInfo.display_name,
  profilePicture: rawUserInfo.images.length > 0 ? rawUserInfo.images[0].url : ''
});

export { parseArtist,parseTrack, userInfo };
