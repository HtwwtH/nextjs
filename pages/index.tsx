import React from 'react';
import { Button, Title } from '../components';

export default function Home(): JSX.Element {
  return (
    <>
      <Title tag='h1'>H1 title</Title>
      <Button appearance='primary' arrow='right'>Кнопка</Button>
      <Button appearance='ghost' arrow='right'>Кнопка</Button>
    </>
  );
}
