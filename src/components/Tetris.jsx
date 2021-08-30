import React from 'react';
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

const Tetris = () => {
    return (
        <div>
            <Stage />
            <Display />
            <StartButton />
        </div>
    )
}

export default Tetris;