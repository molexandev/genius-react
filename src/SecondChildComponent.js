import { memo, React } from 'react';

const areEqual = (prevProps, nextProps) => {};

const SecondChildComponent = memo(() => {
   console.log('SecondChildComponent render');
   return <div>SecondChildComponent</div>;
}, areEqual);

export default SecondChildComponent;
