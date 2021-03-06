/* eslint-disable */
import { injectGlobal } from 'styled-components'

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Lato|Montserrat');
@import url('https://fonts.googleapis.com/css?family=Saira|Saira+Semi+Condensed');
@import url('https://fonts.googleapis.com/css?family=Nunito|Saira|Saira+Semi+Condensed');
* {
    box-sizing: border-box;
}

html,
body {
    position: relative;
    width: 100%;
    height: 100%;
    color: #00243F;
    font-family: 'Lato', sans-serif;
    font-size:14px;
    line-height:1.4;
}

ul,li {
  list-style: none;
  padding: 0;
  margin: 0;
}

.selected {
  color: #ff00ff;
}

`
