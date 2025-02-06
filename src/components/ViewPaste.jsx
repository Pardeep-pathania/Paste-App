
import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToPastes, updateToPastes } from '../redux/pasteSlice';

const ViewPaste = () => {

  const {id} = useParams();

  const allPastes = useSelector((state)=> state.paste.pastes);

  const paste = allPastes.filter((p)=>p._id === id)[0];
  console.log("Final Paste", paste);

  return (
    <div>
    <div className='flex flex-row mt-3 gap-7 place-content-center '>
   <input
   className='p-1 pl-4 m-3 w-[40%] border rounded-2xl'
   type='text'
   placeholder='Enter title here'
   value = {paste.title}
   disabled
   onChange = {(e)=> setTitle(e.target.value)}
   />
   
   {/* <button 
   onClick={createPaste}
   className='p-2 m-3 text-center border rounded-2xl'>
       {pasteId ? "Update My Paste": "Create My Paste"}
   </button> */}
   </div> 
   <div>
       <textarea
       className='border rounded-2xl p-2 mt-4 min-w-[500px] place-items-center'
       value={paste.content}
       placeholder='Enter Content'
       disabled
       onChange={(e)=>setValue(e.target.value)}
       rows={20}/>
   </div>
  </div>
  )
}

export default ViewPaste
