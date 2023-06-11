import { ZLSHandlerError, ZLSAudioError, ZLSJsonError, ZLSTimeUpdateError } from './zls-errs.js';

export class ZaisLyricSync{
    constructor (handler, audioElem, jsonFile) {
        if (!handler) throw new ZLSHandlerError('There\'s no Handler specified!');
        if (!audioElem) throw new ZLSAudioError('There\'s no Audio specified!');
        if (!jsonFile) throw new ZLSJsonError('There\'s no JSON text specified!');

        this.Handler = handler;
        this.Audio = audioElem;
        this.Lyric = jsonFile;
        this.Time = 0;
        this.i = 0;
    }

    logPropierties(){
        console.log("ZLS Propierty -> Handler:", this.Handler);
        console.log("ZLS Propierty -> Audio:", this.Audio);
        console.log("ZLS Propierty -> Lyric:", this.Lyric);
        console.log("ZLS Propierty -> Time:", this.Time);
        !this.Sync ? console.warn('ZLS Propierty -> Sync: Not Defined!\nPlease use the method "loadHandler" to load this propierty.') : console.log("ZLS Propierty -> Sync:", this.Sync);
    }

    loadHandler(){
        let formatted = this.Lyric.lyrics.split('\n');

        let counter = 0;
        let syncArr = [];

        for (Element of formatted){
            let formattedWithNumber = formatted[counter].split('] ');
            formattedWithNumber[0] = Number(formattedWithNumber[0].split('[')[1]);
            syncArr.push(formattedWithNumber[0]);

            let newLine = document.createElement('p');
            newLine.className = 'lyric-Line';
            newLine.setAttribute('line', counter);
            newLine.innerHTML = formattedWithNumber[1];
    
            this.Handler.append(newLine);
            counter++;
        }

        this.Sync = syncArr;
    }

    updateTime(val){
        if (val == null) throw new ZLSTimeUpdateError('You need to give one argument');
        let valr = Math.round(val*100)/100;
        this.Time = valr;

        if (valr <= 1) {
            let i = 0;
            for ( Element in this.Sync ){
                let curElem = document.querySelector(`.lyric-Line[line="${(i)}"]`);
                curElem.classList.remove('Deactivated');
                curElem.classList.remove('Activated');
                i += 1;
            }

            this.i = 0;
        }

        // console.log(this.Time, this.Sync[this.i], (this.i ));

        let curElem = document.querySelector(`.lyric-Line[line="${(this.i)}"]`);
        // console.log(curElem);

        let lastElem = this.i == 0 ? document.querySelector(`.lyric-Line[line="${(this.i)}"]`) : document.querySelector(`.lyric-Line[line="${(this.i-1)}"]`);
        // console.log(lastElem);

        if (this.Time >= this.Sync[this.i]){
            if (this.i == 0){
                this.i = (this.i + 1);
                curElem.classList.add('Activated');
                return;
            }

            if (this.i == this.Sync.length - 1) {
                lastElem.classList.remove('Activated');
                lastElem.classList.add('Deactivated');
                return;
            }

            this.i = (this.i + 1);

            lastElem.classList.remove('Activated');
            lastElem.classList.add('Deactivated');
            curElem.classList.add('Activated');
            // console.log("passed!");
        }

        // let selElem = document.querySelector('.Activated');
        // console.log(bcr.width);

        // if (selElem.offsetTop >= (this.Handler.offsetHeight / 2)){

        //     (selElem.offsetBottom >= (this.Handler.offsetHeight / 2))
        //     var containerHeight = this.Handler.offsetHeight;
        //     var activatedElementHeight = selElem.offsetHeight;
        //     var activatedElementTop = selElem.offsetTop;
        //     var scrollPosition = activatedElementTop - (containerHeight / 2) + (activatedElementHeight / 2);

        //     this.Handler.scrollTop = scrollPosition;
        // }

    }
}