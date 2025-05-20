const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  const { id } = event.queryStringParameters;

  if (!id) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Missing user id' }),
    };
  }

  const response = await fetch(`https://api.clerk.dev/v1/users/${id}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.CLERK_SECRET_KEY}`,
      },
    }
  );

  if (!response.ok) {
    return {
      statusCode: response.status,
      body: JSON.stringify({ error: 'User not found' }),
    };
  }

  const data = await response.json();
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };
};
