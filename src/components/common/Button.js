import React from 'react';
import oc from 'open-color';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const buttonStyle = css`
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  ${(props) =>
    props.radius &&
    css`
      border-radius: 1rem;
    `}

  ${(props) =>
    props.gray &&
    css`
      background: ${oc.gray[8]};
      &:hover {
        background: ${oc.gray[6]};
      }
      &:disabled {
        background: ${oc.gray[3]};
        color: ${oc.gray[5]};
        cursor: not-allowed;
      }
    `}

  ${(props) =>
    props.blue &&
    css`
      background: ${oc.blue[8]};
      &:hover {
        background: ${oc.blue[6]};
      }
      &:disabled {
        background: ${oc.blue[3]};
        color: ${oc.blue[5]};
        cursor: not-allowed;
      }
    `}

  ${(props) =>
    props.fullwidth &&
    css`
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      width: 100%;
      font-size: 1.125rem;
    `}
`;

const StyledButton = styled.button`
  ${buttonStyle}
`;

const StyledLink = styled(Link)`
  ${buttonStyle}
`;

const Button = (props) => {
  return props.to ? <StyledLink {...props} /> : <StyledButton {...props} />;
};

export default Button;
