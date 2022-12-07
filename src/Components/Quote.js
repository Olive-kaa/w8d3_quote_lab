import React from 'react';
import styled from 'styled-components';

const Paragraph = styled.p`
    margin: 0;
    padding: 1em;
    background-color: #d3d3d3;
    border-radius: 0.5em;
`

const Cite = styled.cite`
    text-align: center;
    font-style: italic;
    color: #696969;
`

const A = styled.a`
    text-decoration: none;
    color: #000000;
`
const Figcaption = styled.figcaption`
    text-align: center;
    `

const Quote = ({by, source, children}) => {


  return (
    <figure>
        <blockquote>
            <Paragraph>
                <A href={source}>
                    "{children}" 
                </A>
            </Paragraph>
        </blockquote>
        <Figcaption>
            <Cite>
                - {by} 
            </Cite>
        </Figcaption>
    </figure>
  )
}

export default Quote;
