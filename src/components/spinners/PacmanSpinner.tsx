import { PacmanLoader } from "react-spinners";
import styled from "styled-components";
import { colors } from "../../utils";

export const PacmanSpinner = () => {
  return (
    <CenteredContainer>
      <PacmanLoader color={colors.blue} />
    </CenteredContainer>
  );
};

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 2em;
`;
