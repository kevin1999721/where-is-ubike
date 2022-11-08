import { useState } from 'react';

import { ReactComponent as DropdownIcon } from '../../assets/icon/dropdown.svg';
import DropdownOptions from '../dropdown-options/dropdown-options.component';

import {
	DropdownContainer,
	SelectedOptionContainer,
	SelectedOption,
	DropdownIconContainer,
} from './dropdown.style';

const Dropdown = ({ options }) => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const [selectedOptionText, setSelectedOptionText] = useState('選擇縣市');

	const onSelectedOptionClick = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};

	return (
		<DropdownContainer>
			<SelectedOptionContainer onClick={onSelectedOptionClick}>
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
				></DropdownOptions>
			)}
		</DropdownContainer>
	);
};

export default Dropdown;
