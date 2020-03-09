import Error from '~/components/Error';

const Errors = ({ statusCode }) => (<Error statusCode={statusCode} />);

Errors.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Errors;
