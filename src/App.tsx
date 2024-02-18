import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from './redux/store'
import { increment } from './redux/counter/counter.slide'

function App() {

  const count = useSelector((state: RootState) => state.counter)
  const dispatch = useDispatch()

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <div className="card">
        <div>Current number = {count.value}</div>
        <div>
          <button
            onClick={() => dispatch(increment())}>
            Increase +1
          </button>
        </div>
      </div>

    </>
  )
}

export default App
