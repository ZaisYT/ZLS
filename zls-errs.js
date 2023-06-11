export class ZLSHandlerError extends Error {
    constructor (message){
        super(message)
        this.name = 'ZLSHandlerError'
    }
}

export class ZLSAudioError extends Error {
    constructor (message){
        super(message)
        this.name = 'ZLSAudioError'
    }
}

export class ZLSJsonError extends Error {
    constructor (message){
        super(message)
        this.name = 'ZLSJsonError'
    }
}

export class ZLSTimeUpdateError extends Error {
    constructor (message){
        super(message)
        this.name = 'ZLSTimeUpdateError'
    }
}