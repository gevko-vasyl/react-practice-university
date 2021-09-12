import Card from 'components/Card/Card';
import Paper from 'components/Paper/Paper';
import data from 'data/university.json';
import { Container } from './Info.styles';

const Info = () => {
  return (
    <Container>
      <Card name={data.name} />
      <Paper>{data.description}</Paper>
    </Container>
  );
};

export default Info;
