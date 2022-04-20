import React, { useState } from 'react'
import {
    FormControl,
    FormLabel,
    Input,
    Button,
    InputGroup,
    InputRightElement,
    IconButton,
    Link,
    Container,
    Flex
} from '@chakra-ui/react'
import {
    AiFillEyeInvisible,
    AiFillEye
} from 'react-icons/ai'


function LoginForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [show, setShowPassword] = useState(false)
    const isInvalid = email === '' || password === ''

    const handleEmailChange = (e) => setEmail(e.target.value)
    const handlePasswordChange = (e) => setPassword(e.target.value)

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
            <Container align='end' mb='20'>
                <Link><i>Forgot your password?</i></Link>
            </Container>
            <Button
                w='full'
                borderRadius='full'
                size='lg'
                bgColor='#3c93b9'
                color='white'
                _hover={{ backgroundColor: 'blue.300' }}
                isActive={isInvalid}>
                Sign In</Button>
        </Flex>
    );
}

export default LoginForm;