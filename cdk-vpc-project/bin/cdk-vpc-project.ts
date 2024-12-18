#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkVpcProjectStack } from '../lib/cdk-vpc-project-stack';
import { EC2Stack } from '../lib/ec2-stack';
import  { RDSStack } from '../lib/rds-stack';

const app = new cdk.App();
const vpcStack = new CdkVpcProjectStack(app, 'CdkVpcProjectStack', {
 
});

new EC2Stack(app, 'EC2-instances', {
  vpc:vpcStack.vpc
});



new RDSStack(app, 'Database', {
  vpc:vpcStack.vpc
})

app.synth()


