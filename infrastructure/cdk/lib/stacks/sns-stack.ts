import * as cdk from "aws-cdk-lib";
import * as sns from "aws-cdk-lib/aws-sns"
import { Construct } from "constructs";

export class SnsStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const orderCreatedTopic = new sns.Topic(this, "OrderCreatedTopic", {
            topicName: "order-created-topic",
            displayName: "Order Created Notifications"
        });

        const inventoryUpdatedTopic = new sns.Topic(this, "InventoryUpdatedTopic", {
            topicName: "inventory-updated-topic",
            displayName: "Inventory Updated Notifications"
        });

        const lowStockAlertTopic = new sns.Topic(this, "LowStockAlertTopic", {
            topicName: "low-stock-alert-topic",
            displayName: "Low Stock Alert Notifications"
        });

        new cdk.CfnOutput(this, "OrderCreatedTopicArn", {
            value: orderCreatedTopic.topicArn,
            description: "Order Created Topic ARN"
        });

        new cdk.CfnOutput(this, "InventoryUpdatedTopicArn", {
            value: inventoryUpdatedTopic.topicArn,
            description: "Inventory Updated Topic ARN"
        });

        new cdk.CfnOutput(this, "LowStockAlertTopicArn", {
            value: lowStockAlertTopic.topicArn,
            description: "Low Stock Alert Topic ARN"
        });
    }
}