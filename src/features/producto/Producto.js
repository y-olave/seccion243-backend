import { SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import React from 'react';
import ModificarDrawer from '../ModificarDrawer';
import DetallesModal from '../DetallesModal';
const { Meta } = Card;

const Producto = (props) => {
  return (
    <Card
      style={{
        width: 300,
      }}
      cover={<img
        alt="example"
        src={props.valor.avatar}
      />}
      actions={[
        <SettingOutlined/>,
        <ModificarDrawer
          valor={props.valor}
          avatar={<Avatar src={props.valor.avatar} />}
          detalle={<img
            alt="example"
            src={props.valor.avatar}
          />} />,
        
      ]}
    >
      <Meta
        avatar={<Avatar src={props.valor.avatar} />}
        title={props.valor.titulo}
        description={props.valor.descripcion}
      />
    </Card>
  )
}

export default Producto;