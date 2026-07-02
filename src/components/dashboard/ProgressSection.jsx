import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

function ProgressSection({
    total,
    completed,
}) {

    const percentage =
        total === 0
            ? 0
            : Math.round((completed / total) * 100);

    return (

        <Card>

            <CardContent className="space-y-5 p-6">

                <div>

                    <h2 className="text-xl font-semibold">
                        Task Progress
                    </h2>

                    <p className="text-sm text-muted-foreground">
                        {completed} of {total} tasks completed
                    </p>

                </div>

                <Progress value={percentage} />

                <h3 className="text-right font-semibold">

                    {percentage}%

                </h3>

            </CardContent>

        </Card>

    );
}

export default ProgressSection;