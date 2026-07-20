
import * as cdk from 'aws-cdk-lib';
import { IamStack } from '../lib/stacks/iam-stack';
import { DynamoDbStack } from '../lib/stacks/dynamodb-stack';

const app = new cdk.App();

const env = {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION
};

new IamStack(app, "IamStack", { env });
new DynamoDbStack(app, "DynamoDbStack", { env });
// new S3Stack(app, "S3Stack");
// new SnsStack(app, "SnsStack");
// new LambdaStack(app, "LambdaStack");
// new ApiGatewayStack(app, "ApiGatewayStack");
// new CloudWatchStack(app, "CloudWatchStack");