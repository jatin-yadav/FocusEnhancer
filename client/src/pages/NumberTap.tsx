import GridPlayer from '../components/GridPlayer';

const NumberTap = () => {
    return (
        <section className="min-h-screen py-10 bg-gray-700 px-10">
            <h1 className="text-6xl text-white font-bold underline py-5">
                Focus Enhancer
            </h1>
            <div className="flex flex-col sm:flex-row">
                <div className="w-full sm:w-1/2">
                    <div className="mb-6 p-4 bg-gray-800 rounded text-white">
                        <h2 className="text-xl font-bold mb-2">Steps to Play</h2>
                        <ol className="list-decimal list-inside space-y-2">
                            <li>Enter a grid number (e.g., 5 for a 5x5 grid).</li>
                            <li>Press the "Start" button to begin the game.</li>
                            <li>Start clicking numbers in sequence (1, 2, 3, ...).</li>
                            <li>
                                <span className="font-bold text-yellow-400">Note:</span> Every wrong click will deduct 2 seconds from the timer. Focus carefully!
                            </li>
                        </ol>
                    </div>
                </div>
                <div className="w-full sm:w-1/2  flex justify-center items-center">
                    <GridPlayer />
                </div>
            </div>
        </section>
    )
}

export default NumberTap