import { useState, useRef, useEffect } from 'react';
import { DropdownOptionsContainer, OptionContainer } from './dropdown-options.style';

const DropdownOptions = ({ options, setSelectedOptionText, setIsDropdownOpen }) => {
	const [clickedIndex, setClickedIndex] = useState(-1);
	const dropdownOptionsRef = useRef(null);
	const onOptionClicked = (index, optionText) => {
		return () => {
			setClickedIndex(index);
			setSelectedOptionText(optionText);
			setIsDropdownOpen(false);
		};
	};

	const onDropdonwOptionsBlur = () => {
		setIsDropdownOpen(false);
	};

	useEffect(() => {
		dropdownOptionsRef.current.focus();
	}, []);

	return (
		<DropdownOptionsContainer ref={dropdownOptionsRef} tabIndex={0} onBlur={onDropdonwOptionsBlur}>
			{options.map((option, index) => {
				const { CityID: cityID, CityName: cityName } = option;
				return (
					<OptionContainer
						key={cityID}
						isClicked={clickedIndex === index}
						onClick={onOptionClicked(index, cityName)}
					>
						{cityName}
					</OptionContainer>
				);
			})}
		</DropdownOptionsContainer>
	);
};

export default DropdownOptions;
