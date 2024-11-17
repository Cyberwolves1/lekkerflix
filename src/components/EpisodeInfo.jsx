function EpisodeInfo({episodeInfo}) {
    //replace placeholders with episode info here :)

    return (
        <div className="flex gap-2 w-[550px] my-2">
            <img src="https://placehold.co/600x400/000000/FFFFFF/png" alt="Episode image" className="h-[150px]"/>
            <div className="flex flex-col gap-2 my-2">
                <p className="font-bold text-lg">Episode 1</p>
                <p className="text-sm">When a Supe kills the love of his life, A/V salesman Hughie Campbell teams up with Billy Butcher, a vigilante hell-bent on punishing corrupt Supes -- and Hughie's life will never be the same again.</p>
            </div>
        </div>
    )
}

export default EpisodeInfo
