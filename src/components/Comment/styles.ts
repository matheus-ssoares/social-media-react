import styled from 'styled-components';

export const Container = styled.div`
  width: calc(100% - 2.25rem);

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  column-gap: 0.75rem;

  img {
    width: 2rem;
    height: 2.063rem;
    border-radius: 4.063rem;
  }

  .name-and-comment {
    display: flex;
    flex-direction: column;

    justify-content: flex-start;
    align-items: flex-start;
    row-gap: 0.625rem;
    h3 {
      font-family: var(--roboto-font-family);
      font-weight: bold;
      font-size: 0.813rem;
      color: ${({ theme }) => theme.primaryText};
    }
    .comment-container {
      width: 100%;
      max-width: 33.125rem;

      height: calc(100% - 1.25rem);
      display: flex;

      align-items: center;
      justify-content: flex-start;

      background: ${({ theme }) => theme.commentBox};

      border-radius: 0.375rem;

      p {
        max-width: 31.25rem;
        padding: 0.688rem;

        word-break: break-word;
        font-family: var(--roboto-font-family);

        font-weight: 400;
        font-size: 0.813rem;

        color: ${({ theme }) => theme.labelText};
      }
    }
    .comment-actions {
      display: flex;
      column-gap: 10px;

      .edit-button,
      .delete-button {
        border: none;
        background: transparent;
        color: #b4b4b5;

        &:hover {
          text-decoration: underline;
        }
      }

      .edit-button {
      }
      .delete-button {
      }
    }
  }
`;
