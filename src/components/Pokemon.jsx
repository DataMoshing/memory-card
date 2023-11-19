// import { useEffect, useState } from "react";
import pokeData from "./pokeData"

export default function Pokemon() {
    let pokeNames = pokeData.data.pokemon

    return (
        <div>
            <main className="main-container">
                {pokeNames.map((q, i) => <h3 className="card" key={i}>{[<img key={i} src={q.img} />, q.name]}</h3>)}
            </main>
        </div>
    )
}
