import { Container } from './Wrapper.styles';
import Sidebar from '../Sidebar/Sidebar';
import Main from '../Main/Main';

const Wrapper = () => {
  return (
    <Container>
      <Sidebar></Sidebar>
      <Main />
    </Container>
  );
};

export default Wrapper;
