import React, { Component } from 'react';
import { ImagePicker, WingBlank } from 'antd-mobile';

  
export class ImgLoader extends Component {

    state = {
        files: [],
        multiple: false,
      }

      onChange = (files, type, index) => {
        console.log(files, type, index);
        this.setState({
          files,
        });
      }
      onSegChange = (e) => {
        const index = e.nativeEvent.selectedSegmentIndex;
        this.setState({
          multiple: index === 1,
        });
      }
      
      render() {
        const { files } = this.state;
        return (
          <WingBlank>
            <ImagePicker
              files={files}
              length={1}
              onChange={this.onChange}
              onImageClick={(index, fs) => console.log(index, fs)}
              selectable={files.length < 1}
              multiple={this.state.multiple}
            />
          </WingBlank>
        );
      }
}

export default ImgLoader;



