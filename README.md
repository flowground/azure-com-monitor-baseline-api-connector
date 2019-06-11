# ![LOGO](logo.png) MonitorManagementClient **flow**ground Connector

## Description

A generated **flow**ground connector for the MonitorManagementClient API (version 2018-09-01).

Generated from: https://api.apis.guru/v2/specs/azure.com/monitor-baseline_API/2018-09-01/swagger.json<br/>
Generated at: 2019-06-11T18:14:02+03:00

## API Description



## Authorization

Supported authorization schemes:
- OAuth2

For OAuth 2.0 you need to specify OAuth Client credentials as environment variables in the connector repository:
* `OAUTH_CLIENT_ID` - your OAuth client id
* `OAUTH_CLIENT_SECRET` - your OAuth client secret

## Actions

### **Gets the baseline values for a specific metric**.

*Tags:* `Baseline`

#### Input Parameters
* `resourceUri` - _required_ - The identifier of the resource. It has the following structure: subscriptions/{subscriptionName}/resourceGroups/{resourceGroupName}/providers/{providerName}/{resourceName}. For example: subscriptions/b368ca2f-e298-46b7-b0ab-012281956afa/resourceGroups/vms/providers/Microsoft.Compute/virtualMachines/vm1
* `metricName` - _required_ - The name of the metric to retrieve the baseline for.
* `timespan` - _optional_ - The timespan of the query. It is a string with the following format 'startDateTime_ISO/endDateTime_ISO'.
* `interval` - _optional_ - The interval (i.e. timegrain) of the query.
* `aggregation` - _optional_ - The aggregation type of the metric to retrieve the baseline for.
* `sensitivities` - _optional_ - The list of sensitivities (comma separated) to retrieve.
* `resultType` - _optional_ - Allows retrieving only metadata of the baseline. On data request all information is retrieved.
    Possible values: Data, Metadata.
* `api-version` - _required_ - Client Api Version.
* `metricnamespace` - _optional_ - Metric namespace to query metric definitions for.
* `$filter` - _optional_ - The **$filter** is used to describe a set of dimensions with their concrete values which produce a specific metrics time series, in which a baseline is requested for.

## License

**flow**ground :- Telekom iPaaS / azure-com-monitor-baseline-api-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
