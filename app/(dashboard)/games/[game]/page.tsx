import CodeQuiz from "./code-quiz";
import BugHunt from "./bug-hunt";
import OutputPredictor from "./output-predictor";
import AlgoRace from "./algo-race";

export default async function GamePage({ params }: { params: Promise<{ game: string }> }) {
  const { game } = await params;

  if (game === "code-quiz")       return <CodeQuiz />;
  if (game === "bug-hunt")        return <BugHunt />;
  if (game === "output-predictor") return <OutputPredictor />;
  if (game === "algo-race")       return <AlgoRace />;

  return (
    <div className="text-center py-20">
      <p className="text-4xl mb-3">🚧</p>
      <p className="text-slate-500 font-medium">Game not found</p>
    </div>
  );
}