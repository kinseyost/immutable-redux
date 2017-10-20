import React, { Component } from 'react';
import styles from './Uploads.css';
import Button from './Button.js';


export default class Uploads extends Component {
  state = { fileInfo: [] };
  handleUpload = (e) => {
    const { files } = e.target;
    const filesLength = files.length;
    const fileInfo = [];
    for (let i = 0; i < filesLength; i++) {
      fileInfo.push(files[i]);
    }
    this.setState({ fileInfo, files });
  }

  uploadFiles = () => {
    const { files } = this.state;
    // Send a chunk from the client over websockets...

  }

  render() {
    const { fileInfo } = this.state;
    const Files = fileInfo.map(file => (
      <div key={ file.name } className={ styles.UploadRow }>
        <span> { file.name } </span>
      </div>
    ));
    return (
      <div>
        <input
          multiple
          type='file'
          onChange={ this.handleUpload }
          placeholder='Select Files to upload' />
        { Files }
        <Button onClick={ this.uploadFiles }> Upload </Button>
      </div>

    );
  }
}
