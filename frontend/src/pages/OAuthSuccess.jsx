import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function OAuthSuccess() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const token = searchParams.get("token");

    if (!token) {
      navigate("/login");
      return;
    }

    localStorage.setItem("accessToken", token);

    navigate("/dashboard");
  }, [navigate, searchParams]);

  return (
    <div>
      <h2>Logging you in...</h2>
    </div>
  );
}

export default OAuthSuccess;