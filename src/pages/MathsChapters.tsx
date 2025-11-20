import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calculator, Shapes, Scale, Clock } from "lucide-react";
import { SubjectCard } from "@/components/SubjectCard";
import LanguageSelector from "@/components/LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";

const MathsChapters = () => {
    const navigate = useNavigate();
    const { aiPipeline, t } = useLanguage();

    const chapters = [
        {
            id: 'numbers',
            title: t("Numbers and Operations"),
            description: t("Learn about numbers, addition, and subtraction"),
            icon: Calculator,
            color: "primary" as const,
        },
        {
            id: 'shapes',
            title: t("Shapes and Patterns"),
            description: t("Identify shapes and create patterns"),
            icon: Shapes,
            color: "learning" as const,
        },
        {
            id: 'measurement',
            title: t("Measurement"),
            description: t("Learn about length, weight, and capacity"),
            icon: Scale,
            color: "accent" as const,
        },
        {
            id: 'time',
            title: t("Time and Money"),
            description: t("Tell time and understand money"),
            icon: Clock,
            color: "primary" as const,
        }
    ];

    const handleChapterClick = (chapterId: string) => {
        // Navigate to chat with the selected chapter context
        navigate("/chat", {
            state: {
                pipeline: aiPipeline,
                context: {
                    subject: 'Maths',
                    chapter: chapterId
                }
            }
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-background via-background to-primary/5">
            {/* Top Navigation */}
            <div className="px-4 pt-4 flex items-center justify-between">
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => navigate("/subjects")}
                    className="rounded-full hover:bg-muted"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    {t("Back")}
                </Button>
                <LanguageSelector />
            </div>

            {/* Header Section */}
            <div className="px-6 pt-8 pb-8 text-center space-y-4">
                <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-br from-orange-500/10 to-red-500/10 flex items-center justify-center shadow-[var(--shadow-medium)] overflow-hidden border-2 border-orange-500/20">
                    <Calculator className="w-10 h-10 text-orange-600" />
                </div>

                <div className="space-y-2">
                    <h1 className="text-3xl font-bold text-foreground">
                        {t("Maths Chapters")}
                    </h1>
                    <p className="text-muted-foreground max-w-md mx-auto">
                        {t("Class 5 • NCERT")}
                    </p>
                </div>
            </div>

            {/* Chapters Grid */}
            <div className="px-6 pb-8 space-y-4">
                <div className="grid gap-4">
                    {chapters.map((chapter) => (
                        <SubjectCard
                            key={chapter.id}
                            title={chapter.title}
                            description={chapter.description}
                            icon={chapter.icon}
                            color={chapter.color}
                            onClick={() => handleChapterClick(chapter.id)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MathsChapters;
