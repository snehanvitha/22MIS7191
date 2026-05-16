import { getAccessToken }
  from "../notification_app_fe/auth.js";

const LOG_API =
  "http://4.224.186.213/evaluation-service/logs";

export async function LOG(
  stack,
  level,
  packageName,
  message
) {

  try {

    // STEP 1:
    // Get fresh token
    const token =
      await getAccessToken();

    if (!token) {
      throw new Error(
        "Failed to get access token"
      );
    }

    // STEP 2:
    // Create request payload
    const payload = {

      stack: stack,

      level: level,

      package: packageName,

      message: message
    };

    // STEP 3:
    // Call logs API
    const response = await fetch(
      LOG_API,
      {

        method: "POST",

        headers: {

          "Content-Type":
            "application/json",

          "Authorization":
            `Bearer ${token}`
        },

        body: JSON.stringify(payload)
      }
    );

    if (!response.ok) {
      throw new Error(
        "Failed to create log"
      );
    }

    const data =
      await response.json();

    console.log(
      "Log Created:",
      data
    );

    return data;

  } catch (error) {

    console.error(
      "Logger Error:",
      error
    );
  }
}