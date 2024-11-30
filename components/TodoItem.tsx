import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"

interface Todo {
  id: number
  text: string
  completed: boolean
}

interface TodoItemProps {
  todo: Todo
  onToggle: (id: number) => void
  onDelete: (id: number) => void
}

export function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <li className="flex items-center space-x-3">
      <Checkbox
        id={`todo-${todo.id}`}
        checked={todo.completed}
        onCheckedChange={() => onToggle(todo.id)}
      />
      <label
        htmlFor={`todo-${todo.id}`}
        className={`flex-grow ${todo.completed ? 'line-through text-gray-500' : ''}`}
      >
        {todo.text}
      </label>
      <Button
        variant="destructive"
        size="sm"
        onClick={() => onDelete(todo.id)}
      >
        Delete
      </Button>
    </li>
  )
}

