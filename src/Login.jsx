import React from 'react';
import BoxComponent from './Components/Box'
import TypographyComponent from './Components/Typography';
import InputComponent from './Components/InputComponent';
import ButtonComponent from './Components/Button';
export default function Login() {
  return (
    <BoxComponent
    display={'flex'}
    alignItems="center"
    justifyContent="space-around"
    width="100%"
    height="100vh"
    >
        <BoxComponent
        borderRadius="15px"
        width="50%"
        height="60vh"
        overflow="hidden"
        >
            <img 
            style={{
                width:'100%',
                height:'100%'
            }}
            src="Images/login.png" alt="" />
        </BoxComponent>
        <BoxComponent
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='space-around'
        height="55vh"
        width="40%"
        >
            <img 
            width={'75%'}
            height={'100vh'}
            src="Images/logo.png" alt="" />
            <TypographyComponent
            color="var(--dull)"
            fontFamily='var(--main)'
            fontWeight="700"
            fontSize="22px"
            >
                Login to your account
            </TypographyComponent>
            <InputComponent
            label="E-mail"

            />
            <InputComponent
            label="Password"
            type='password'
            />
            <ButtonComponent
            variant='contained'
            color="var(--primary)"
            sx={{
                width:'50%',
                borderRadius:'50px',
                textTransform:'none',
                padding:'8px',
                color:'light',
                fontWeight:'700',
            }}
            >
              
                Login
            </ButtonComponent>
        </BoxComponent>
    </BoxComponent>
  );
}
