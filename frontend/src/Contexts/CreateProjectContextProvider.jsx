import React, { createContext, useState } from 'react'

export const CreateProjectContext = createContext();


const CreateProjectContextProvider = ({children }) => {
  const [isModalOpen,setIsModalOpen] = useState(false);
  const [isuploadOpen,setIsUploadOpen] = useState(false);

  return (
    <CreateProjectContext.Provider value={{isModalOpen,setIsModalOpen,isuploadOpen,setIsUploadOpen}}>
      {children }
    </CreateProjectContext.Provider>
  )
}

export default CreateProjectContextProvider;