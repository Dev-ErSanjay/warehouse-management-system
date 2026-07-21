import * as cdk from "aws-cdk-lib";
import * as apigateway from "aws-cdk-lib/aws-apigateway";
import { Construct } from "constructs";

export class ApiGatewayStack extends cdk.Stack {

    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const api = new apigateway.RestApi(this, "WarehouseManagementApi", {
            restApiName: "warehouse-management-api",
            description: "REST API for Warehouse Management System",
            deployOptions: {
                stageName: "dev",
            },
            defaultCorsPreflightOptions: {
                allowOrigins: apigateway.Cors.ALL_ORIGINS,
                allowMethods: apigateway.Cors.ALL_METHODS,
            }
        });

        new cdk.CfnOutput(this, "ApiGatewayUrl", {
            value: api.url,
            description: "API Gateway Base URL"
        });

        new cdk.CfnOutput(this, "ApiGatewayId", {
            value: api.restApiId,
            description: "API Gateway ID"
        });
    }
}