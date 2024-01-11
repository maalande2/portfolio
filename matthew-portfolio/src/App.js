import './App.css';
import ucscTree from './imgs/ucsc-tree.jpg';

function App() {
  return (
    <div className="App bg-cover bg-center min-h-screen min-w-full" style={{ backgroundImage: `url(${ucscTree})` }}>
      <div className="App-header flex-none">
        <p className="text-3xl">Matthew Anderson</p>
      </div>
    </div>
  );
}

export default App;


// import React from 'react';

// const MyComponent = () => {
//   return (
//     <div className="flex justify-center items-center h-screen">
//       <div className="bg-blue-500 text-white font-bold rounded-lg border shadow-lg p-10">
//         This is a React component styled with Tailwind CSS!
//       </div>
//     </div>
//   );
// }

// export default MyComponent;
