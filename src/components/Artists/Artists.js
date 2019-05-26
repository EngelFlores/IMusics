/* eslint-disable no-unused-expressions */
import React, { Component, Fragment } from 'react';

import PageContainer from '../PageContainer/PageContainer';
import { Card } from './Card'
import { Title } from '../Title/Title'

import { getArtist } from '../../services/artists';
import { parseArtist } from '../../utils/spotifyResponseParsers'



export default class Artists extends Component {
  state = {
    artists: [],
    loaded: false
  };

  componentDidMount = () => {
    const arrayArtists = ['0TcVnvKse98awlZxtUKIOk', '11irmEzISytQwB3G8uhC5E', '2UhA8yc1DpFfkutXq5lMah']
    const reqs = arrayArtists.map(n => getArtist(n))
    return Promise.all(reqs).then(result => {
      Promise.all(result.map(artist => {
        const parsedInfo = parseArtist(artist)
        // eslint-disable-next-line react/destructuring-assignment
        const concatResults = this.state.artists.concat(parsedInfo)
        this.setState({
          artists: concatResults
        })
      })).then(this.setState({ loaded: true }))
    })
  };

  render = () => {
    const {
      artists = [],
      loaded
    } = this.state;

    return (
      <Fragment>
        <Title title="Artistas"></Title>
        <PageContainer {...{ loaded }}>
          {artists.map((response, index) => {
            return <Card key={index} result={response} />
          })}
        </PageContainer>
      </Fragment>

    );
  };
}

