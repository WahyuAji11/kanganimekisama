import Link from "next/link"

const Page = () => {
    return (
        <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
            <div className="flex-col justify-center items-center text-center">
                <h3 className="text-color-accent text-2xl font-bold">Halaman belom kelar</h3>
                <h3 className="text-color-accent text-1xl font-bold">「ページ、まだ終わってないんだよ」 <br></br>(Pēji, mada owattenainda yo)</h3>
                <p className="text-color-primary text-1xl font-bold">Sabar cok, gw ngesolo nih web sendirian</p>
                <p className="text-color-primary text-1xl font-bold">「我慢しろよ、俺一人でソロやってんだ」<br></br>(Gaman shiro yo, ore hitori de soro yattendā)</p>
                <p className="text-color-primary text-1xl font-bold">(-̩̩̩-̩̩̩-̩̩̩-̩̩̩-̩̩̩___-̩̩̩-̩̩---)</p>
                <br></br> <br></br>
                <Link href="/" className="text-color-primary text-1xl font-bold hover:text-color-accent transition-all underline">Kembali ke halaman utama / ホームページに戻る</Link>
            </div>
        </div>
    )
}

export default Page