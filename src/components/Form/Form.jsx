import Buttom from 'components/Button/Button';
import { CustomForm } from './Form.styled';
function Form({ onSubmit, children }) {
  return (
    <CustomForm onSubmit={onSubmit}>
      {children}
      <Buttom text="Підтвердити" />
    </CustomForm>
  );
}

export default Form;
