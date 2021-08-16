import type { NextPage, GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { getAromas } from '../utils/aroma';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

interface Aroma {
  name: string;
  id: string;
}

interface Props {
  aroma: Aroma;
}

const AromaPage: NextPage<Props> = ({ aroma }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <div>
    <div>
      {aroma.name}
    </div>
    <div>WINE HERE</div>

    <ButtonGroup size="lg">
      <Button variant="outline-primary">Try another</Button>
      <Button variant="outline-secondary">Try an aroma similar to this one</Button>
    </ButtonGroup>
  </div>
}

export default AromaPage;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getAromas().map(({ id: aroma }) => ({ params: { aroma } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const aroma = getAromas().find(({ id }) => id === context.params!.aroma)!;

  return {
    props: { aroma },
    revalidate: 1, // temporary hack to force revalidation
  };
};
