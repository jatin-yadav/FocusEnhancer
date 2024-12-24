interface GridBoxProps {
    numbers: number[];
    clickedNumbers: number[];
    clickedForSequence: number[];
    clickedErrorNumbers: number[];
    handleNumberClick: (num: number) => void;
    gridlength: number;
}

// const GridBox = ({ gridlength }: { gridlength: number }) => {
const GridBox: React.FC<GridBoxProps> = ({ numbers, clickedNumbers, clickedForSequence, clickedErrorNumbers, handleNumberClick, gridlength }) => {




    return (
        <div className="grid gap-2 mx-auto mt-10"
            style={{
                gridTemplateColumns: `repeat(${gridlength}, minmax(0, 1fr))`,
            }}
        >
            {numbers.map((num) => (
                <div
                    key={num}
                    onClick={() => handleNumberClick(num)}
                    className={`flex items-center justify-center w-12 h-12 border border-gray-500 text-lg font-bold cursor-pointer
                         ${clickedNumbers.includes(num) ? 'bg-blue-500 text-white pointer-events-none' : 'bg-gray-100 text-gray-800'}
                         ${clickedErrorNumbers.includes(num) ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-800'}
                         ${clickedForSequence.includes(num) ? 'bg-yellow-500 text-white' : 'bg-gray-100 text-gray-800'}
                         `
                    }
                >
                    {num}
                </div>
            ))}
        </div>
    );
};

export default GridBox;
