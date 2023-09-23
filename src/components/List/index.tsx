import { FC } from "react";
import Item from "../Item";
import { DataPropsType } from "../../App";

interface ListPropsType {
	myData: DataPropsType[];
	showResult: boolean;
	setCount: React.Dispatch<React.SetStateAction<number>>;
}

const List: FC<ListPropsType> = ({ myData, setCount, showResult }) => {
	return (
		<ul className="container flex list-none flex-col gap-5 lg:py-10">
			{myData.map((item) => (
				<Item
					setCount={setCount}
					answersArr={item.answersArr}
					key={item.id}
					id={item.id}
					correct={item.correctAnswer}
					showResult={showResult}
					question={item.question}
				/>
			))}
		</ul>
	);
};

export default List;
