import { Drawer } from 'antd';
import React, { useState } from 'react';
import { EditOutlined} from '@ant-design/icons';

const ModificarDrawer = (props) => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <EditOutlined onClick={showDrawer}/>
      <Drawer title="Basic Drawer" placement="right" onClose={showDrawer} open={open}>
        {props.avatar}
        <p><input /></p>
        <p><input /></p>
        {props.detalle}
      </Drawer>
    </>
  );
};

export default ModificarDrawer;