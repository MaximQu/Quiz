import axios from "axios";
import { useState } from "react";
import Start from "./components/Start";
import List from "./components/List";
import Button from "./components/Button";

export type DataPropsType = {
	id: string;
	category: string;
	correctAnswer: string;
	incorrectAnswers: string[];
	question: string;
	difficulty: string;
	answersArr: string[];
};

function App() {
	const [myData, setMyData] = useState<DataPropsType[]>([]);
	const [limit, setLimit] = useState(5);
	const [difficulty, setDifficulty] = useState<string>("easy");
	const [category, setCategory] = useState<string>("random");
	const [quizStart, setQuizStart] = useState(false);
	const [showResult, setShowResult] = useState(false);
	const [loading, setLoading] = useState(false);
	const [count, setCount] = useState(0);

	const fetchQuestionsData = async () => {
		setLoading(true);
		const res = await axios.get<DataPropsType[]>(
			`https://the-trivia-api.com/api/questions?limit=${limit}&categories=${category}&difficulty=${difficulty}`,
		);

		const questionsData = res.data.map((question) => {
			return {
				...question,
				answersArr: [question.correctAnswer, ...question.incorrectAnswers].sort(
					() => 0.5 - Math.random(),
				),
			};
		});
		setMyData(questionsData);
		setLoading(false);
	};

	const handleStart = async () => {
		fetchQuestionsData();
		setQuizStart(true);
		setShowResult(false);
		setCount(0);
	};

	return (
		<div className="py-10">
			{!quizStart ? (
				<div className="flex flex-col items-center gap-10">
					<Start
						limit={limit}
						category={category}
						difficulty={difficulty}
						setLimit={setLimit}
						setDifficulty={setDifficulty}
						setCategory={setCategory}
					/>
					<Button
						innerText="Start me"
						onClick={() => {
							handleStart();
						}}
					/>
				</div>
			) : (
				<>
					{loading ? (
						<>
							<img
								src="/images/loading.gif"
								width={498}
								height={285}
								alt="Loading with cute gif"
							/>
							<span className="mx-auto block text-center">Loading...</span>
						</>
					) : (
						<div className="flex flex-col items-center gap-10">
							<List
								setCount={setCount}
								myData={myData}
								showResult={showResult}
							/>
							<span>
								{count} / {myData.length}
							</span>
							{showResult ? (
								<Button
									innerText="End me"
									onClick={() => setQuizStart(false)}
								/>
							) : (
								<Button
									innerText="Show result"
									onClick={() => setShowResult(true)}
								/>
							)}
						</div>
					)}
				</>
			)}
		</div>
	);
}

export default App;
