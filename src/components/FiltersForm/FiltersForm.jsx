import { useState } from "react";
import Icon from "../Icon/Icon";
import { useTheme } from "styled-components";
import DefaultBtn from "../DefaultBtn/DefaultBtn";
import {
  EquipmentFilterItem,
  Form,
  VanTypeFilterItem,
  VehicleFilters,
} from "./FiltersForm.styled";
import {
  vehicleEquipmentFilters,
  vehicleTypeFilters,
} from "../../helpers/filterData";
import { useDispatch } from "react-redux";
import { locationsList } from "../../helpers/filterData";
import { formattedLocation } from "./../../helpers/formattedLocation";
import { fetchCampers } from "../../redux/campers/operations";
import { clearItems, setFilters, setPage } from "../../redux/campers/slice";

const FiltersForm = () => {
  const dispatch = useDispatch();
  const theme = useTheme();

  const [isInputFocused, setIsInputFocused] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedEquipment, setSelectedEquipment] = useState([]);
  const [selectedForm, setSelectedForm] = useState("");
  const [filtersActive, setFiltersActive] = useState(false);

  const formattedLocations = locationsList.map((location) =>
    formattedLocation(location)
  );
  const originalLocationsMap = locationsList.reduce((acc, location) => {
    acc[formattedLocation(location)] = location;
    return acc;
  }, {});

  const handleLocationInput = (e) => {
    const formattedValue = e.target.value;
    const originalValue =
      originalLocationsMap[formattedValue] || formattedValue;
    setSelectedLocation(originalValue);
  };

  const handleLocationFocus = () => {
    setSelectedLocation("");
    setIsInputFocused(true);
  };

  const handleEquipmentFilter = (text) => {
    setSelectedEquipment((prevEquipment) =>
      prevEquipment.includes(text)
        ? prevEquipment.filter((item) => item !== text)
        : [...prevEquipment, text]
    );
  };

  const handleVanTypeFilter = (value) => {
    setSelectedForm(value);
  };

  async function handleSubmit(e) {
    e.preventDefault();

    const filters = {};

    if (selectedLocation) {
      filters.location = decodeURIComponent(selectedLocation);
    }
    if (selectedForm) {
      filters.form = selectedForm;
    }
    selectedEquipment.forEach((text) => {
      const filterKey = vehicleEquipmentFilters.find(
        (item) => item.text === text
      )?.key;
      if (filterKey) {
        filters[filterKey] = true;
      }
    });

    dispatch(setFilters(filters));
    dispatch(clearItems());
    dispatch(setPage(1));
    dispatch(fetchCampers({ filters, page: 1 }));
    setFiltersActive(true);
  }

  const handleReset = () => {
    setSelectedLocation("");
    setSelectedEquipment([]);
    setSelectedForm("");
    dispatch(setFilters({ location: "", equipment: "", form: "" }));
    dispatch(clearItems());
    dispatch(setPage(1));
    dispatch(fetchCampers({ filters: {}, page: 1 }));

    setFiltersActive(false);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div className="locationContainer">
        <label htmlFor="location" className="locationLabel">
          Location
        </label>
        <div className="inputLocationContainer">
          <Icon
            name="map"
            stroke={isInputFocused ? "#101828" : "#6C717B"}
            width="18"
            height="20"
          />
          <input
            className="locationInput"
            type="text"
            name="location"
            placeholder="City, Country"
            list="locationOptions"
            value={selectedLocation}
            onFocus={handleLocationFocus}
            onBlur={() => setIsInputFocused(false)}
            onChange={handleLocationInput}
          />
          <datalist id="locationOptions">
            {formattedLocations.map((location) => (
              <option key={location} value={location} />
            ))}
          </datalist>
        </div>
      </div>
      <p className="filtersTitle">Filters</p>
      <div className="filtersContainer">
        <div>
          <h3 className="filtersTypeTitle">Vehicle equipment</h3>
          <VehicleFilters>
            {vehicleEquipmentFilters.map(({ icon, text }) => (
              <EquipmentFilterItem
                key={text}
                className={selectedEquipment.includes(text) ? "active" : ""}
                onClick={() => handleEquipmentFilter(text)}
              >
                <Icon
                  name={icon}
                  width={32}
                  height={32}
                  stroke={theme.iconColorFirst}
                  fill={theme.iconColorFirst}
                />
                <label htmlFor={text} className="labelText">
                  {text}
                </label>
                <input
                  className="filterCheckbox hidden"
                  type="checkbox"
                  name="equipment"
                  value={text}
                  checked={selectedEquipment.includes(text)}
                  readOnly
                />
              </EquipmentFilterItem>
            ))}
          </VehicleFilters>
        </div>
        <div>
          <h3 className="filtersTypeTitle">Vehicle type</h3>
          <VehicleFilters>
            {vehicleTypeFilters.map(({ icon, text, value }) => (
              <VanTypeFilterItem
                key={text}
                className={selectedForm === value ? "active" : ""}
                onClick={() => handleVanTypeFilter(value)}
              >
                <Icon
                  name={icon}
                  width={40}
                  height={28}
                  fill={theme.iconColorFirst}
                />
                <label className="labelText" htmlFor={text}>
                  {text}
                </label>
                <input
                  className="filterRadioBtn hidden"
                  type="radio"
                  name="form"
                  value={value}
                  checked={selectedForm === value}
                  readOnly
                />
              </VanTypeFilterItem>
            ))}
          </VehicleFilters>
        </div>
      </div>
      <DefaultBtn type="submit" text="Search" className="filter-btn" />
      {filtersActive && (
        <DefaultBtn
          type="button"
          text="Reset"
          onClick={handleReset}
        />
      )}
    </Form>
  );
};

export default FiltersForm;
