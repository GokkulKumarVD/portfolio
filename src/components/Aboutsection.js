import React from "react";
import home1 from '../img/home1.png'
import styled from "styled-components";

const Aboutsection = () => {
    return (
        <StyledAbout>
            <Styleddescription>
                <div className="title">
                    <Styledhide>
                        <h2>We work to make</h2>
                    </Styledhide>
                    <Styledhide>
                        <h2>your <span>Dreams</span> come </h2>
                    </Styledhide>
                    <Styledhide>
                        <h2>true</h2>
                    </Styledhide>
                </div>
                <p>Contact us for any photography or videography ideas. We have experienced professionals and truly amazing people to work with </p>
                <button>Contact us</button>
            </Styleddescription>
            <Styledimage>
                <img src={home1} alt="" />
            </Styledimage>
        </StyledAbout>
    )
}


const StyledAbout = styled.div `
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10rem 10rem;
    margin-left: 30px;
    color: white;
`


const Styleddescription = styled.div `
    flex: 1;
    padding-right: 5rem;
    h2{
        font-weight: lighter;
    }

`

const Styledimage = styled.div `
    flex: 1;
    overflow: hidden;
    img{
        width: 100%;
        height: 80vh;
        object-fit: cover;
    }
`

const Styledhide = styled.div`
    overflow: hidden;
`

export default Aboutsection