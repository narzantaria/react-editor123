import React, { Component } from 'react';
import axios from 'axios';

class FileUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],  //нужно!!!!!!!!!!!!!!!!!!!!
      selectedImage: null,
      sendImage: null,
      loading: true,
      renderedImages: 0
    };
    this.openFile = this.openFile.bind(this);
    this.sendBackData = this.sendBackData.bind(this);
    this.loadAnimation = this.loadAnimation.bind(this);
  }
  openFile(e) {
    this.refs.fileUploader.click();
  }
  getInitialState = () => {
    return {
      photo: [],
      name: ''
    }
  }
  pressButton = (e) => {
    e.preventDefault();
    this.loadAnimation();
    var component = this;
    var data = new FormData();
    data.append("photo", component.state.photo, component.state.name);
    var request = axios.post(this.props.API_URL + "upload" + this.props.destinationFolder, data);
    request.then(function (response) {
      if (response.status == 200) {
        console.log('saved in db')
      }
    });
    var img = document.createElement("img");
    img.src = "files/news/" + component.state.name;
    document.getElementById('content').appendChild(img);
  }
  getPhoto = () => {
    var uploadfile = document.getElementById("upload_doc").files[0]
    this.setState({
      photo: uploadfile, name: uploadfile.name
    })
  }
  handelOnLoad = () => {
    if (this.state.renderedImages < this.state.images.length - 1)
      this.setState({ renderedImages: this.state.renderedImages + 1 });
    else {
      this.setState({ renderedImages: 0 });
    }
  }
  loadAnimation = () => {
    document.getElementById('content').classList.add('hidden');
    document.getElementById('load').classList.remove('hidden');
    setTimeout(() => {
      document.getElementById('content').classList.add('content-hidden');
      document.getElementById('content').classList.remove('hidden');
    }, 1000) //runs after 5sec
    setTimeout(() => {
      document.getElementById('load').classList.add('hidden');
      document.getElementById('content').classList.remove('content-hidden');
    }, 2000) //runs after 5sec
  }
  componentDidMount() {
    this.setState({
      loading: false
    })

    axios.get(this.props.API_URL + "files/news")
      .then(res => {
        const images = res.data;
        this.setState({
          images, //нужно!!!!!!!!!!!!!!!!!!!!
          loading: false,
          selectedImage: res.data[0]
        });
        const uploadImages = document.getElementById("upload").querySelectorAll("img");
        console.log(uploadImages[0]);
        for (var i = 0; i <= uploadImages.length - 1; i++) {
          uploadImages[i].addEventListener("click", function () {
            for (var j = 0; j <= uploadImages.length - 1; j++) {
              uploadImages[j].style.border = "none";
            }
            this.style.border = "2px solid blue";
          })
        }
      })
      .catch(err => { // log request error and prevent access to undefined state
        this.setState({ loading: false, error: true });
        console.error(err);
      })
  }
  sendBackData = (e) => {
    e.preventDefault();
    this.props.parentCallback(this.state.selectedImage);
    document.getElementById('upload').classList.add('flatten');
    setTimeout(() => {
      document.getElementById('upload').classList.add('shrink');
    }, 700) //runs after 5sec
    setTimeout(() => {
      document.getElementById('upload').classList.add('upload-hidden');
      document.getElementById('upload').classList.remove('upload-show');
    }, 1300) //runs after 5sec
  }
  render() {
    return (
      <>
        {this.state.loading && <div style={{
          position: "fixed",
          background: "rgba(0,0,0,0.7)",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          color: "#fff"
        }}>Loading</div>}
        <div id="upload" className="z-depth-3 card-content upload upload-hidden">
          <div className="content-wrapper">
            <section id="content" className="content flex-st">
              {this.state.images.map(image => (
                <img
                  src={"files/news/" + image}
                  onClick={() => { this.state.selectedImage = image; }}
                  onLoad={this.handelOnLoad}
                  alt=""
                />
              ))}
            </section>
          </div>
          <section className="flex-round">
            <button className="xbutton" onClick={this.sendBackData}>Добавить</button>
            <button className="xbutton" onClick={this.openFile} >Открыть</button>
            <section id="openfile">
              <
                input
                type="file"
                name="sampleFile"
                ref="fileUploader"
                defaultValue=""
                id="upload_doc"
                onChange={this.getPhoto}
              />
            </section>
            <button className="xbutton" onClick={this.pressButton}>Загрузить</button>
          </section>
        </div>
      </>
    );
  }
}

export default FileUpload;