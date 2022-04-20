import React, { useState } from 'react'
import {
    FormControl,
    FormLabel,
    Input,
    Button,
    InputGroup,
    InputRightElement,
    IconButton,
    Flex
} from '@chakra-ui/react'
import {
    AiFillEyeInvisible,
    AiFillEye
} from 'react-icons/ai'


function RegisterForm() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [show, setShowPassword] = useState(false)
    const isInvalid = email === '' || password === '' || confirmPassword === ''

    const handleEmailChange = (e) => setEmail(e.target.value)
    const handlePasswordChange = (e) => setPassword(e.target.value)
    const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value)


    return (
        <Flex flexDir='column'>
            <FormControl mb='5'>
                <FormLabel htmlFor='email' ml='5'>Email address</FormLabel>
                <Input
                    required
                    variant='filled'
                    id='email'
                    type='email'
                    value={email}
                    size='lg'
                    placeholder='Enter email'
                    sx={{ borderRadius: 'full' }}
                    onChange={handleEmailChange}
                />
            </FormControl>
            <FormControl mb='5'>
                <FormLabel htmlFor='password' ml='5'>Password</FormLabel>
                <InputGroup>
                    <Input
                        required
                        variant='filled'
                        pr='4.5rem'
                        size='lg'
                        value={password}
                        type={show ? 'text' : 'password'}
                        placeholder='Enter password'
                        sx={{ borderRadius: 'full' }}
                        onChange={handlePasswordChange}
                    />
                    <InputRightElement width='5rem'>
                        <IconButton
                            variant='ghost'
                            h='2rem'
                            size='lg'
                            onClick={() => { setShowPassword(!show) }}
                            alignSelf='self-end'
                            icon={show ? <AiFillEyeInvisible /> : <AiFillEye />} />
                    </InputRightElement>
                </InputGroup>
            </FormControl>
            <FormControl mb='20'>
                <FormLabel htmlFor='confirmPassword' ml='5'>Confirm Password</FormLabel>
                <InputGroup>
                    <Input
                        required
                        variant='filled'
                        pr='4.5rem'
                        size='lg'
                        value={confirmPassword}
                        type={show ? 'text' : 'password'}
                        placeholder='re-type your password'
                        sx={{ borderRadius: 'full' }}
                        onChange={handleConfirmPasswordChange}
                    />
                    <InputRightElement width='5rem'>
                        <IconButton
                            variant='ghost'
                            h='2rem'
                            size='lg'
                            onClick={() => { setShowPassword(!show) }}
                            alignSelf='self-end'
                            icon={show ? <AiFillEyeInvisible /> : <AiFillEye />} />
                    </InputRightElement>
                </InputGroup>
            </FormControl>
            <Button
                w='full'
                borderRadius='full'
                size='lg'
                bgColor='#3c93b9'
                color='white'
                _hover={{ backgroundColor: 'blue.300' }}
                isActive={isInvalid}>
                Sign Up</Button>
        </Flex>
    );
}

export default RegisterForm;