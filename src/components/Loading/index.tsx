import React from 'react';

import loadingGif from "../../assets/loading.gif"
import { LoadingWrapper } from './styles';

const Loading: React.FC = () => {
    return (
        <LoadingWrapper>
            <img src={loadingGif}/>
        </LoadingWrapper>
    )
}

export default Loading;