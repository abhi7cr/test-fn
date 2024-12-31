import { v7 } from "uuid";
import fp from "lodash/fp";


/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  const res = fp.add(1, 2);
  return {
    statusCode: 200,
    //  Uncomment below to enable CORS requests
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
    },
    body: JSON.stringify(`Hello from Lambda!: ${v7({ msecs: 2 })}, ${res}`),
  };
};
