import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { createTask, deleteTask, updateTask, getTask } from "../api/task.api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

export function TaskFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const navigate = useNavigate();
  const params = useParams();

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      updateTask(params.id, data);
      toast.success("¡Tarea actualizada con exito!", {
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "#FFFFFF",
        },
      });
    } else {
      await createTask(data);
      toast.success("¡Tarea creada con exito!", {
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "#FFFFFF",
        },
      });
    }
    navigate("/tasks");
  });

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const res = await getTask(params.id);
        setValue("title", res.data.title);
        setValue("description", res.data.description);
        console.log(res);
      }
    }

    loadTask();
  }, []);

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

      {params.id && (
        <button
          onClick={async () => {
            const accepted = window.confirm("are you sure?");
            if (accepted) {
              await deleteTask(params.id);
              toast.success("¡Tarea eliminada con exito!", {
                position: "bottom-right",
                style: {
                  background: "#101010",
                  color: "#FFFFFF",
                },
              });
              navigate("/tasks");
            }
          }}
        >
          Delete
        </button>
      )}
    </div>
  );
}

export default TaskFormPage;
