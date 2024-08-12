import { useEffect, useState } from 'react'
import './App.css'
import FlashCard from './components/FlashCard'
import { ArrowLeft, ArrowRight, Edit } from 'lucide-react';
import AddFlashCard from './components/AddFlashCard';

function App() {
  const [flipped, setFlipped] = useState(false);
  const [cardNumber, setCardNumber] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const d = localStorage.getItem("flashcards");
    if (d == null) {
      localStorage.setItem("flashcards", JSON.stringify([]));
      setData([]);
      return;
    }
    setData(JSON.parse(d));
  }, [])

  return (
    <div className='w-full h-screen flex relative items-center justify-center'>
      <div className='w-full absolute top-5 flex items-center justify-center gap-x-2'>
        <h1 className='sm:text-5xl text-2xl'>All Flashcards</h1>
        <div className='ml-4 mt-1'>
          <button onClick={() => setIsModalOpen(true)} className='p-2 text-sm text-white flex gap-x-1 rounded bg-blue-500'>Add Flashcard <Edit size={20} /></button>
        </div>
      </div>
      <div className='w-[275px] h-auto'>
        <FlashCard flashcardData={data[cardNumber]} flipped={flipped} setFlipped={setFlipped} />

        <div className='flex items-center w-full justify-between my-5'>
          <button onClick={() => {
            if (flipped) setFlipped(false);
            setCardNumber((prevIndex) => (prevIndex + 1) % data.length)
          }} className='px-3 py-2 text-sm text-white rounded flex items-center gap-x-1 bg-blue-500' type='button'> <ArrowLeft size={18} /> Previous</button>
          <button onClick={() => {
            if (flipped) setFlipped(false);
            setCardNumber((prevIndex) => (prevIndex - 1 + data.length) % data.length)
          }} className='px-4 py-2 text-sm text-white rounded flex flex-row-reverse items-center gap-x-1 bg-blue-500' type='button'><ArrowRight size={18} /> Next</button>
        </div>
      </div>

      {isModalOpen && (
        <div onClick={() => setIsModalOpen(false)} className='fixed top-0 flex items-center justify-center left-0 w-full h-full backdrop-blur-md z-50'>
          <AddFlashCard data={data} setData={setData} setIsModalOpen={setIsModalOpen} />
        </div>
      )}
    </div>
  )
}

export default App
