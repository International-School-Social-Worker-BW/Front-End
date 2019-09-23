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
                <img src="../../public/assets/educell_logo.jpg" alt="Educell Logo"/>
                <Login/>
            </Header>

            <div>
                <img/>
                <Registration/>

            </div>

        </Container>
    )

}

export default Home;