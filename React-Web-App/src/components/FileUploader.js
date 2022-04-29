import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import Dropzone from 'react-dropzone-uploader'
import 'react-dropzone-uploader/dist/styles.css'

function FileUploader({ onClose, isOpen, handleSubmit }) {

    const getUploadParams = ({ meta }) => { return { url: 'http://localhost:8000/database/upload-file' } }

    // called every time a file's `status` changes
    const handleChangeStatus = ({ meta, file }, status) => { console.log(status, meta, file) }


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