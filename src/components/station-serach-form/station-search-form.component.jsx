import { useState, useMemo, useCallback } from 'react';

import { ReactComponent as SearchIcon } from '../../assets/icon/search.svg';
import StationOptions from '../station-options/station-options.component';

import {
	SearchForm,
	SearchInputContainer,
	SearchInput,
	SearchButton,
} from './station-search-form.style';

const StationSearchForm = ({ setSearchedItem }) => {
	const [isDropDownOpen, setIsDropDownOpen] = useState(false);
	const [inputValue, setInputValue] = useState('');
	const [searchString, setSearchString] = useState('');
	const [selectedOption, setSelectedOption] = useState(null);

	const onSearchInputChange = useMemo(() => {
		let setSearchStringTimer = null;

		return e => {
			clearTimeout(setSearchStringTimer);

			setSelectedOption(null);
			setInputValue(e.target.value);

			setSearchStringTimer = setTimeout(() => {
				setSearchString(e.target.value);
			}, 500);
		};
	}, []);

	const onOptionClick = useCallback(station => {
		return () => {
			console.log('click fire!');
			const {
				StationName: { Zh_tw: stationName },
			} = station;

			setInputValue(stationName);
			setSearchString(stationName);
			setSelectedOption(station);
			setIsDropDownOpen(false);
		};
	}, []);

	const onFormSubmit = e => {
		e.preventDefault();

		if (!selectedOption) {
			alert('請選擇站點!');
			return;
		}

		setSearchedItem({ ...selectedOption });
	};

	const onInputFocus = () => {
		setIsDropDownOpen(true);
	};

	const onInputBlur = e => {
		setTimeout(() => {
			setIsDropDownOpen(false);
		}, 300);
	};

	return (
		<SearchForm onSubmit={onFormSubmit}>
			<SearchInputContainer>
				<SearchInput
					type={'search'}
					placeholder="尋找站點"
					value={inputValue}
					onChange={onSearchInputChange}
					onFocus={onInputFocus}
					onBlur={onInputBlur}
				/>
				{isDropDownOpen && (
					<StationOptions searchString={searchString} onOptionClick={onOptionClick} />
				)}
			</SearchInputContainer>
			<SearchButton>
				<SearchIcon />
			</SearchButton>
		</SearchForm>
	);
};

export default StationSearchForm;
