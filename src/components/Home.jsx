import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToPastes, updateToPastes } from '../redux/pasteSlice';

const Home = () => {

    const [title, setTitle] = useState('');
    const [value, setValue] = useState('');

    const [searchParams, setSearchParams] = useSearchParams();
    const pasteId = searchParams.get("pasteId");

    const dispatch = useDispatch();

    const allPastes = useSelector((state)=>state.paste.pastes);

    useEffect(()=>{
        if(pasteId){

            const paste = allPastes.find((p)=> p._id ===pasteId);
            setTitle(paste.title);
            setValue(paste.content);
        }

    }, [pasteId])

    function createPaste(){
        const paste = {
            title:title,
            content: value,
            _id: pasteId || Date.now().toString(36),
            createdAt:new Date().toISOString(),
        }


        if(pasteId){
            //update
            dispatch(updateToPastes(paste));
        }
        else{
            //create
            dispatch(addToPastes(paste));
        }

        // After creation or updation
        setTitle('');
        setValue('');
        setSearchParams({});
    }

  return (
   <div>
     <div className='flex flex-row mt-3 gap-7 place-content-center '>
    <input
    className='p-1 pl-4 m-3 w-[40%] border rounded-2xl'
    type='text'
    placeholder='Enter title here'
    value = {title}
    onChange = {(e)=> setTitle(e.target.value)}
    />
    
    <button 
    onClick={createPaste}
    className='p-2 m-3 text-center border rounded-2xl'>
        {pasteId ? "Update My Paste": "Create My Paste"}
    </button>
    </div>
    <div>
        <textarea
        className='border rounded-2xl p-2 mt-4 min-w-[500px] place-items-center'
        value={value}
        placeholder='Enter Content'
        onChange={(e)=>setValue(e.target.value)}
        rows={20}/>
    </div>
   </div>
  )
}

export default Home
