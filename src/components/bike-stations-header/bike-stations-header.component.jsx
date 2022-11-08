import { MAP_BIKE_DATA_TYPE } from '../../utils/leaflet/leaflet.utils';

import DefaultHeader from '../default-header/default-header.component';
import DataOptions from '../data-options/data-options.component';
import SwitchButton from '../switch-button/switch-button.component';
import { ReactComponent as BikeIcon } from '../../assets/icon/bike.svg';
import { ReactComponent as ParkingIcon } from '../../assets/icon/parking.svg';

const options = [
	{
		icon: BikeIcon,
		text: '租車',
		dataType: MAP_BIKE_DATA_TYPE.AVAILABLE_RENT,
	},
	{
		icon: ParkingIcon,
		text: '還車',
		dataType: MAP_BIKE_DATA_TYPE.AVAILABLE_RETURN,
	},
];

const BikeStationsHeader = ({ setBikeDataType, setIsShowBikeLanes }) => {
	return (
		<DefaultHeader>
			<DataOptions options={options} setDataType={setBikeDataType} />
			<SwitchButton setState={setIsShowBikeLanes} />
		</DefaultHeader>
	);
};

export default BikeStationsHeader;
