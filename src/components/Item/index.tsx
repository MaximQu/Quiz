import { FC, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

type ItemPropsType = {
	id?: string;
	correct: string;
	question: string;
	answersArr: string[];
	showResult: boolean;
	setCount: React.Dispatch<React.SetStateAction<number>>;
};

const Item: FC<ItemPropsType> = ({
	answersArr,
	showResult,
	correct,
	question,
	setCount,
}) => {
	const [selectedAnswer, setSelectedAnswer] = useState("");
	useEffect(() => {
		if (showResult) {
			if (selectedAnswer === correct) setCount((prev) => prev + 1);
		}
	}, [showResult]);
	return (
		<li className="list-none text-lg md:text-xl lg:text-3xl">
			<p className="mb-5">{question}</p>
			<div className="flex flex-col gap-5 lg:flex-row">
				{answersArr.map((answer, index) => (
					<button
						disabled={showResult}
						key={index}
						className={twMerge(
							"answBtn",
							selectedAnswer === answer &&
								"border-white bg-secondary before:bg-secondary after:bg-secondary",

							answer === correct && showResult && "bg-green-500",
							selectedAnswer === answer &&
								selectedAnswer !== correct &&
								showResult &&
								"bg-red-500",
						)}
						onClick={() => setSelectedAnswer(answer)}
						type="button"
					>
						<span>{answer}</span>
					</button>
				))}
			</div>
		</li>
	);
};

export default Item;
