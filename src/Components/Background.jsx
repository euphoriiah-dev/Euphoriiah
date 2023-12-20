import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

const Background = () => {
  return (
    <Canvas style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }}>
      <Stars
        radius={450} // Ajuste le rayon selon les préférences
        depth={20}   // Ajustez la profondeur 
        count={10000}  // Ajustez le nombre d'étoiles 
        factor={6}    // Ajustez le facteur d'éloignement 
      />
      {/* This place for more 3D effects */}
    </Canvas>
  );
};

export default Background;