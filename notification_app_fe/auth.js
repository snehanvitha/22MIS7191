const AUTH_URL =
  "http://4.224.186.213/evaluation-service/auth";

const authPayload = {

  email:
    "snehanvitha.22mis7191@vitapstudent.ac.in",

  name:
    "k snehanvitha",

  rollno:
    "22MIS7191",

  accessCode:
    "SfFuWg",

  clientID:
    "67be71d1-1695-4919-b416-89bf097384e7",

  clientSecret:
    "kqVXYqSbfrMhvMZf"
};

export async function getAccessToken() {

  try {

    const response = await fetch(AUTH_URL, {

      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify(authPayload)
    });

    if (!response.ok) {
      throw new Error("Auth API failed");
    }

    const data = await response.json();

    return data.access_token;

  } catch (error) {

    console.error("Auth Error:", error);

    return null;
  }
}