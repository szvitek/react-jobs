import { ClipLoader } from 'react-spinners';

type Props = {
  loading: boolean;
};

const override = {
  display: 'block',
  margin: '100px auto',
};

const Spinner = ({ loading }: Props) => {
  return (
    <ClipLoader
      color="#4338ca"
      loading={loading}
      cssOverride={override}
      size={150}
    />
  );
};
export default Spinner;
