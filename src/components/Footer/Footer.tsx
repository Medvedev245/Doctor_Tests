import React from 'react';
import {
  FooterContainer,
  // SvgIcons,
  // Path,
  // WrapperComtainer,
  SpanFooter,
} from './Footer.styled';

export const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <SpanFooter>&copy; 2024 Lékařské Zkoušky Online</SpanFooter>
      {/* <WrapperComtainer>
        При обнаружении ошибки - пишите мне В
        <div>
          <a
            href="https://t.me/Ihor437"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SvgIcons>
              <Path d="M16 0c-8.838 0-16 7.162-16 16s7.162 16 16 16 16-7.163 16-16-7.163-16-16-16zM23.863 10.969l-2.625 12.369c-0.181 0.881-0.712 1.087-1.45 0.681l-4-2.956-1.919 1.869c-0.225 0.219-0.4 0.4-0.8 0.4-0.519 0-0.431-0.194-0.606-0.688l-1.363-4.475-3.956-1.231c-0.856-0.262-0.862-0.85 0.194-1.269l15.412-5.95c0.7-0.319 1.381 0.169 1.113 1.25z"></Path>
            </SvgIcons>
          </a>
        </div>
      </WrapperComtainer> */}
    </FooterContainer>
  );
};
