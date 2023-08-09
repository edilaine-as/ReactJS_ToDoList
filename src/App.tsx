import './global.css'

import { Header } from './components/Header'
import { TaskArea } from './components/TaskArea'
import { TaskProvider } from './components/TaskContext'

export function App() {

  return (
    <>
      <TaskProvider>
        <Header/>
        <TaskArea/>
      </TaskProvider>
    </>
  )
}
