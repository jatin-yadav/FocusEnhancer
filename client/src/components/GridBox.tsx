interface GridBoxProps {
    numbers: number[];
    clickedNumbers: number[];
    clickedForSequence: number[];
    clickedErrorNumbers: number[];
    handleNumberClick: (num: number) => void;
    gridlength: number;
}

const GridBox: React.FC<GridBoxProps> = ({
    numbers,
    clickedNumbers,
    clickedForSequence,
    clickedErrorNumbers,
    handleNumberClick,
    gridlength,
}) => {
    return (
        <div
            className="grid gap-1 sm:gap-2 mx-auto mt-10"
            style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${gridlength}, minmax(0, 1fr))`,
            }}
        >
            {numbers.map((num) => {
                const isClicked = clickedNumbers.includes(num);
                const isError = clickedErrorNumbers.includes(num);
                const isSequence = clickedForSequence.includes(num);

                return (
                    <div
                        key={num}
                        onClick={() => handleNumberClick(num)}
                        aria-label={`Number ${num} ${isClicked ? 'selected' : ''} ${isError ? 'error' : ''} ${isSequence ? 'sequence' : ''}`}
                        className={`flex items-center justify-center w-12 h-12 border border-gray-500 text-sm sm:text-lg font-bold cursor-pointer 
                            ${isClicked ? 'bg-green-500 text-white pointer-events-none' : ''}
                            ${isError ? 'bg-red-500 text-white' : ''}
                            ${isSequence ? 'bg-yellow-500 text-white' : ''}
                            ${!isClicked && !isError && !isSequence ? 'bg-gray-100 text-gray-800' : ''}
                        `}
                    >
                        {num}
                    </div>
                );
            })}
        </div>
    );
};

export default GridBox;
