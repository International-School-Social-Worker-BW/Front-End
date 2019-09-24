import React from 'react'
import styled from 'styled-components'

import Login from './Login.js'
import Registration from './Registration.js'

import '../styles/sign-up.scss'
import '../styles/variables.scss'



const Container = styled.div `
display: flex;
flex-direction: column;
`

const Header = styled.div `
display: flex;
height: 130px;
background: #384148;
align-items: center;
`
const Logo = styled.img `
width:140px;
margin-left:5%;
height: auto;
`

const Body = styled.div `
display: flex;
`

const ImageContainer = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
width: 50%;
margin-left: 5%;
margin-right: 5%;
`

const Div = styled.div `
position: relative;  
`

const HomeImage = styled.img `
width: 100%;
height: auto;
border-radius:5px;
`

const ImageText = styled.p `
color: white;
font-size: 3rem;
width: 80%;
margin:0;
line-height: 4rem;
position: absolute;  
left: 50%;   
top: 50%;   
transform: translate(-50%, -50%);
`





const Home = (props) => {

    return (
        <Container>
            <Header>
                <Logo src="../../../assets/logo.png" alt="Educell Logo"/>
                <Login props={props}/>
            </Header>

            <Body className = "body">
                <ImageContainer>
                    <Div>
                    <p className = "logo">Educell</p>
                        <p className = "moto">Solving educational challenges in remote and low-resource environments</p>
                        <ImageText className = "image-text"> “Educell helped improve our work flow, making it easier to provide quality care for each of our students” - Ghana Make A Difference </ImageText>
                        <HomeImage src="../../../assets/home_img.jpg" alt="User Quote"/>
                    </Div>
                </ImageContainer>
                <Registration props={props}/>
            </Body>

        </Container>
    )

}

export default Home;