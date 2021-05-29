import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const FooterBlock = styled.footer`
  font-size: 1.1rem;
  padding: 1rem;
  padding-left: 10rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-top: 1px solid lightgray;
  background: ${oc.gray[8]};
  color: white;
`;

const Footer = () => {
  return (
    <>
      <FooterBlock>
        <div>DESIGN BY MinSangYoon</div>
        <div>email : apdlyooapdl@gamil.com</div>
        <div>
          <a href="https://github.com/yoonminsang" target="blank">
            github
          </a>
        </div>
        <div>
          <a href="https://ms3864.tistory.com" target="blank">
            blog
          </a>
        </div>
        <div>
          <a
            href="https://www.youtube.com/channel/UC5xQ2M7Ux_RNQmVU3ucim5w"
            target="blank"
          >
            youtube
          </a>
        </div>
      </FooterBlock>
    </>
  );
};

export default Footer;
