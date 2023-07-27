import React, { useEffect, useState } from "react";
import { WordFlip } from "./wordFlip";



type FadeProp = { fade: 'fade-in' | 'fade-out' }

const FadingText = () => {

    const myName = 'Jack'
    const korean = `안녕하세요! 제 `
    const chinese = `你好！我的名字是 `
    const spanish = `¡HOLA! MI NOMBRE ES `
    const english = `HI! MY NAME IS `
    const japanese = `こんにちは！私の名前は `
    const hindi = `नमस्ते! मेरा नाम`
    const afrikaans = `HALLO! MY NAAM IS `
    const FADE_INTERVAL_MS = 1750
    const WORD_CHANGE_INTERVAL_MS = FADE_INTERVAL_MS * 2
    const WORDS_TO_ANIMATE = [english, korean, afrikaans, chinese, spanish, japanese, hindi,]

    const [fadeProp, setFadeProp] = useState<FadeProp>({ fade: 'fade-in' })
    const [wordOrder, setWordOrder] = useState(0)

    useEffect(() => {
        const fadeTimeout = setInterval(() => {
            fadeProp.fade === 'fade-in' ? setFadeProp({ fade: 'fade-out' }) : setFadeProp({ fade: 'fade-in' })
        }, FADE_INTERVAL_MS)

        return () => clearInterval(fadeTimeout)
    }, [fadeProp])

    useEffect(() => {
        const wordTimeout = setInterval(() => {
            setWordOrder((prevWordOrder) => (prevWordOrder + 1) % WORDS_TO_ANIMATE.length)
        }, WORD_CHANGE_INTERVAL_MS)

        return () => clearInterval(wordTimeout)
    }, [])

    return (
        <div className=" text-7xl font-mono z-40 whitespace-nowrap absolute mx-auto my-auto left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-transform: uppercase ">
            <div className="inline-flex flex-row relative w-full">
                <h1 className={fadeProp.fade}>
                    {WORDS_TO_ANIMATE[wordOrder]}
                </h1>
                <h1
                    onMouseOver={WordFlip}
                    className={`text-orange-400 pl-10 pr-10  ${fadeProp.fade}`}
                    data-value={myName}
                >
                    {myName}
                </h1>

                <h1 className={fadeProp.fade}>{WORDS_TO_ANIMATE[wordOrder] === WORDS_TO_ANIMATE[6] ? 'है।' : null}</h1>
                <h1 className={fadeProp.fade}>{WORDS_TO_ANIMATE[wordOrder] === WORDS_TO_ANIMATE[1] ? '이름은' : null}</h1>
            </div>

        </div>

    )
}
export default FadingText;