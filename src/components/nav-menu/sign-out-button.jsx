import React from 'react';

// eslint-disable-next-line react/prop-types
export default function SignOutButton({ email, signOut }) {
  return (
    <React.Fragment>
      <span className="userEmail">{email}</span>
      <div
        className="btn btn-outline-success my-2 my-sm-0"
        role="button"
        tabIndex={0}
        onClick={signOut}
        onKeyDown={() => { }}
      >
        Sign-out
      </div>
    </React.Fragment>
  );
}
