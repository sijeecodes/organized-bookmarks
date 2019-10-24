import React, { useState } from 'react';

const Tags = ({ tagFilter, setTagFilter }) => {
  console.log('tag filters ', tagFilter);
  const [red, setRed] = useState(tagFilter.indexOf('red')+1 ? 'tag-onoff-button-on' : 'tag-onoff-button');
  const [orange, setOrange] = useState(tagFilter.indexOf('orange')+1 ? 'tag-onoff-button-on' : 'tag-onoff-button');
  const [yellow, setYellow] = useState(tagFilter.indexOf('yellow')+1 ? 'tag-onoff-button-on' : 'tag-onoff-button');
  const [green, setGreen] = useState(tagFilter.indexOf('green')+1 ? 'tag-onoff-button-on' : 'tag-onoff-button');
  const [blue, setBlue] = useState(tagFilter.indexOf('blue')+1 ? 'tag-onoff-button-on' : 'tag-onoff-button');
  const [purple, setPurple] = useState(tagFilter.indexOf('purple')+1 ? 'tag-onoff-button-on' : 'tag-onoff-button');
  const [grey, setGrey] = useState(tagFilter.indexOf('grey')+1 ? 'tag-onoff-button-on' : 'tag-onoff-button');

  const onPress = (tag) => {
    if(tagFilter.indexOf(tag) === -1) {
      let temp = tagFilter;
      temp.push(tag);
      setTagFilter(temp);
    } else {
      let temp = tagFilter;
      temp.splice(tagFilter.indexOf(tag), 1);
      setTagFilter(temp);
    }

    switch(tag) {
      case 'red': {
        if(red === 'tag-onoff-button') {
          setRed('tag-onoff-button-on');
          break;
        } else {
          setRed('tag-onoff-button');
          break;
        }
      }
      case 'orange': {
        if(orange === 'tag-onoff-button') {
          setOrange('tag-onoff-button-on');
          break;
        } else {
          setOrange('tag-onoff-button');
          break;
        }
      }
      case 'yellow': {
        if(yellow === 'tag-onoff-button') {
          setYellow('tag-onoff-button-on');
          break;
        } else {
          setYellow('tag-onoff-button');
          break;
        }
      }
      case 'green': {
        if(green === 'tag-onoff-button') {
          setGreen('tag-onoff-button-on');
          break;
        } else {
          setGreen('tag-onoff-button');
          break;
        }
      }
      case 'blue': {
        if(blue === 'tag-onoff-button') {
          setBlue('tag-onoff-button-on');
          break;
        } else {
          setBlue('tag-onoff-button');
          break;
        }
      }
      case 'purple': {
        if(purple === 'tag-onoff-button') {
          setPurple('tag-onoff-button-on');
          break;
        } else {
          setPurple('tag-onoff-button');
          break;
        }
      }
      default: {
        if(grey === 'tag-onoff-button') {
          setGrey('tag-onoff-button-on');
          break;
        } else {
          setGrey('tag-onoff-button');
          break;
        }
      }
    }
  }

  return (
    <div className='tag-container'>
      <div className='tag'>
        Tag
        <div className='tag-aligner'>
          <div className='tag-dropdown'>
            <div
              className={red}
              onClick={() => onPress('red')}
            >
              Red
            </div>
            <div
              className={orange}
              onClick={() => onPress('orange')}
            >
              Orange
            </div>
            <div
              className={yellow}
              onClick={() => onPress('yellow')}
            >
              Yellow
            </div>
            <div
              className={green}
              onClick={() => onPress('green')}
            >
              Green
            </div>
            <div
              className={blue}
              onClick={() => onPress('blue')}
            >
              Blue
            </div>
            <div
              className={purple}
              onClick={() => onPress('purple')}
            >
              Purple
            </div>
            <div
              className={grey}
              onClick={() => onPress('grey')}
            >
              Grey
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tags;
