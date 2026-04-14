import { Card } from "../card";

export const WelcomeCard = () => (
  <Card className="px-6 py-8 h-full flex flex-col justify-center">
    <h1 className="text-xl font-bold text-gray-900 leading-tight">Welcome Alex,</h1>
    <p className="text-[13px] text-gray-400 mt-1.5 leading-relaxed">
      Here's your performance overview where you can<br />
      track your daily and monthly KPIs
    </p>
  </Card>
);
