const Loading = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="flex justify-center items-center min-h-screen">
                <div className="flex justify-center items-center loading"></div>
            </div>
            <br></br>
            <div className="flex-col justify-center items-center">
                <h2 className="flex justify-center items-center text-color-accent text-2xl font-bold">Omachi kudasai</h2>
                <p className="flex justify-center items-center text-color-primary text-1xl font-bold">(≡^∇^≡)</p>
            </div>
        </div>
    )
}

export default Loading