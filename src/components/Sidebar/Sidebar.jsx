import { Aside, Header, Menu, MenuItem, MenuText } from './Sidebar.styles';
import { menuConfig } from 'utils/menu';

const Sidebar = () => {
  return (
    <Aside>
      <Header />
      <Menu>
        {menuConfig.map(configItem => (
          <MenuItem key={configItem.name}>
            {configItem.icon}
            <MenuText>{configItem.name}</MenuText>
          </MenuItem>
        ))}
      </Menu>
    </Aside>
  );
};

export default Sidebar;
