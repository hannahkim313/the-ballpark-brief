import Link from 'next/link';

const NotFound = () => {
  return (
    <div>
      <h2>404 Error: Not Found</h2>
      <p>
        Looks like you struck out! We could not find the requested resource.
      </p>
      <Link href="/">Return Home</Link>
    </div>
  );
};

export default NotFound;
