// const fetch = require("node-fetch");

exports.handler = async (event) => {
  const { body } = event;
  
  try {
    const response = await fetch("http://localhost:9191/api/data", {
      method: "POST",
      body: body,
    });
    
    const data = await response.json();
console.log(data);
    return {
      statusCode: response.status,
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*" // Allow CORS from any origin
      }
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal Server Error" }),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*" // Allow CORS from any origin
      }
    };
  }
};
