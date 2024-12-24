import { useState, useEffect } from "react";
import GridBox from "./GridBox";

const GridPlayer = () => {
    const [gridlength, setGridlength] = useState<number>(5);
    const [error, setError] = useState<string>("");
    const [timer, setTimer] = useState<number>(15);
    const [isGridVisible, setIsGridVisible] = useState<boolean>(false);
    const [isResultVisible, setIsResultVisible] = useState<boolean>(false);

    const [numbers, setNumbers] = useState<number[]>([]);
    const [clickedNumbers, setClickedNumbers] = useState<number[]>([]);
    const [clickedForSequence, setClickedForSequence] = useState<number[]>([]);
    const [clickedErrorNumbers, setClickedErrorNumbers] = useState<number[]>([]);
    const [wrongClicks, setWrongClicks] = useState<number>(0);

    const resetGameState = (gridSize: number) => {
        setClickedNumbers([]);
        setClickedForSequence([]);
        setClickedErrorNumbers([]);
        setWrongClicks(0);

        const arr = Array.from({ length: gridSize * gridSize }, (_, i) => i + 1);
        const shuffled = arr.sort(() => Math.random() - 0.5);
        setNumbers(shuffled);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        if (value >= 0 && value <= 12) {
            setGridlength(value);
            setError("");

            if (isGridVisible) {
                setTimer(Math.round(0.6 * value * value));
                resetGameState(value);
            }
        } else {
            setError("Please enter a number between 0 and 12.");
        }
    };

    const handleStart = () => {
        setIsGridVisible(true);
        setIsResultVisible(false);
        setTimer(Math.round(0.6 * gridlength * gridlength));
        resetGameState(gridlength);
    };

    const handleNumberClick = (num: number) => {
        const nextExpectedNumber = clickedNumbers.length + 1;
        if (!isGridVisible) return;

        if (num === nextExpectedNumber) {
            setClickedNumbers((prev) => [...prev, num]);
            if (clickedErrorNumbers.includes(num)) {
                setClickedForSequence((prev) => [...prev, num]);
            }
        } else {
            setClickedErrorNumbers((prev) => [...prev, num]);
            setWrongClicks((prev) => prev + 1);
            setTimer((prev) => Math.max(prev - 2, 0)); // Penalize 2 seconds for wrong click
        }
    };

    const calculateRating = (): string => {
        const totalNumbers = gridlength * gridlength;
        const clickedCount = clickedNumbers.length;

        const ranges = [
            { min: Math.floor(0.8 * totalNumbers), stars: "★★★★★" },
            { min: Math.floor(0.6 * totalNumbers), stars: "★★★★" },
            { min: Math.floor(0.4 * totalNumbers), stars: "★★★" },
            { min: Math.floor(0.2 * totalNumbers), stars: "★★" },
            { min: 1, stars: "★" },
        ];

        for (const range of ranges) {
            if (clickedCount >= range.min) {
                return range.stars;
            }
        }
        return "No Rating";
    };

    useEffect(() => {
        resetGameState(gridlength);
    }, [gridlength]);

    useEffect(() => {
        let timerInterval: ReturnType<typeof setInterval>;
        if (isGridVisible && timer > 0) {
            timerInterval = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
        } else if (timer === 0) {
            setIsGridVisible(false);
            setIsResultVisible(true);
        }

        return () => clearInterval(timerInterval);
    }, [isGridVisible, timer]);

    return (
        <div>
            <div className="flex gap-2 items-end">
                <div className="mt-10">
                    <label htmlFor="grid-input" className="block text-sm font-medium text-white">
                        Enter Grid Number
                    </label>
                    <div className="mt-2">
                        <input
                            type="number"
                            id="grid-input"
                            min={0}
                            max={12}
                            onChange={handleChange}
                            value={gridlength}
                            className="p-2 w-44 rounded-md outline-none"
                            placeholder="5 for 5*5 grid"
                        />
                    </div>
                    {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                </div>
                <button
                    onClick={handleStart}
                    className="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600"
                >
                    Start
                </button>
            </div>

            {/* Display the grid */}
            {isGridVisible && (
                <>
                    <GridBox
                        numbers={numbers}
                        clickedNumbers={clickedNumbers}
                        clickedForSequence={clickedForSequence}
                        clickedErrorNumbers={clickedErrorNumbers}
                        handleNumberClick={handleNumberClick}
                        gridlength={gridlength}
                    />
                    <div className="mt-4 text-white">Grid will disappear in: {timer} seconds</div>
                </>
            )}

            {/* Display the result */}
            {isResultVisible && (
                <div className="mt-4 p-4 bg-gray-800 rounded text-white">
                    <h2 className="text-xl font-bold">Game Result</h2>
                    <p>Numbers clicked in sequence: {clickedNumbers.join(", ") || "None"}</p>
                    <p>Errors made: {clickedErrorNumbers.join(", ") || "None"}</p>
                    <p>Wrong clicks: {wrongClicks}</p>
                    <p className="mt-2 text-lg font-bold">Focus Rating: {calculateRating()}</p>
                    <button
                        onClick={handleStart}
                        className="mt-4 px-4 py-2 bg-green-500 rounded hover:bg-green-600"
                    >
                        Play Again
                    </button>
                </div>
            )}
        </div>
    );
};

export default GridPlayer;
