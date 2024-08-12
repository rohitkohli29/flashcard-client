import { useState } from "react";

const AddFlashCard = ({ setIsModalOpen,data, setData }: {
    setIsModalOpen: (isOpen: boolean) => void;
    data: Array<{
        id: number,
        question: string,
        answer: string
    }>;
    setData: any;
}) => {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(answer == "" || question == ""){
            alert("Please fill both question and answer fields.");
            return;
        }

        const newFlashcard = {
            id: data.length + 1,
            question,
            answer,
        };
    
        setData((prev: any) => {
            const updatedData = [...prev, newFlashcard];
            localStorage.setItem('flashcards', JSON.stringify(updatedData));
            return updatedData;
        });
    
        setIsModalOpen(false);
    }

    const handleModalContentClick = (e: React.MouseEvent<HTMLFormElement>) => {
        e.stopPropagation();
    }

    return (
        <form onSubmit={handleSubmit} onClick={handleModalContentClick} className="w-96 h-96 flex flex-col items-center justify-around bg-white p-6 shadow-md rounded-lg">
            <h1 className="text-3xl text-center">Add Flashcard</h1>
            <div className="w-full">
                <label htmlFor="question" className="block text-gray-700 font-bold mb-2">Question:</label>
                <input
                    type="text"
                    id="question"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                />
            </div>
            <div className="w-full">
                <label htmlFor="answer" className="block text-gray-700 font-bold mb-2">Answer:</label>
                <input
                    type="text"
                    id="answer"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                />
            </div>
            <button
                type="submit"
                className="w-full bg-blue-500 text-white mt-4 font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
                Save Flashcard
            </button>
        </form>
    )
}

export default AddFlashCard