import { useState } from 'react';
import { DataOptionsContainer, DataOption } from './data-options.style';

const DataOptions = ({ options, setDataType }) => {
	const [clickedIndex, setClickedIndex] = useState(0);
	const optionClidkHandler = index => {
		return e => {
			setClickedIndex(index);
			setDataType(options[index].dataType);
		};
	};

	return (
		<DataOptionsContainer clickIndex={clickedIndex}>
			{options.map((option, index) => {
				return (
					<DataOption
						isClick={clickedIndex === index ? true : false}
						onClick={optionClidkHandler(index)}
						key={option.text}
					>
						<option.icon />
						<span>{option.text}</span>
					</DataOption>
				);
			})}
		</DataOptionsContainer>
	);
};

export default DataOptions;
