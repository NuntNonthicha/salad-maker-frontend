"use client";

import BaseModal from "@/components/modals/BaseModal";
import { BaseModalProps } from "@/types/modal";
import { useState, useCallback } from "react";

const useModal = () => {
    const [open, setOpen] = useState<boolean>(false);

    const openModal = () => {
        setOpen(true);
    };

    const closeModal = () => {
        setOpen(false);
    };

    const Modal = useCallback(
        ({
            children,
            modalClassName = "",
        }: Omit<BaseModalProps, "isOpen" | "closeModal">) => (
            <BaseModal
                isOpen={open}
                closeModal={closeModal}
                modalClassName={modalClassName}
            >
                {children}
            </BaseModal>
        ),
        [open]
    );

    return { Modal, openModal, closeModal, isOpen: open };
};

export default useModal;
