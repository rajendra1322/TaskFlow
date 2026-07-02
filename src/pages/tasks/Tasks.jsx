import { useEffect, useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import TaskTable from "@/components/tasks/TaskTable";
import { getTasks } from "@/services/api";
import { toast } from "sonner";
import TaskForm from "@/components/tasks/TaskForm";
import { Button } from "@/components/ui/button";
import { addTask } from "@/services/api";
import TaskCard from "@/components/tasks/TaskCard";
import { updateTask } from "@/services/api";
import DeleteDialog from "@/components/tasks/DeleteDialog";
import { deleteTask } from "@/services/api";
import SearchBar from "@/components/tasks/SearchBar";
import StatusFilter from "@/components/tasks/StatusFilter";

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  const fetchTasks = async () => {
    try {
      const response = await getTasks();
      setTasks(response.data);
    } catch (error) {
      toast.error("Failed to load tasks");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);
  const handleSaveTask = async (task) => {
    try {
      if (selectedTask) {
        await updateTask(selectedTask.id, task);

        toast.success("Task Updated Successfully");
      } else {
        await addTask(task);

        toast.success("Task Added Successfully");
      }

      fetchTasks();

      setOpen(false);

      setSelectedTask(null);

    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  const handleDeleteTask = async () => {
    try {

      await deleteTask(taskToDelete.id);

      toast.success("Task Deleted Successfully");

      setDeleteOpen(false);

      setTaskToDelete(null);

      fetchTasks();

    } catch (error) {

      toast.error("Failed to Delete Task");

    }
  };
  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesStatus =
      status === "All" || task.status === status;

    return matchesSearch && matchesStatus;
  });

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

          <h1 className="text-2xl font-bold md:text-3xl">
            Task Management
          </h1>

          <div className="flex flex-col gap-3 md:flex-row">

            <SearchBar
              value={search}
              onChange={setSearch}
            />

            <StatusFilter
              value={status}
              onChange={setStatus}
            />

            <Button onClick={() => {
              setSelectedTask(null);
              setOpen(true);
            }}>
              + Add Task
            </Button>

          </div>

        </div>

        <TaskForm
          open={open}
          setOpen={setOpen}
          onSubmit={handleSaveTask}
          task={selectedTask}
        />
        <DeleteDialog
          open={deleteOpen}
          setOpen={setDeleteOpen}
          onDelete={handleDeleteTask}
        />


        <div className="hidden md:block">
          <TaskTable
            tasks={filteredTasks}
            loading={loading}
            onEdit={(task) => {
              setSelectedTask(task);
              setOpen(true);
            }}
            onDelete={(task) => {
              setTaskToDelete(task);
              setDeleteOpen(true);
            }}
          />
        </div>


        <div className="block md:hidden">
          <TaskCard
            tasks={filteredTasks}
            onEdit={(task) => {
              setSelectedTask(task);
              setOpen(true);
            }}
            onDelete={(task) => {
              setTaskToDelete(task);
              setDeleteOpen(true);
            }}
          />
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Tasks;