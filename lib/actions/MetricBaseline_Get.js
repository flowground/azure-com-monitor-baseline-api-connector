/**
 * Auto-generated action file for "MonitorManagementClient (monitor-baseline_API)" API.
 *
 * Generated at: 2019-06-11T15:14:02.913Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / azure-com-monitor-baseline-api-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'MetricBaseline_Get'
 * Endpoint Path: '/{resourceUri}/providers/microsoft.insights/baseline/{metricName}'
 * Method: 'get'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "resourceUri",
    "metricName",
    "timespan",
    "interval",
    "aggregation",
    "sensitivities",
    "resultType",
    "api-version",
    "metricnamespace",
    "$filter"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "resourceUri": "resourceUri",
    "metricName": "metricName",
    "timespan": "timespan",
    "interval": "interval",
    "aggregation": "aggregation",
    "sensitivities": "sensitivities",
    "resultType": "resultType",
    "api_version": "api-version",
    "metricnamespace": "metricnamespace",
    "_filter": "$filter"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = undefined;

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};
    securities['azure_auth'] = {token: cfg['auth_azure_auth']};

    let callParams = {
        spec: spec,
        operationId: 'MetricBaseline_Get',
        pathName: '/{resourceUri}/providers/microsoft.insights/baseline/{metricName}',
        method: 'get',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}