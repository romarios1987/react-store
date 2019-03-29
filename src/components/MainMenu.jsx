import React from 'react';
import { Menu, Popup} from 'semantic-ui-react';

const MainMenu = () => {
  return (
        <Menu>
          <Menu.Item name="books">
            Books Catalog
          </Menu.Item>

          <Menu.Menu position="right">
            <Menu.Item>
              Total: &nbsp; <b>{0}</b>&nbsp;$.
            </Menu.Item>

            <Popup
                  trigger={
                    <Menu.Item name="cart">
                      Cart (<b>{0}</b>)
                    </Menu.Item>
                  }
                  content="Cart Items"
                  on="click"
                  hideOnScroll
            />
          </Menu.Menu>
        </Menu>
  );
};

export default MainMenu;

