import React, { Component, Fragment } from 'react';

import PageContainer from '../PageContainer/PageContainer';
import { Card } from './Card'
import { Title } from '../Title/Title'

import { getArtistTopTracks } from '../../services/artists';


export default class ArtistDetails extends Component {
  state = {
    tracks: [],
    loaded: false,
  };

  fetchArtistData = (artistId) => {
    getArtistTopTracks(artistId).then(response => this.setState({ loaded: true, ...response }))
  };

  // eslint-disable-next-line react/destructuring-assignment
getCurrentArtistId = () => this.props.match.params.artistId;

componentDidUpdate(prevProps) {
  const artistId = this.getCurrentArtistId();
  if (prevProps.match.params.artistId !== artistId) {
    this.fetchArtistData(artistId);
  }
}

componentDidMount() {
  const artistId = this.getCurrentArtistId();
  this.fetchArtistData(artistId);
}

render = () => {
  const {
    loaded,
    tracks
  } = this.state;

  return (
    <Fragment>
      <Title title="Perfil do artista" shouldShow={true}></Title>
      <PageContainer {...{ loaded }}>
        {loaded && tracks.map((response, index) => <Card key={index} result={response}></Card>)}
      </PageContainer>
    </Fragment>
  );
};
}
