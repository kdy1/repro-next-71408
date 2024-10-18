import { css, styled } from "@mui/material/styles";

const OtherDiv = styled("div")`
  background: blue;
  width: 100px;
  height: 100px;
`;

const MyCustomDiv = styled("div")`
  width: 300px;
  height: 300px;
  background: red;

  ${() => css`
    &${OtherDiv} {
      background: black;
    }
  `}
`;

export default function Home() {
  return (
      <main>
        <MyCustomDiv>
          <OtherDiv />
        </MyCustomDiv>
      </main>
  );
}
