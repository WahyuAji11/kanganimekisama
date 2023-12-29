import AnimeList from "@/components/animeList"
import Header from "@/components/animeList/Header"

const Page = async ({ params }) => {

    const { keywoard } = params
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keywoard}`)
    const searchAnime = await response.json()

    return (
        <>
            {/* Paling Populer */}
            <section>
                <Header title={`Pencarian Untuk ${keywoard}...`} />
                <AnimeList api={searchAnime} />
            </section>
        </>
    )
}

export default Page
