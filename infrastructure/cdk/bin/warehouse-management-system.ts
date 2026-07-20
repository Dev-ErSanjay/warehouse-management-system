
import * as cdk from 'aws-cdk-lib';
import { IamStack } from '../lib/stacks/iam-stack';

const app = new cdk.App();

new IamStack(app, "IamStack", {
    env: {
        account: process.env.CDK_DEFAULT_ACCOUNT,
        region: process.env.CDK_DEFAULT_REGION,
    },
});
// new DynamoDbStack(app, "DynamoDbStack");
// new S3Stack(app, "S3Stack");
// new SnsStack(app, "SnsStack");
// new LambdaStack(app, "LambdaStack");
// new ApiGatewayStack(app, "ApiGatewayStack");
// new CloudWatchStack(app, "CloudWatchStack");