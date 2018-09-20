import React from 'react';

const CustomIcons = {

  Battery() {
    return (
      <svg width="1em" height="1em" aria-hidden="true" fill="currentColor" data-prefix="fas" data-icon="battery-three-quarters" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="svg-inline--fa fa-battery-three-quarters fa-w-20 fa-3x">
        <path fill="currentColor" d="M544 160v64h32v64h-32v64H64V160h480m16-64H48c-26.51 0-48 21.49-48 48v224c0 26.51 21.49 48 48 48h512c26.51 0 48-21.49 48-48v-16h8c13.255 0 24-10.745 24-24V184c0-13.255-10.745-24-24-24h-8v-16c0-26.51-21.49-48-48-48zm-144 96H96v128h320V192z" className="">
        </path>
      </svg>
    );
  },
  
  Bolt() {
    return (
      <svg width="1em" height="1em" fill="currentColor" aria-hidden="true" data-prefix="fas" data-icon="bolt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="svg-inline--fa fa-bolt fa-w-10">
        <path fill="currentColor" d="M295.973 160H180.572L215.19 30.184C219.25 14.956 207.756 0 192 0H56C43.971 0 33.8 8.905 32.211 20.828l-31.996 240C-1.704 275.217 9.504 288 24.004 288h118.701L96.646 482.466C93.05 497.649 104.659 512 119.992 512c8.35 0 16.376-4.374 20.778-11.978l175.973-303.997c9.244-15.967-2.288-36.025-20.77-36.025z" className="">
        </path>
      </svg>
    );
  }

}


export default CustomIcons;