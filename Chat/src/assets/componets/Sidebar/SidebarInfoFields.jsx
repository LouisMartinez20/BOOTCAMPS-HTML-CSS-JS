import * as React from 'react';
import {
  StyledInfoFieldsBlock,
  StyledInfoFieldRow,
  StyledInfoFieldIconWrap,
  StyledInfoFieldTexts,
  StyledInfoFieldValue,
  StyledInfoFieldLabel
} from './Sidebar.style';
export const SidebarInfoFields = function (props) {
  let itemsLocal = [];
  if (props.items) {
    itemsLocal = props.items;
  }
  const IconWrapComp = props.IconWrapComponent ? props.IconWrapComponent : StyledInfoFieldIconWrap;
  const ValueComp = props.ValueComponent ? props.ValueComponent : StyledInfoFieldValue;
  const LabelComp = props.LabelComponent ? props.LabelComponent : StyledInfoFieldLabel;
  if (!itemsLocal || itemsLocal.length === 0) {
    return <StyledInfoFieldsBlock />;
  }
  return (
    <StyledInfoFieldsBlock>
      {itemsLocal.map(function (item) {
        return (
          <StyledInfoFieldRow key={item.id}>
            <IconWrapComp>
              <img
                src={item.icon}
                width="18"
                height="18"
                alt=""
                style={{ display: 'block' }}
                data-sidebar-icon="true"
              />
            </IconWrapComp>
            <StyledInfoFieldTexts>
              <ValueComp title={item.value}>
                {item.value}
              </ValueComp>
              <LabelComp>{item.label}</LabelComp>
            </StyledInfoFieldTexts>
          </StyledInfoFieldRow>
        );
      })}
    </StyledInfoFieldsBlock>
  );
};