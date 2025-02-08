import {
  ErrorTitle,
  ErrorText,
  ErrorButton,
  WrapperError,
  ErrorContainer,
} from './NotFound.styled';

export const NotFound = () => {
  return (
    <>
      <ErrorContainer>
        <WrapperError>
          <ErrorTitle>404</ErrorTitle>
          <ErrorText>
            Sorry, you have reached a page that we could not find. It seems that
            you are lost among the numbers and letters of our virtual space.
            Perhaps this page went on vacation or decided to disappear into
            another dimension. We apologize for this inconvenience.
          </ErrorText>
          <ErrorButton to="/">Go Home</ErrorButton>
        </WrapperError>
      </ErrorContainer>
    </>
  );
};
