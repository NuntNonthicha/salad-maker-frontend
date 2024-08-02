import useModal from '@/hooks/useModal';
import axios from '@/lib/axios';
import { useSnackbar } from 'notistack';
import React from 'react';
import ActionButton from '../buttons/Actionbutton';
import { IoWarning } from "react-icons/io5";
import IconButton from '../buttons/IconButton';
import { GoTrash } from 'react-icons/go';

type DeleteBtnProps = {
    loadData: () => void;
    api: string;
}

const DeleteModal = ({ loadData, api }: DeleteBtnProps) => {

    const { Modal, openModal, closeModal } = useModal();
    const { enqueueSnackbar } = useSnackbar();

    const handleDelete = async () => {
        try {
            await axios.delete(`${api}`);

            enqueueSnackbar('Delete Success', { variant: 'success' });
            loadData();
        } catch (error) {
            enqueueSnackbar('Cannot Delete', { variant: 'error' });
        }
    };

    return (
        <div>
            <IconButton
                icon={GoTrash}
                variant="red"
                className="w-full md:h-[50px] bg-white font-medium text-lg"
                onClick={openModal}>
                Delete
            </IconButton>

            <Modal>
                <div className='flex flex-col items-center px-10 py-6 gap-16'>
                    <div className='flex flex-col items-center justify-center gap-4'>
                        <div className='flex rounded-full bg-[#FFF5F6] p-4'>
                            <IoWarning className='text-default-red w-12 h-12 md:w-[72px] md:h-[72px]' />
                        </div>
                        <h1 className='text-xl font-bold'>Delete Recipe</h1>

                    </div>

                    <div className='flex w-full items-center justify-between gap-4'>
                        <ActionButton
                            type='reset'
                            variant='gray'
                            className='w-full md:w-[200px]'
                            onClick={closeModal}
                        >
                            Cancel
                        </ActionButton>
                        <ActionButton
                            type='submit'
                            variant='red'
                            className='w-full md:w-[200px]'
                            onClick={handleDelete}
                        >
                            Delete
                        </ActionButton>
                    </div>

                </div>
            </Modal>
        </div>
    );
};

export default DeleteModal;
