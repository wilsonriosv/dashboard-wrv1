import Calculator from './components/Calculator'
import Todo from './components/Todo'

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-blue-500">Proyectos WRV</h1>
          <h2 className="text-3xl font-bold text-blue-500">Calculadora</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
            {/* Tarjeta 1 */}
            <div className="card p-4 shadow-lg rounded-lg">
              <Calculator />
            </div>
            {/* Tarjeta 2 */}
            <div className="card p-4 shadow-lg rounded-lg">
              <Todo />
            </div>
            {/* Tarjeta 3 */}
            <div className="card p-4 shadow-lg rounded-lg">
              <Calculator />
            </div>
            {/* Tarjeta 4 */}
            <div className="card p-4 shadow-lg rounded-lg">
              <Todo />
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <footer className="bg-gray-800 text-white text-center py-4 mt-auto">
          <p>&copy; 2024 <a href="http://rivaltec.net">Rivaltec</a>. Todos los derechos reservados.</p>
        </footer>
      </div>
    </>
  );
}

export default App;

/* import Calculator from './components/Calculator'
import Todo from './components/Todo'

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-blue-500">Proyectos WRV</h1>
          <h2 className="text-3xl font-bold text-blue-500">Calculadora</h2>
          <div className="card">
            <Calculator></Calculator>
          </div>
          <div className="card">
            <Todo></Todo>
          </div>
        </div>
        
        // Copyright 
        <footer className="bg-gray-800 text-white text-center py-4 mt-auto">
          <p>&copy; 2024 <a href="http://rivaltec.net">Rivaltec</a>. Todos los derechos reservados.</p>
        </footer>
      </div>
    </>
    
  );
}

export default App; */