import { useForm } from "react-hook-form";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect } from "react";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

function TaskForm({
    open,
    setOpen,
    onSubmit,
    task
}) {
    const {
        register,
        handleSubmit,
        setValue,
        reset,
        formState: { errors },
    } = useForm();

    const submit = (data) => {
        onSubmit({
            ...task,
            ...data,
            createdAt:
                task?.createdAt ??
                new Date()
                    .toISOString()
                    .split("T")[0],
        });

        reset();

        setOpen(false);
    };
    useEffect(() => {
        if (task) {
            reset(task);
        } else {
            reset({
                title: "",
                description: "",
                status: "",
            });
        }
    }, [task, reset]);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent>

                <DialogHeader>
                    <DialogTitle>
                        {task ? "Edit Task" : "Add New Task"}
                    </DialogTitle>
                </DialogHeader>

                <form
                    onSubmit={handleSubmit(submit)}
                    className="space-y-4"
                >

                    <div>
                        <Label>Title</Label>

                        <Input
                            {...register("title", {
                                required: "Title is required",
                            })}
                        />

                        <p className="text-red-500 text-sm">
                            {errors.title?.message}
                        </p>

                    </div>

                    <div>
                        <Label>Description</Label>

                        <Input
                            {...register("description")}
                        />

                    </div>

                    <div>

                        <Label>Status</Label>

                        <Select
                            onValueChange={(value) =>
                                setValue("status", value)
                            }
                        >

                            <SelectTrigger>
                                <SelectValue placeholder="Select status" />
                            </SelectTrigger>

                            <SelectContent>
                                <SelectItem value="Pending">
                                    Pending
                                </SelectItem>

                                <SelectItem value="Completed">
                                    Completed
                                </SelectItem>
                            </SelectContent>

                        </Select>

                    </div>

                    <Button className="w-full">
                        {task ? "Update Task" : "Save Task"}
                    </Button>

                </form>

            </DialogContent>
        </Dialog>
    );
}

export default TaskForm;