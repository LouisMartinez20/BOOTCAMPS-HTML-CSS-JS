import * as React from 'react';
import {
  StyledSidebarWrapper,
  StyledSidebarDecor,
  StyledTopSection,
  StyledSeparator,
  StyledMenuScroll,
  StyledPromoCardWrapper,
  StyledAvatarInner,
  StyledInfoFieldIconWrap,
  StyledInfoFieldValue,
  StyledInfoFieldLabel,
  StyledMenuItem,
  StyledPromoBlock,
  StyledName,
  StyledRole,
  StyledToggleVisual,
  StyledPromoTitle,
  StyledPromoHighlight
} from './Sidebar.style';
import {
  StyledSidebarWrapperLight,
  StyledAvatarInnerLight,
  StyledInfoFieldIconWrapLight,
  StyledInfoFieldValueLight,
  StyledInfoFieldLabelLight,
  StyledMenuItemLight,
  StyledPromoBlockLight,
  StyledNameLight,
  StyledRoleLight,
  StyledToggleVisualLight,
  StyledPromoTitleLight,
  StyledPromoHighlightLight
} from './SidebarLight.style';
import { SidebarProfile } from './SidebarProfile';
import { SidebarInfoFields } from './SidebarInfoFields';
import { SidebarMenu } from './SidebarMenu';
import { SidebarPromoCard } from './SidebarPromoCard';
export const Sidebar = function (props) {
  const [lightMode, setLightMode] = React.useState(false);
  const infoItems = [
    { id: 'phone', icon: '/icons/phone.svg', value: '+62 845 2341283', label: 'Phone' },
    { id: 'username', icon: '/icons/at-sign.svg', value: 'savannah', label: 'Username' },
    { id: 'status', icon: '/icons/info.svg', value: 'Product Designer', label: 'Status' }
  ];
  const menuItems = [
    { id: 'settings', icon: '/icons/settings.svg', label: 'General Settings', type: 'item' },
    { id: 'notifications', icon: '/icons/bell.svg', label: 'Notifications', type: 'item' },
    { id: 'privacy', icon: '/icons/lock.svg', label: 'Privacy and Security', type: 'item' },
    { id: 'language', icon: '/icons/globe.svg', label: 'Language', type: 'item' },
    { id: 'light-mode', icon: '/icons/moon.svg', label: 'Light Mode', type: 'toggle' }
  ];
  function handleToggleLightMode(enabled) {
    setLightMode(enabled);
    if (props.onToggleLight) {
      props.onToggleLight(enabled);
    }
  }
  const Wrapper = lightMode ? StyledSidebarWrapperLight : StyledSidebarWrapper;
  const AvatarInnerComp = lightMode ? StyledAvatarInnerLight : StyledAvatarInner;
  const InfoIconWrapComp = lightMode ? StyledInfoFieldIconWrapLight : StyledInfoFieldIconWrap;
  const InfoValueComp = lightMode ? StyledInfoFieldValueLight : StyledInfoFieldValue;
  const InfoLabelComp = lightMode ? StyledInfoFieldLabelLight : StyledInfoFieldLabel;
  const MenuItemComp = lightMode ? StyledMenuItemLight : StyledMenuItem;
  const PromoBlockComp = lightMode ? StyledPromoBlockLight : StyledPromoBlock;
  const NameComp = lightMode ? StyledNameLight : StyledName;
  const RoleComp = lightMode ? StyledRoleLight : StyledRole;
  const ToggleVisualComp = lightMode ? StyledToggleVisualLight : StyledToggleVisual;
  const PromoTitleComp = lightMode ? StyledPromoTitleLight : StyledPromoTitle;
  const PromoHighlightComp = lightMode ? StyledPromoHighlightLight : StyledPromoHighlight;
  return (
    <Wrapper>
      <StyledSidebarDecor />
      <StyledTopSection>
        <SidebarProfile
          name="Savannah Nguyen"
          role="Product Designer"
          avatarSrc="/avatars/avatarone.webp"
          AvatarInnerComponent={AvatarInnerComp}
          NameComponent={NameComp}
          RoleComponent={RoleComp}
        />
        <SidebarInfoFields
          items={infoItems}
          IconWrapComponent={InfoIconWrapComp}
          ValueComponent={InfoValueComp}
          LabelComponent={InfoLabelComp}
        />
      </StyledTopSection>
      <StyledSeparator />
      <StyledMenuScroll>
        <SidebarMenu
          items={menuItems}
            activeId="settings"
          onToggleLightMode={function (enabled) { handleToggleLightMode(enabled); }}
          lightModeEnabled={lightMode}
          MenuItemComponent={MenuItemComp}
          ToggleVisualComponent={ToggleVisualComp}
        />
      </StyledMenuScroll>
      <StyledPromoCardWrapper>
        <SidebarPromoCard
          title="Mychats"
          highlightWord="Premium"
          description="Experience enhanced features and improved accessibility."
          actionLabel="Buy Now"
          PromoBlockComponent={PromoBlockComp}
          PromoTitleComponent={PromoTitleComp}
          PromoHighlightComponent={PromoHighlightComp}
        />
      </StyledPromoCardWrapper>
    </Wrapper>
  );
};