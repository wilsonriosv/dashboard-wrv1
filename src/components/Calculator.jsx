import { useState } from 'react';

const Calculator = () => {
  const [num, setNum] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    if (value === 'C') {
      setNum('');
      setResult('');
    } else if (value === '=') {
      try {
        const calculation = eval(num);
        setResult(calculation.toString());
      } catch (error) {
        setResult('Error');
      }
    } else {
      setNum(num + value);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <div className="flex flex-col">
        <div className="bg-gray-200 border-2 border-dashed rounded-xl p-4 mb-4">
          <p className="text-right text-3xl">{num}</p>
          <p className="text-right text-3xl">{result}</p>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleButtonClick('7')}
          >
            7
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleButtonClick('8')}
          >
            8
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleButtonClick('9')}
          >
            9
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleButtonClick('/')}
          >
            /
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleButtonClick('4')}
          >
            4
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleButtonClick('5')}
          >
            5
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleButtonClick('6')}
          >
            6
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleButtonClick('*')}
          >
            *
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleButtonClick('1')}
          >
            1
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleButtonClick('2')}
          >
            2
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleButtonClick('3')}
          >
            3
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleButtonClick('-')}
          >
            -
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleButtonClick('0')}
          >
            0
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleButtonClick('.')}
          >
            .
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleButtonClick('C')}
          >
            C
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleButtonClick('+')}
          >
            +
          </button>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded col-span-4"
            onClick={() => handleButtonClick('=')}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;