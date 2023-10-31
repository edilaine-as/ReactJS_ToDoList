import { ReactNode, createContext, useContext, useState } from "react"

interface TaskContextProps {
  tasks: { content: string; checked: boolean }[];
  updateTasks: (newTasks: { content: string; checked: boolean }[]) => void;
  addNewTask: (newTaskContent: string) => void;
  toggleTaskChecked: (taskContent: string) => void;
}


const TaskContext = createContext<TaskContextProps | undefined>(undefined);

interface TaskProviderProps {
    children: ReactNode;
}

export function TaskProvider({ children }:TaskProviderProps){
    const [tasks, setTasks] = useState<{ content: string; checked: boolean }[]>([]);
  
    const updateTasks = (newTasks: { content: string; checked: boolean }[]) => {
      setTasks(newTasks);
    };

    const addNewTask = (newTaskContent: string) => {
      const newTask = { content: newTaskContent, checked: false };
      updateTasks([...tasks, newTask]);
    };

    const toggleTaskChecked = (taskContent: string) => {
      const updatedTasks = tasks.map(task => {
        if (task.content === taskContent) {
          return {
            ...task,
            checked: !task.checked,
          };
        }
        return task;
      });
    
      updateTasks(updatedTasks);
    };
    

    return (
      <TaskContext.Provider value={{ tasks, updateTasks, addNewTask, toggleTaskChecked }}>
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