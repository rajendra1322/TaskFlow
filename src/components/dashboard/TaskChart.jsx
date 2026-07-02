import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Tooltip,
    Legend,
} from "recharts";

import { Card, CardContent } from "@/components/ui/card";

const COLORS = [
    "#2563EB",
    "#16A34A",
];

function TaskChart({
    pending,
    completed,
}) {

    const data = [

        {
            name: "Pending",
            value: pending,
        },

        {
            name: "Completed",
            value: completed,
        },

    ];

    return (

        <Card>

            <CardContent className="p-6">

                <h2 className="mb-5 text-xl font-semibold">

                    Task Status

                </h2>

                <div className="h-72">

                    <ResponsiveContainer>

                        <PieChart>

                            <Pie
                                data={data}
                                dataKey="value"
                                outerRadius={90}
                            >

                                {data.map((entry, index) => (

                                    <Cell
                                        key={index}
                                        fill={COLORS[index]}
                                    />

                                ))}

                            </Pie>

                            <Tooltip />

                            <Legend />

                        </PieChart>

                    </ResponsiveContainer>

                </div>

            </CardContent>

        </Card>

    );
}

export default TaskChart;