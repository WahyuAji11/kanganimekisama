import AnimeList from "@/components/animeList"
import Header from "@/components/animeList/Header"
import { getAnimeResponse } from "./libs/api-libs"

const Page = async () => {

  const topAnime = await getAnimeResponse("top/anime", "limit=8")

  return (
    <>
      {/* Paling Populer */}
      <section>
        <Header title="Paling Populer" linkTitle="Lihat Semua" linkHref="/populer" />
        <AnimeList api={topAnime} />
      </section>
    </>
  )
}

export default Page
