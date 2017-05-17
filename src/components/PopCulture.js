import React, { Component } from 'react';

export default class PopCulture extends Component {

  render() {
    return (
      <div>
        <div>
          <h4>Movies</h4>
          <ul>
            <li><a href='https://www.videodetective.com/movies/napoleon-dynamite-liger/199433'>Napolean Dynamite</a></li>
          </ul>

          <h4>Books</h4>
          <ul>
            <li><a href='https://www.amazon.com/Great-Adventures-Larriot-Liger/dp/0983035903'>Larriot the Liger</a></li>
            <li><a href='https://www.amazon.com/Larry-Liger-Easter/dp/1530183960'>The Easter Liger</a></li>
            <li><a href='https://www.lantanapublishing.com/shop/books/the-tigon-and-the-liger/'>The Tigon and the Liger</a></li>
          </ul>

          <h4>Documentaries</h4>
          <p>
            The life of ligers and the details of their biology were detailed in a
            <a href='http://channel.nationalgeographic.com/wild/worlds-weirdest/videos/lions-tigers-and-ligers/'>Nat-Geo short</a>.
          </p>

          <h4>Articls</h4>
          <ul>
            <li><a href='https://bigcatrescue.org/liger-facts/'>Liger Facts</a></li>
            <li><a href='http://www.huffingtonpost.com/2013/09/13/hercules-liger-worlds-largest-cat-photos_n_3920158.html'>Hercules: The Worlds Largest Cat</a></li>
          </ul>
        </div>

        <div>
          <h4>Misrepresented in:</h4>

          <p>Zoids: New Century</p>
          <ul>
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
