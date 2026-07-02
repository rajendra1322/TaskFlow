import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

function RecentTasks({
    tasks,
}) {

    return (

        <Card>

            <CardContent className="p-6">

                <h2 className="mb-5 text-xl font-semibold">
                    Recent Tasks
                </h2>

                <div className="space-y-4">

                    {tasks.slice(0, 5).map((task) => (

                        <div
                            key={task.id}
                            className="flex items-center justify-between border-b pb-3"
                        >

                            <div>

                                <h3 className="font-medium">
                                    {task.title}
                                </h3>

                                <p className="text-sm text-muted-foreground">
                                    {task.createdAt}
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

                        </div>

                    ))}

                </div>

            </CardContent>

        </Card>

    );
}

export default RecentTasks;