import { useForm } from "react-hook-form";
import { createTask } from "../api/task.api";
import { useNavigate } from "react-router-dom"; 


export function TaskFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate()

  const onSubmit = handleSubmit(async (data) => {
    // console.log(data);
    await createTask(data)
    navigate('/tasks')
  });

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Title"
          {...register("title", { required: true })}
        />
        {errors.title && <span>Title field is required!</span>}
        <textarea
          rows="3"
          id="Description"
          {...register("description", { required: true })}
        />
        {errors.description && <span>Description field is required!</span>}
        <button>Save</button>
      </form>
    </div>
  );
}

export default TaskFormPage;
