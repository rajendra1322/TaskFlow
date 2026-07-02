import { Card, CardContent } from "@/components/ui/card";

function StatsCard({
    title,
    value,
    icon: Icon,
    color,
}) {
    return (
        <Card className="shadow-sm hover:shadow-lg transition-all duration-300">
            <CardContent className="flex items-center justify-between p-6">

                <div>
                    <p className="text-sm text-muted-foreground">
                        {title}
                    </p>

                    <h2 className="mt-2 text-3xl font-bold">
                        {value}
                    </h2>
                </div>

                <Icon
                    size={42}
                    className={color}
                />

            </CardContent>
        </Card>
    );
}

export default StatsCard;