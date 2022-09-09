import middy from '@middy/core'
import ServiceDiscovery from 'aws-sdk/clients/servicediscovery'
import { captureAWSClient } from 'aws-xray-sdk'
import { expectType } from 'tsd'
import serviceDiscovery, { Context } from '.'

// use with default options
expectType<middy.MiddlewareObj<unknown, any, Error, Context<undefined>>>(
  serviceDiscovery()
)

// use with all options
const options = {
  AwsClient: ServiceDiscovery,
  awsClientOptions: {},
  awsClientCapture: captureAWSClient,
  disablePrefetch: true
}
expectType<middy.MiddlewareObj<unknown, any, Error, Context<typeof options>>>(
  serviceDiscovery()
)
