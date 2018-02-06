import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';
import './../styles/library.css';


class Library extends Component{

  constructor(props){
    super(props);
    this.state = { albums:albumData };
  }
  render() {
    return (
      <section className="library">
        {
          this.state.albums.map( (album,index) =>
          <Link to={`/album/${album.slug}`} style={{textDecoration: "none"}} key={index}>
            <img className="album-cover" src={album.albumCover} alt={album.title} />
            <div className="album-artist">{album.artist}</div>
            <div className="album-title">{album.title}</div>
            <div className="album-info">{album.songs.length} songs</div>
          </Link>
         )
        }
      </section>
    );
  }
};

export default Library;
