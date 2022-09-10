import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
    width: 100vw;
    max-width: 500px;
    min-height: 200px;
    border-radius: 0px;
    background-color: lightgrey;
    margin: 20px 0;
    box-shadow: 1px 5px 25px -14px rgba(94,94,94,0.84);
`

const JobCard = () => {
    return (
        <>
            <Container />
        </>
    )
}

export default JobCard