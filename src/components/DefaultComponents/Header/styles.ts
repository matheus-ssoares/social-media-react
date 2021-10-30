import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  box-shadow: 0px 4px 4px rgba(153, 153, 153, 0.25);
  height: 3.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: calc(100% - 3.5rem);
  height: 100%;
`;
export const SearchContainer = styled.div`
  width: 13.75rem;
  height: 2.188rem;

  background: #f0f2f5;
  border-radius: 23px;

  display: flex;
  justify-content: center;
  align-items: center;

  .content {
    width: calc(100% - 20px);
    height: 100%;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    .search-icon {
      fill: #b4b4b5;
    }
    input {
      width: 100%;
      height: 74%;

      background: transparent;
      border: none;
      padding-left: 0.375rem;
      &:focus {
        outline: none;
      }
      &:placeholder {
        font-family: var(--roboto-font-family);
        font-weight: 400;
        font-size: 0.875rem;
        color: #7a7a7a;
      }
    }
  }
`;
export const Logo = styled.h1`
  font-family: 'Pinyon Script', sans-serif;
  font-weight: 400;
  font-size: 2.25rem;
  color: #0caacd;
  align-self: end;
`;
export const Links = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 0.875rem;
  .profile {
    width: 7.688rem;
    height: 2.188rem;
    background: #0caacd;
    border-radius: 23px;
    text-decoration: none;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      filter: brightness(0.8);
    }

    .profile-icon {
      display: flex;
      width: calc(100% - 0.625rem);
      height: calc(100% - 0.375rem);
      align-items: center;
      text-decoration: none;

      img {
        width: 2.063rem;
        height: 1.875rem;
        border-radius: 1.875rem;
      }

      span {
        margin-left: 0.625rem;
        font-family: var(--roboto-font-family);
        font-size: 0.875rem;
        color: #ffffff;
      }
    }
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    column-gap: 0.438rem;

    .commom-icons {
      background: #0caacd;
      border-radius: 23px;
      height: 2.188rem;
      width: 2.188rem;
      display: flex;
      justify-content: center;
      align-items: center;

      .icon {
        fill: #ffffff;
      }
    }
  }
`;
