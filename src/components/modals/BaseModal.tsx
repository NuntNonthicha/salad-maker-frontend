import { CSSProperties } from "react";
import Modal from "react-modal";
import { cn } from "@/utils/className";
import { BaseModalProps } from "@/types/modal";
import { IoIosClose } from 'react-icons/io';

const modalStyle = {
    overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 40,
        backgroundColor: "rgba(0, 0, 0, 0.50)"
    } as CSSProperties,

    content: {
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        padding: "0px",
        position: "absolute",
        borderRadius: "12px",
        background: "#FFFFFF",

    } as CSSProperties,
};

function BaseModal({
    children,
    isOpen,
    modalClassName,
    closeModal,
}: BaseModalProps) {
    return (
        <Modal
            className={cn(modalClassName, "bg-white shadow-dark-shadow")}
            isOpen={isOpen}
            onRequestClose={closeModal}
            style={modalStyle}
            ariaHideApp={false}
            closeTimeoutMS={500}
        >

            <div className='relative p-4'>
                <IoIosClose
                    className='absolute top-3 right-5 text-default-gray h-6 w-6 cursor-pointer md:h-8 md:w-8'
                    onClick={closeModal}
                />
            </div>
            {children}
        </Modal>
    );
}

export default BaseModal;
