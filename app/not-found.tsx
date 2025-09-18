import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="content-container px-content py-content text-center">
      <h2>404 Error: Not Found</h2>

      <p className="mb-8">
        Looks like you struck out! We could not find the requested resource.
      </p>

      <Link href="/" className="btn-primary">
        Return Home
      </Link>
    </div>
  );
};

export default NotFound;
