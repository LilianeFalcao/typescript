import React from 'react'
import Lottie from 'react-lottie';
import loading from 'lotties/89661-raiting.json'

const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: loading,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

const Loading = () => {
    return<Lottie  options={defaultOptions}
    height={400}
    width={400}/>
}

export default Loading;