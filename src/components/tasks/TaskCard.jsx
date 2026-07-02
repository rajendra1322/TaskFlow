import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

function TaskCard({ tasks ,onEdit, onDelete})  {
  if (tasks.length === 0) {
    return (
      <p className="text-center py-8 text-gray-500">
        No Tasks Found
      </p>
    );
  }

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <Card key={task.id}>
          <CardContent className="space-y-3 p-4">
            <div>
              <h2 className="font-semibold text-lg">
                {task.title}
              </h2>

              <p className="text-sm text-gray-500">
                {task.description}
              </p>
            </div>

            <Badge
              variant={
                task.status === "Completed"
                  ? "default"
                  : "secondary"
              }
            >
              {task.status}
            </Badge>

            <p className="text-sm text-gray-500">
              {task.createdAt}
            </p>

            <div className="flex gap-2">
              <Button
                size="sm"
                variant="outline"
                className="flex-1"
                onClick={()=>onEdit(task)}
              >
                Edit
              </Button>

              <Button
                size="sm"
                variant="destructive"
                className="flex-1"
                onClick={() => onDelete(task)}
              >
                Delete
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default TaskCard;