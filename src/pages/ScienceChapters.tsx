import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FlaskConical, Leaf, CloudSun, HeartPulse } from "lucide-react";
import { SubjectCard } from "@/components/SubjectCard";
import LanguageSelector from "@/components/LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";

const ScienceChapters = () => {
    const navigate = useNavigate();
    const { aiPipeline, t } = useLanguage();

    const chapters = [
        {
            id: 'human-body',
            title: t("The Human Body"),
            description: t("Learn about body parts and their functions"),
            icon: HeartPulse,
            color: "primary" as const,
        },
        {
            id: 'plants',
            title: t("Plants Around Us"),
            description: t("Understand plant parts and their importance"),
            icon: Leaf,
            color: "learning" as const,
        },
        {
            id: 'animals',
            title: t("Animal Life"),
            description: t("Discover different animals and their habitats"),
            icon: FlaskConical, // Using Flask as a generic science icon for now, or maybe something else?
            color: "accent" as const,
        },
        {
            id: 'weather',
            title: t("Weather and Climate"),
            description: t("Explore weather patterns and seasons"),
            icon: CloudSun,
            color: "primary" as const,
        }
    ];

    const handleChapterClick = (chapterId: string) => {
        // Navigate to chat with the selected chapter context
        navigate("/chat", {
            state: {
                pipeline: aiPipeline,
                context: {
                    subject: 'Science',
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
                <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 flex items-center justify-center shadow-[var(--shadow-medium)] overflow-hidden border-2 border-blue-500/20">
                    <FlaskConical className="w-10 h-10 text-blue-600" />
                </div>

                <div className="space-y-2">
                    <h1 className="text-3xl font-bold text-foreground">
                        {t("Science Chapters")}
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

export default ScienceChapters;
