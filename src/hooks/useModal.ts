import React, { useState } from "react";

 const useModal = () => {
    const [modal, setModal] = useState(false)
    const [modalContent, setModalContent] = useState(null)
    const handleToggleModal = (content: any) => {
        setModal(!modal)
        setModalContent(content)
    }

    return {modal, handleToggleModal, modalContent}
}

export default useModal