import styled from 'styled-components';

export const Container = styled.header`
  margin-top: 40px;
`;

export const LogoWrapper = styled.div`
  display: flex;
`;

export const LogoLink = styled.a`
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

export const LogoImage = styled.img`
  width: 80px;
`;

export const LogoName = styled.h2`
  font-size: 32px;
`;

export const Nav = styled.nav`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 40px;
`;

export const NavBtn = styled.button`
  padding: 10px 15px;
  border: 1px solid var(--main-color);
  border-radius: 7px;
  box-shadow: var(--box-shadow);

  &:hover {
    color: #fff;
    background-color: var(--main-color);
  }
  &:active {
    transform: scale(0.95);
  }
`;

export const TodoTotalCount = styled(NavBtn)``;
export const CompletedTask = styled(NavBtn)``;
export const RemainingTask = styled(NavBtn)``;
