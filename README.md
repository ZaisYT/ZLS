# ZLS
Zais Lyric Sync is a customizable open library for music sync in javascript, ZXQM's lyrics sync library.

To add ZLS into your proyect you need to follow these steps:

## 1. Install ZLS into your proyect.
> Just extract all the ZLS source files into your proyect folder.


## 2. Create a new ZLSInstance.
> To start ZLS you need to create a new instance.
>
> You can do that with the following code.
> ```js
> import { ZaisLyricSync } from './ZLS/zls.js';
>
> const ZLS = new ZaisLyricSync(handler, song, lyrics);
> ```
>
> ### The ZaisLyricSync class needs 3 arguments.
> > A valid `HTMLDOMELEMENT` selected with the class `.zls-lyric-holder`.
> >
> > A valid `HTMLMEDIAELEMENT`.
> > 
> > A valid `Object` with the lyrics inside.
>
> Our code needs to look like this
> ```js
>import { ZaisLyricSync } from "../zls.js";
>
>const song = new Audio();
>const zlsHolder = document.querySelector('.zls-lyric-holder');
>const lyrics = { "lyrics": "[1.38] This is an example\n[18.89] of zls\n[23.27]  " }
>
>const ZLSInstance = new ZaisLyricSync(zlsHolder, song, lyrics);
> ```
