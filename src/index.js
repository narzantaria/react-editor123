import React, { useState, Fragment, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBold, faCode, faItalic, faUnderline, faStrikethrough, faSuperscript, faSubscript, faFont, faTint, faListUl, faListOl, faAlignLeft, faAlignCenter, faAlignRight, faAlignJustify, faLink, faUnlink, faImage } from '@fortawesome/free-solid-svg-icons'

export const ExampleComponent = (props) => {
  const { api, controlled, rootUrl, upload } = props;

  const [fontclrVisible, setFontclrVisible] = useState(false);
  const [backclrVisible, setBackclrVisible] = useState(false);
  const [linkVisible, setLinkVisible] = useState(false);
  const [imgVisible, setImgVisible] = useState(false);
  const [images, setImages] = useState([]);
  const [loaderVisible, setLoaderVisible] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);
  const [resizer, setresizer] = useState({
    img: '',
    top: 0,
    left: 0,
    visible: false
  });
  let [imgId, setImgId] = useState(0);

  const loader = () => {
    fetch(api)
      .then(res => res.json())
      .then(json => setImages(json));
    setLoaderVisible(true);
  }

  const rightBtn = e => {
    if (e.target.tagName == 'IMG' && e.button == '2') {
      e.preventDefault();
      setImgId(++imgId);
      e.target.id = imgId;
      setresizer({
        img: e.target.id,
        visible: true,
        top: e.clientY,
        left: e.clientX
      });
    }
  }

  const switchToHTML = () => {
    let editor = document.getElementById('editor');
    let content = editor.innerHTML;
    content = htmlEncode(content);
    editor.innerHTML = content;
  }
  const htmlEncode = html => {
    html = trim(html);
    if (html.search('<') == -1) {
      html = html.replace(/&lt;/g, '<');
      html = html.replace(/&gt;/g, '>');
      return html;
    }
    return html.replace(/[&"'\<\>]/g, function (c) {
      switch (c) {
        case "&":
          return "&amp;";
        case "'":
          return "&#39;";
        case '"':
          return "&quot;";
        case "<":
          return "&lt;";
        default:
          return "&gt;";
      }
    });
  };
  const trim = input => {
    return input.toString().replace(/^([\s]*)|([\s]*)$/g, '');
  }
  const headerFormatter = arg => {
    if (window.getSelection) {
      let sel = window.getSelection();
      let range = sel.getRangeAt(0).cloneRange();
      if (range.commonAncestorContainer.parentNode.nodeName == arg.toUpperCase()) {
        formatter('formatBlock', false, 'p');
      } else {
        formatter('formatBlock', false, arg);
      }
    }
  }
  const formatter = (arg1, arg2, arg3) => {
    var range, sel;
    document.getElementById('editor').focus();
    if (window.getSelection) {
      // Non-IE case
      sel = window.getSelection();
      if (sel.getRangeAt) {
        range = sel.getRangeAt(0);
      }
      document.designMode = "on";
      if (range) {
        sel.removeAllRanges();
        sel.addRange(range);
      }
      document.execCommand(arg1, arg2, arg3);
      document.designMode = "off";
    } else if (document.selection && document.selection.createRange &&
      document.selection.type != "None") {
      // IE case
      range = document.selection.createRange();
      range.execCommand(arg1, arg2, arg3);
    }
  }
  const fontSize = e => {
    if (window.getSelection) {
      let sel = window.getSelection();
      let range = sel.getRangeAt(0).cloneRange();
      let rangeProxy = sel.getRangeAt(0).cloneContents();
      let spans = rangeProxy.querySelectorAll('span');
      for (let x = 0; x < spans.length; x++) {
        if (spans[x].style.fontSize != '') {
          spans[x].replaceWith(spans[x].innerHTML);
        }
      }
      range.deleteContents();
      range.insertNode(rangeProxy);
      let newSpan = document.createElement('span');
      newSpan.style.fontSize = e.target.value;
      range.surroundContents(newSpan);
      sel.removeAllRanges();
      sel.addRange(range);
    }
  }
  return (
    <div id="editor-wrapper">
      <div id="tools">
        <span className="tools-group">
          <FontAwesomeIcon id='code' icon={faCode} onClick={() => switchToHTML()} />
        </span>
        <span className="tools-group">
          <FontAwesomeIcon id='bold' icon={faBold} onClick={() => formatter('bold', false, null)} />
          <FontAwesomeIcon id='italic' icon={faItalic} onClick={() => formatter('italic', false, null)} />
          <FontAwesomeIcon id='underline' icon={faUnderline} onClick={() => formatter('underline', false, null)} />
        </span>
        <span className="tools-group">
          <FontAwesomeIcon id='strikethrough' icon={faStrikethrough} onClick={() => formatter('strikethrough', false, null)} />
          <FontAwesomeIcon id='superscript' icon={faSuperscript} onClick={() => formatter('superscript', false, null)} />
          <FontAwesomeIcon id='subscript' icon={faSubscript} onClick={() => formatter('subscript', false, null)} />
        </span>
        <span className="tools-group">
          <button id="h1" onClick={() => headerFormatter('h1')}>H1</button>
          <button id="h2" onClick={() => headerFormatter('h2')}>H2</button>
          <button id="h3" onClick={() => headerFormatter('h3')}>H3</button>
          <button id="h4" onClick={() => headerFormatter('h4')}>H4</button>
          <button id="h5" onClick={() => headerFormatter('h5')}>H5</button>
          <button id="h6" onClick={() => headerFormatter('h6')}>H6</button>
        </span>
        <span className="tools-group">
          <div id="fontclr">
            <FontAwesomeIcon icon={faFont} onClick={() => setFontclrVisible(!fontclrVisible)} />
            {fontclrVisible && (
              <div id="fontclr-wrapper" className="colours-wrapper">
                <button style={{ backgroundColor: 'black' }} onClick={() => formatter('foreColor', false, 'black')}></button>
                <button style={{ backgroundColor: 'white' }} onClick={() => formatter('foreColor', false, 'white')}></button>
                <button style={{ backgroundColor: 'red' }} onClick={() => formatter('foreColor', false, 'red')}></button>
                <button style={{ backgroundColor: 'green' }} onClick={() => formatter('foreColor', false, 'green')}></button>
                <button style={{ backgroundColor: 'blue' }} onClick={() => formatter('foreColor', false, 'blue')}></button>
                <button style={{ backgroundColor: 'yellow' }} onClick={() => formatter('foreColor', false, 'yellow')}></button>
                <button style={{ backgroundColor: 'orange' }} onClick={() => formatter('foreColor', false, 'orange')}></button>
                <button style={{ backgroundColor: 'gray' }} onClick={() => formatter('foreColor', false, 'gray')}></button>
                <button style={{ backgroundColor: 'brown' }} onClick={() => formatter('foreColor', false, 'brown')}></button>
                <button style={{ backgroundColor: 'skyblue' }} onClick={() => formatter('foreColor', false, 'skyblue')}></button>
              </div>
            )}
          </div>
          <div id="backclr">
            <FontAwesomeIcon icon={faTint} onClick={() => setBackclrVisible(!backclrVisible)} />
            {backclrVisible && (
              <div id="backclr-wrapper" className="colours-wrapper">
                <button style={{ backgroundColor: 'black' }} onClick={() => formatter('hiliteColor', false, 'black')}></button>
                <button style={{ backgroundColor: 'white' }} onClick={() => formatter('hiliteColor', false, 'white')}></button>
                <button style={{ backgroundColor: 'red' }} onClick={() => formatter('hiliteColor', false, 'red')}></button>
                <button style={{ backgroundColor: 'green' }} onClick={() => formatter('hiliteColor', false, 'green')}></button>
                <button style={{ backgroundColor: 'blue' }} onClick={() => formatter('hiliteColor', false, 'blue')}></button>
                <button style={{ backgroundColor: 'yellow' }} onClick={() => formatter('hiliteColor', false, 'yellow')}></button>
                <button style={{ backgroundColor: 'orange' }} onClick={() => formatter('hiliteColor', false, 'orange')}></button>
                <button style={{ backgroundColor: 'gray' }} onClick={() => formatter('hiliteColor', false, 'gray')}></button>
                <button style={{ backgroundColor: 'brown' }} onClick={() => formatter('hiliteColor', false, 'brown')}></button>
                <button style={{ backgroundColor: 'skyblue' }} onClick={() => formatter('hiliteColor', false, 'skyblue')}></button>
              </div>
            )}
          </div>
        </span>
        <span className="tools-group">
          <select name="font-size" id="font-size" onChange={e => fontSize(e)}>
            <option value="8px">8</option>
            <option value="9px">9</option>
            <option value="10px">10</option>
            <option value="11px">11</option>
            <option value="12px">12</option>
            <option value="14px">14</option>
            <option value="16px">16</option>
            <option value="18px">18</option>
            <option value="24px">24</option>
            <option value="30px">30</option>
            <option value="36px">36</option>
            <option value="48px">48</option>
            <option value="60px">60</option>
            <option value="72px">72</option>
          </select>
        </span>
        <span id="textalign" className="tools-group">
          <FontAwesomeIcon id='insertUnorderedList' icon={faListUl} onClick={() => formatter('insertUnorderedList', false, null)} />
          <FontAwesomeIcon id='insertOrderedList' icon={faListOl} onClick={() => formatter('insertOrderedList', false, null)} />
          <FontAwesomeIcon id='justifyLeft' icon={faAlignLeft} onClick={() => formatter('justifyLeft', false, null)} />
          <FontAwesomeIcon id='justifyCenter' icon={faAlignCenter} onClick={() => formatter('justifyCenter', false, null)} />
          <FontAwesomeIcon id='justifyRight' icon={faAlignRight} onClick={() => formatter('justifyRight', false, null)} />
          <FontAwesomeIcon id='justifyFull' icon={faAlignJustify} onClick={() => formatter('justifyFull', false, null)} />
        </span>
        <span className="tools-group">
          <div id="linktext">
            <FontAwesomeIcon icon={faLink} onClick={() => setLinkVisible(!linkVisible)} />
            {linkVisible && (
              <div id="link-wrapper" className="link-wrapper">
                <input id="linkvalue" type="text" />
                <button id="setlink" className='tools-btn'>OK</button>
              </div>
            )}
          </div>
          <FontAwesomeIcon id="unlink" icon={faUnlink} onClick={() => formatter('unlink', false, null)} />
        </span>
        <span className="tools-group">
          <div id="insertimg">
            <FontAwesomeIcon icon={faImage} onClick={() => setImgVisible(!imgVisible)} />
            {imgVisible && (
              <div id="img-loader" className="img-loader" focusable="false">
                {!controlled ? <input type="text" value={imageSrc} onChange={e => setImageSrc(e.target.value)} /> : (
                  <Fragment>
                    <img alt="" src={imageSrc ? rootUrl + imageSrc : require('./picture.png')} onClick={() => loader()} style={{ cursor: 'pointer' }} />
                    {loaderVisible && (
                      <div className='dark' onClick={() => {
                        setLoaderVisible(false);
                      }}>
                        <ImagesWrapper
                          rootUrl={rootUrl}
                          images={images}
                          upload={upload}
                          api={api}
                          refetch={() => loader()}
                          cancelLoader={() => {
                            setLoaderVisible(false);
                          }}
                          handleSelect={arg => setImageSrc(arg)}
                        />
                      </div>
                    )}
                  </Fragment>
                )}
                <button
                  id="setimg"
                  className='tools-btn'
                  onClick={() => {
                    if(controlled) {
                      formatter('insertImage', false, rootUrl + imageSrc)
                    } else {
                      formatter('insertImage', false, imageSrc)
                    }
                  }}
                >OK</button>
              </div>
            )}
          </div>
        </span>
      </div>
      <div
        id="editor"
        onContextMenu={e => rightBtn(e)}
        onClick={() => {
          setresizer({
            visible: false,
            top: 0,
            left: 0
          });
        }}
        contentEditable={true}
      >I am Shutruk Nahunte, King of Anšan and Susa, Sovereign of the land of Elam. By command of Inshushinak I destroyed Sippar, Took the Stele of Niran-Sin, and brought it back to Elam, where I erected it as an offering to my god.</div>
      {resizer.visible && <ImageResizer top={resizer.top} left={resizer.left} callBack={arg => {
        setresizer({
          visible: false,
          top: 0,
          left: 0
        });
        document.getElementById(imgId).style.width = arg + 'px';
      }} />}
    </div>
  );
};

const ImagesWrapper = ({ rootUrl, images, upload, api, refetch, cancelLoader, handleSelect }) => {
  const [selectedImage, selectImage] = useState('');
  useEffect(() => {
    document.getElementById('images-wrapper').classList.add('images-wrapper-visible');
    return () => {
      document.getElementById('images-wrapper').classList.remove('images-wrapper-visible');
    };
  }, []);
  const fileUpload = useRef(null);
  const getPhoto = async () => {
    let uploadfile = document.getElementById("upload_doc").files[0];
    let data = new FormData();
    data.append("file", uploadfile, uploadfile.name);
    await fetch(api, {
      method: 'POST',
      body: data
    })
      .then(() => refetch());
  }
  return (
    <div id="images-wrapper" onClick={e => {
      e.stopPropagation();
    }}>
      <section id='images-content'>
        {images.map(item => (
          <div className="img-single-wrapper">
            <img src={rootUrl + item} alt="" onClick={e => {
              const imagesToSelect = document.querySelectorAll('.img-single-wrapper');
              for (let x = 0; x < imagesToSelect.length; x++) {
                imagesToSelect[x].querySelector('img').classList.remove('selected');
              }
              e.target.classList.add('selected');
              selectImage(item);
            }} />
          </div>
        ))}
      </section>
      <section id='images-controls'>
        <button className='xbutton' onClick={() => {
          handleSelect(selectedImage);
          cancelLoader();
        }}>OK</button>
        {upload && <button
          className='xbutton'
          onClick={() => fileUpload.current.click()}
        >Upload</button>}
        <button className='xbutton' onClick={() => cancelLoader()}>Cancel</button>
        <input
          type='file'
          ref={fileUpload}
          style={{ display: 'none' }}
          id="upload_doc"
          onChange={() => getPhoto()}
        />
      </section>
    </div>
  );
};

const ImageResizer = ({ top, left, callBack }) => {
  const [width, setWidth] = useState(null);
  return (
    <div id='resizer' style={{ top: top + 'px', left: left + 'px' }}>
      <label for='imgwidth'>Image width:</label>
      <input type="text" id='imgwidth' value={width} onChange={e => setWidth(e.target.value)} />
      <button className='xbutton' onClick={() => callBack(width)}>OK</button>
    </div>
  );
};

