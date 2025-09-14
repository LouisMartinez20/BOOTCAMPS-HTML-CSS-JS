import {
  StyledInfoFieldsBlock,
  StyledInfoFieldRow,
  StyledInfoFieldIconWrap,
  StyledInfoFieldTexts,
  StyledInfoFieldValue,
  StyledInfoFieldLabel,
} from "./Sidebar.style";
const INFO_ITEMS = [
  {id: "phone",icon: "/icons/phone.svg",value: "+62 845 2341283",label: "Phone",},
  {id: "username",icon: "/icons/at-sign.svg",value: "savannah",label: "Username",},
  {id: "status",icon: "/icons/info.svg",value: "Product Designer",label: "Status",},
];
export function SidebarInfoFields() {
  return (
    <StyledInfoFieldsBlock>
      {INFO_ITEMS.map((item) => (
        <StyledInfoFieldRow key={item.id}>
          <StyledInfoFieldIconWrap>
            <img
              src={item.icon}
              width="18"
              height="18"
              style={{ display: "block" }}
              data-sidebar-icon="true"
            />
          </StyledInfoFieldIconWrap>
            <StyledInfoFieldTexts>
              <StyledInfoFieldValue title={item.value}>
                {item.value}
              </StyledInfoFieldValue>
              <StyledInfoFieldLabel>{item.label}</StyledInfoFieldLabel>
            </StyledInfoFieldTexts>
        </StyledInfoFieldRow>
      ))}
    </StyledInfoFieldsBlock>
  );
}