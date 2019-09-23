import React from 'react'
import Login from './Login.js'
import Registration from './Registration.js'
import styled from 'styled-components'

const Container = styled.div `
display: flex;
flex-direction: column;
`

const Header = styled.div `
display: flex;
`

const Body = styled.div `
`




const Home = () => {

    return (
        <Container>
            <Header>
                <img src="../../../assets/educell_logo.jpg" alt="Educell Logo"/>
                <Login/>
            </Header>

            <Body>
                <img src="../../../assets/home_img.jpg" alt="User Quote"/>
                <Registration/>
            </Body>

        </Container>
    )

}

export default Home;