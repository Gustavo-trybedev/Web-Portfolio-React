import React from 'react';
import { FaDownload } from 'react-icons/fa';
import { NavLink } from 'reactstrap';
import styled from 'styled-components';
import tw from 'twin.macro';
import curriculo from '../data/curriculo.pdf';
import BigHeads from './BigHeads';

function defaultNav() {
  const SNav = styled.nav`
    ${tw`
    flex
    justify-around
    items-center
    relative
    z-10
    top-0
    `}
    background: -webkit-linear-gradient(90deg, #1488cc 0%, #00a2ff 100%);
    backdrop-filter: blur(2px);
    padding: 10px;
    max-width: 100vmax;
`;

  const textShadowCfg = '2px 1px 2px #121212ad';

  return (
    <SNav>
      <NavLink href="/">
        <BigHeads />
      </NavLink>
      <NavLink
        href="/about"
        style={ {
          color: '#f09819',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          alignContent: 'center',
          alignItems: 'center',
          display: 'flex',
          gap: '10px',
          textShadow: textShadowCfg,
        } }
      >
        Sobre
      </NavLink>
      <NavLink
        href="/projects"
        style={ {
          color: '#f09819',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          alignContent: 'center',
          alignItems: 'center',
          display: 'flex',
          gap: '10px',
          textShadow: textShadowCfg,
        } }
      >
        Projetos
      </NavLink>
      <NavLink
        href="#footer"
        style={ {
          color: '#f09819',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          alignContent: 'center',
          alignItems: 'center',
          display: 'flex',
          gap: '10px',
          textShadow: textShadowCfg,
        } }
      >
        Contato
      </NavLink>
      <NavLink
        href={ curriculo }
        style={ {
          color: '#f09819',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          alignContent: 'center',
          alignItems: 'center',
          display: 'flex',
          gap: '10px',
          textShadow: textShadowCfg,
        } }
        download="Gustavo-Barros-Dutra-Santos-CV"
        target="_blank"
      >
        <FaDownload />
        Currículo
      </NavLink>
    </SNav>
  );
}

export default defaultNav;
