import * as React from 'react';
import {
  StyledMenuBlock,
  StyledMenuItem,
  StyledMenuItemIcon,
  StyledMenuItemLabel,
  StyledMenuItemAction,
  StyledToggleThumb,
  StyledToggleVisual
} from './Sidebar.style';
export const SidebarMenu = function (props) {
  let itemsLocal = [];
  if (props.items) {
    itemsLocal = props.items;
  }
  const MenuItemComp = props.MenuItemComponent ? props.MenuItemComponent : StyledMenuItem;
  const ToggleVisualComp = props.ToggleVisualComponent ? props.ToggleVisualComponent : StyledToggleVisual;
  const [internalActive, setInternalActive] = React.useState(
    props.activeId ? props.activeId : null
  );
  const [internalLight, setInternalLight] = React.useState(
    typeof props.lightModeEnabled === 'boolean' ? props.lightModeEnabled : false
  );
  React.useEffect(function () {
    if (typeof props.lightModeEnabled === 'boolean') {
      setInternalLight(props.lightModeEnabled);
    }
  }, [props.lightModeEnabled]);
  function handleSelect(id) {
    setInternalActive(id);
    if (props.onSelect) {
      props.onSelect(id);
    }
  }
  function toggleLight() {
    let next = !internalLight;
    setInternalLight(next);
    if (props.onToggleLightMode) {
      props.onToggleLightMode(next);
    }
  }
  if (!itemsLocal || itemsLocal.length === 0) {
    return <StyledMenuBlock />;
  }
  return (
    <StyledMenuBlock>
      {itemsLocal.map(function (item) {
        let isToggle = item.type === 'toggle';
        let isActive = internalActive === item.id && !isToggle;
        let classNameValue =
          (isActive ? 'is-active has-accent-bar ' : '') +
          (isToggle ? 'is-toggle ' : '') +
          (isToggle && internalLight ? 'is-on ' : '');
        return (
          <MenuItemComp
            key={item.id}
            type="button"
            className={classNameValue}
            onClick={function () {
              if (isToggle) {
                toggleLight();
                return;
              }
              handleSelect(item.id);
            }}
            aria-pressed={isToggle ? (internalLight ? 'true' : 'false') : (isActive ? 'true' : 'false')}
            aria-label={isToggle ? 'Light Mode' : undefined}
          >
            <StyledMenuItemIcon>
              <img
                src={item.icon}
                alt=""
                width="20"
                height="20"
                style={{ display: 'block' }}
                data-sidebar-icon="true"
              />
            </StyledMenuItemIcon>
            <StyledMenuItemLabel>{item.label}</StyledMenuItemLabel>
            {isToggle ? (
              <StyledMenuItemAction>
                <ToggleVisualComp>
                  <StyledToggleThumb />
                </ToggleVisualComp>
              </StyledMenuItemAction>
            ) : null}
          </MenuItemComp>
        );
      })}
    </StyledMenuBlock>
  );
};