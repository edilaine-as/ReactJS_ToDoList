import { ReactNode, createContext, useContext, useState } from "react"

interface TaskContextProps {
    tasks: string[];
    updateTasks: (newTasks: string[]) => void;
}

const TaskContext = createContext<TaskContextProps | undefined>(undefined);

interface TaskProviderProps {
    children: ReactNode;
}

export function TaskProvider({ children }:TaskProviderProps){
    const [tasks, setTasks] = useState<string[]>([
      "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer."
    ]);
  
    const updateTasks = (newTasks: string[]) => {
      setTasks(newTasks);
    };
  
    return (
      <TaskContext.Provider value={{ tasks, updateTasks }}>
        {children}
      </TaskContext.Provider>
    );
};
  
export function useTaskContext(){
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error('useTaskContext must be used within a TaskProvider');
    }
    return context;
};