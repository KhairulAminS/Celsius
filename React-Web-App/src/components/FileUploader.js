import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import Dropzone from 'react-dropzone-uploader'
import 'react-dropzone-uploader/dist/styles.css'

function FileUploader({ onClose, isOpen, getUploadParams, handleChangeStatus, handleSubmit }) {


    return (
        <Modal isOpen={isOpen} onClose={onClose} is isCentered>
            <ModalOverlay />
            <ModalContent p='10'>
                <ModalCloseButton />
                <ModalBody>
                    <Dropzone
                        getUploadParams={getUploadParams}
                        onChangeStatus={handleChangeStatus}
                        onSubmit={handleSubmit}
                        accept="text/csv"
                        inputContent='Upload CSV File Only'
                    />
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default FileUploader;