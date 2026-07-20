import * as cdk from "aws-cdk-lib";
import { aws_iam as iam } from "aws-cdk-lib";
import { Construct } from "constructs";

export class IamStack extends cdk.Stack {

    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const warehouseApplicationRole = new iam.Role(this, "WarehouseApplicationRole", {
            roleName: "warehouse-application-role",
            assumedBy: new iam.AccountRootPrincipal(),
            description: "IAM Role for Warehouse Management System backend application"
        });

        warehouseApplicationRole.addManagedPolicy(
            iam.ManagedPolicy.fromAwsManagedPolicyName(
                "AmazonDynamoDBFullAccess"
            )
        );

        warehouseApplicationRole.addManagedPolicy(
            iam.ManagedPolicy.fromAwsManagedPolicyName(
                "AmazonS3FullAccess"
            )
        );

        warehouseApplicationRole.addManagedPolicy(
            iam.ManagedPolicy.fromAwsManagedPolicyName(
                "AmazonSNSFullAccess"
            )
        );

        warehouseApplicationRole.addManagedPolicy(
            iam.ManagedPolicy.fromAwsManagedPolicyName(
                "CloudWatchFullAccess"
            )
        );

        const warehouseApplicationPolicy = new iam.Policy(this, "WarehouseApplicationPolicy", {
            policyName: "warehouse-application-policy",
            statements: [
                new iam.PolicyStatement({
                    effect: iam.Effect.ALLOW,
                    actions: [
                        "dynamodb:*",
                        "s3:*",
                        "sns:*",
                        "logs:*"
                    ],
                    resources: ["*"]
                })
            ]
        });

        warehouseApplicationRole.attachInlinePolicy(
            warehouseApplicationPolicy
        );

        new cdk.CfnOutput(this, "WarehouseApplicationRoleName", {
            value: warehouseApplicationRole.roleName,
            description: "Warehouse Application IAM Role Name"
        });

        new cdk.CfnOutput(this, "WarehouseApplicationRoleArn", {
            value: warehouseApplicationRole.roleArn,
            description: "Warehouse Application IAM Role ARN"
        });

    }
}