import { useNavigate } from "react-router-dom";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
} from "./ui/AlertDialog";

export default function WinnerModal({
  result,
  clearBoard,
}: {
  result: "X" | "O" | "tie";
  clearBoard: () => void;
}) {
  const navigate = useNavigate();

  return (
    <AlertDialog open={true}>
      <AlertDialogContent
        onEscapeKeyDown={(e) => e.preventDefault()}
        className="text-center tracking-wider"
      >
        <div>
          <AlertDialogTitle className="text-slate-300/90">
            ROUND ENDED
          </AlertDialogTitle>
          <AlertDialogDescription
            className={`flex justify-center items-center gap-3 ${
              result === "X"
                ? "text-cyan-500"
                : result === "O"
                ? "text-yellow-500"
                : "text-slate-300/90"
            }`}
          >
            {result !== "tie" ? (
              <span className="text-5xl font-extrabold">
                {result.toUpperCase()}
              </span>
            ) : null}{" "}
            <span className="text-2xl font-bold">
              {result === "tie" ? "THE ROUND WAS A TIE" : "TAKES THE ROUND!"}
            </span>
          </AlertDialogDescription>
        </div>
        <div className="flex gap-2 justify-center items-center">
          <AlertDialogCancel
            onClick={() => {
              clearBoard();
              navigate("/");
            }}
          >
            QUIT
          </AlertDialogCancel>
          <AlertDialogAction onClick={clearBoard}>NEXT ROUND</AlertDialogAction>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
