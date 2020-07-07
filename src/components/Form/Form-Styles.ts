import styled from 'styled-components';

export const FormContainer = styled.form`
  width: 100%;
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const FormInput = styled.input`
  width: 200px;
  height: 30%;
  border-radius: 5px;
  border-color: orange;
  box-sizing: border-box;
`;

export const FormButton: any = styled.button`
  width: 70px;
  height: 30%;
  border-radius: 5px;
  margin-left: 20px;
  font-family: 'Montserrat Subrayada', sans-serif;
  background: orange;
  color: white;
  border-color: rgba(0, 0, 0, 0.1);
  cursor: pointer;
  &:hover {
    background-color: #f4a460;
  }
`;

export const UserName = styled.p`
  position: absolute;
  top: 18%;
  left: 50%;
  transform: translate(-50%, -50%);
  white-space: nowrap;
`;

export const Error = styled.p`
  position: absolute;
  top: 27%;
  left: 50%;
  transform: translate(-50%, -50%);
  white-space: nowrap;
  color: red;
`
