import React, { useEffect, useState } from 'react';
import { Button, P, Rating, Tag, Title } from '../components';

export default function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Title tag='h1'>H1 title</Title>
      <div className="indent"></div>
      <Button appearance='primary' arrow='right' onClick={() => setCounter(counter + 1)}>Кнопка</Button>
      <Button appearance='ghost' arrow='right'>Кнопка</Button>
      <div className="indent"></div>
      <P>В данном курсе по выращиванию суккулентов вы получите необходимые знания и практические навыки по выращиванию и уходу за суккулентами. После прохождения курса вы сможете вырастить симпатичное, редкое и неприхотливое растение. </P>
      <div className="indent"></div>
      <P size='s'>В данном курсе по выращиванию суккулентов вы получите необходимые знания и практические навыки по выращиванию и уходу за суккулентами. После прохождения курса вы сможете вырастить симпатичное, редкое и неприхотливое растение.</P>
      <div className="indent"></div>
      <P size='l'>В данном курсе по выращиванию суккулентов вы получите необходимые знания и практические навыки по выращиванию и уходу за суккулентами. После прохождения курса вы сможете вырастить симпатичное, редкое и неприхотливое растение.</P>
      <div className="indent"></div>
      <Tag size='m' color='gray'>m gray</Tag>
      <Tag size='s' color='ghost'>s ghost</Tag>
      <Tag size='s' color='green'>s green</Tag>
      <Tag size='s' color='red'>s red</Tag>
      <Tag size='s' color='primary'>s primary</Tag>
      <div className="indent"></div>
      <Rating rating={rating} isEditable setRating={setRating} />
    </>
  );
}
