import { Drawer, Button, Input } from 'antd';
import React, { useState } from 'react';
import { EditOutlined} from '@ant-design/icons';

const ModificarDrawer = (props) => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(!open);
  };
  console.log("DRAWER",props)
  return (
    <>
      <EditOutlined onClick={showDrawer}/>
      <Drawer title="Basic Drawer" placement="right" onClose={showDrawer} open={open}>
        {props.avatar}
        <Input placeholder="Nombre" defaultValue={props.valor} />
        <Input placeholder="Precio" defaultValue={props.valor} />
        <Button type="primary">Guardar</Button>

      </Drawer>
    </>
  );
};

export default ModificarDrawer;