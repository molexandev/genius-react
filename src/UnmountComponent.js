import { useEffect } from 'react';
import React from 'react';

const UnmountComponent = () => {
   useEffect(() => {
      return () => {
         console.log('componentWillUnmount useEffect');
      };
   }, []);

   return <div>UnmountComponent</div>;
};

export default UnmountComponent;
