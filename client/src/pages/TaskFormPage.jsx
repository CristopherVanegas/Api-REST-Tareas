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
    <div className="max-w-xl mx-auto">
      <form onSubmit={onSubmit} className="max-w-md mx-auto p-4 flex flex-col items-center">
        <input
          type="text"
          placeholder="Title"
          {...register("title", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-72 md:w-full mb-3"
        />
        {errors.title && <span>Title field is required!</span>}
        <textarea
          rows="3"
          id="Description"
          placeholder="Your description here..."
          {...register("description", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-72 md:w-full mb-3"
        />
        {errors.description && <span>Description field is required!</span>}

        <div className="flex justify-around flex-wrap md:w-full" >
          <button
            className={`bg-indigo-500 p-3 rounded-lg block w-72 md:w-full mt-3`}
          >
            Save
          </button>
          {params.id && (
            <button
              className="bg-red-500 p-3 rounded-xl w-72 md:w-full mt-3"
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
      </form>
    </div>
  );
}

export default TaskFormPage;
