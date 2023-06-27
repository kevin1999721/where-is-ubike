import { useEffect } from 'react';
import { useState, useRef } from 'react';

import { ReactComponent as DropdownIcon } from '../../assets/icon/dropdown.svg';
import DropdownOptions from '../dropdown-options/dropdown-options.component';

import {
	DropdownContainer,
	SelectedOptionContainer,
	SelectedOption,
	DropdownIconContainer,
} from './dropdown.style';

const Dropdown = ({ options, setSelectedOption, setIsCardsListOpen }) => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const [selectedOptionKey, setSelectedOptionKey] = useState('');
	const [selectedOptionText, setSelectedOptionText] = useState('選擇縣市');

	const onSelectedOptionMouseDown = e => {
		//using mouseDown to prevent click event trigger options blur
		e.preventDefault();
	};

	const onSelectedOptionClick = e => {
		setIsDropdownOpen(!isDropdownOpen);
	};

	return (
		<DropdownContainer>
			<SelectedOptionContainer
				onMouseDown={onSelectedOptionMouseDown}
				onClick={onSelectedOptionClick}
			>
				<SelectedOption>{selectedOptionText}</SelectedOption>
				<DropdownIconContainer isDropdownOpen={isDropdownOpen}>
					<DropdownIcon />
				</DropdownIconContainer>
			</SelectedOptionContainer>
			{isDropdownOpen && (
				<DropdownOptions
					options={options}
					setSelectedOptionText={setSelectedOptionText}
					setIsDropdownOpen={setIsDropdownOpen}
					setSelectedOption={setSelectedOption}
					selectedOptionKey={selectedOptionKey}
					setSelectedOptionKey={setSelectedOptionKey}
					setIsCardsListOpen={setIsCardsListOpen}
				></DropdownOptions>
			)}
		</DropdownContainer>
	);
};

export default Dropdown;
