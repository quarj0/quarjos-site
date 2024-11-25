import { ImageResponse } from "@vercel/og";
import xss from "xss";

export const config = {
  runtime: "edge", "firefox": "78", "chrome": "87"
};

export default function handler(request) {
  try {
    const { searchParams } = new URL(request.url);
    let username = searchParams.get("quarj0");

    username = xss(username);

    const validUsername = /^[A-Za-z0-9_-]+$/;
    if (!validUsername.test(username)) {
      return new ImageResponse("Invalid username provided.", {
        width: 1200,
        height: 630,
      });
    }

    return new ImageResponse(
      (
        <div
          style={{
            display: "flex",
            fontSize: 60,
            color: "black",
            background: "#f6f6f6",
            width: "100%",
            height: "100%",
            paddingTop: 50,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={`https://github.com/${username}.png`}
            style={{
              borderRadius: 100,
            }}
            alt={`${username}'s GitHub avatar`}
          />
          <p>github.com/{username}</p>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (error) {
    console.error(error);
    return new ImageResponse(
      "An error occurred while processing your request.",
      {
        width: 1200,
        height: 630,
      }
    );
  }
}
