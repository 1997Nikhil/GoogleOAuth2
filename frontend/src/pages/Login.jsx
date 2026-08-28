function Login() {
  const handleGoogleLogin = () => {
    window.location.href =
      "http://localhost:5000/api/auth/google";
  };

  return (
    <div>
      <h1>Login</h1>

      <button onClick={handleGoogleLogin}>
        Continue with Google
      </button>
    </div>
  );
}

export default Login;