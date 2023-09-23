import { FC, useState } from "react";
import { twMerge } from "tailwind-merge";

const categoryArr = [
	{
		id: "1",
		label: "random",
		name: "random",
	},
	{
		id: "2",
		label: "food & drink",
		name: "food_and_drink",
	},
	{
		id: "3",
		label: "music",
		name: "music",
	},
	{
		id: "4",
		label: "science",
		name: "science",
	},
	{
		id: "5",
		label: "geography",
		name: "geography",
	},
	{
		id: "6",
		label: "history",
		name: "history",
	},
];

const difficultyArr = ["easy", "medium", "hard"];

type StartPropsType = {
	setLimit: React.Dispatch<React.SetStateAction<number>>;
	setDifficulty: React.Dispatch<React.SetStateAction<string>>;
	setCategory: React.Dispatch<React.SetStateAction<string>>;
	limit: number;
	difficulty: string;
	category: string;
};

const Start: FC<StartPropsType> = ({
	setLimit,
	setDifficulty,
	setCategory,
	limit,
	category,
	difficulty,
}) => {
	const [showCategories, setShowCategories] = useState(false);
	const [showDifficulties, setShowDifficulties] = useState(false);

	const setActive = (name: string) => {
		setCategory(name);
	};

	// decrement count
	const handleDecreaseNumber = () => {
		setLimit((prev) => {
			if (prev >= 6) {
				return prev - 1;
			}
			return prev;
		});
	};

	// increment count
	const handleIncreaseNumber = () => {
		setLimit((prev) => {
			if (prev <= 19) {
				return prev + 1;
			}
			return prev;
		});
	};

	return (
		<div className="container flex flex-col items-center">
			{/* <img className="lg:w-52 md:w-36 w-24 mb-5" src="/images/image.gif" width={500} height={500} alt="Cute anime gif" /> */}
			<h1 className="lg:text-5xll mb-5 text-center text-xl font-bold  sm:text-2xl md:text-3xl">
				Welcome✌️!
				<span className="block text-xl font-bold sm:text-2xl md:text-3xl lg:text-5xl">
					Let`s start your Quiz 🌎
				</span>
			</h1>
			<button
				onClick={() => setShowCategories((prev) => !prev)}
				className="mb-5 text-center text-2xl font-medium"
			>
				Filters:
			</button>
			<div className="flex flex-wrap justify-center gap-5 sm:mb-10 lg:flex-col ">
				<div className="flex flex-col gap-4 md:items-start lg:flex-row">
					<button
						type="button"
						onClick={() => setShowCategories((prev) => !prev)}
						className="flex items-center rounded-md font-semibold uppercase lg:cursor-auto"
					>
						<span className="text-2xl">By category</span>
						<svg
							className={twMerge("lg:hidden", showCategories && "rotate-180")}
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							hanging="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<line x1="12" y1="5" x2="12" y2="19"></line>
							<polyline points="19 12 12 19 5 12"></polyline>
						</svg>
					</button>
					<div
						className={twMerge(
							"grid grid-rows-[0fr] duration-200 lg:flex",
							showCategories && "grid-rows-[1fr]",
						)}
					>
						<ul className="flex flex-col gap-2 overflow-hidden text-xl lg:flex-row">
							{categoryArr.map((item, index) => (
								<li key={index} className="flex flex-col items-center">
									<button
										key={index}
										className={twMerge(
											"w-full rounded-xl border border-secondary bg-transparent px-3 py-2 capitalize leading-tight duration-100 hover:bg-secondary/70 hover:border-transparent hover:text-white active:bg-secondary/80",
											category === item.name && "bg-secondary text-white",
										)}
										type="button"
										onClick={() => setActive(item.name)}
									>
										{item.label}
									</button>
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className="flex flex-col items-center gap-4 lg:flex-row">
					<button
						type="button"
						onClick={() => setShowDifficulties((prev) => !prev)}
						className="flex items-center uppercase lg:cursor-default"
					>
						<span className="text-2xl">By difficulty</span>

						<svg
							className={twMerge("lg:hidden", showDifficulties && "rotate-180")}
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							hanging="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<line x1="12" y1="5" x2="12" y2="19"></line>
							<polyline points="19 12 12 19 5 12"></polyline>
						</svg>
					</button>
					<div
						className={twMerge(
							"grid w-full grid-rows-[0fr] duration-200 md:w-fit lg:flex",
							showDifficulties && "grid-rows-[1fr]",
						)}
					>
						<ul className="flex flex-col items-center gap-2 overflow-hidden lg:flex-row">
							{difficultyArr.map((item, index) => (
								<li key={index} className="w-full xl:w-fit">
									<button
										className={twMerge(
											"w-full rounded-xl border border-secondary bg-transparent px-3 py-2 capitalize leading-tight duration-100 hover:bg-secondary/70 hover:border-transparent hover:text-white active:bg-secondary/80",
											difficulty === item && "bg-secondary text-white",
										)}
										onClick={() => setDifficulty(item)}
									>
										{item}
									</button>
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className="flex flex-col items-center gap-4 lg:flex-row">
					<h2 className="text-2xl font-medium uppercase">Limit</h2>
					<div className="flex items-center gap-4">
						<button
							className="h-10 w-10 rounded-full bg-secondary pb-1 text-tertiary duration-100 hover:bg-secondary/70 active:bg-secondary/80"
							onClick={handleDecreaseNumber}
						>
							-
						</button>
						<span className="text-3xl">{limit}</span>
						<button
							className="h-10 w-10 rounded-full bg-secondary pb-1 text-tertiary hover:bg-secondary/70 active:bg-secondary/80"
							onClick={handleIncreaseNumber}
						>
							+
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Start;
