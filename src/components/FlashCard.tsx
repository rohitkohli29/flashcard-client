type FlashCardProps = {
    flashcardData: {
        id: number,
        question: string,
        answer: string
    },
    setFlipped: (prev: boolean) => void,
    flipped: boolean
}

function FlashCard({ flashcardData, flipped, setFlipped }: FlashCardProps) {
    return (
        <div className={`flashcard-container cursor-pointer ${flipped ? 'flipped' : ''}`} onClick={() => setFlipped(!flipped)}>
            <div className="flashcard shadow">
                <div className="flashcard-front">
                    <div className="flex items-center justify-between px-1 py-2">
                        <p className="text-sm"><span className="bg-red-500 p-1 rounded text-white">Question</span></p>
                        <p className="text-sm"><span className="text-black p-1 text-lg font-medium">{flashcardData?.id ?? 0}</span></p>
                    </div>
                    <div className="flex-1 flex items-center text-center justify-center w-full h-full">
                        {flashcardData?.question ?? "Add Question"}
                    </div>
                </div>
                <div className="flashcard-back">
                    <p className="px-1 py-2 text-sm"><span className="bg-red-500 p-1 rounded text-white">Answer</span></p>
                    <div className="flex-1 flex items-center text-center justify-center w-full h-full">
                        {flashcardData?.answer ?? "undefined"}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FlashCard;