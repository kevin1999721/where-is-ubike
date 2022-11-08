import taiwanCities from '../../data/taiwan-cities.json';

import Dropdown from '../dropdown/dropdown.component';

import DefaultHeader from '../default-header/default-header.component';

const BikeLanesHeader = () => {
	return (
		<DefaultHeader>
			<Dropdown options={taiwanCities} />
		</DefaultHeader>
	);
};

export default BikeLanesHeader;
