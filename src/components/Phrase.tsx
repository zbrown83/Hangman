import * as React from 'react';
import { observer } from 'mobx-react';
import store from '../data/Store';

const Phrase: React.FunctionComponent = () => {
    return (
        <div>
            <h1>{store.isGameOver ? store.phrase : store.obfuscatedPhrase}</h1>
            <h2>{store.guesses}</h2>
            <p>({store.guessesLeft} remaining)</p>
        </div>
    );
};

export default observer(Phrase);