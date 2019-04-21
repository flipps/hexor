import React from 'react'
import styled from 'styled-components';

const OffsetContainer = styled.div`
    padding: 0 10px
    background: #444444
    color: #AAA
    text-align: right
    display: inline-block
    vertical-align: top
`

export const OffsetPanel = (props: { lines: string[] }) => (
    <OffsetContainer>
        {props.lines.map(x => (<div>{x}</div>))}
    </OffsetContainer>
)