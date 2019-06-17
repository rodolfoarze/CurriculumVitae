import React from 'react';
import H3Styled from '../styled/H3Styled';
import PStyled from '../styled/PStyled';
import H2Styled from '../styled/H2Styled';


const Certificate = props => (

    <div className="certificate">
        <div className ="certificate-container">
        <H2Styled name = "certificate" />

        { props.data.map((cert, index) =>(
          <div className = 'certificate-item' key = { 'Certificate-${index}' }>  
            <H3Styled> {cert.name} @ {cert.institution} <span>{cert.date}</span></H3Styled>
            <PStyled name = {cert.description} />
          </div>
        ))}
         
        </div>
    </div>
);

export default Certificate;