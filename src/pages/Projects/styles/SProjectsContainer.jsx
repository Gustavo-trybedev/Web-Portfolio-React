import styled from 'styled-components';
import projectsBG from '../../../data/skillsImages/projectsBG.jpg';

const SProjectsContainer = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 2rem;
    padding: 2.5rem;
    background-image: url(${projectsBG});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
`;

export default SProjectsContainer;
