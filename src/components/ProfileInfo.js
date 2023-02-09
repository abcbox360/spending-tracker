import styled from "styled-components";
import StateContext from "./StateContext";
import { useContext } from "react";

const ProfileInfoContainer = styled.div`
  height: 200px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Image = styled.img`
  border-radius: 50%;
  margin-bottom: 20px;
  border: 1px solid black;
`;

const Name = styled.div`
margin-bottom: 5px;
`;

function ProfileInfo() {
  const { picture, name, email } = useContext(StateContext);

  return (
    <ProfileInfoContainer>
      <Image src={picture} />
      <Name>{name}</Name>
      <Name>{email}</Name>
    </ProfileInfoContainer>
  );
}

export default ProfileInfo;
