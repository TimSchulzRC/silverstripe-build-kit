import React, { useEffect, useState } from "react";
import fieldHolder from "components/FieldHolder/FieldHolder";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Input,
  InputGroup,
  InputGroupButtonDropdown,
} from "reactstrap";

const CustomField = () => {
  // textField and dropdownField were passed to us from `getSchemaStateDefaults`
  // which we set previously. `onAutofill` is a function that is passed to us by
  // the React form builder in Silverstripe
  const { textField, dropdownField, onAutofill } = props;
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [content, setContent] = useState(textField.value);
  const [dropdown, setDropdown] = useState(dropdownField.value);
  const dropdownOptions = dropdownField.source;

  // Since we're using the state from a property we need to update the
  // state when the property changes, therefore we're using `useEffect`
  useEffect(() => {
    setContent(textField.value);
  }, [textField.value]);

  useEffect(() => {
    setDropdown(dropdownField.value);
  }, [dropdownField.value]);

  // When the field is changed we need to pass that up to the redux form
  useEffect(() => {
    if (typeof onAutofill !== "function") {
      return;
    }

    // This was the function mentioned before it takes a form field name
    // and a value, this allows us to bind the field to that state when it changes.
    onAutofill(textField.name, content);
  }, [content]);

  useEffect(() => {
    if (typeof onAutofill !== "function") {
      return;
    }

    onAutofill(dropdownField.name, dropdown);
  }, [dropdown]);

  // This is just looking for the currently selected item
  const selectedItem = dropdownOptions.find(
    (option) => option.value === dropdown
  );
  // This handles the case where the selected item isn't
  // passed through as the source item as it's been removed
  const selectedTitle = selectedItem ? selectedItem.title : dropdown;

  return (
    <InputGroup>
      <Input
        name={textField.name}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <InputGroupButtonDropdown
        name={dropdownField.name}
        addonType="append"
        isOpen={dropdownOpen}
        toggle={() => setDropdownOpen(!dropdownOpen)}
      >
        <DropdownToggle caret outline>
          {selectedTitle}
        </DropdownToggle>
        <DropdownMenu>
          {dropdownOptions.map((option) => (
            <DropdownItem
              dangerouslySetInnerHTML={{ __html: option.title }}
              value={option.value}
              disabled={option.disabled}
              onClick={() => setDropdown(option.value)}
            />
          ))}
        </DropdownMenu>
      </InputGroupButtonDropdown>
    </InputGroup>
  );
};

export default fieldHolder(CustomField);
