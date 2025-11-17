import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SubjectCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  onClick: () => void;
  color: "primary" | "learning" | "accent" | "success";
}

export const SubjectCard = ({ title, description, icon: Icon, onClick, color }: SubjectCardProps) => {
  const colorClasses = {
    primary: "from-primary to-secondary",
    learning: "from-learning to-learning/80",
    accent: "from-accent to-accent/80",
    success: "from-success to-success/80",
  };

  return (
    <Card
      onClick={onClick}
      className="p-6 cursor-pointer transition-all hover:scale-105 hover:shadow-[var(--shadow-medium)] active:scale-95"
    >
      <div className={cn("w-12 h-12 rounded-2xl bg-gradient-to-br mb-4 flex items-center justify-center", colorClasses[color])}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </Card>
  );
};
