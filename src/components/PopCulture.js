import React, { Component } from 'react';

export default class PopCulture extends Component {

  render() {
    return (
      <div>
        <div>
          <h4 style={ { fontWeight: 'bold', fontSize: '18px' } }>Movies</h4>
          <ul style={ { listStyleType: 'disc' } }>
            <li><a style={ { textDecoration: 'underline' } } href='https://www.videodetective.com/movies/napoleon-dynamite-liger/199433'>Napolean Dynamite</a></li>
          </ul>

          <h4 style={ { fontWeight: 'bold', fontSize: '18px', marginTop: '25px' } }>Books</h4>
          <ul style={ { listStyleType: 'disc' } }>
            <li><a style={ { textDecoration: 'underline' } } href='https://www.amazon.com/Great-Adventures-Larriot-Liger/dp/0983035903'>Larriot the Liger</a></li>
            <li><a style={ { textDecoration: 'underline' } } href='https://www.amazon.com/Larry-Liger-Easter/dp/1530183960'>The Easter Liger</a></li>
            <li><a style={ { textDecoration: 'underline' } } href='https://www.lantanapublishing.com/shop/books/the-tigon-and-the-liger/'>The Tigon and the Liger</a></li>
          </ul>

          <h4 style={ { fontWeight: 'bold', fontSize: '18px', marginTop: '25px' } }>Documentaries</h4>
          <p>
            The life of ligers and the details of their biology were detailed in a
            <a style={ { textDecoration: 'underline' } } href='http://channel.nationalgeographic.com/wild/worlds-weirdest/videos/lions-tigers-and-ligers/'>Nat-Geo short</a>.
          </p>

          <h4 style={ { fontWeight: 'bold', fontSize: '18px', marginTop: '25px' } }>Articles</h4>
          <ul style={ { listStyleType: 'disc' } }>
            <li><a style={ { textDecoration: 'underline' } } href='https://bigcatrescue.org/liger-facts/'>Liger Facts</a></li>
            <li><a style={ { textDecoration: 'underline' } } href='http://www.huffingtonpost.com/2013/09/13/hercules-liger-worlds-largest-cat-photos_n_3920158.html'>Hercules: The Worlds Largest Cat</a></li>
          </ul>
        </div>

        <div >
          <h4 style={ { fontWeight: 'bold', fontSize: '18px', marginTop: '25px' } }>Misrepresented in:</h4>

          <p style={ { fontWeight: 'bold', marginTop: '15px' } }>Zoids: New Century</p>
          <ul style={ { listStyleType: 'disc' } }>
            <li>Aired in 2001</li>
            <li>Created by Shogakukan, Inc</li>
            <li>Featured a Liger-inspired mech called "Liger Zero"</li>
          </ul>

          <p>No significant impacts of misrepresentation.</p>
        </div>
      </div>
    );
  }
}
