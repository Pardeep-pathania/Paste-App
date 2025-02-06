import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromPastes } from '../redux/pasteSlice';
import toast from 'react-hot-toast';

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes)
  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();

  const filteredData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleDelete(pasteId) {
    dispatch(removeFromPastes(pasteId));
  }

  return (
    <div>
      <input
        className='border p-2 mt-3 rounded-2xl min-w-[600px] text-black'
        type='search'
        placeholder='Search here'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} />

      <div className="flex flex-col gap-5">
        {
          filteredData.length > 0 &&
          filteredData.map((paste) => {

            return (
              <div className='border mt-5' key={paste?._id}>
                <div>
                  {paste.title}
                </div>
                <div>
                  {paste.content}
                </div>
                <div className='flex flex-row gap-5 place-content-evenly'>

                  <button>
                    <a href={`/?pasteId=${paste?._id}`}>
                    Edit</a>
                    </button>

                  <button>
                    <a href={`/pastes/${paste?._id}`}>View</a>
                    </button>

                  <button onClick={() => handleDelete(paste?._id)}>
                    Delete
                  </button>
                  <button>Share</button>

                  <button onClick={() => {
                    navigator.clipboard.writeText(paste?.content)
                    toast.success("Copied to Clipboard")
                  }}>
                    Copy</button>
                </div>
                <div>{paste.createdAt}</div>
              </div>
            )
          })
        }
      </div>

    </div>

  )
}

export default Paste
