import { useEffect, useState } from "react";

import DashboardLayout from "@/components/layout/DashboardLayout";

import StatsCard from "@/components/dashboard/StatsCard";
import ProgressSection from "@/components/dashboard/ProgressSection";
import TaskChart from "@/components/dashboard/TaskChart";
import RecentTasks from "@/components/dashboard/RecentTasks";

import {
    ClipboardList,
    Clock,
    CheckCircle,
} from "lucide-react";

import { getTasks } from "@/services/api";

function Dashboard() {

    const user =
        JSON.parse(localStorage.getItem("user"));

    const [tasks, setTasks] = useState([]);

    useEffect(() => {

        loadTasks();

    }, []);

    async function loadTasks() {

        const response = await getTasks();

        setTasks(response.data);

    }

    const total = tasks.length;

    const pending =
        tasks.filter(
            task => task.status === "Pending"
        ).length;

    const completed =
        tasks.filter(
            task => task.status === "Completed"
        ).length;

    const hour = new Date().getHours();

    const greeting =
        hour < 12
            ? "Good Morning"
            : hour < 18
                ? "Good Afternoon"
                : "Good Evening";

    return (

        <DashboardLayout>

            <div className="space-y-6">

                <div>

                    <h1 className="text-3xl font-bold">

                        {greeting}, {user?.name} 

                    </h1>

                    <p className="text-muted-foreground">

                        Manage your daily tasks efficiently.

                    </p>

                </div>

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

                    <StatsCard
                        title="Total Tasks"
                        value={total}
                        icon={ClipboardList}
                        color="text-blue-600"
                    />

                    <StatsCard
                        title="Pending Tasks"
                        value={pending}
                        icon={Clock}
                        color="text-orange-500"
                    />

                    <StatsCard
                        title="Completed Tasks"
                        value={completed}
                        icon={CheckCircle}
                        color="text-green-600"
                    />

                </div>

                <div className="grid gap-6 xl:grid-cols-2">

                    <ProgressSection
                        total={total}
                        completed={completed}
                    />

                    <TaskChart
                        pending={pending}
                        completed={completed}
                    />

                </div>

                <RecentTasks
                    tasks={tasks}
                />

            </div>

        </DashboardLayout>

    );
}

export default Dashboard;