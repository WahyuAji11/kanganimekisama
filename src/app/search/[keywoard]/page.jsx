import AnimeList from "@/components/animeList"
import Header from "@/components/animeList/Header"
import { getAnimeResponse } from "@/libs/api-libs"

const Page = async ({ params }) => {

    const { keywoard } = params

    const searchAnime = await getAnimeResponse("anime", `q=${keywoard}`)
    const decodedTitle = decodeURI(keywoard);

    return (
        <>
            {/* Paling Populer */}
            <section>
                <Header title={`Pencarian Untuk ${decodedTitle}...`} />
                <AnimeList api={searchAnime} />
            </section>
        </>
    )
}

export default Page
