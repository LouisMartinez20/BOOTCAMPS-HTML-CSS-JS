import { CreditCard } from "./CreditCard";
import { GlobalStyle, Stage, Grid } from "./StyledCreditCardComponet";
export const CreditCardRender = () => {
  const items = Array.from({ length: 9 });
  return (
    <>
      <GlobalStyle />
      <Stage>
        <Grid>
          {items.map((_, i) => (
            <CreditCard
              key={i}
              variant={i === 4 ? "primary" : "ghost"}
              number="2671 9860 8300 0202"
              expiry="11/22"
              name="CLARK DOE"
            />
          ))}
        </Grid>
      </Stage>
    </>
  );
};export default CreditCardRender;
