import { CustomError } from "../errors/custom-error";

const response = (response: CustomError | string) => {
  if (response instanceof CustomError) {
    return {
      statusCode: response.statusCode,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "*",
        Accept: "*/*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: response.statusCode,
        message: response.message,
      }),
    };
  } else {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "*",
        Accept: "*/*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(response),
    };
  }
};

export default response;
