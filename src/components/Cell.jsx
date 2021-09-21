import React from 'react';
import { TETROMINOS } from '../tetrominos';
import { StyledCell } from './styles/StyledCell';

const Cell = ({ type }) => {
    return (
        <StyledCell type={'I'} color={TETROMINOS['I'].color} />
    )
}

export default Cell;