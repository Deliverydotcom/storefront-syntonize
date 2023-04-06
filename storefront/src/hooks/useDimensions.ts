
import { useEffect, useState } from 'react';
import { Dimensions, Platform } from 'react-native';

export const useDimensions = () => {

    const [screenDims, setScreen] = useState(Dimensions.get('screen'));
    const [windowDims, setWindow] = useState(Dimensions.get('window'));
   const [dimen, setDimen] = useState('');

    useEffect(() => {
      const handleChange = ({ screen, window: win }:any) => {
        setScreen(screen);
        setWindow(win);  
        console.log(windowDims.height)
        if(windowDims.height < 400){setDimen('landscape')} else if(screenDims.height >= 400) {setDimen('portrait')}
      };
     
      const subscription = Dimensions.addEventListener('change', handleChange);

      return () => {
        subscription.remove();
      }; 



    }, [setScreen, setWindow]);

return {dimen,screenDims,windowDims} 
}
