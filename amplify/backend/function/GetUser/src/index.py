import json

def handler(event, context):
  print('received event:')
  print(event)
  message = "Hello from the other side :)"
  return {
    'statusCode': 200,
    'headers': {
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": True,
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
      "Access-Control-Allow-Origin": "*",
      },
    'body': json.dumps(message)
  }
