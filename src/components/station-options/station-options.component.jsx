import { memo } from 'react';
import { useSelector } from 'react-redux';
import { selectBikeStations } from '../../store/bike/bike.select';

import { OptionsContainer, Option } from './station-options.style';

const StationOptions = memo(({ searchString, onOptionClick }) => {
	const bikeStaions = useSelector(selectBikeStations);

	return (
		<OptionsContainer>
			{bikeStaions &&
				bikeStaions
					.filter(staion => {
						const {
							StationName: { Zh_tw: staionName },
						} = staion;

						return staionName.includes(searchString);
					})
					.map(staion => {
						const {
							StationUID: stationUid,
							StationName: { Zh_tw: staionName },
						} = staion;

						return (
							<Option key={stationUid} onClick={onOptionClick(staion)}>
								{staionName}
							</Option>
						);
					})}
		</OptionsContainer>
	);
});

export default StationOptions;
