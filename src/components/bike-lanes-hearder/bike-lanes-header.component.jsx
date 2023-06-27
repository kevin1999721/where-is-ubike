import { memo } from 'react';

import taiwanCities from '../../data/taiwan-cities.json';

import DefaultHeader from '../default-header/default-header.component';
import Dropdown from '../dropdown/dropdown.component';
import BikeLaneName from '../bike-lane-name/bike-lane-name.component';

const BikeLanesHeader = memo(({ setSelectedOption, setIsCardsListOpen, bikeLaneName }) => {
	return (
		<DefaultHeader>
			{bikeLaneName && (
				<BikeLaneName bikeLaneName={bikeLaneName} setIsCardsListOpen={setIsCardsListOpen} />
			)}
			<Dropdown
				options={taiwanCities}
				setSelectedOption={setSelectedOption}
				setIsCardsListOpen={setIsCardsListOpen}
			/>
		</DefaultHeader>
	);
});

export default BikeLanesHeader;
