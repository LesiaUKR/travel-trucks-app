import { useState } from "react";
import Icon from "../Icon/Icon";
import { useTheme } from "styled-components";
import DefaultBtn from "../DefaultBtn/DefaultBtn";
import {
  Form,
  VehicleFilters,
} from "./FiltersForm.styled";
import { vehicleEquipmentFilters, vehicleTypeFilters } from "../../helpers/filterData";

const FiltersForm = () => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const theme = useTheme();
  return (
    <Form>
      <div className="locationContainer">
        <label htmlFor="location" className="locationLabel">Location</label>
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
            onFocus={() => setIsInputFocused(true)}
            onBlur={() => setIsInputFocused(false)}
          />
        </div>
      </div>
      <p className="filtersTitle">Filters</p>
      <div className="filtersContainer">
      
      <div>
        <h3 className="filtersTypeTitle">Vehicle equipment</h3>
        <VehicleFilters>
          {vehicleEquipmentFilters.map(({ icon, text }) => (
            <li key={text}  className="filterWrap">
                 <Icon name={icon} width={32} height={32}  stroke={theme.iconColorFirst} fill={theme.iconColorFirst}/>
              <label htmlFor={text}  className="labelText">{text}</label>
                <input
                  className="filterCheckbox hidden"
                  type="checkbox"
                  name={text}
                />
            </li>
          ))}
        </VehicleFilters>
      </div>
      <div>
        <h3 className="filtersTypeTitle">Vehicle type</h3>
        <VehicleFilters>
          {vehicleTypeFilters.map(({ icon, text }) => (
            <li key={text} className="filterWrap">
             
              <Icon name={icon} width={40} height={28}  fill={theme.iconColorFirst}/>
              <label className="labelText" htmlFor={text}>{text}</label>
              <input
                className="filterCheckbox hidden"
                type="checkbox"
                name={text}
              />
            </li>
          ))}
        </VehicleFilters>
      </div>
      </div>
      <DefaultBtn type="submit" text="Search" className="filter-btn"/>
    </Form>
  );
};

export default FiltersForm;
