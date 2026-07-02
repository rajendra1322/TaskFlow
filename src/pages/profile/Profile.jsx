import { useState } from "react";

import DashboardLayout from "@/components/layout/DashboardLayout";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import {
    Avatar,
    AvatarFallback,
} from "@/components/ui/avatar";

import { toast } from "sonner";

function Profile() {

    const storedUser =
        JSON.parse(localStorage.getItem("user"));

    const [user, setUser] = useState({
        name: storedUser?.name || "",
        email: storedUser?.email || "",
        role: storedUser?.role || "Frontend Developer",
        phone: storedUser?.phone || "",
    });

    const handleChange = (e) => {

        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        localStorage.setItem(
            "user",
            JSON.stringify(user)
        );

        toast.success("Profile updated successfully");

    };

    return (

        <DashboardLayout>

            <Card className="mx-auto max-w-3xl">

                <CardHeader>

                    <CardTitle className="text-center text-2xl">

                        My Profile

                    </CardTitle>

                </CardHeader>

                <CardContent>

                    <div className="mb-8 flex flex-col items-center">

                        <Avatar className="h-24 w-24">

                            <AvatarFallback className="text-3xl">

                                {user.name.charAt(0)}

                            </AvatarFallback>

                        </Avatar>

                        <h2 className="mt-4 text-2xl font-bold">

                            {user.name}

                        </h2>

                        <p className="text-muted-foreground">

                            {user.role}

                        </p>

                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-6"
                    >

                        <div>

                            <Label>Name</Label>

                            <Input
                                name="name"
                                value={user.name}
                                onChange={handleChange}
                            />

                        </div>

                        <div>

                            <Label>Email</Label>

                            <Input
                                name="email"
                                type="email"
                                value={user.email}
                                onChange={handleChange}
                            />

                        </div>

                        <div>

                            <Label>Role</Label>

                            <Input
                                name="role"
                                value={user.role}
                                onChange={handleChange}
                            />

                        </div>

                        <div>

                            <Label>Phone</Label>

                            <Input
                                name="phone"
                                value={user.phone}
                                onChange={handleChange}
                            />

                        </div>

                        <Button
                            className="w-full"
                            type="submit"
                        >
                            Save Changes
                        </Button>

                    </form>

                </CardContent>

            </Card>

        </DashboardLayout>

    );
}

export default Profile;