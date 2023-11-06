// Write your code here
import './index.css'

const TodoItem = props => {
  const {initialTodoDetails, deleteTodo} = props
  const {id, title} = initialTodoDetails
  const onDeleteTodo = () => {
    deleteTodo(id)
  }
  return (
    <li>
      <p className="heading">{title}</p>
      <button className="onClick" type="button" onClick={onDeleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
