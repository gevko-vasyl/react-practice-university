import data from 'data/university.json';
import {
  Container,
  Item,
  ItemInfo,
  ItemContacs,
  ItemContact,
  Options,
} from './TutorList.styled';

function TutorsList() {
  const { tutors } = data;
  return (
    <Container>
      {tutors.map(tutor => (
        <Item key={tutor.email}>
          <ItemInfo>
            {tutor.lastName} {tutor.firstName} {tutor.patronymic}
          </ItemInfo>
          <ItemContacs>
            <ItemContact>{tutor.phone}</ItemContact>
            <ItemContact>{tutor.email}</ItemContact>
            <ItemContact>{tutor.city}</ItemContact>
          </ItemContacs>
          <Options>{tutor.options}</Options>
        </Item>
      ))}
    </Container>
  );
}

export default TutorsList;
