import React from 'react';

export default function Diet({ ...props }) {
  return (
    <div>
      <span class='pageHeader'>
        Liger Diet
      </span>

      <div class='pageBody'>
        Ligers feed in the same manner as other large cats.  However, since all Ligers are in captivity, they are limited to cat chow.

        <h1>Additional Info</h1>
        <a href={'https://www.catchow.com/'}>Cat Chow}</a>
        <a href={'https://www.catchow.com/products/gentle-formula/'}>Gentle Chow</a>
        <a href={'https://www.catchow.com/products/natural-indoor/'}>Indoor Chow</a>
        <a href={'https://www.catchow.com/products/gentle-formula/'}>Gentle Chow</a>
      </div>
    </div>
  );
}
