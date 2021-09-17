import Paper from '../Paper/Paper';
import { OrganizationType, Name, Actions, Image } from './Card.styles';
import { HiPencilAlt, HiTrash } from 'react-icons/hi';
import PropTypes from 'prop-types';

const Card = ({ name }) => {
  return (
    <Paper gap={32}>
      <Image src="" alt="" />

      <OrganizationType>Університет</OrganizationType>
      <Name>{name}</Name>
      <Actions>
        <HiPencilAlt />
        <HiTrash />
      </Actions>
    </Paper>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Card;
