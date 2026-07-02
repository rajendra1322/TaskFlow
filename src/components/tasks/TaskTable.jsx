import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

function TaskTable({ tasks, loading, onEdit, onDelete }) {
    if (loading) {
        return <p>Loading tasks...</p>;
    }

    if (tasks.length === 0) {
        return (
            <p className="text-center py-10 text-gray-500">
                No Tasks Found
            </p>
        );
    }

    return (
        <div className="overflow-x-auto rounded-lg border bg-background">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Title</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Created</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {tasks.map((task) => (
                        <TableRow key={task.id}>
                            <TableCell>{task.title}</TableCell>

                            <TableCell>
                                {task.description}
                            </TableCell>

                            <TableCell>
                                <Badge
                                    variant={
                                        task.status === "Completed"
                                            ? "default"
                                            : "secondary"
                                    }
                                >
                                    {task.status}
                                </Badge>
                            </TableCell>

                            <TableCell>
                                {task.createdAt}
                            </TableCell>

                            <TableCell className="space-x-2">
                                <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => onEdit(task)}
                                >
                                    Edit
                                </Button>

                                <Button
                                    size="sm"
                                    variant="destructive"
                                    onClick={() => onDelete(task)}
                                >
                                    Delete
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}

export default TaskTable;