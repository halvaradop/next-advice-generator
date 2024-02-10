"use client"
import Image from "next/image"
import { useEffect, useState } from "react"
import { Advice } from "@/lib/@types/types"
import dividerMobile from "@/public/pattern-divider-desktop.svg"
import diceIcon from "@/public/icon-dice.svg"

const AdviceCard = () => {
    const [advice, setAdvice] = useState<Advice>()

    useEffect(() => {

        const getAdvice = async () => {
            const response = await fetch(process.env.NEXT_PUBLIC_URL_API_ADVICE!)
            const json = await response.json() as Advice
            setAdvice(json)
        }

        getAdvice()
    }, [])


    return (
        <article className="w-11/12 max-w-screen-sm mx-auto p-5 pb-16 font-extrabold text-center rounded-xl relative bg-blue-100">
            <h1 className="text-green text-lg tracking-wider">ADVICE # {advice?.slip.id}</h1>
            <p className="mt-4 mb-10 text-cyan text-3xl">"{advice?.slip.advice}"</p>
            <Image className="mx-auto" src={dividerMobile} alt="divider image" priority />
            <figure className="w-14 h-14 mx-auto grid place-content-center rounded-full absolute inset-x-0 -bottom-7 shadow-dice bg-green">
                <Image src={diceIcon} alt="dice icon" />
            </figure>
        </article>
    )
}


export default AdviceCard