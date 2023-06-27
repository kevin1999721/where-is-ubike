import { useState, useRef, useEffect } from 'react';
import { DropdownOptionsContainer, OptionContainer } from './dropdown-options.style';

const DropdownOptions = ({
	options,
	setSelectedOptionText,
	setIsDropdownOpen,
	setSelectedOption,
	selectedOptionKey,
	setSelectedOptionKey,
	setIsCardsListOpen,
}) => {
	const dropdownOptionsRef = useRef(null);

	const onOptionClicked = (option, optionKey, optionText) => {
		return e => {
			setSelectedOption(option);
			setSelectedOptionKey(optionKey);
			setSelectedOptionText(optionText);
			setIsDropdownOpen(false);
			setIsCardsListOpen(true);
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
						isClicked={selectedOptionKey === cityID}
						onClick={onOptionClicked(option, cityID, cityName)}
					>
						{cityName}
					</OptionContainer>
				);
			})}
		</DropdownOptionsContainer>
	);
};

export default DropdownOptions;
