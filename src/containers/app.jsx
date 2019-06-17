import React from 'react';
import Main from '../components/main';
import Sidebar from '../components/sidebar'; 
import Info from '../components/info';
import About from '../components/about';
import Education from '../components/education';
import Experience from '../components/experience';
import Certificate from '../components/certificate';
import Skills from '../components/skills';
import useGetData from '../hooks/useGetData';
import {createGlobalStyle} from 'styled-components';




const GlobalStyle  = createGlobalStyle`
    body{
        font-family: 'Lato', sans-serif;
        padding: 0;
        margin: 0;
        background: #F5F5F5;
    }
`;

const App = () =>{
    const data = useGetData();
    return data.length == 0 ? <h1>Cargando...</h1> : (     
        <Main>
            <GlobalStyle />
            <Sidebar>
                <About 
                    avatar={data.avatar}
                    name={data.name}
                    profession={data.profession}
                    bio={data.bio}
                    address={data.address}
                    social={data.social}                
                    />
            </Sidebar>
            <Info>
                <Education 
                
                    data={data.education}
                    />
                <Experience 

                    data= {data.experience}                 
                />
                <Certificate 
                
                    data={data.certificate}
                />
                <Skills
                
                    data={data.skills}
                />
            </Info>
        </Main>
    );
} 

export default App;