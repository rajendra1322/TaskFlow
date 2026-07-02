import { Card, CardContent } from "@/components/ui/card";

function WelcomeCard() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <Card className="bg-background">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold">
          Welcome Back, {user?.name} 👋
        </h2>

        <p className="mt-2 text-gray-500">
          Manage your daily tasks efficiently.
        </p>
      </CardContent>
    </Card>
  );
}

export default WelcomeCard;